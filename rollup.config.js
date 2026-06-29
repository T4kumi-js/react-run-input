const { defineConfig } = require('rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { babel } = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');

const extensions = [
  '.ts',
  '.tsx'
];

const rollupConfig = defineConfig([
  {
    input: './src/index.ts',
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
          'react': 'React'
        },
        sourcemap: true
      }
    ],
    external: ['react'],
    plugins: [
      nodeResolve({ extensions }),
      commonjs(),
      babel({ extensions, babelHelpers: 'bundled' })
    ]
  },
  {
    input: './src/index.ts',
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
          'react': 'React'
        },
        sourcemap: true
      }
    ],
    external: ['react'],
    plugins: [
      nodeResolve({ extensions }),
      commonjs(),
      babel({ extensions, babelHelpers: 'bundled' }),
      terser()
    ]
  }
]);

module.exports = rollupConfig;
