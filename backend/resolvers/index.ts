import * as merge from 'deepmerge'
import serverResolver from './server'
import userResolver from './users'
import dateResolver from './date'

export const resolvers = merge(serverResolver, userResolver, dateResolver)
