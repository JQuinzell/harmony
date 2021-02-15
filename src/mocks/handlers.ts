import { graphql } from 'msw'
import { ServerPreview } from 'src/stores/RootStore'

export const userServers: ServerPreview[] = [
  {
    id: 0,
    title: 'My Server',
    description: 'my server description',
    image: 'my image',
  },
]

export const servers: ServerPreview[] = [
  {
    id: 1,
    title: 'Server 1',
    description: 'server 1 description',
    image: 'image url',
  },
]

export const handlers = [
  graphql.query('serverPreviews', (req, res, ctx) => {
    return res(ctx.data({ user: { servers: userServers }, servers }))
  }),
]
