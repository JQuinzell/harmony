import { users } from 'backend/data/users'
import { Resolvers } from './resolvers'

const resolvers: Resolvers = {
  Query: {
    user: (parent, args, context) => {
      const user = users.find(({ name }) => name === context.user?.name)
      return user
    },
  },
}

export default resolvers
