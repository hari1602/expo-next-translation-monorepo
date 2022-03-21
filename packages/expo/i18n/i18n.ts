import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

i18n.fallbacks = true

i18n.translations = {
  ta: {
    common: require('locale/ta/common.json'),
    screen: require('locale/ta/screen.json')
  },
  en: {
    common: require('locale/en/common.json'),
    screen: require('locale/en/screen.json')
  }
}

i18n.locale = Localization.locale || 'en'
