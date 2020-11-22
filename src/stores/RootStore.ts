import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { makeAutoObservable, runInAction } from 'mobx'

interface ServerPreview {
  id: number
  title: string
  description: string
  image: string
}

interface Message {
  id: number
  user: { name: string }
  text: string
  date: number
}

interface Server extends ServerPreview {
  messages: Message[]
}

const httpLink = new HttpLink({ uri: 'http://localhost:3000/' })

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('userToken')
  const authorization = token ? { authorization: token } : null
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      ...authorization,
    },
  }
})

export default class RootStore {
  userToken: string | null
  client: ApolloClient<unknown> = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  })
  servers: ServerPreview[] = []
  currentServer: Server | null = null

  constructor() {
    makeAutoObservable(this, { client: false })
    //TODO: change to store in cookie; storage is insecure
    this.userToken = localStorage.getItem('userToken')
    if (this.userToken)
      runInAction(() => {
        this.loadServers()
      })
  }

  async login(username: string, password: string) {
    const result = await this.client.query<{ result: string }>({
      query: gql`
        query login($username: String!, $password: String!) {
          result: getToken(name: $username, password: $password)
        }
      `,
      variables: { username, password },
    })
    this.userToken = result.data.result
    localStorage.setItem('userToken', this.userToken)
    this.loadServers()
  }

  async loadServers() {
    const result = await this.client.query<{
      user: { servers: ServerPreview[] }
    }>({
      query: gql`
        query serverPreviews {
          user {
            servers {
              id
              title
              description
              image
            }
          }
        }
      `,
    })
    runInAction(() => {
      this.servers = result.data.user.servers
    })
  }

  async selectServer(title: string) {
    const result = await this.client.query<{ server: Server }>({
      query: gql`
        query serverByName($title: String!) {
          server(title: $title) {
            id
            title
            description
            image
            messages {
              id
              user {
                name
              }
              text
              date
            }
          }
        }
      `,
      variables: { title },
    })
    runInAction(() => {
      this.currentServer = result.data.server
    })
  }

  async postMessage(text: string) {
    const currentServer = this.currentServer
    if (!currentServer) return
    const serverId = currentServer.id
    const result = await this.client.mutate<{ message: Message }>({
      mutation: gql`
        mutation postMessage($text: String!, $serverId: Int!) {
          message: postMessage(message: { text: $text, serverId: $serverId }) {
            id
            user {
              name
            }
            text
            date
          }
        }
      `,
      variables: { serverId, text },
    })
    runInAction(() => {
      const message = result.data?.message
      if (message) currentServer.messages.push(message)
    })
  }

  async createServer(server: Pick<Server, 'title' | 'description' | 'image'>) {
    const result = await this.client.mutate<{ server: Server }>({
      mutation: gql`
        mutation createServer($server: CreateServer!) {
          server: createServer(server: $server) {
            id
            title
            description
            image
            messages {
              id
              user {
                name
              }
              text
              date
            }
          }
        }
      `,
      variables: { server },
    })
    runInAction(() => {
      const server = result.data!.server
      this.servers.push(server)
      this.currentServer = server
    })
  }
}
