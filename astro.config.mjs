// @ts-check
import { defineConfig } from 'astro/config';

import compressor from 'astro-compressor';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [compressor(), react()]
});