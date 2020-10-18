import { gql } from 'apollo-server'

export default gql`
  type User {
    name: String!
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
