export interface Message {
  id: number
  serverId: number
  userId: number
  text: string
  date: Date
}

export const messages: Message[] = [
  {
    id: 1,
    serverId: 1,
    userId: 1,
    text: 'I almost died to a creeper!',
    date: new Date(),
  },
  {
    id: 2,
    serverId: 2,
    userId: 1,
    text: 'Red lookin pretty sus',
    date: new Date(),
  },
]
