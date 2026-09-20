# Facts extracted from docs/resume (1).pdf (CV dated 27 May 2026). German is authoritative; EN to be translated by the developer.

## Identity
- DI Markus Weißenbek, Mayrhoferstraße 11, 4030 Linz, +43 677 639 728 61, markus@weissenbek.at
- Headline in CV: "Senior Full-Stack Software Engineer & Software Architect"
- Languages: Deutsch (Muttersprache), English (C2)
- Summary adds to the site's bio: CTO experience (technical lead of a software services company), years of university teaching (software development and web technologies), publications during the PhD (3), domains: Energiewirtschaft, medizinische Forschung, E-Commerce.

## Skills (beyond what the site lists)
- Sprachen: Java, JavaScript, Python, LaTeX
- Frameworks/Tools: Atlassian (Jira/Confluence), Agile, UML & C4, Spring Boot, Angular, **Claude Code, Windsurf**
- Datenbanken: MySQL, MariaDB, MS SQL Server, MongoDB, Influx
- OS: Linux, Windows
- Interests: Prozess-Systematisierung, Code Generation, Software-Dokumentation

## Employment (newest first) — for the CV page timeline
| from | to | employer | role | notes |
|---|---|---|---|---|
| 2025-01 | today | Weißenbek Software e.U., Linz | Principal Software Engineer & Software Architect (self-employed) | freelance for Bundesrechenzentrum (BRZ), Wien: design and development of the EU-wide Single Digital Gateway platform, Spring Boot + Angular |
| 2022-10 | 2024-12 | 4metrics Software GmbH, Linz | Gründer & CTO | software with impact (ESG focus); data-driven, web, cloud, mobile, UX, agile PM |
| 2021-01 | 2022-09 | Bytegrasp OG, Linz | Gründer & Software Architekt | tailored web solutions, long-term technical partner, full-stack + IT infrastructure |
| 2018-02 | 2020-12 | JKU Linz & FH Hagenberg | Software Architekt, Full-Stack Developer (during PhD) | led dev team for FFG-funded iVolunteer and FlexProd, 12+ partners incl. Rotes Kreuz, Feuerwehr, Europäisches Forum Alpbach; research + publications |
| 2018-03 | 2019-07 | Chatvisor GmbH, Linz (= Xaleon / TeamViewer Engage) | Full-Stack Web-Entwickler | chat bots, co-browsing, WhatsApp broadcasting via AWS SQS + Selenium, Intercom APIs via OAuth 2.0 |
| 2017-07 | 2017-09 | Dynamic Design Group, Wels | Software-Entwickler | telecom infrastructure visualisation, yWorks for .NET |
| 2014-07 | 2014-09 | Meierhofer AG, St. Valentin | Datenbank-Entwickler | SQL Server queries/functions |
| 2013-05 | 2013-09 | NTS Retail, Leonding | Software-Entwickler | JavaPOS driver for POS printers, cash drawers, pole displays |

## Education (newest first)
| from | to | institution | degree | notes |
|---|---|---|---|---|
| 2019-10 | 2020-12 | JKU Linz | Doktorat (PhD) Informatik | distributed information systems, domain/data modelling, blockchain, data sovereignty, multi-level modelling; 3 publications |
| 2016-12 | 2019-09 | JKU Linz | Diplom-Ingenieur (DI) Informatik | Intelligente Informationssysteme; thesis "Towards decentralized Volunteer Management Systems – Conceptual Approach & Architecture"; mit Auszeichnung (1.0) |
| 2013-09 | 2016-11 | JKU Linz | BSc Informatik | thesis "Sketching the Situational Picture – Implementation of a PreparednessRadar for First Responders"; mit Auszeichnung (1.5) |
| 2007-09 | 2012-05 | HTL Perg | Matura | Informatik und Organisation; mit Auszeichnung (1.5) |

## Projects — durations, roles and highlights for src/data/projects.ts (id → facts)
- **sdg** — client is **Bundesrechenzentrum GmbH (brz.at)**, NOT Bundeskanzleramt. Role "Senior Full-Stack Developer", duration ~3 Jahre (still running via Weißenbek Software since 2025-01). Highlights: SDG enables cross-border exchange of protected register data (Geburtsurkunde, Firmenbuchauszug, Meldebestätigung) for citizens living in another EU country, replacing the embassy route; team of ~20 for the first implementation; Spring Boot + Angular. Keep the existing BKA info URL as "Website" or switch to https://www.brz.at — PM decision: keep the BKA page as the project link (it explains SDG), but the client row says "Bundesrechenzentrum".
- **eda** — role in CV: "Lead Developer" (site says Software Architekt; keep Architekt, mention lead), 2 Jahre. Highlights: EDA is Austria's hub for energy market participants; platform manages Netzbetreiber/Lieferanten; numerous interfaces to Ponton (peer-to-peer messaging) and the EDA Anwenderportal (registration/administration of EEGs, Energiegemeinschaften).
- **energyplus** — Lead Developer, 1 Jahr. Highlights: Energy+ is an Austrian PV dealer/installer, B2B and B2C; control + visualisation platform incl. smartphone app; goal: vendor-agnostic hardware support (inverters, batteries from different manufacturers).
- **portfolio-assistent** — Software Architekt & Lead Developer, 2,5 Jahre. Highlights: built with IfEA (subsidiary of Energie AG), sold as SaaS; supports large property owners/managers with EU-taxonomy reporting duties; core: automated digitisation and evaluation of Energieausweise. (The CV has a stray "asdf" bullet — ignore.)
- **salzit** — Software Architekt, 6 Monate. Highlights: SalzIT is the Austrian sub-company of Lantek (Trumpf group) distributing production-control software; extensions to the production and packaging feature, put into production at customers.
- **bhb** — Software Architekt & Full-Stack Web-Developer, 3 Jahre. Highlights: several medical-research projects on early-childhood speech disorders; Mutter-Kind-Pass questionnaires digitised and rolled out to Upper Austrian practices; learning platform for affected children and parents with progress overview for doctors; data protection aligned with the ethics commission.
- **sylagon** — Software Architekt & Lead Full-Stack, 1 Jahr. Highlights: data-driven storytelling for journalists; own NLP analyses data and proposes the best visualisations.
- **ivolunteer** — Software Architekt & Lead Full-Stack, 2 Jahre. Highlights: each organisation (Feuerwehr, Rotes Kreuz) gets its own volunteer centre with tasks, roles, achievements, competences; blockchain-based verification for data sovereignty; FFG-funded, 12+ partners.
- **flexprod** — Lead Full-Stack, 1 Jahr. Highlights: anonymous marketplace for industrial capacity; contracts in a fraction of the usual time; distributed devices per participant over an encrypted cloud; multi-party computation for auction anonymity, semantic matching of offers.
- **realmetrics** — not in the CV projects; belongs to the 4metrics period (2022-10 to 2024-12), Markus was founder & CTO. No extra highlights available.
- **xaleon** — = Chatvisor GmbH, Full-Stack Web-Entwickler, 2018-03 to 2019-07. Highlights from employment: chat bots and co-browsing web app (Java Spring, Angular); WhatsApp broadcasting via AWS SQS + Selenium; Intercom APIs via OAuth 2.0.
