import { servers, userServers } from '../mocks/handlers'
import RootStore from './RootStore'

describe('RootStore', () => {
  let store: RootStore

  beforeEach(() => {
    console.log('new root store')
    store = new RootStore()
  })

  describe('constructor', () => {
    afterEach(() => {
      localStorage.clear()
    })

    it('does not call loadServers if no userToken', () => {
      const spy = jest.spyOn(RootStore.prototype, 'loadServers')
      new RootStore()

      expect(spy).not.toHaveBeenCalled()
    })

    it('calls loadServers if there is a userToken', () => {
      localStorage.setItem('userToken', 'token')
      const spy = jest.spyOn(RootStore.prototype, 'loadServers')
      new RootStore()

      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe('loadServers', () => {
    it('loads users servers and global servers', async () => {
      await store.loadServers()

      expect(store.servers).toEqual(servers)
      expect(store.joinedServers).toEqual(userServers)
    })
  })
})
