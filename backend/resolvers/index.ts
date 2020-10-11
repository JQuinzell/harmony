import * as merge from 'deepmerge'
import serverResolver from './server'
import userResolver from './users'

export const resolvers = merge(serverResolver, userResolver)
