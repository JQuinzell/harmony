import { servers, Server } from 'backend/data/servers'
import { Resolvers } from './resolvers'

interface JoinServerArgs {
  id: number
}

const resolvers: Resolvers = {
  Query: {
    servers: (): Server[] => servers,
  },
  Mutation: {
    joinServer: (parent, args: JoinServerArgs, context): Server => {
      const user = context.user
      console.log(user)
      if (!user) throw new Error('Must be logged in to join server')

      const server = servers.find((server) => server.id === args.id)
      if (!server) throw new Error('Server not found')

      user.servers.push(server.id)
      return server
    },
  },
}

export default resolvers
