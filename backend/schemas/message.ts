import { gql } from 'apollo-server'

export default gql`
  scalar Date

  type Message {
    id: Int!
    user: User!
    server: Server!
    text: String!
    date: Date!
  }

  input PostMessage {
    text: String!
    serverId: Int!
  }

  extend type Mutation {
    postMessage(message: PostMessage): Message
  }
`
