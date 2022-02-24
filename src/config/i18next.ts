import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
/**
 * * Translation Config
 */
export const DEFAULT_LANGUAGE = 'en'
export type LanguageKeys = 'en' | 'th'

const MODULES = ['common','aifarm','youposition','stake']

const getModuleResources = (lang_code: string = 'en'): { [x: string]: String } => {
  return MODULES.reduce((result, module) => {
    return {
      ...result,
      [module]: require(`../locales/${lang_code}/${module}.json`)
    }
  }, {})
}

i18next.use(initReactI18next).init({
    fallbackLng: DEFAULT_LANGUAGE,
    resources: { en: getModuleResources('en') },
    defaultNS: 'common',
    returnObjects: true,
    debug: false
})

i18next.languages = ['th', 'en']

export default i18next
