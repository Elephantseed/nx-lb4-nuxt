const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js');

module.exports = nuxifyStorybook({
  webpackFinal(config/*, options */) {
    // extend config here

    return config;
  },
  addons: [
    // Add your addons here
    '@storybook/addon-knobs/register'
  ]
});
