/** @type {import('@storybook/react-webpack5').StorybookConfig} */
const config = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding'
  ],
  framework: '@storybook/react-webpack5'
};

export default config;
