import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { makeAutoObservable, runInAction } from 'mobx'

interface ServerPreview {
  id: number
  title: string
  description: string
  image: string
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
    const result = await this.client.query<{ servers: ServerPreview[] }>({
      query: gql`
        query serverPreviews {
          servers {
            id
            title
            description
            image
          }
        }
      `,
    })
    runInAction(() => {
      this.servers = result.data.servers
    })
  }
}
