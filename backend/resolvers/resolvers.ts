import { IResolvers } from 'apollo-server'
import { Context } from 'backend/context'

export type Resolvers<TSource = any> = IResolvers<TSource, Context>
