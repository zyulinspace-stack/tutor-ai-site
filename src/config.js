// ============================================================
// ЕДИНАЯ ТОЧКА ПРАВКИ БРЕНДА И ДОМЕНА.
// ⚠️ SITE_URL — ПЛЕЙСХОЛДЕР. Перед деплоем на боевой домен поменять
// ЗДЕСЬ (и только здесь): canonical, og:url, sitemap и schema.org
// собираются из этой константы. Урок Гипотезы: мёртвый домен в
// canonical блокирует индексацию живого сайта.
// ============================================================
export const SITE_NAME = 'Тьютор AI';
export const SITE_URL = 'https://tyutor-ai.ru'; // ← ПОМЕНЯТЬ НА БОЕВОЙ ДОМЕН
export const SITE_TAGLINE = 'AI-проверка домашних заданий для репетиторов';
export const SITE_DESCRIPTION =
  'Тьютор AI проверяет рукописные ДЗ по математике и физике за минуты, ведёт ученика наводящими вопросами вместо готовых ответов и присылает родителям еженедельный отчёт о прогрессе.';


// Кабинет: вход и оплата. Кнопки лендинга ведут сюда.
export const APP_URL = 'https://app.tyutor-ai.ru';
export const START_URL = `${APP_URL}/login?next=/dashboard`; // попробовать бесплатно
export const CHECKOUT_URL = `${APP_URL}/login?next=/pricing`; // сразу к тарифам и оплате
export const EARLY_ACCESS_URL = START_URL; // обратная совместимость со старыми CTA

export const LAUNCH_NOTE = 'Бесплатный тариф — навсегда. Про-10: первый месяц 149 ₽, дальше 990 ₽/мес. Отмена в любой момент.';

export const AUTHOR_DEFAULT = 'Редакция Тьютор AI';

// Юридические реквизиты ИП (для подвала сайта и ссылок на документы).
export const LEGAL_NAME = 'ИП Зюлин Денис Сергеевич';
export const LEGAL_INN = '550147202259';
export const LEGAL_OGRNIP = '321554300039343';
export const LEGAL_EMAIL = 'info@tyutor-ai.ru';
export const OFERTA_URL = `${APP_URL}/oferta`;
export const PRIVACY_URL = `${APP_URL}/privacy`;
