// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://clashtuijian.cc',
  base: '/',
  trailingSlash: 'never',
  compressHTML: true,
  build: {
    format: 'file',
    assets: 'static',
  },
});
