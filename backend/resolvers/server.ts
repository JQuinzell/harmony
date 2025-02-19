import { messages } from 'backend/data/messages'
import { servers, Server } from 'backend/data/servers'
import { Resolvers } from './resolvers'

interface JoinServerArgs {
  id: number
}

interface CreateServerArgs {
  server: { title: string; description: string; image: string }
}

interface ServerByTitleArgs {
  title: string
}

const resolvers: Resolvers = {
  Query: {
    servers: (): Server[] => servers,
    server: (_, { title }: ServerByTitleArgs) =>
      servers.find((server) => server.title === title),
  },
  Mutation: {
    createServer: (parent, args: CreateServerArgs, context) => {
      const user = context.user
      if (!user) throw new Error('Must be logged in to create server')

      const [{ id }] = servers.slice(-1)
      const server = {
        id: id + 1,
        ...args.server,
      }
      user.servers.push(server.id)
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
