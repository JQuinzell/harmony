import { loginQuery } from './mocks/data'
import { server } from './mocks/server'
import '@testing-library/jest-dom'

beforeAll(() => server.listen())

beforeEach(() => {
  localStorage.setItem('userToken', loginQuery.result)
})

afterEach(() => {
  localStorage.clear()
})

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
