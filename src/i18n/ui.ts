export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export const ui = {
  de: {
    "site.tagline": "Software Architekt | Senior Software Engineer",
    "nav.home": "Home",
    "nav.projects": "Projekte",
    "nav.technologies": "Technologien",
    "nav.cv": "CV",
    "nav.contact": "Kontakt",
    "nav.cta": "Projekt besprechen",
    "nav.menu": "Menü",
    "home.latestProjects": "Letzte Projekte",
    "home.coreTechnologies": "Kern-Technologien",
    "home.allProjects": "Alle Projekte",
    "home.allTechnologies": "Alle Technologien",
    "projects.title": "Meine Projekte",
    "technologies.title": "Technologien",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "lang.toggle": "Sprache wechseln",
  },
  en: {
    "site.tagline": "Software Architect | Senior Software Engineer",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.technologies": "Technologies",
    "nav.cv": "CV",
    "nav.contact": "Contact",
    "nav.cta": "Discuss a project",
    "nav.menu": "Menu",
    "home.latestProjects": "Latest Projects",
    "home.coreTechnologies": "Core Technologies",
    "home.allProjects": "All Projects",
    "home.allTechnologies": "All Technologies",
    "projects.title": "My Projects",
    "technologies.title": "Technologies",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy Policy",
    "lang.toggle": "Switch language",
  },
} as const satisfies Record<Locale, Record<string, string>>;
