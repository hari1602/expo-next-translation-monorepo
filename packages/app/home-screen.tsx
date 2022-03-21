import { View, Text, StyleSheet } from 'react-native'
import { useTranslation } from 'expo-next-translation'
import { LanguageSwitcher } from './language-switcher'

export function HelloWorld() {
  const { t: withoutScreenName } = useTranslation()

  // if you wish to get from screen.json file, use 'screen' instead of 'common'
  const { t: withScreenName } = useTranslation('screen')

  const { t: withVariable } = useTranslation('common')

  return (
    <View style={styles.container}>
      <LanguageSwitcher />
      <Text>{withoutScreenName('screen:homeScreen')}</Text>
      <Text>{withScreenName('homeScreen')}</Text>
      <Text>{withVariable('greetings', { name: 'Hari' })}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
