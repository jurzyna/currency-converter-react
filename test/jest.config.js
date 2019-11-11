module.exports = {
  testRegex: '((\\.|/*.)(spec))\\.js?$',
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
  moduleNameMapper: {
    '^.+\\.(woff)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/test/svgrMock.js',
  },
  rootDir: '..',
};
