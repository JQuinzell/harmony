import { gql } from 'apollo-server'

export default gql`
  scalar Date

  type Message {
    user: User!
    server: Server!
    text: String!
    date: Date!
  }
`
