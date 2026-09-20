import type { LocalizedText } from "./projects";

export interface Experience {
  from: string; // YYYY-MM
  to?: string; // absent = today
  employer: LocalizedText;
  location: LocalizedText;
  role: LocalizedText;
  bullets: LocalizedText[];
  projectIds?: string[];
}

export interface Education {
  from: string;
  to: string;
  institution: LocalizedText;
  location: LocalizedText;
  degree: LocalizedText;
  notes: LocalizedText[];
}

export interface SkillGroup {
  name: LocalizedText;
  items: string[];
}

export const cv = {
  summary: [
    {
      de: "Selbstständiger Software Architekt und Senior Software Engineer im Web-Bereich; seit mehr als 10 Jahren konzipiere ich komplexe Geschäftsprozesse, setze sie technisch um und betreue sie langfristig.",
      en: "Independent software architect and senior software engineer for the web; for more than 10 years I have designed complex business processes, built them and kept them running.",
    },
    {
      de: "Schwerpunkte der letzten zehn Jahre: Software-Architektur, Lead Development und die technische Leitung eines Software-Dienstleisters als CTO; daneben mehrjährige Lehre in Softwareentwicklung und Webtechnologien an der Universität.",
      en: "Focus of the last ten years: software architecture, lead development and the technical leadership of a software services company as CTO; alongside that, several years of university teaching in software development and web technologies.",
    },
  ] satisfies LocalizedText[],

  experience: [
    {
      from: "2025-01",
      employer: { de: "Weißenbek Software e.U.", en: "Weißenbek Software e.U." },
      location: { de: "Linz", en: "Linz" },
      role: {
        de: "Principal Software Engineer & Software Architekt (selbstständig)",
        en: "Principal Software Engineer & Software Architect (self-employed)",
      },
      bullets: [
        {
          de: "Freelance für das Bundesrechenzentrum (BRZ), Wien: Konzeption und Entwicklung der EU-weiten Single-Digital-Gateway-Plattform.",
          en: "Freelance for the Bundesrechenzentrum (BRZ), Vienna: design and development of the EU-wide Single Digital Gateway platform.",
        },
        { de: "Spring Boot und Angular.", en: "Spring Boot and Angular." },
      ],
      projectIds: ["sdg"],
    },
    {
      from: "2022-10",
      to: "2024-12",
      employer: { de: "4metrics Software GmbH", en: "4metrics Software GmbH" },
      location: { de: "Linz", en: "Linz" },
      role: { de: "Gründer & CTO", en: "Founder & CTO" },
      bullets: [
        { de: "Software mit Impact, Schwerpunkt ESG.", en: "Software with impact, ESG focus." },
        {
          de: "Datengetriebene Web-, Cloud- und Mobile-Anwendungen, UX, agiles Projektmanagement.",
          en: "Data-driven web, cloud and mobile applications, UX, agile project management.",
        },
      ],
      projectIds: ["realmetrics"],
    },
    {
      from: "2021-01",
      to: "2022-09",
      employer: { de: "Bytegrasp OG", en: "Bytegrasp OG" },
      location: { de: "Linz", en: "Linz" },
      role: { de: "Gründer & Software Architekt", en: "Founder & Software Architect" },
      bullets: [
        {
          de: "Maßgeschneiderte Weblösungen als langfristiger technischer Partner.",
          en: "Tailored web solutions as a long-term technical partner.",
        },
        { de: "Full-Stack-Entwicklung und IT-Infrastruktur.", en: "Full-stack development and IT infrastructure." },
      ],
    },
    {
      from: "2018-02",
      to: "2020-12",
      employer: { de: "JKU Linz & FH Hagenberg", en: "JKU Linz & FH Hagenberg" },
      location: { de: "Linz, Hagenberg", en: "Linz, Hagenberg" },
      role: {
        de: "Software Architekt, Full-Stack Developer (während des Doktorats)",
        en: "Software Architect, Full-Stack Developer (during the PhD)",
      },
      bullets: [
        {
          de: "Leitung des Entwicklungsteams der FFG-geförderten Projekte iVolunteer und FlexProd.",
          en: "Led the development team of the FFG-funded projects iVolunteer and FlexProd.",
        },
        {
          de: "Mehr als 12 Partner, darunter Rotes Kreuz, Feuerwehr und Europäisches Forum Alpbach.",
          en: "More than 12 partners, including the Red Cross, fire brigades and the European Forum Alpbach.",
        },
        { de: "Forschung und Publikationen.", en: "Research and publications." },
      ],
      projectIds: ["ivolunteer", "flexprod"],
    },
    {
      from: "2018-03",
      to: "2019-07",
      employer: {
        de: "Chatvisor GmbH (später Xaleon / TeamViewer Engage)",
        en: "Chatvisor GmbH (later Xaleon / TeamViewer Engage)",
      },
      location: { de: "Linz", en: "Linz" },
      role: { de: "Full-Stack Web-Entwickler", en: "Full-Stack Web Developer" },
      bullets: [
        { de: "Chatbots und Co-Browsing.", en: "Chat bots and co-browsing." },
        { de: "WhatsApp-Broadcasting über AWS SQS und Selenium.", en: "WhatsApp broadcasting via AWS SQS and Selenium." },
        { de: "Anbindung der Intercom-APIs über OAuth 2.0.", en: "Intercom API integration via OAuth 2.0." },
      ],
      projectIds: ["xaleon"],
    },
    {
      from: "2017-07",
      to: "2017-09",
      employer: { de: "Dynamic Design Group", en: "Dynamic Design Group" },
      location: { de: "Wels", en: "Wels" },
      role: { de: "Software-Entwickler", en: "Software Developer" },
      bullets: [
        {
          de: "Visualisierung von Telekommunikationsinfrastruktur mit yWorks für .NET.",
          en: "Telecom infrastructure visualisation with yWorks for .NET.",
        },
      ],
    },
    {
      from: "2014-07",
      to: "2014-09",
      employer: { de: "Meierhofer AG", en: "Meierhofer AG" },
      location: { de: "St. Valentin", en: "St. Valentin" },
      role: { de: "Datenbank-Entwickler", en: "Database Developer" },
      bullets: [{ de: "SQL-Server-Abfragen und -Funktionen.", en: "SQL Server queries and functions." }],
    },
    {
      from: "2013-05",
      to: "2013-09",
      employer: { de: "NTS Retail", en: "NTS Retail" },
      location: { de: "Leonding", en: "Leonding" },
      role: { de: "Software-Entwickler", en: "Software Developer" },
      bullets: [
        {
          de: "JavaPOS-Treiber für Kassendrucker, Kassenladen und Kundendisplays.",
          en: "JavaPOS drivers for POS printers, cash drawers and pole displays.",
        },
      ],
    },
  ] satisfies Experience[],

  education: [
    {
      from: "2019-10",
      to: "2020-12",
      institution: { de: "JKU Linz", en: "JKU Linz" },
      location: { de: "Linz", en: "Linz" },
      degree: { de: "Doktorat (PhD) Informatik", en: "PhD in Computer Science" },
      notes: [
        {
          de: "Verteilte Informationssysteme, Domänen- und Datenmodellierung, Blockchain, Datenhoheit, Multi-Level-Modellierung.",
          en: "Distributed information systems, domain and data modelling, blockchain, data sovereignty, multi-level modelling.",
        },
        { de: "3 Publikationen.", en: "3 publications." },
      ],
    },
    {
      from: "2016-12",
      to: "2019-09",
      institution: { de: "JKU Linz", en: "JKU Linz" },
      location: { de: "Linz", en: "Linz" },
      degree: { de: "Diplom-Ingenieur (DI) Informatik", en: "Diplom-Ingenieur (DI) in Computer Science" },
      notes: [
        { de: "Intelligente Informationssysteme.", en: "Intelligent information systems." },
        {
          de: "Diplomarbeit: „Towards decentralized Volunteer Management Systems – Conceptual Approach & Architecture“.",
          en: "Thesis: “Towards decentralized Volunteer Management Systems – Conceptual Approach & Architecture”.",
        },
        { de: "Mit Auszeichnung (1,0).", en: "With distinction (1.0)." },
      ],
    },
    {
      from: "2013-09",
      to: "2016-11",
      institution: { de: "JKU Linz", en: "JKU Linz" },
      location: { de: "Linz", en: "Linz" },
      degree: { de: "BSc Informatik", en: "BSc in Computer Science" },
      notes: [
        {
          de: "Bachelorarbeit: „Sketching the Situational Picture – Implementation of a PreparednessRadar for First Responders“.",
          en: "Thesis: “Sketching the Situational Picture – Implementation of a PreparednessRadar for First Responders”.",
        },
        { de: "Mit Auszeichnung (1,5).", en: "With distinction (1.5)." },
      ],
    },
    {
      from: "2007-09",
      to: "2012-05",
      institution: { de: "HTL Perg", en: "HTL Perg" },
      location: { de: "Perg", en: "Perg" },
      degree: { de: "Matura", en: "Matura (secondary school diploma)" },
      notes: [
        { de: "Informatik und Organisation.", en: "Computer science and organisation." },
        { de: "Mit Auszeichnung (1,5).", en: "With distinction (1.5)." },
      ],
    },
  ] satisfies Education[],

  skills: [
    { name: { de: "Sprachen", en: "Languages" }, items: ["Java", "JavaScript", "Python", "LaTeX"] },
    {
      name: { de: "Frameworks & Tools", en: "Frameworks & tools" },
      items: ["Spring Boot", "Angular", "Atlassian Jira/Confluence", "Agile", "UML & C4", "Claude Code", "Windsurf"],
    },
    {
      name: { de: "Datenbanken", en: "Databases" },
      items: ["MySQL", "MariaDB", "MS SQL Server", "MongoDB", "InfluxDB"],
    },
    { name: { de: "Betriebssysteme", en: "Operating systems" }, items: ["Linux", "Windows"] },
    {
      name: { de: "Sprachkenntnisse", en: "Spoken languages" },
      items: ["Deutsch (Muttersprache)", "Englisch (C2)"],
    },
  ] satisfies SkillGroup[],
};
