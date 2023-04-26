import { createI18n } from 'vue-i18n';
import CONSTANTS from '../constants';

import vi from './subs/vi.json';
import en from './subs/en.json';

const messages = {
    [CONSTANTS.VALUE.LANGUAGE_VI]: vi,
    [CONSTANTS.VALUE.LANGUAGE_EN]: en
}

const i18n = createI18n({
    locale: CONSTANTS.VALUE.LANGUAGE_VI,
    fallbackLocale: CONSTANTS.VALUE.LANGUAGE_VI,
    messages,
});

export default i18n;