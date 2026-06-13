// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://r0ttenbeef.github.io',
	base: '/apx-homepage',
	integrations: [mdx(), sitemap()],
});
