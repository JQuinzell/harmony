import * as express from 'express'
import { servers } from './data/server'

const app = express()

app.get('/servers', (req, res) => {
  res.json(servers)
})

app.listen(3000, () => console.log('Server Running'))
