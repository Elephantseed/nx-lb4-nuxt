const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')

module.exports = nuxifyStorybook({
  webpackFinal (config, options) {

    // extend config here

    return config
  },
  stories: [
    // Add your stories here
    ...['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)']
  ],
  addons: [
    // Add your addons here
  ]
})
