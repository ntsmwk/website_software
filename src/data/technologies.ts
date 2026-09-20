import type { ImageMetadata } from "astro";
import springIcon from "../assets/technologies/spring.webp";
import angularIcon from "../assets/technologies/angular.webp";
import tailwindIcon from "../assets/technologies/tailwind.webp";
import jiraIcon from "../assets/technologies/jira.webp";
import confluenceIcon from "../assets/technologies/confluence.webp";
import umlIcon from "../assets/technologies/uml.webp";
import c4Icon from "../assets/technologies/c4.webp";
import agileIcon from "../assets/technologies/agile.webp";
import gitlabIcon from "../assets/technologies/gitlab.webp";
import dockerIcon from "../assets/technologies/docker.webp";
import openapiIcon from "../assets/technologies/openapi.webp";
import javaIcon from "../assets/technologies/java.webp";
import pythonIcon from "../assets/technologies/python.webp";
import htmlIcon from "../assets/technologies/html.webp";
import jsIcon from "../assets/technologies/js.webp";
import typescriptIcon from "../assets/technologies/typescript.webp";
import cssIcon from "../assets/technologies/css.webp";
import sqlserverIcon from "../assets/technologies/sqlserver.webp";
import mariadbIcon from "../assets/technologies/mariadb.webp";
import mysqlIcon from "../assets/technologies/mysql.webp";
import mongodbIcon from "../assets/technologies/mongodb.webp";
import influxIcon from "../assets/technologies/influx.webp";
import awsIcon from "../assets/technologies/aws.webp";
import googleMapsIcon from "../assets/technologies/google-maps.webp";
import claudeIcon from "../assets/technologies/claude.svg";
import type { LocalizedText } from "./projects";

export interface TechItem {
  name: string;
  img: ImageMetadata;
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
      { name: "Spring Boot", img: springIcon, url: "https://spring.io/projects/spring-boot" },
      { name: "Angular", img: angularIcon, url: "https://angular.dev/" },
      { name: "Tailwind", img: tailwindIcon, url: "https://tailwindcss.com/" },
      { name: "Jira", img: jiraIcon, url: "https://www.atlassian.com/software/jira/" },
      { name: "Confluence", img: confluenceIcon, url: "https://www.atlassian.com/software/confluence/" },
      { name: "UML", img: umlIcon, url: "https://www.uml.org/" },
      { name: "C4 Model", img: c4Icon, url: "https://c4model.com/" },
      { name: "Agile Methodik", img: agileIcon, url: "https://en.wikipedia.org/wiki/Agile_software_development/" },
      { name: "Git", img: gitlabIcon, url: "https://git-scm.com/" },
      { name: "Docker", img: dockerIcon, url: "https://www.docker.com/" },
      { name: "Open API", img: openapiIcon, url: "https://swagger.io" },
    ],
  },
  {
    id: "languages",
    name: { de: "Sprachen", en: "Languages" },
    items: [
      { name: "Java", img: javaIcon, url: "https://www.java.com" },
      { name: "Python", img: pythonIcon, url: "https://www.python.org/" },
      { name: "HTML", img: htmlIcon, url: "https://en.wikipedia.org/wiki/HTML" },
      { name: "JavaScript", img: jsIcon, url: "https://www.javascript.com" },
      { name: "TypeScript", img: typescriptIcon, url: "https://www.typescriptlang.org/" },
      { name: "CSS", img: cssIcon, url: "https://en.wikipedia.org/wiki/CSS" },
    ],
  },
  {
    id: "databases",
    name: { de: "Datenbanken", en: "Databases" },
    items: [
      { name: "SQL Server", img: sqlserverIcon, url: "https://www.microsoft.com/en-us/sql-server" },
      { name: "MariaDB", img: mariadbIcon, url: "https://mariadb.org/" },
      { name: "MySQL", img: mysqlIcon, url: "https://www.mysql.com/" },
      { name: "MongoDB", img: mongodbIcon, url: "https://www.mongodb.com/" },
      { name: "InfluxDB", img: influxIcon, url: "https://www.influxdata.com/" },
    ],
  },
  {
    id: "cloud",
    name: { de: "Cloud-Dienste", en: "Cloud Services" },
    items: [
      { name: "AWS", img: awsIcon, url: "https://aws.amazon.com/" },
      { name: "Google API", img: googleMapsIcon, url: "https://developers.google.com/maps" },
    ],
  },
  {
    id: "ai",
    name: { de: "KI-Werkzeuge", en: "AI Tools" },
    items: [
      { name: "Claude", img: claudeIcon, url: "https://claude.ai" },
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
