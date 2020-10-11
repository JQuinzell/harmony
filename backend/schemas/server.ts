import { gql } from 'apollo-server'

export default gql`
  type Server {
    title: String!
    description: String!
    image: String!
  }
`
