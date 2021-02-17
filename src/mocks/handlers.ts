import { graphql } from 'msw'
import { loginQuery, serverPreviewsQuery } from './data'

export const handlers = [
  graphql.query('serverPreviews', (req, res, ctx) => {
    return res(ctx.data(serverPreviewsQuery))
  }),

  graphql.query('login', (req, res, ctx) => {
    return res(ctx.data(loginQuery))
  }),
]
