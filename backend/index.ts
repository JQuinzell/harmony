import { ApolloServer, gql } from 'apollo-server'
import { servers } from './data/server'

const typeDefs = gql`
  type Server {
    title: String!
    description: String!
    image: String!
  }

  type Query {
    servers: [Server!]!
  }
`

const resolvers = {
  Query: {
    servers: () => servers,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(3000).then(({ url }) => console.log(`Server listening at ${url}`))
