const texts = [
  `SEHR_GEEHRTE_NAME,\nich, P_FIRST_NAME P_LAST_NAME, möchte mich gerne für die Wohnung IN_ORT bewerben.\nIch arbeite bei einem mittelgroßen Unternehmen und besitze dort einen unbefristeten Arbeitsvertrag mit einem Nettoeinkommen von ungefähr 3250€. Ich rauche nicht und bin ledig. Außerdem verfüge ich über keine Haustiere.\n\nDie Lage der Wohnung im VIERTEL gefällt mir sehr gut und auch die Größe sagt mir zu.\nFalls Sie Referenzschreiben benötigen, können Sie mir gerne eine E-Mail an P_EMAIL schicken.\nIch würde mich sehr über eine positive Rückmeldung und eine Einladung zu einer Wohnungsbesichtigung freuen.\n\nMit freundlichen Grüßen\nP_FIRST_NAME P_LAST_NAME`,
  `SEHR_GEEHRTE_NAME,\n\nich beziehe mich auf Ihre Anzeige der Wohnung IN_ORT und würde mich gerne für die Wohnung bewerben.\nMein Name ist P_FIRST_NAME P_LAST_NAME und ich bin nicht verheiratet. Ich rauche nicht und habe keine Haustiere.\n\nIch arbeite bei einer mittelständischen Firma und meine Stelle dort ist unbefristet. Mein Nettogehalt beträgt circa 3300€.\nIch bin begeistert von der Lage der Wohnung in VIERTEL und hoffe deswegen, dass ich für die Wohnung in Frage komme.\n\nSollten Sie noch weitere Angaben oder Unterlagen von mir benötigen, so können sich mich unter folgender Mail-Adresse P_EMAIL kontaktieren.\nIch freue mich über eine positive Rückmeldung und verbleibe in Erwartung auf einen Besichtigungstermin, mit\n\nbesten Grüßen\nP_FIRST_NAME P_LAST_NAME`,
  `SEHR_GEEHRTE_NAME,\ndie von Ihnen ausgeschriebene Wohnung IN_ORT ist sehr schön. Aus diesem Grund möchte ich mich gerne als mögliche neue Mietpartei vorstellen.\nIch, P_FIRST_NAME P_LAST_NAME, bin Single und habe eine unbefristete Arbeitsstelle bei einem mittelständischen Unternehmen. Dort beträgt mein Gehalt ungefähr 3150€. Ich habe keine Haustiere und rauche auch nicht.\nAuch die Lage in VIERTEL gefällt mir außerordentlich gut und ist nicht weit von meiner Arbeitsstelle entfernt.\n\nZögern Sie nicht, mir eine Mail an P_EMAIL zukommen zulassen, wenn Sie weitere Informationen oder Dokumente benötigen.\nÜber eine Bestätigung für einen Besichtigungstermin würde ich mich freuen.\n\nMit freundlichen Grüßen\nP_FIRST_NAME P_LAST_NAME`,
  `SEHR_GEEHRTE_NAME,\nich interessiere mich für die Wohnung IN_ORT. Ich bin sehr positiv angetan von VIERTEL. Ich heiße P_FIRST_NAME P_LAST_NAME und arbeite in einem mittelgroßen Betrieb. Meine Stelle ist zeitlich unbegrenzt und ich erhalte ein Nettoeinkommen von 3200€. Ich habe keine Haustiere. Ich bin nicht verheiratet und rauche auch nicht.\n\nFür den Fall, dass weitere Unterlagen benötigt werden, kontaktieren Sie mich bitte unter folgender Adresse: P_EMAIL\nEine Einladung zu einer Besichtigung würde mich erfreuen.\n\nMit freundlichen Grüßen\nP_FIRST_NAME P_LAST_NAME`,
  `SEHR_GEEHRTE_NAME,\n\nich bin durch Ihre Anzeige auf die Wohnung IN_ORT aufmerksam geworden. Mir gefällt die Umgebung in VIERTEL sehr gut und deshalb hoffe ich, dass Sie mich in Betracht ziehen.\nFalls Sie weitere Unterlagen von mir benötigen, zögern Sie nicht mir eine Mail an P_EMAIL zu senden.\n\nÜber eine positive Antwort und einen Besichtigungstermin würde ich mich sehr freuen.\nBeste Grüße\nP_FIRST_NAME P_LAST_NAME`,
  `SEHR_GEEHRTE_NAME,\ndie Anzeige der Wohnung IN_ORT hat mein Interesse geweckt. Sowohl die Größe als auch die Lage in VIERTEL sagt mir zu.\nFür den Fall, dass Sie weitere Dokumente benötigen, können Sie mich unter folgender E-Mail-Adresse erreichen:  P_EMAIL\nIch würde mich über eine Zusage oder einen Termin zur Besichtigung freuen.\n\nMit freundlichen Grüßen\nP_FIRST_NAME P_LAST_NAME`,
  `SEHR_GEEHRTE_NAME,\n\nmir gefällt die Wohnung IN_ORT sehr gut und deshalb möchte ich mit dieser Nachricht mein Interesse bekunden. VIERTEL ist meine bevorzugte Umgebung und die Aufteilung der Wohnung trifft meinen Geschmack.\nSie können mich jederzeit unter P_EMAIL erreichen, falls Sie weitere Unterlagen benötigen.\n\nIch würde mich sehr über einen Besichtigungstermin und eine positive Rückmeldung freuen.\n\nMit freundlichen Grüßen\nP_FIRST_NAME P_LAST_NAME`,
  `SEHR_GEEHRTE_NAME,\nangesprochen von dem schönen Umfeld und der Größe der Wohnung IN_ORT hoffe ich, dass Sie mich als mögliche zukünftige Mietpartei in Erwägung ziehen. Denn nicht nur die Wohnung, sondern auch die Lage in VIERTEL gefällt mir sehr gut.\nIn Bezug auf weitere Unterlagen können Sie mich gerne unter der folgenden E-Mail-Adresse erreichen: P_EMAIL\nIch würde mich über eine positive Rückmeldung und einer Einladung zu einem Besichtigungstermin freuen.\n\nMit freundlichen Grüßen\nP_FIRST_NAME P_LAST_NAME`
];

