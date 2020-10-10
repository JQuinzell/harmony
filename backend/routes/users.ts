import { Router } from 'express'

export const userRouter = Router()

userRouter.post('/login', (req, res, next) => {
  const { username, password } = req.body
  if (username === 'username' && password === 'password') res.json({ hello: 1 })
  else next({ status: 400, message: 'Invalid Credentials' })
})
