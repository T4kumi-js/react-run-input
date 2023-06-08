const PeerDepsExternalPlugin = require('rollup-plugin-peer-deps-external');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');

const nodeResolveConfig = {
  extensions: [
    '.js',
    '.jsx'
  ]
};

const babelConfig = {
  exclude: 'node_modules/**',
  presets: [
    '@babel/preset-react'
  ],
  babelHelpers: 'bundled'
};

module.exports = [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/cjs/react-run-input.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/esm/react-run-input.js',
        format: 'esm',
        sourcemap: true
      },
      {
        file: 'dist/umd/react-run-input.js',
        format: 'umd',
        name: 'ReactRUNInput',
        globals: {
          'react': 'React',
          'prop-types': 'PropTypes'
        },
        sourcemap: true
      }
    ],
    plugins: [
      PeerDepsExternalPlugin(),
      nodeResolve(nodeResolveConfig),
      commonjs(),
      babel(babelConfig)
    ]
  },
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/cjs/react-run-input.min.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/esm/react-run-input.min.js',
        format: 'esm',
        sourcemap: true
      },
      {
        file: 'dist/umd/react-run-input.min.js',
        format: 'umd',
        name: 'ReactRUNInput',
        globals: {
          'react': 'React',
          'prop-types': 'PropTypes'
        },
        sourcemap: true
      }
    ],
    plugins: [
      PeerDepsExternalPlugin(),
      nodeResolve(nodeResolveConfig),
      commonjs(),
      babel(babelConfig),
      terser()
    ]
  }
];