const persons = [
  {
    salutation: 'Herr',
    firstName: 'Ali',
    lastName: 'Yilmaz',
    eMail: '91ali.yilmaz@gmail.com',
    street: 'Laubestraße',
    houseNumber: '2',
    postcode: '12045',
    city: 'Berlin'
  },
  {
    salutation: 'Herr',
    firstName: 'Tolga',
    lastName: 'Özdemir',
    eMail: 'oezdemir.tolga89@gmail.com',
    street: 'Reuterstraße',
    houseNumber: '19',
    postcode: '12043',
    city: 'Berlin'
  },
  {
    salutation: 'Herr',
    firstName: 'Michael',
    lastName: 'Schneider',
    eMail: 'schneider19michael90@gmail.com',
    street: 'Weserstraße',
    houseNumber: '13',
    postcode: '12045',
    city: 'Berlin'
  },
  {
    salutation: 'Herr',
    firstName: 'Sebastian',
    lastName: 'Weber',
    eMail: 'weber.sebastian070489@gmail.com',
    street: 'Friedelstraße',
    houseNumber: '52',
    postcode: '12047',
    city: 'Berlin'
  },
  {
    salutation: 'Frau',
    firstName: 'Hatice',
    lastName: 'Yildrim',
    eMail: 'hatice.yildrim1989@gmail.com',
    street: 'Treptower Straße',
    houseNumber: '8',
    postcode: '12043',
    city: 'Berlin'
  },
  {
    salutation: 'Frau',
    firstName: 'Zeynep',
    lastName: 'Özkan',
    eMail: 'oezkan.zeynep1987@gmail.com',
    street: 'Pflügerstraße',
    houseNumber: '26',
    postcode: '12047',
    city: 'Berlin'
  },
  {
    salutation: 'Frau',
    firstName: 'Lisa',
    lastName: 'Schmidt',
    eMail: 'lisa.schmidt080387@gmail.com',
    street: 'Briesestraße',
    houseNumber: '4',
    postcode: '12053',
    city: 'Berlin'
  },
  {
    salutation: 'Frau',
    firstName: 'Sarah',
    lastName: 'Maier',
    eMail: 'maier.sarah010990@gmail.com',
    street: 'Roseggerstraße',
    houseNumber: '45',
    postcode: '12043',
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
