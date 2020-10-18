import { User, users } from 'backend/data/users'
import { Resolvers } from './resolvers'
import * as jwt from 'jsonwebtoken'
import { secret } from 'backend/data/secret'

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
      users.push({ name, password })
      const token = jwt.sign({ name }, secret)
      return token
    },
  },
}

export default resolvers
