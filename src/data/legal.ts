import type { LocalizedText } from "./projects";

export interface LegalSection {
  heading?: LocalizedText;
  html: LocalizedText;
}

export interface LegalPage {
  title: LocalizedText;
  sections: LegalSection[];
}

export const translationNote =
  "This English translation is provided for convenience. The German version is legally binding.";

const ris = '<a href="https://www.ris.bka.gv.at" class="link link-primary">https://www.ris.bka.gv.at</a>';

export const imprint: LegalPage = {
  title: { de: "Impressum", en: "Imprint" },
  sections: [
    {
      heading: {
        de: "Information gemäß §5 ECG, §14 UGB, §63 GewO und Offenlegung gemäß §25 MedienG",
        en: "Information pursuant to §5 ECG, §14 UGB, §63 GewO and disclosure pursuant to §25 MedienG",
      },
      html: {
        de: `<p><strong>Firma:</strong> Weißenbek Software e.U.<br />
<strong>Adresse:</strong> Mayrhoferstraße 11, 4030 Linz, Österreich</p>
<p><strong>Inhaber:</strong> Markus Weißenbek<br />
<strong>E-Mail:</strong> markus@weissenbek.at<br />
<strong>Telefon:</strong> +43 677 639 728 61</p>
<p><strong>Unternehmensgegenstand:</strong> Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik<br />
<strong>UID-Nummer:</strong> ATU81603329<br />
<strong>Firmenbuchnummer:</strong> FN 643661k<br />
<strong>Firmenbuchgericht:</strong> Linz<br />
<strong>Firmensitz:</strong> 4020 Linz</p>
<p><strong>Mitglied bei:</strong> WKO Linz<br />
<strong>Berufsrecht:</strong> Gewerbeordnung (${ris})</p>
<p><strong>Aufsichtsbehörde/Gewerbebehörde:</strong> Bezirkshauptmannschaft Linz<br />
<strong>Verleihungsstaat:</strong> Österreich</p>`,
        en: `<p><strong>Company:</strong> Weißenbek Software e.U. (registered sole trader)<br />
<strong>Address:</strong> Mayrhoferstraße 11, 4030 Linz, Austria</p>
<p><strong>Owner:</strong> Markus Weißenbek<br />
<strong>E-mail:</strong> markus@weissenbek.at<br />
<strong>Phone:</strong> +43 677 639 728 61</p>
<p><strong>Business purpose:</strong> Services in automatic data processing and information technology<br />
<strong>VAT ID (UID):</strong> ATU81603329<br />
<strong>Commercial register number (Firmenbuch):</strong> FN 643661k<br />
<strong>Commercial register court:</strong> Linz<br />
<strong>Registered office:</strong> 4020 Linz</p>
<p><strong>Member of:</strong> WKO Linz (Austrian Economic Chamber)<br />
<strong>Professional law:</strong> Trade Regulation Act (Gewerbeordnung) (${ris})</p>
<p><strong>Supervisory authority / trade authority:</strong> Bezirkshauptmannschaft Linz (district administrative authority)<br />
<strong>Country of licence:</strong> Austria</p>`,
      },
    },
    {
      heading: { de: "Haftung für Inhalte dieser Website", en: "Liability for the contents of this website" },
      html: {
        de: `<p>Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Website übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden. Als Diensteanbieter sind wir nicht verpflichtet, die von ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
<p>Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit davon unberührt.</p>
<p>Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum.</p>`,
        en: `<p>We continuously develop the contents of this website and strive to provide correct and up-to-date information. Unfortunately, we cannot accept any liability for the correctness of all contents on this website, especially for those provided by third parties. As a service provider, we are not obliged to monitor the information transmitted or stored by users, or to investigate circumstances indicating illegal activity.</p>
<p>Our obligations to remove information or to block the use of information under general law on the basis of court or administrative orders remain unaffected even where we are not responsible.</p>
<p>Should you notice problematic or illegal content, please contact us immediately so that we can remove the illegal content. You will find the contact details in the imprint.</p>`,
      },
    },
    {
      heading: { de: "Haftung für Links auf dieser Webseite", en: "Liability for links on this website" },
      html: {
        de: `<p>Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.</p>
<p>Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.</p>`,
        en: `<p>Our website contains links to other websites for whose content we are not responsible. We are not liable for linked websites, as we had and have no knowledge of illegal activities, no such illegalities have come to our attention so far, and we would remove links immediately if we became aware of any illegality.</p>
<p>If you notice illegal links on our website, please contact us. You will find the contact details in the imprint.</p>`,
      },
    },
    {
      heading: { de: "Urheberrechtshinweis", en: "Copyright notice" },
      html: {
        de: `<p>Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.</p>
<p>Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.</p>`,
        en: `<p>All contents of this website (images, photos, texts, videos) are subject to copyright. Please ask us before you distribute, reproduce or exploit the contents of this website, for example by republishing them on other websites. If necessary, we will take legal action against the unauthorised use of parts of the contents of our site.</p>
<p>Should you find content on this website that infringes copyright, please contact us.</p>`,
      },
    },
    {
      html: {
        de: "<p><em>Zuletzt aktualisiert: 10.02.25</em></p>",
        en: "<p><em>Last updated: 10.02.25</em></p>",
      },
    },
  ],
};

