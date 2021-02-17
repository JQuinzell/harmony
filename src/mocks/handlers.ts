import { graphql } from 'msw'
import { loginQuery, serverByNameQuery, serverPreviewsQuery } from './data'

export const handlers = [
  graphql.query('serverPreviews', (req, res, ctx) => {
    return res(ctx.data(serverPreviewsQuery))
  }),

  graphql.query('login', (req, res, ctx) => {
    return res(ctx.data(loginQuery))
  }),

  graphql.query('serverByName', (req, res, ctx) => {
    return res(ctx.data(serverByNameQuery))
  }),
]
