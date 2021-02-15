module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  setupFiles: ['jest-localstorage-mock'],
}
