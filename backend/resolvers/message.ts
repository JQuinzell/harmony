import { Message, messages } from 'backend/data/messages'
import { servers } from 'backend/data/servers'
import { users } from 'backend/data/users'
import { Resolvers } from './resolvers'

interface PostMessageArgs {
  message: {
    serverId: number
    text: string
  }
}

const resolvers: Resolvers = {
  Mutation: {
    postMessage: (parent, { message }: PostMessageArgs, context) => {
      const user = context.user
      if (!user) throw new Error('Must be logged in to post a message')
      const server = servers.find(({ id }) => id === message.serverId)
      if (!server) throw new Error('Server not found')
      const [{ id }] = messages.slice(-1)
      const newMessage: Message = {
        id: id + 1,
        userId: user.id,
        ...message,
        date: new Date(),
      }
      messages.push(newMessage)
      return newMessage
    },
  },
  Message: {
    user: (parent: Message) => {
      return users.find(({ id }) => parent.userId === id)
    },
  },
}

export default resolvers
