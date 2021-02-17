import { ServerPreview } from 'src/stores/RootStore'

interface ServerPreviewsQuery {
  user: { servers: ServerPreview[] }
  servers: ServerPreview[]
}

export const serverPreviewsQuery: ServerPreviewsQuery = {
  user: {
    servers: [
      {
        id: 0,
        title: 'My Server',
        description: 'my server description',
        image: 'my image',
      },
    ],
  },
  servers: [
    {
      id: 1,
      title: 'Server 1',
      description: 'server 1 description',
      image: 'image url',
    },
  ],
}

interface LoginQuery {
  result: string
}

export const loginQuery: LoginQuery = {
  result: 'token',
}
