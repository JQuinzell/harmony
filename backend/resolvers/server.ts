import { servers, Server } from 'backend/data/servers'
import { Resolvers } from './resolvers'

const resolvers: Resolvers = {
  Query: {
    servers: (): Server[] => servers,
  },
}

export default resolvers
