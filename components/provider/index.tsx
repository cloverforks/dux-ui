import { ReactElement, createContext } from 'react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en_US from '../locales/en_US.json'
import zh_CN from '../locales/zh_CN.json'

const context = createContext({})

interface DuxProviderProps {
  locale?: 'en_US' | 'zh_CN'
  children?: ReactElement
}

const Provider = ({ locale = 'en_US', children }: DuxProviderProps) => {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        components: en_US,
      },
      zh_CN: {
        components: zh_CN,
      },
    },
    lng: locale,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  return <context.Provider value={{}}>{children}</context.Provider>
}

export default Provider
