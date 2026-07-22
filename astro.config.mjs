// ЕДИНСТВЕННОЕ место, где живёт домен, — src/config.ts (SITE_URL).
// Поменяй его там при покупке домена; сюда он импортируется.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config.js';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // Порционная выдача: sitemap-index + чанки. Лимит записей в чанке
      // держим низким — публикуем волнами (см. Правила завода).
      entryLimit: 200,
    }),
  ],
});