const generator =
  '<a href="https://www.fairesrecht.at/kostenlos-datenschutzerklaerung-erstellen-generator.php" class="link link-primary">Datenschutzgenerator Österreich DSGVO</a>';

export const privacy: LegalPage = {
  title: { de: "Datenschutzerklärung", en: "Privacy Policy" },
  sections: [
    {
      html: {
        de: `<p>In folgender Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten personenbezogene Daten nur auf Grundlage der gesetzlichen Bestimmungen (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003).</p>
<p>Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.</p>`,
        en: `<p>In the following privacy policy we inform you about the most important aspects of data processing in connection with our website. We collect and process personal data only on the basis of the statutory provisions (Datenschutz-Grundverordnung (GDPR), Telecommunications Act 2003 (Telekommunikationsgesetz 2003)).</p>
<p>As soon as you access or visit our website as a user, your IP address and the start and end of the session are recorded. This is technically necessary and therefore constitutes a legitimate interest within the meaning of Art 6 (1) (f) GDPR.</p>`,
      },
    },
    {
      heading: { de: "Kontakt mit uns", en: "Contact with us" },
      html: {
        de: `<p>Wenn Sie uns per Email kontaktieren, dann werden die von Ihnen an uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder für den Fall von weiteren Anschlussfragen für sechs Monate bei uns gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe Ihrer übermittelten Daten.</p>`,
        en: `<p>If you contact us by e-mail, the data you send us will be stored for six months for the purpose of processing your request or in case of follow-up questions. Your transmitted data will not be passed on without your consent.</p>`,
      },
    },
    {
      heading: { de: "Ihre Rechte als Betroffener", en: "Your rights as a data subject" },
      html: {
        de: `<p>Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns gespeichert sind grundsätzlich ein Recht auf:</p>
<ul class="list-disc pl-5">
<li>Auskunft</li>
<li>Löschung der Daten</li>
<li>Berichtigung der Daten</li>
<li>Übertragbarkeit der Daten</li>
<li>Wiederruf und Widerspruch zur Datenverarbeitung</li>
<li>Einschränkung</li>
</ul>
<p>Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das Datenschutzrecht passiert sind, so haben Sie die Möglichkeit sich bei uns (markus@weissenbek.at) oder der Datenschutzbehörde zu beschweren.</p>`,
        en: `<p>As a data subject, you generally have the following rights regarding your data stored with us:</p>
<ul class="list-disc pl-5">
<li>Access</li>
<li>Erasure of the data</li>
<li>Rectification of the data</li>
<li>Data portability</li>
<li>Withdrawal of consent and objection to data processing</li>
<li>Restriction</li>
</ul>
<p>If you suspect that the processing of your data has violated data protection law, you can complain to us (markus@weissenbek.at) or to the data protection authority (Datenschutzbehörde).</p>`,
      },
    },
    {
      heading: {
        de: "Sie erreichen uns unter folgenden Kontaktdaten:",
        en: "You can reach us at the following contact details:",
      },
      html: {
        de: `<p><b>Webseitenbetreiber:</b> Weißenbek Software e.U.<br />
<b>Telefonnummer:</b> +43 677 639 728 61<br />
<b>Email:</b> markus@weissenbek.at</p>
<p>Quelle: ${generator}</p>`,
        en: `<p><b>Website operator:</b> Weißenbek Software e.U.<br />
<b>Phone:</b> +43 677 639 728 61<br />
<b>E-mail:</b> markus@weissenbek.at</p>
<p>Source: ${generator}</p>`,
      },
    },
  ],
};
