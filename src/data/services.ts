import type { LocalizedText } from "./projects";

export interface Service {
  title: LocalizedText;
  description: LocalizedText;
}

export const services: Service[] = [
  {
    title: { de: "Architektur für neue Plattformen", en: "Architecture for new platforms" },
    description: {
      de: "Von der Anforderung bis zum C4-Modell und dem ersten Release.",
      en: "From requirements to the C4 model and the first release.",
    },
  },
  {
    title: { de: "Umsetzung mit dem Team", en: "Delivery with the team" },
    description: {
      de: "Spring Boot, Angular, MongoDB oder SQL Server, hands-on als Lead Developer.",
      en: "Spring Boot, Angular, MongoDB or SQL Server, hands-on as lead developer.",
    },
  },
  {
    title: { de: "Langfristige Betreuung", en: "Long-term support" },
    description: {
      de: "Weiterentwicklung und Betrieb über Jahre, nicht nur bis zur Abnahme.",
      en: "Evolution and operations over years, not just until sign-off.",
    },
  },
];
