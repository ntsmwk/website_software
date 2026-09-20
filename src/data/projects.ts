export interface LocalizedText {
  de: string;
  en: string;
}

export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  role: LocalizedText;
  badge: LocalizedText;
  url?: string;
  outcome?: LocalizedText;
  highlights?: LocalizedText[];
  duration?: LocalizedText;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "eda",
    title: {
      de: "Energiewirtschaftlicher Datenaustauschdienst GmbH",
      en: "Energiewirtschaftlicher Datenaustauschdienst GmbH",
    },
    description: {
      de: "Maßgeschneiderte Plattform zur Verwaltung der Energiemarktteilnehmer (Netzbetreiber, Strom- & Gas-Lieferanten, etc.) inkl. Anbindung (Ponton / AS4) an die Peer-2-Peer Datenaustausch-Infrastruktur.",
      en: "Custom-built platform for managing energy market participants (grid operators, electricity & gas suppliers, etc.), including integration (Ponton / AS4) with the peer-to-peer data exchange infrastructure.",
    },
    role: {
      de: "Software Architekt & Lead Developer",
      en: "Software Architect & Lead Developer",
    },
    badge: { de: "Energie", en: "Energy" },
    url: "https://www.eda.at/",
    duration: { de: "2 Jahre", en: "2 years" },
    highlights: [
      {
        de: "EDA ist die Drehscheibe für die österreichischen Energiemarktteilnehmer; die Plattform verwaltet Netzbetreiber und Lieferanten.",
        en: "EDA is Austria's hub for energy market participants; the platform manages grid operators and suppliers.",
      },
      {
        de: "Zahlreiche Schnittstellen zu Ponton (Peer-to-Peer-Messaging).",
        en: "Numerous interfaces to Ponton (peer-to-peer messaging).",
      },
      {
        de: "Anbindung an das EDA Anwenderportal für Registrierung und Verwaltung von Energiegemeinschaften (EEGs).",
        en: "Integration with the EDA user portal for registering and administering energy communities (EEGs).",
      },
    ],
    image: "/EDA.webp",
    tags: ["Spring Boot", "Angular", "MS SQL Server", "Jira", "Tailwind", "OpenAPI"],
  },
  {
    id: "sdg",
    title: {
      de: "EU-Projekt Single Digital Gateway (SDG)",
      en: "EU Project: Single Digital Gateway (SDG)",
    },
    description: {
      de: "EU-Projekt für das Bundesrechenzentrum (BRZ) mit dem Ziel, öffentliche Dienste und Informationen über alle Mitgliedstaaten hinweg zugänglich und nutzbar zu machen.",
      en: "EU project for the Bundesrechenzentrum (BRZ) aiming to make public services and information accessible and usable across all member states.",
    },
    role: { de: "Senior Full-Stack Developer", en: "Senior Full-Stack Developer" },
    badge: { de: "Governance", en: "Governance" },
    url: "https://www.brz.gv.at/",
    duration: { de: "3 Jahre (laufend)", en: "3 years (ongoing)" },
    highlights: [
      {
        de: "Grenzüberschreitender Austausch geschützter Registerdaten (Geburtsurkunde, Firmenbuchauszug, Meldebestätigung) für EU-Bürger im Ausland, statt des Wegs über die Botschaft.",
        en: "Cross-border exchange of protected register data (birth certificate, company register extract, registration confirmation) for citizens living in another EU country, replacing the embassy route.",
      },
      {
        de: "Rund 20-köpfiges Team für die Erstumsetzung.",
        en: "Team of around 20 for the first implementation.",
      },
      {
        de: "Umsetzung mit Spring Boot und Angular.",
        en: "Built with Spring Boot and Angular.",
      },
    ],
    image: "/EU.webp",
    tags: ["Spring Boot", "Angular", "MongoDB", "Bootstrap", "AS/4", "Accessibility"],
  },
  {
    id: "portfolio-assistent",
    title: { de: "Portfolio Assistent", en: "Portfolio Assistent" },
    description: {
      de: "Plattform zur Digitalisierung und Verwaltung von Immobilien-Portfolios basierend auf dem Energieausweis.",
      en: "Platform for digitizing and managing real estate portfolios based on the energy performance certificate.",
    },
    role: {
      de: "Software Architekt & Lead Developer",
      en: "Software Architect & Lead Developer",
    },
    badge: { de: "Immobilien", en: "Real Estate" },
    duration: { de: "2,5 Jahre", en: "2.5 years" },
    highlights: [
      {
        de: "Gemeinsam mit der IfEA, einer Tochter der Energie AG, entwickelt und als SaaS vertrieben.",
        en: "Developed with IfEA, a subsidiary of Energie AG, and sold as SaaS.",
      },
      {
        de: "Unterstützt große Immobilieneigentümer und -verwalter bei den Berichtspflichten der EU-Taxonomie.",
        en: "Supports large property owners and managers with EU taxonomy reporting duties.",
      },
      {
        de: "Kern: automatisierte Digitalisierung und Auswertung von Energieausweisen.",
        en: "Core: automated digitisation and evaluation of energy performance certificates.",
      },
    ],
    image: "/portfolio-assistent.webp",
    tags: ["Spring Boot", "Angular", "MongoDB", "Tailwind", "OCR", "AWS"],
  },
  {
    id: "energyplus",
    title: { de: "Energy+ GmbH", en: "Energy+ GmbH" },
    description: {
      de: "Steuerungs- und Visualisierungsplattform für B2C Photovoltaik-Systeme inkl. Smartphone-App.",
      en: "Control and visualization platform for B2C photovoltaic systems, including a smartphone app.",
    },
    role: { de: "Software Architekt", en: "Software Architect" },
    badge: { de: "Energie", en: "Energy" },
    url: "https://energyplus.at/",
    duration: { de: "1 Jahr", en: "1 year" },
    highlights: [
      {
        de: "Energy+ ist ein österreichischer Photovoltaik-Händler und -Installateur im B2B- und B2C-Geschäft.",
        en: "Energy+ is an Austrian photovoltaic dealer and installer serving B2B and B2C customers.",
      },
      {
        de: "Steuerungs- und Visualisierungsplattform inklusive Smartphone-App.",
        en: "Control and visualisation platform including a smartphone app.",
      },
      {
        de: "Ziel: herstellerunabhängige Unterstützung von Wechselrichtern und Batteriespeichern.",
        en: "Goal: vendor-agnostic support for inverters and battery storage from different manufacturers.",
      },
    ],
    image: "/energyplus.webp",
    tags: ["Spring Boot", "Angular", "Influx", "Tailwind", "Ionic", "Kontron-Hardware"],
  },
  {
    id: "salzit",
    title: { de: "SalzIT GmbH", en: "SalzIT GmbH" },
    description: {
      de: "Betreuung & Erweiterung einer Lantek-Zusatzapplikation für die Produktions- und Verpackungsverwaltung.",
      en: "Maintenance & extension of a Lantek add-on application for production and packaging management.",
    },
    role: { de: "Software Architekt", en: "Software Architect" },
    badge: { de: "Industrie", en: "Industry" },
    url: "https://www.salzit.com/",
    duration: { de: "6 Monate", en: "6 months" },
    highlights: [
      {
        de: "SalzIT ist die österreichische Tochter von Lantek (Trumpf-Gruppe) und vertreibt Software zur Produktionssteuerung.",
        en: "SalzIT is the Austrian subsidiary of Lantek (Trumpf group), distributing production-control software.",
      },
      {
        de: "Erweiterungen der Produktions- und Verpackungsfunktion, bei Kunden in Produktion gegangen.",
        en: "Extensions to the production and packaging feature, put into production at customers.",
      },
    ],
    image: "/salzit.webp",
    tags: ["Svelte", "TypeScript", "Lantek", "Hardware"],
  },
  {
    id: "realmetrics",
    title: { de: "RealMetrics", en: "RealMetrics" },
    description: {
      de: "Plattform zur Sanierungssimulation von Immobilien basierend auf Energieausweisen.",
      en: "Platform for simulating building renovations based on energy performance certificates.",
    },
    role: {
      de: "Software Architekt & Lead Developer",
      en: "Software Architect & Lead Developer",
    },
    badge: { de: "Immobilien", en: "Real Estate" },
    url: "https://www.tech2b.at/news/startup-insight-mit-stefan-matheis-von-4metrics/",
    image: "/realmetrics.svg",
    tags: ["Spring Boot", "Angular", "MongoDB", "Tailwind", "EU Taxonomy"],
  },
  {
    id: "bhb",
    title: {
      de: "Krankenhaus der Barmherzigen Brüder",
      en: "Krankenhaus der Barmherzigen Brüder",
    },
    description: {
      de: "Digitalisierung von medizinischen Fragebögen & Entwicklung einer Lernplattform für die Erkennung und Behandlung von frühkindlichen Sprachstörungen.",
      en: "Digitization of medical questionnaires & development of a learning platform for detecting and treating early childhood speech disorders.",
    },
    role: {
      de: "Software Architekt & Full-Stack Developer",
      en: "Software Architect & Full-Stack Developer",
    },
    badge: { de: "Healthcare", en: "Healthcare" },
    url: "https://www.barmherzige-brueder.at/portal/linz/home",
    duration: { de: "3 Jahre", en: "3 years" },
    highlights: [
      {
        de: "Mehrere medizinische Forschungsprojekte zu frühkindlichen Sprachstörungen.",
        en: "Several medical research projects on early-childhood speech disorders.",
      },
      {
        de: "Mutter-Kind-Pass-Fragebögen digitalisiert und in oberösterreichischen Praxen ausgerollt.",
        en: "Mutter-Kind-Pass questionnaires digitised and rolled out to practices across Upper Austria.",
      },
      {
        de: "Lernplattform für betroffene Kinder und Eltern mit Fortschrittsübersicht für Ärztinnen und Ärzte.",
        en: "Learning platform for affected children and parents, with a progress overview for doctors.",
      },
      {
        de: "Datenschutz in Abstimmung mit der Ethikkommission.",
        en: "Data protection aligned with the ethics commission.",
      },
    ],
    image: "/bhb.svg",
    tags: ["NestJS", "Angular", "Redcap", "Data Protection"],
  },
  {
    id: "sylagon",
    title: { de: "Sylagon", en: "Sylagon" },
    description: {
      de: "Webplattform zur automatisierten Erstellung von Daten-Visualisierungen für den Einsatz im Journalismus.",
      en: "Web platform for automated creation of data visualizations for use in journalism.",
    },
    role: {
      de: "Software Architekt & Lead Developer",
      en: "Software Architect & Lead Developer",
    },
    badge: { de: "Data-Visualization", en: "Data Visualization" },
    url: "https://www.tech2b.at/en/startup/sylagon/",
    duration: { de: "1 Jahr", en: "1 year" },
    highlights: [
      {
        de: "Datengetriebenes Storytelling für Journalistinnen und Journalisten.",
        en: "Data-driven storytelling for journalists.",
      },
      {
        de: "Eigenes NLP analysiert die Daten und schlägt die passendsten Visualisierungen vor.",
        en: "In-house NLP analyses the data and proposes the most suitable visualisations.",
      },
    ],
    image: "/sylagon.svg",
    tags: ["Spring Boot", "Angular", "MongoDB", "Data Visualization"],
  },
  {
    id: "ivolunteer",
    title: { de: "iVolunteer", en: "iVolunteer" },
    description: {
      de: "Eine dezentralisierte Webanwendung mit dem Schwerpunkt, die Datenhoheit von den Freiwilligenorganisationen auf die Freiwilligen zu verlagern.",
      en: "A decentralized web application focused on shifting data sovereignty from volunteer organizations to the volunteers themselves.",
    },
    role: {
      de: "Software Architekt & Lead Developer",
      en: "Software Architect & Lead Developer",
    },
    badge: { de: "Research", en: "Research" },
    url: "http://cis.jku.at/projects/36ec93.html?view=project",
    duration: { de: "2 Jahre", en: "2 years" },
    highlights: [
      {
        de: "Jede Organisation (Feuerwehr, Rotes Kreuz) erhält ihr eigenes Freiwilligenzentrum mit Aufgaben, Rollen, Auszeichnungen und Kompetenzen.",
        en: "Each organisation (fire brigade, Red Cross) gets its own volunteer centre with tasks, roles, achievements and competences.",
      },
      {
        de: "Blockchain-basierte Verifikation für die Datenhoheit der Freiwilligen.",
        en: "Blockchain-based verification for the volunteers' data sovereignty.",
      },
      {
        de: "FFG-gefördert, mehr als 12 Partner.",
        en: "FFG-funded, more than 12 partners.",
      },
    ],
    image: "/jku.webp",
    tags: ["Spring Boot", "Angular", "MongoDB", "Decentralized Architecture", "Research Project"],
  },
  {
    id: "flexprod",
    title: { de: "FlexProd", en: "FlexProd" },
    description: {
      de: "Das Forschungsprojekt FlexProd realisiert anonyme Marktplätze von Industriekapazitäten ohne Informationen über die individuellen Kapazitäten der Teilnehmer preiszugeben.",
      en: "The FlexProd research project implements anonymous marketplaces for industrial capacity without revealing information about individual participants' capacities.",
    },
    role: { de: "Lead Developer", en: "Lead Developer" },
    badge: { de: "Research", en: "Research" },
    url: "http://cis.jku.at/projects/35ec93.html?view=project",
    duration: { de: "1 Jahr", en: "1 year" },
    highlights: [
      {
        de: "Anonymer Marktplatz für Industriekapazitäten, Vertragsabschluss in einem Bruchteil der üblichen Zeit.",
        en: "Anonymous marketplace for industrial capacity, with contracts closed in a fraction of the usual time.",
      },
      {
        de: "Verteilte Geräte je Teilnehmer, verbunden über eine verschlüsselte Cloud.",
        en: "Distributed devices per participant, connected through an encrypted cloud.",
      },
      {
        de: "Multi-Party Computation für anonyme Auktionen, semantisches Matching der Angebote.",
        en: "Multi-party computation for auction anonymity and semantic matching of offers.",
      },
    ],
    image: "/jku.webp",
    tags: ["Spring Boot", "Angular", "MongoDB", "Decentralized Architecture", "Research Project"],
  },
  {
    id: "xaleon",
    title: {
      de: "Xaleon (später Teamviewer Engage)",
      en: "Xaleon (later TeamViewer Engage)",
    },
    description: {
      de: "Entwicklung einer Web-basierenden Customer Engagement Plattform ähnlich wie Teamviewer als Desktop-Anwendung.",
      en: "Development of a web-based customer engagement platform, similar to TeamViewer's desktop application.",
    },
    role: { de: "Full-Stack Entwickler", en: "Full-Stack Developer" },
    badge: { de: "Digital Services", en: "Digital Services" },
    url: "https://www.tech2b.at/en/startup/xaleon/",
    duration: { de: "1,5 Jahre", en: "1.5 years" },
    highlights: [
      {
        de: "Chatbots und Co-Browsing-Webanwendung mit Java Spring und Angular.",
        en: "Chat bots and a co-browsing web app built with Java Spring and Angular.",
      },
      {
        de: "WhatsApp-Broadcasting über AWS SQS und Selenium.",
        en: "WhatsApp broadcasting via AWS SQS and Selenium.",
      },
      {
        de: "Anbindung der Intercom-APIs über OAuth 2.0.",
        en: "Intercom API integration via OAuth 2.0.",
      },
    ],
    image: "/xaleon.webp",
    tags: ["Spring Boot", "Angular", "MongoDB", "Bootstrap"],
  },
];

export const featuredProjectIds = ["eda", "sdg", "portfolio-assistent"];
