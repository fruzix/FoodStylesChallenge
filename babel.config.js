const tsconfig = require('./tsconfig.json');

let rawAlias = tsconfig.compilerOptions.paths;
let alias = {};

for (let x in rawAlias) {
  alias[x.replace('/*', '')] = rawAlias[x].map(p => p.replace('/*', ''));
}

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias,
      },
    ],
    'jest-hoist',
  ],
};
