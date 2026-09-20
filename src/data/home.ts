import type { LocalizedText } from "./projects";

export const home = {
  eyebrow: { de: "Software Architekt · Linz", en: "Software Architect · Linz" },
  heroHtml: {
    de: 'Web-Plattformen für Energie, Verwaltung und Immobilien, <em class="italic text-primary">von der Architektur bis zum Betrieb.</em>',
    en: 'Web platforms for energy, government and real estate, <em class="italic text-primary">from architecture to operations.</em>',
  },
  intro: {
    de: "Markus Weißenbek, Software Architekt in Linz. Seit mehr als 10 Jahren konzipiere ich komplexe Geschäftsprozesse, setze sie technisch um und betreue sie langfristig.",
    en: "Markus Weißenbek, software architect in Linz. For more than 10 years I have designed complex business processes, built them, and kept them running.",
  },
  seeProjects: { de: "Projekte ansehen", en: "See projects" },

  trustedBy: { de: "Vertrauen von", en: "Trusted by" },

  servicesTitle: { de: "Leistungen", en: "Services" },
  stackLabel: { de: "Stack:", en: "Stack:" },
  allTechnologies: { de: "Alle Technologien →", en: "All technologies →" },

  projectsTitle: { de: "Ausgewählte Projekte", en: "Selected projects" },
  roleLabel: { de: "Rolle:", en: "Role:" },
  outcomeLabel: { de: "Ergebnis:", en: "Result:" },
  allProjects: { de: "Alle Projekte →", en: "All projects →" },

  aboutTitle: { de: "Über mich", en: "About" },
  bioHtml: {
    de: "Selbstständiger <strong>Software Architekt</strong> und <strong>Senior Software Engineer</strong> im Web-Bereich. Seit mehr als 10 Jahren beschäftige ich mich damit, komplexe Geschäftsprozesse zu konzeptionieren, technisch umzusetzen und langfristig zu betreuen. Meine Kern-Kompetenz liegt vor allem in der Kombination von Technik, Wirtschaft und Team.",
    en: "Independent <strong>Software Architect</strong> and <strong>Senior Software Engineer</strong> specializing in web technologies. For more than 10 years, I&rsquo;ve been designing complex business processes, implementing them technically, and maintaining them over the long term. My core strength lies in combining technology, business, and team.",
  },
  philosophyHtml: {
    de: "Meine Grundphilosophie im Leben wie auch im Beruf ist klassisch oberösterreichisch &rdquo;Geht ned, gibts ned!&rdquo;.",
    en: "My guiding philosophy, in life as in work, is classic Upper Austrian: &rdquo;Geht ned, gibts ned!&rdquo; &mdash; roughly, &ldquo;there&rsquo;s no such thing as can&rsquo;t.&rdquo;",
  },

  contactTitle: { de: "Kontakt", en: "Contact" },
  contactText: {
    de: "Sie planen eine neue Plattform oder wollen eine bestehende weiterentwickeln? Schreiben Sie mir, ich melde mich innerhalb eines Werktags.",
    en: "Planning a new platform or evolving an existing one? Write to me and I will get back within one working day.",
  },
} satisfies Record<string, LocalizedText>;
