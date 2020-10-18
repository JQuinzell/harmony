import { gql } from 'apollo-server'

export default gql`
  type Server {
    id: Int!
    title: String!
    description: String!
    image: String!
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
`
