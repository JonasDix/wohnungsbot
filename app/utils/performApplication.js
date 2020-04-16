import { setBotMessage } from '../actions/bot';
import { clickAction } from '../actions/botHelpers';
import { sleep } from './async';
import {
  fillForm,
  generateAdditionalDataFormFillingDescription,
  generatePersonalDataFormFillingDescription
} from '../actions/formFiller';
import applicationTextBuilder from '../flat/applicationTextBuilder';
import { sendApplicationNotificationEmail } from '../actions/email';
import type { OverviewDataEntry } from '../reducers/data';
import type { Dispatch } from '../reducers/types';
import type ElectronUtils from './electronUtils';
import type { Configuration } from '../reducers/configuration';

export default function* performApplication(
  dispatch: Dispatch,
  electronUtils: ElectronUtils,
  configuration: Configuration,
  flatOverview: OverviewDataEntry
) {
  dispatch(setBotMessage('Anfrage schreiben!'));

  yield dispatch(
    clickAction(
      yield electronUtils.selectorForVisibleElement('[data-qa="sendButton"]'),
      'always'
    )
  );

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (
      yield electronUtils.elementExists(
        '[data-qa="get-premium-membership-button"]'
      )
    ) {
      yield sleep(3000);
      throw new Error('Bewerbung nur mit "Premium"-Account möglich');
    }

    if (yield electronUtils.elementExists('#contactForm-firstName')) {
      break;
    }

    yield sleep(50);
  }

  const persons = [
    {
      salutation: 'Herr',
      firstName: 'Franz',
      lastName: 'Gerhardson',
      eMail: 'dennislanger01@gmail.com',
      street: 'Wilsnacker Str.',
      houseNumber: '38',
      postcode: '10559',
      city: 'Berlin'
    },
    {
      salutation: 'Herr',
      firstName: 'Peter',
      lastName: 'Léon',
      eMail: 'dennislanger01@gmail.com',
      street: 'Amselstraße',
      houseNumber: '6',
      postcode: '90439',
      city: 'Nürnberg'
    }
  ];

  const person = persons[Math.floor(Math.random() * persons.length)];

  const personalDataFormFillingDescription = generatePersonalDataFormFillingDescription(
    person
  );

  const text = `SEHR_GEEHRTE_NAME,\nich intressiere mich sehr für die Wohnung IN_ORT. Ich suche schon seit einer ganzen Weile nach einer Wohnung in VIERTEL und würde mich sehr freuen, wenn es klappt.\n\nBei Nachfragen können Sie mich gerne per E-Mail erreichen.\n\nBeste Grüße\n${person.firstName} ${person.lastName}`;

  const applicationText = applicationTextBuilder(
    text,
    flatOverview.address,
    flatOverview.contactDetails
  );

  yield electronUtils.fillText('#contactForm-Message', applicationText);

  yield dispatch(
    fillForm(
      personalDataFormFillingDescription,
      configuration.policies.fillAsLittleAsPossible
    )
  );

  yield sleep(1000);

  if (
    !(yield electronUtils.elementExists('#contactForm-privacyPolicyAccepted'))
  ) {
    dispatch(setBotMessage('Und noch eine Seite...'));

    yield dispatch(clickAction('#is24-expose-modal button.button-primary'));

    yield sleep(3000);

    yield dispatch(
      fillForm(
        generateAdditionalDataFormFillingDescription(
          configuration.additionalInformation
        ),
        configuration.policies.fillAsLittleAsPossible
      )
    );

    yield sleep(1000);
  }

  // todo: seems unnecessary?
  // await dispatch(clickAction('#contactForm-privacyPolicyAccepted'));

  dispatch(setBotMessage('Abschicken :)'));
  yield sleep(3000);

  // make sure the submit button gets clicked, if not re-try
  while (
    yield electronUtils.elementExists('#is24-expose-modal .button-primary')
  ) {
    yield dispatch(
      clickAction('#is24-expose-modal .button-primary', {
        scrollIntoViewPolicy: 'always',
        elementExistenceGuaranteed: false
      })
    );

    yield sleep(1000);
  }

  if (configuration.policies.applicationNotificationMails) {
    dispatch(
      sendApplicationNotificationEmail(
        configuration.contactData,
        flatOverview,
        applicationText
      )
    );
  }

  dispatch(setBotMessage('Fertig.'));
  yield sleep(5000);
}
