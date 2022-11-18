const PeerDepsExternalPlugin = require('rollup-plugin-peer-deps-external');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const packageJson = require('./package.json');

module.exports = {
    input: './src/index.js',
    watch: {
        include: './src/**',
        exclude: [
            './stories/*'
        ],
        clearScreen: false
    },
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        },
        {
            file: packageJson.browser,
            format: 'umd',
            name: 'RUNInput',
            sourcemap: true
        }
    ],
    plugins: [
        PeerDepsExternalPlugin(),
        nodeResolve({
            extensions: [
                '.js',
                '.jsx'
            ]
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: [
                '@babel/preset-react'
            ],
            babelHelpers: 'bundled'
        }),
        terser()
    ]
};
