import { defaultLocale, ui, type Locale } from "../i18n/ui";
import type { LocalizedText } from "../data/projects";

export function getLocale(currentLocale: string | undefined): Locale {
  return currentLocale === "en" ? "en" : defaultLocale;
}

export function useTranslations(locale: Locale) {
  return function t(key: keyof (typeof ui)["de"]) {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}

export function localize(field: LocalizedText, locale: Locale): string {
  return field[locale];
}

// Always the trailing-slash form: it is the canonical URL of the built
// directory pages, so Netlify serves it without a 301.
export function localizedHref(path: string, locale: Locale): string {
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return locale === "de" ? withSlash : `/en${withSlash}`;
}

export function alternatePath(pathname: string, locale: Locale): string {
  const withoutLocale =
    pathname === "/en" || pathname.startsWith("/en/") ? pathname.slice(3) || "/" : pathname;
  return localizedHref(withoutLocale, locale);
}
