export const useServerStore = jest.fn().mockReturnValue({
  createServer: jest.fn().mockResolvedValue(undefined),
  selectServer: jest.fn().mockResolvedValue(undefined),
})
