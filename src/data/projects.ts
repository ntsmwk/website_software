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
  url: string;
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
      de: "Maßgeschneiderte Plattform zur Verwaltung der Energiemarktteilnehmer (Netzbetreiber, Strom- & Gas-Lieferanten, etc.) inkl. Anbindung (Ponton / AS4) an die Peer-2-Peer Datenautausch-Infrastruktur.",
      en: "Custom-built platform for managing energy market participants (grid operators, electricity & gas suppliers, etc.), including integration (Ponton / AS4) with the peer-to-peer data exchange infrastructure.",
    },
    role: { de: "Software Architekt", en: "Software Architect" },
    badge: { de: "Energie", en: "Energy" },
    url: "https://www.eda.at/",
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
      de: "EU-Projekt mit dem Ziel öffentliche Dienste und Informationen über alle Mitgliedstaaten hinweg zugänglich und nutzbar zu machen.",
      en: "EU project aiming to make public services and information accessible and usable across all member states.",
    },
    role: { de: "Senior Full-Stack Developer", en: "Senior Full-Stack Developer" },
    badge: { de: "Governance", en: "Governance" },
    url: "https://www.bundeskanzleramt.gv.at/agenda/digitalisierung/internationale-services/projekt-single-digital-gateway.html",
    image: "/EU.webp",
    tags: ["Spring Boot", "Angular", "MongoDB", "Bootstrap", "AS/4", "Accessibility"],
  },
  {
    id: "portfolio-assistent",
    title: { de: "Portfolio Assistent", en: "Portfolio Assistent" },
    description: {
      de: "Plattform zur Digitalisierung und Verwaltung von Immobilien-Portfolios basierend auf dem Energieausweiß.",
      en: "Platform for digitizing and managing real estate portfolios based on the energy performance certificate.",
    },
    role: {
      de: "Software Architekt & Lead Developer",
      en: "Software Architect & Lead Developer",
    },
    badge: { de: "Immobilien", en: "Real Estate" },
    url: "https://www.portfolio-assistent.at/",
    image: "/portfolio-assistent.png",
    tags: ["Spring Boot", "Angular", "MongoDB", "Tailwind", "OCR", "AWS"],
  },
  {
    id: "energyplus",
    title: { de: "Energy+ GmbH", en: "Energy+ GmbH" },
    description: {
      de: "Steuerungs- und Visualisierungsplattform für B2C Photovoltaik-Systemen inkl. Smartphone-App.",
      en: "Control and visualization platform for B2C photovoltaic systems, including a smartphone app.",
    },
    role: { de: "Software Architekt", en: "Software Architect" },
    badge: { de: "Energie", en: "Energy" },
    url: "https://energyplus.at/",
    image: "/energyplus.png",
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
    image: "/salzit.png",
    tags: ["Svelte", "TypeScript", "Lantek", "Hardware"],
  },
  {
    id: "realmetrics",
    title: { de: "RealMetrics", en: "RealMetrics" },
    description: {
      de: "Plattform zur Sanierungssimulation von Immobilien basierend auf Energieausweißen.",
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
    role: { de: "Software Architekt", en: "Software Architect" },
    badge: { de: "Healthcare", en: "Healthcare" },
    url: "https://www.barmherzige-brueder.at/portal/linz/home",
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
    role: { de: "Lead Developer", en: "Lead Developer" },
    badge: { de: "Research", en: "Research" },
    url: "http://cis.jku.at/projects/36ec93.html?view=project",
    image: "/jku.png",
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
    image: "/jku.png",
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
    role: { de: "Developer", en: "Developer" },
    badge: { de: "Digital Services", en: "Digital Services" },
    url: "https://www.tech2b.at/en/startup/xaleon/",
    image: "/xaleon.png",
    tags: ["Spring Boot", "Angular", "MongoDB", "Bootstrap"],
  },
];

export const featuredProjectIds = ["eda", "sdg", "portfolio-assistent"];
