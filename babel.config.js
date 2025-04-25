/** @type {import('@babel/core').ConfigFunction} */
const configBabel = (api) => {
  /** @type {import('@babel/core').TransformOptions} */
  const config = {
    exclude: 'node_modules/**',
    presets: [
      ['@babel/preset-react']
    ]
  };

  if (api.env('test')) {
    config.presets.unshift('@babel/preset-env');
  }

  return config;
};

module.exports = configBabel;
