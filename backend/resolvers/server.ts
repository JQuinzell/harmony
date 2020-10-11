import { servers } from 'backend/data/server'
import { Resolvers } from './resolvers'

const resolvers: Resolvers = {
  Query: {
    servers: () => servers,
  },
}

export default resolvers
