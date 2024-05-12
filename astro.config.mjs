import { defineConfig } from 'astro/config'
import { defaultLocale, locales } from './src/utils/i18n'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://marcy-miniportfolio.vercel.app/',
  i18n: {
    defaultLocale: defaultLocale,
    locales: locales,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: 'server',
  adapter: vercel(),
})
