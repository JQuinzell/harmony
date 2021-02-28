// src/setupTests.js
import { loginQuery } from './mocks/data'
import { server } from './mocks/server'
// Establish API mocking before all tests.
beforeAll(() => server.listen())

beforeEach(() => {
  localStorage.setItem('userToken', loginQuery.result)
})

afterEach(() => {
  localStorage.clear()
})

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
