import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolvers'
import { typeDefs } from './schemas'
import * as jwt from 'jsonwebtoken'
import { users } from './data/users'
import { secret } from './data/secret'
import { Context } from './context'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }): Context => {
    const authorization = req.headers.authorization
    if (authorization) {
      const token = jwt.verify(authorization, secret) as { name?: string }
      const user = users.find(({ name }) => name === token.name)
      return { user }
    }
    return {}
  },
})

server.listen(3000).then(({ url }) => console.log(`Server listening at ${url}`))
