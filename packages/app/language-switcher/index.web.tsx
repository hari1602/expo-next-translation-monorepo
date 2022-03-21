import { useTranslation } from 'expo-next-translation'
import { LanguageSwitchComponent } from './component'

export const LanguageSwitcher: React.FC = () => {
  const { setLanguage } = useTranslation()

  const onPress = (selectedLang: string) => {
    setLanguage({ lang: selectedLang })
  }

  return <LanguageSwitchComponent onPress={onPress} />
}
