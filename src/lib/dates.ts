import { ui, type Locale } from "../i18n/ui";

const months = {
  de: ["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
} as const;

/** "2021-01" → "Jän 2021" / "Jan 2021" */
export function formatMonth(yearMonth: string, locale: Locale): string {
  const [year, month] = yearMonth.split("-");
  return `${months[locale][Number(month) - 1]} ${year}`;
}

/** "2021-01", "2022-09" → "Jän 2021 – Sep 2022"; no end → "… – heute" / "… – today" */
export function formatRange(from: string, to: string | undefined, locale: Locale): string {
  const end = to ? formatMonth(to, locale) : ui[locale]["cv.today"];
  return `${formatMonth(from, locale)} – ${end}`;
}
