import I18n, { getLanguages } from 'react-native-i18n';

// Enable fallbacks if you want `en-US`
// and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// Available languages
I18n.translations = {
    'en': require('./en'),
};

export default I18n