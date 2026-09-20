import type { LocalizedText } from "./projects";

export interface TechItem {
  name: string;
  img: string;
  format: string;
  url: string;
}

export interface TechCategory {
  id: string;
  name: LocalizedText;
  items: TechItem[];
}

export const technologyCategories: TechCategory[] = [
  {
    id: "frameworks",
    name: { de: "Frameworks", en: "Frameworks" },
    items: [
      { name: "Spring Boot", img: "/technologies/spring.webp", format: "webp", url: "https://spring.io/projects/spring-boot" },
      { name: "Angular", img: "/technologies/angular.webp", format: "webp", url: "https://angular.dev/" },
      { name: "Tailwind", img: "/technologies/tailwind.webp", format: "webp", url: "https://tailwindcss.com/" },
      { name: "Jira", img: "/technologies/jira.webp", format: "webp", url: "https://www.atlassian.com/software/jira/" },
      { name: "Confluence", img: "/technologies/confluence.webp", format: "webp", url: "https://www.atlassian.com/software/confluence/" },
      { name: "UML", img: "/technologies/uml.webp", format: "webp", url: "https://www.uml.org/" },
      { name: "C4 Model", img: "/technologies/c4.webp", format: "webp", url: "https://c4model.com/" },
      { name: "Agile Methodik", img: "/technologies/agile.webp", format: "webp", url: "https://en.wikipedia.org/wiki/Agile_software_development/" },
      { name: "Git", img: "/technologies/gitlab.webp", format: "webp", url: "https://git-scm.com/" },
      { name: "Docker", img: "/technologies/docker.webp", format: "webp", url: "https://www.docker.com/" },
      { name: "Open API", img: "/technologies/openapi.webp", format: "webp", url: "https://swagger.io" },
    ],
  },
  {
    id: "languages",
    name: { de: "Sprachen", en: "Languages" },
    items: [
      { name: "Java", img: "/technologies/java.webp", format: "webp", url: "https://www.java.com" },
      { name: "Python", img: "/technologies/python.webp", format: "webp", url: "https://www.python.org/" },
      { name: "HTML", img: "/technologies/html.webp", format: "webp", url: "https://en.wikipedia.org/wiki/HTML" },
      { name: "JavaScript", img: "/technologies/js.webp", format: "webp", url: "https://www.javascript.com" },
      { name: "TypeScript", img: "/technologies/typescript.webp", format: "webp", url: "https://www.typescriptlang.org/" },
      { name: "CSS", img: "/technologies/css.webp", format: "webp", url: "https://en.wikipedia.org/wiki/CSS" },
    ],
  },
  {
    id: "databases",
    name: { de: "Datenbanken", en: "Databases" },
    items: [
      { name: "SQL Server", img: "/technologies/sqlserver.webp", format: "webp", url: "https://www.microsoft.com/en-us/sql-server" },
      { name: "MariaDB", img: "/technologies/mariadb.webp", format: "webp", url: "https://mariadb.org/" },
      { name: "MySQL", img: "/technologies/mysql.webp", format: "webp", url: "https://www.mysql.com/" },
      { name: "MongoDB", img: "/technologies/mongodb.webp", format: "webp", url: "https://www.mongodb.com/" },
      { name: "InfluxDB", img: "/technologies/influx.webp", format: "webp", url: "https://www.influxdata.com/" },
    ],
  },
  {
    id: "cloud",
    name: { de: "Cloud-Dienste", en: "Cloud Services" },
    items: [
      { name: "AWS", img: "/technologies/aws.webp", format: "webp", url: "https://aws.amazon.com/" },
      { name: "Google API", img: "/technologies/google-maps.webp", format: "webp", url: "https://developers.google.com/maps" },
    ],
  },
  {
    id: "ai",
    name: { de: "KI-Werkzeuge", en: "AI Tools" },
    items: [
      { name: "Claude", img: "/technologies/claude.svg", format: "svg", url: "https://claude.ai" },
    ],
  },
];

export const coreTechnologyNames = [
  "Java",
  "Spring Boot",
  "Angular",
  "Tailwind",
  "Jira",
  "Confluence",
  "UML",
  "C4 Model",
  "Agile Methodik",
];
