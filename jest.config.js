module.exports = {
  preset: 'react-native',
  watchman: false,
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|gif|webp|svg)$': '<rootDir>/jest/fileMock.js',
    '^react-native-vector-icons/(.*)$': '<rootDir>/jest/iconMock.js',
    '^react-native-size-matters$': '<rootDir>/jest/sizeMattersMock.js',
  },
};
