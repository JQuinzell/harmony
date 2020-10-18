import { gql } from 'apollo-server'

export default gql`
  type User {
    name: String!
    servers: [Server!]!
  }

  extend type Query {
    user: User
    getToken(name: String!, password: String!): String!
  }

  type Mutation {
    createUser(user: CreateUser): String!
  }

  input CreateUser {
    name: String!
    password: String!
  }
`
