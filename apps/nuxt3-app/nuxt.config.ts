import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  css: ["@/assets/css/styles.css"],
  buildModules: [
    '@pinia/nuxt'
  ],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  storybook: {
    addons: [
      // Add your addons here
      '@storybook/addon-knobs/register'
    ]
  }
});
