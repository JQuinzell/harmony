import { Server } from './RootStore'

export type CreateServer = Pick<Server, 'title' | 'description' | 'image'>
