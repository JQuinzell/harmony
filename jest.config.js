module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  setupFiles: ['jest-localstorage-mock'],
  moduleDirectories: ['node_modules', './'],
}
