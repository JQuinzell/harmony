import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { observable } from 'mobx'


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
  @observable userToken: string | null
  client: ApolloClient<unknown> = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  })

  constructor() {
    //TODO: change to store in cookie; storage is insecure
    this.userToken = localStorage.getItem('userToken')
  }

  async login(username: string, password: string) {
    const result = await this.client.query<string>({
      query: gql`
        query login($username: String!, $password: String!) {
          getToken(name: $username, password: $password)
        }
      `,
      variables: { username, password },
    })
    this.userToken = result.data
    localStorage.setItem('userToken', this.userToken)
  }
}
