import {
  loginQuery,
  serverByNameQuery,
  serverPreviewsQuery,
} from '~/mocks/data'
import RootStore from './RootStore'

describe('RootStore', () => {
  let store: RootStore

  beforeEach(() => {
    store = new RootStore()
  })

  afterEach(() => {
    localStorage.clear()
  })

  describe('constructor', () => {
    it('does not call loadServers if no userToken', () => {
      localStorage.clear()
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
      const loadServers = jest.spyOn(store, 'loadServers')

      await store.loadServers()

      expect(store.servers).toEqual(serverPreviewsQuery.servers)
      expect(store.joinedServers).toEqual(serverPreviewsQuery.user.servers)
      expect(loadServers).toBeCalledTimes(1)
    })
  })

  describe('login', () => {
    it('sets token and loads servers', async () => {
      await store.login('user', 'pass')

      expect(store.userToken).toEqual(loginQuery.result)
      expect(localStorage.getItem('userToken')).toEqual(loginQuery.result)
    })
  })

  describe('selectServer', () => {
    it('should set currentServer', async () => {
      await store.selectServer('server')

      expect(store.currentServer).toEqual(serverByNameQuery.server)
    })
  })
})
