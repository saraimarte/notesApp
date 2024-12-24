import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions'; // if using Netlify

export default defineConfig({
  output: 'server',
  adapter: netlify()
});