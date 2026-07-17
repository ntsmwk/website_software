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

export function localizedHref(path: string, locale: Locale): string {
  if (locale === "de") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

export function alternatePath(pathname: string, locale: Locale): string {
  const withoutLocale = pathname.startsWith("/en/")
    ? pathname.slice(3) || "/"
    : pathname === "/en"
      ? "/"
      : pathname;

  return locale === "en"
    ? `/en${withoutLocale === "/" ? "" : withoutLocale}`
    : withoutLocale;
}
