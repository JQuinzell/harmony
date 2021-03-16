export const useServerStore = jest.fn().mockReturnValue({
  createServer: jest.fn().mockResolvedValue(undefined),
})
