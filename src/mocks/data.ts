import { Server, ServerPreview } from '~/stores/RootStore'

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
      {
        id: 2,
        title: 'My Server 2',
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

interface ServerByNameQuery {
  server: Server
}

export const serverByNameQuery: ServerByNameQuery = {
  server: {
    id: 1,
    title: 'Server 1',
    description: 'server 1 description',
    image: 'image url',
    messages: [
      {
        id: 1,
        user: { name: 'user' },
        text: 'a message',
        date: 0,
      },
    ],
  },
}

export const selectServerQuery = {
  server: {
    id: 0,
    title: 'My Server',
    description: 'my server description',
    image: 'my image',
    messages: [
      {
        id: 0,
        user: { name: 'user1' },
        text: 'Message 1',
        date: 0,
      },
      {
        id: 1,
        user: { name: 'user1' },
        text: 'Message 2',
        date: 0,
      },
      {
        id: 2,
        user: { name: 'user1' },
        text: 'Message 3',
        date: 0,
      },
    ],
  },
}
