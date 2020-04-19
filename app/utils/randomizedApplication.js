const texts = [
  `SEHR_GEEHRTE_NAME,\nich interessiere mich sehr für die Wohnung IN_ORT. Ich suche schon seit einer ganzen Weile nach einer Wohnung in VIERTEL und würde mich sehr freuen, wenn es klappt.\n\nBei Nachfragen können Sie mich gerne per E-Mail erreichen.\n\nBeste Grüße\n P_FIRST_NAME P_LAST_NAME`,
  `SEHR_GEEHRTE_NAME,\nich, P_FIRST_NAME P_LAST_NAME, möchte mich gerne als Bewerber für die Wohnung IN_ORT vorstellen.\nIch arbeite bei einem mittelgroßem Unternehmen und besitze dort einen unbefristeten Arbeitsvertrag mit einem Nettoeinkommen von ungefähr 3200€. Ich rauche nicht und bin ledig. Außerdem verfüge ich über keine Haustiere.\nDie Lage der Wohnung im VIERTEL gefällt mir sehr gut und auch die Größe sagt mir zu.\nFalls Sie Referenzschreiben benötigen, können Sie mir gerne eine E-Mail an P_EMAIL schicken.\nIch würde mich sehr über eine positive Rückmeldung und eine Einladung zu einer Besichtigung freuen.\n\n Mit freundlichen Grüßen\n P_FIRST_NAME P_LAST_NAME`,
  `SEHR_GEEHRTE_NAME,\nich bin durch ihre Anzeige auf die Wohnung IN_ORT aufmerksam geworden. Mir gefällt die Umgebung in VIERTEL sehr gut und deshalb hoffe ich das Sie mich in Betracht ziehen.\nFalls Sie weitere Unterlagen von mir benötigen, zögern Sie nicht mir eine Mail an P_EMAIL zu senden.\nÜber eine positive Antwort und einen Besichtigungstermin würde ich mich sehr freuen.\n\nBeste Grüße\n P_FIRST_NAME P_LAST_NAME`,
  `SEHR_GEEHRTE_NAME,\nich beziehe mich auf Ihre Anzeige der Wohnung IN_ORT und würde mich gerne als Bewerber für die Wohnung vorstellen.\nMein Name ist NAME und ich bin nicht verheiratet und habe keine Kinder. Ich bin Nichtraucher und habe keine Haustiere.\nIch arbeite in Vollzeit bei einer mittelständigen Firma. Ich bin jetzt schon seit 6 Jahren bei diesem Unternehmen und meine Stelle ist unbefristet. Mein Nettogehalt beträgt circa. 3400€.\nIch bin begeistert von der Lage der Wohnung in VIERTEL und hoffe deswegen, dass ich für die Wohnung in Frage komme.\nDeswegen können Sie mir jederzeit eine Mail an P_EMAIL schicken, gesetzt den Fall, dass Sie weitere Unterlagen oder Angaben von mir brauchen.\nEine positive Rückmeldung oder Einladung zu einem Besichtigungstermin, würde mir große Freude bereiten.\n\nBeste Grüße\n P_FIRST_NAME P_LAST_NAME`,
  `SEHR_GEEHRTE_NAME,\ndie Anzeige der Wohnung IN_ORT hat mein Interesse geweckt. Sowohl die Größe als auch die Lage in VIERTEL sagt mir zu.\nFür den Fall, dass Sie weitere Dokumente benötigen, können Sie mich unter folgender Email-Adresse erreichen: P_EMAIL\nIch würde mich über eine Zusage oder einen Termin zur Besichtigung freuen.\n\nMit freundlichen Grüßen\n P_FIRST_NAME P_LAST_NAME`
];

const persons = [
  {
    salutation: 'Herr',
    firstName: 'Mehmet',
    lastName: 'Özdemir',
    eMail: 'mehmet.oezdemir101190@gmail.com',
    street: 'Gneisenaustraße',
    houseNumber: '50',
    postcode: '10961',
    city: 'Berlin'
  },
  {
    salutation: 'Herr',
    firstName: 'Ahmet',
    lastName: 'Yilmaz',
    eMail: 'yilmazahmet5789@gmail.com',
    street: 'Nostizstraße',
    houseNumber: '21',
    postcode: '10961',
    city: 'Berlin'
  },
  {
    salutation: 'Herr',
    firstName: 'Christian',
    lastName: 'Müller',
    eMail: 'christian.mueller050189@gmail.com',
    street: 'Riemannstraße',
    houseNumber: '6',
    postcode: '10961',
    city: 'Berlin'
  },
  {
    salutation: 'Herr',
    firstName: 'Dennis',
    lastName: 'Langer',
    eMail: 'dennislanger01@gmail.com',
    street: 'Baerwaldstraße',
    houseNumber: '48',
    postcode: '10961',
    city: 'Berlin'
  }
];

const getRandomizedApplication = () => {
  const person = persons[Math.floor(Math.random() * persons.length)];
  let text = texts[Math.floor(Math.random() * texts.length)];
  text = text
    .replace(/P_FIRST_NAME/g, person.firstName)
    .replace(/P_LAST_NAME/g, person.lastName)
    .replace(/P_EMAIL/g, person.eMail);
  return {
    person,
    text
  };
};
export { getRandomizedApplication };
