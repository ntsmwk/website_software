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
      { name: "Spring Boot", img: "/technologies/spring.png", format: "png", url: "https://spring.io/projects/spring-boot" },
      { name: "Angular", img: "/technologies/angular.jpg", format: "jpg", url: "https://angular.dev/" },
      { name: "Tailwind", img: "/technologies/tailwind.png", format: "png", url: "https://tailwindcss.com/" },
      { name: "Jira", img: "/technologies/jira.png", format: "png", url: "https://www.atlassian.com/software/jira/" },
      { name: "Confluence", img: "/technologies/confluence.png", format: "png", url: "https://www.atlassian.com/software/confluence/" },
      { name: "UML", img: "/technologies/uml.png", format: "png", url: "https://www.uml.org/" },
      { name: "C4 Model", img: "/technologies/c4.png", format: "png", url: "https://c4model.com/" },
      { name: "Agile Methodik", img: "/technologies/agile.png", format: "png", url: "https://en.wikipedia.org/wiki/Agile_software_development/" },
      { name: "Git", img: "/technologies/gitlab.png", format: "png", url: "https://git-scm.com/" },
      { name: "Docker", img: "/technologies/docker.png", format: "png", url: "https://www.docker.com/" },
      { name: "Open API", img: "/technologies/openapi.png", format: "png", url: "https://swagger.io" },
    ],
  },
  {
    id: "languages",
    name: { de: "Sprachen", en: "Languages" },
    items: [
      { name: "Java", img: "/technologies/java.png", format: "png", url: "https://www.java.com" },
      { name: "Python", img: "/technologies/python.png", format: "png", url: "https://www.python.org/" },
      { name: "HTML", img: "/technologies/html.png", format: "png", url: "https://en.wikipedia.org/wiki/HTML" },
      { name: "JavaScript", img: "/technologies/js.png", format: "png", url: "https://www.javascript.com" },
      { name: "TypeScript", img: "/technologies/typescript.png", format: "png", url: "https://www.typescriptlang.org/" },
      { name: "CSS", img: "/technologies/css.png", format: "png", url: "https://en.wikipedia.org/wiki/CSS" },
    ],
  },
  {
    id: "databases",
    name: { de: "Datenbanken", en: "Databases" },
    items: [
      { name: "SQL Server", img: "/technologies/sqlserver.png", format: "png", url: "https://www.microsoft.com/en-us/sql-server" },
      { name: "MariaDB", img: "/technologies/mariadb.png", format: "png", url: "https://mariadb.org/" },
      { name: "MySQL", img: "/technologies/mysql.png", format: "png", url: "https://www.mysql.com/" },
      { name: "MongoDB", img: "/technologies/mongodb.png", format: "png", url: "https://www.mongodb.com/" },
      { name: "InfluxDB", img: "/technologies/influx.jpg", format: "jpg", url: "https://www.influxdata.com/" },
    ],
  },
  {
    id: "cloud",
    name: { de: "Cloud-Dienste", en: "Cloud Services" },
    items: [
      { name: "AWS", img: "/technologies/aws.png", format: "png", url: "https://aws.amazon.com/" },
      { name: "Google API", img: "/technologies/google-maps.png", format: "png", url: "https://developers.google.com/maps" },
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
