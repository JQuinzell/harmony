import * as merge from 'deepmerge'
import serverResolver from './server'
import userResolver from './users'
import dateResolver from './date'
import messageResolvers from './message'

export const resolvers = merge.all([
  serverResolver,
  userResolver,
  dateResolver,
  messageResolvers,
])
