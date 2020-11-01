import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { observable } from 'mobx'

export default class RootStore {
  @observable userToken: string | null
  client: ApolloClient<unknown> = new ApolloClient({
    uri: 'http://localhost:3000/',
    cache: new InMemoryCache(),
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
