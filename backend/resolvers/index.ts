import * as merge from 'deepmerge'
import serverResolver from './server'
import userResolver from './users'
import dateResolver from './date'
import messageResolvers from './message'
import { IResolvers } from 'apollo-server'

export const resolvers = merge.all<IResolvers>([
  serverResolver,
  userResolver,
  dateResolver,
  messageResolvers,
])
