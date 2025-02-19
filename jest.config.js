module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  setupFiles: ['jest-localstorage-mock'],
  moduleDirectories: ['node_modules', './'],
  moduleNameMapper: {
    // map paths in tsconfig to proper location (for parcel)
    '^~/(.*)': 'src/$1',
  },
}
