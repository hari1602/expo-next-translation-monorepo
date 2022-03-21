import { useTranslation } from 'expo-next-translation'
import { View, Text, TouchableOpacity } from 'react-native'
import { Props } from './props'

export const LanguageSwitchComponent: React.FC<Props> = ({ onPress }) => {
  const { lang } = useTranslation()

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'white'
      }}
    >
      {['en', 'ta'].map((lng) => {
        const isCurrent = lng === lang
        return (
          <TouchableOpacity
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              backgroundColor: isCurrent ? 'blue' : 'white',
              width: 60,
              height: 30
            }}
            key={lng}
            onPress={() => onPress(lng)}
            disabled={isCurrent}
          >
            <Text
              style={{
                color: isCurrent ? 'white' : 'blue',
                fontSize: 12
              }}
            >
              {' '}
              {lng.toUpperCase()}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
