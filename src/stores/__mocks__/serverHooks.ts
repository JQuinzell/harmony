import { serverPreviewsQuery } from '~/mocks/data'

export const useServerStore = jest.fn().mockReturnValue({
  joinedServers: serverPreviewsQuery.user.servers,
  createServer: jest.fn().mockResolvedValue(undefined),
  selectServer: jest.fn().mockResolvedValue(undefined),
})
