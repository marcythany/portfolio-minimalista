import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://marcy-miniportfolio.vercel.app/',
  output: 'server',
  adapter: vercel(),
})
