module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        forceAllTransforms: true,
        useBuiltIns: 'usage',
        targets: {
          node: 'current'
        }
      }
    ],
    ['@babel/preset-react', {
      development: process.env.NODE_ENV === 'development'
    }],
    '@babel/preset-flow'
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-decorators', {
      legacy: true
    }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',

    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', {
      loose: true
    }],
    '@babel/plugin-proposal-optional-chaining'
  ],
  env: {
    production: {
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements'
      ]
    },
    test: {
      plugins: [
        'babel-plugin-istanbul',
        '@babel/plugin-transform-modules-commonjs'
      ]
    }
  }
}