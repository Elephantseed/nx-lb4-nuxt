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
  },
  privateRuntimeConfig: {
    API_SECRET: '' // Default to an empty string, automatically loaded at runtime using process.env.API_SECRET
  }
});

