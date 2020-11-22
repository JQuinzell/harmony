import { gql } from 'apollo-server'

export default gql`
  type Server {
    id: Int!
    title: String!
    description: String!
    image: String!
    messages: [Message!]!
  }

  input CreateServer {
    title: String!
    description: String!
    image: String!
  }

  extend type Mutation {
    createServer(server: CreateServer!): Server
    joinServer(id: Int!): Server
  }

  extend type Query {
    server(title: String): Server
  }
`
