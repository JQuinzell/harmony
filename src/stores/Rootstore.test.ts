import { servers, userServers } from '../mocks/handlers'
import RootStore from './RootStore'

describe('RootStore', () => {
  let store: RootStore

  beforeEach(() => {
    console.log('new root store')
    store = new RootStore()
  })

  describe('loadServers', () => {
    it('loads users servers and global servers', async () => {
      await store.loadServers()

      expect(store.servers).toEqual(servers)
      expect(store.joinedServers).toEqual(userServers)
    })
  })
})
