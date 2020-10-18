import { gql } from 'apollo-server'

export default gql`
  type Server {
    id: Int!
    title: String!
    description: String!
    image: String!
  }

  extend type Mutation {
    joinServer(id: Int!): Server
  }
`
