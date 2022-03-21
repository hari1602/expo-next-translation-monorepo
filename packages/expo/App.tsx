import React, { useEffect, useState } from 'react'
import './i18n'
import { HelloWorld } from 'app'
import i18n from 'i18n-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const [lang, setLanguage] = useState(null)

  useEffect(() => {
    const setLang = async () => {
      const value = (await AsyncStorage.getItem('lang')) || 'en'
      setLanguage(value)
    }
    setLang()
  }, [])

  if (!lang) return null

  i18n.locale = lang

  return <HelloWorld />
}
