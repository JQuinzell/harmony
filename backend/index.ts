import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolvers'
import { typeDefs } from './schemas'
import * as jwt from 'jsonwebtoken'
import { users } from './data/users'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({
    req: {
      headers: { authorization },
    },
  }) => {
    if (authorization) {
      const token = jwt.verify(authorization, 'notsecret') as { name: string }
      return users.find(({ name }) => name === token.name)
    }
    return {}
  },
})

server.listen(3000).then(({ url }) => console.log(`Server listening at ${url}`))
