import { selectServerQuery, serverPreviewsQuery } from '~/mocks/data'

const mockObject = {
  joinedServers: serverPreviewsQuery.user.servers,
  currentServer: selectServerQuery.server,
  createServer: jest.fn().mockResolvedValue(undefined),
  selectServer: jest.fn().mockResolvedValue(undefined),
  postMessage: jest.fn().mockResolvedValue(undefined),
  login: jest.fn().mockResolvedValue(undefined),
}
export const useServerStore = jest
  .fn<typeof mockObject, []>()
  .mockReturnValue(mockObject)
