export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export const ui = {
  de: {
    "nav.home": "Home",
    "nav.projects": "Projekte",
    "nav.technologies": "Technologien",
    "nav.cv": "CV",
    "nav.contact": "Kontakt",
    "home.latestProjects": "Letzte Projekte",
    "home.coreTechnologies": "Kern-Technologien",
    "home.allProjects": "Alle Projekte",
    "home.allTechnologies": "Alle Technologien",
    "projects.title": "Meine Projekte",
    "technologies.title": "Technologien",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "theme.toggle": "Farbschema wechseln",
    "lang.toggle": "Sprache wechseln",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.technologies": "Technologies",
    "nav.cv": "CV",
    "nav.contact": "Contact",
    "home.latestProjects": "Latest Projects",
    "home.coreTechnologies": "Core Technologies",
    "home.allProjects": "All Projects",
    "home.allTechnologies": "All Technologies",
    "projects.title": "My Projects",
    "technologies.title": "Technologies",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy Policy",
    "theme.toggle": "Toggle color theme",
    "lang.toggle": "Switch language",
  },
} as const satisfies Record<Locale, Record<string, string>>;
