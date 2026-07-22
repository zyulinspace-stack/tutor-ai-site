# Тьютор AI — сайт SEO-завода (Astro, статика)

Маркетинговый сайт + блог проекта «AI_репетитор». Пре-лонч: CTA ведут в список раннего доступа (Telegram). Собран по семантике `Проекты/AI_репетитор/Семантика_SEO-завод_AI-репетитор_2026-07-21.md`.

## ⚠️ Перед деплоем — 3 обязательные правки

1. **Домен**: `src/config.js` → `SITE_URL` (сейчас плейсхолдер `tutorai-placeholder.ru`). Из него собираются canonical, og:url, schema.org и sitemap. Урок Гипотезы: мёртвый домен в canonical = нет индексации.
2. **Sitemap в robots**: `public/robots.txt` → строка `Sitemap:` (тот же домен).
3. **Telegram**: `src/config.js` → `TELEGRAM_CHANNEL` (сейчас `REPLACE_ME_channel`). Создай канал проекта — весь ранний доступ собирается туда.

## Запуск локально

```bash
npm install
npm run dev        # localhost:4321
npm run build      # статика в dist/
```

## Деплой (Vercel, как oge-survive-game)

1. Создать репо на GitHub (пуш с Мака — из песочницы git-креденшлов нет).
2. vercel.com → Add New Project → импорт репо. Framework: Astro (определится сам). Build: `astro build`, output: `dist`.
3. Прикрутить домен в настройках Vercel + DNS у регистратора.
4. После деплоя: Яндекс.Вебмастер + GSC (верификация файлом в `public/`), отправить sitemap.

## Структура

- `src/config.js` — **единая точка правки** бренда/домена/ссылок
- `src/layouts/Base.astro` — SEO-обвязка: canonical, OG, schema.org (Organization/WebSite/BreadcrumbList), шапка/футер, все стили
- `src/pages/` — главная (лендинг), хабы `/dlya-repetitorov` `/dlya-roditelej` `/ege` `/oge`, блог, русская 404
- `src/content/blog/*.md` — статьи. **Формат-контракт для завода: одна статья = один .md-файл**, фронтматтер: `title, description, date, cluster, hub (dlya-repetitorov|dlya-roditelej|ege|oge), cta (trial|report|student), author`. Slug = имя файла (латиница). Карточки в блоге/хабах, sitemap, schema.org Article, хлебные крошки и CTA-блок собираются автоматически.
- Sitemap: `@astrojs/sitemap`, чанки по 200 URL (`astro.config.mjs`).

## Подключение SEO-завода (следующий шаг)

Отдельный репо из шаблона `vasin-k-i/seo-factory-starter` (как в плане Гипотезы/distill). Контент-фабрика пишет .md-файлы в `src/content/blog/` этого репо и коммитит — Vercel пересобирает сам. Бэклог тем: `SEO-бэклог_AI-репетитор_2026-07-21.xlsx` (744 темы, волны W1–W4, гейт качества — лист «Правила завода»).
