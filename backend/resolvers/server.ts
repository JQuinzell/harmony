import { messages } from 'backend/data/messages'
import { servers, Server } from 'backend/data/servers'
import { Resolvers } from './resolvers'

interface JoinServerArgs {
  id: number
}

interface CreateServerArgs {
  server: { title: string; description: string; image: string }
}

const resolvers: Resolvers = {
  Query: {
    servers: (): Server[] => servers,
  },
  Mutation: {
    createServer: (parent, args: CreateServerArgs, context) => {
      const user = context.user
      if (!user) throw new Error('Must be logged in to create server')

      const [{ id }] = servers.slice(-1)
      const server = {
        id,
        ...args.server,
      }
      servers.push(server)
      return server
    },
    joinServer: (parent, args: JoinServerArgs, context): Server => {
      const user = context.user
      if (!user) throw new Error('Must be logged in to join server')

      const server = servers.find((server) => server.id === args.id)
      if (!server) throw new Error('Server not found')

      user.servers.push(server.id)
      return server
    },
  },
  Server: {
    messages: (parent: Server) => {
      return messages.filter(({ serverId }) => serverId === parent.id)
    },
  },
}

export default resolvers
