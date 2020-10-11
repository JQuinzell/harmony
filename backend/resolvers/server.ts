import { servers, Server } from 'backend/data/server'
import { Resolvers } from './resolvers'

const resolvers: Resolvers = {
  Query: {
    servers: (): Server[] => servers,
  },
}

export default resolvers
