import AsyncStorage from '@react-native-async-storage/async-storage'
import { Restart } from 'fiction-expo-restart'
import { LanguageSwitchComponent } from './component'
import { useTranslation } from 'expo-next-translation'

export const LanguageSwitcher: React.FC = () => {
  const { setLanguage } = useTranslation()

  const onPress = async (selectedLang: string) => {
    setLanguage({ lang: selectedLang })
    await storeData(selectedLang)
    Restart()
  }

  return <LanguageSwitchComponent onPress={onPress} />
}

const storeData = async (value) => {
  await AsyncStorage.setItem('lang', value)
}
