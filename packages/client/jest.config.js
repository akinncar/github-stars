const { name } = require('./package.json');

module.exports = {
  displayName: name,
  name,
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  moduleNameMapper: {
    '.+\\.(css|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy'
  }
};
