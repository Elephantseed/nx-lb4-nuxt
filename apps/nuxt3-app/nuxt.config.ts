import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  css: ['@/assets/css/styles.css'],
  buildModules: ['@pinia/nuxt'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  loading: { color: '#F00' },
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  storybook: {
    addons: [
      // Add your addons here
      '@storybook/addon-knobs/register',
    ],
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  privateRuntimeConfig: {
    API_SECRET: '', // Default to an empty string, automatically loaded at runtime using process.env.API_SECRET
  },
});
