import { gql } from 'apollo-server'

export default gql`
  type User {
    name: String!
  }

  extend type Query {
    user: User
  }
`
