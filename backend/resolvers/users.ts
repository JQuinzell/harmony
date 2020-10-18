import { User, users } from 'backend/data/users'
import { Resolvers } from './resolvers'
import * as jwt from 'jsonwebtoken'
import { secret } from 'backend/data/secret'
import { servers } from 'backend/data/servers'

interface CreateUserArgs {
  user: { name: string; password: string }
}

interface GetTokenArgs {
  name: string
  password: string
}

const resolvers: Resolvers = {
  Query: {
    user: (parent, args, context): User | undefined => {
      const user = users.find(({ name }) => name === context.user?.name)
      return user
    },
    getToken: (parent, { name, password }: GetTokenArgs) => {
      const user = users.find(
        (user) => user.name === name && user.password === password
      )
      if (user) {
        const token = jwt.sign({ name }, secret)
        return token
      }
    },
  },
  Mutation: {
    createUser: (
      parent,
      { user: { name, password } }: CreateUserArgs
    ): string => {
      const existing = users.find((user) => user.name === name)
      if (existing) throw new Error('User exists already')
      users.push({ id: 99, name, password, servers: [] })
      const token = jwt.sign({ name }, secret)
      return token
    },
  },
  User: {
    servers: (parent) => {
      return servers.filter(({ id }) => parent.servers.includes(id))
    },
  },
}

export default resolvers
