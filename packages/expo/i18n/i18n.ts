import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

i18n.fallbacks = true

i18n.translations = {
  cn: {
    common: require('locale/cn/common.json'),
    screen: require('locale/cn/screen.json')
  },
  en: {
    common: require('locale/en/common.json'),
    screen: require('locale/en/screen.json')
  }
}

i18n.locale = Localization.locale || 'en'
