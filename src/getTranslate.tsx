import {
  translationsMap,
} from './initLocalization'
import {
  useLocalization,
} from './ProviderLocalization'
import { TranslateProps, Data } from './Translate'

export const getTranslate = (props: TranslateProps): string => {
  const {
    id,
    data,
  } = props

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { config } = useLocalization()

  const translated = (translationsMap.get(config.activeLanguage) || {})[id]

  const replaceWithData = (text: string, data: Data = {}): string => {
    return text.replace(/\$\{(\w+)\}/g, (str: string, key: string) => {
      const value = data[key]
      return value.toString()
    })
  }

  if (
    !translated &&
    typeof config.onMissingTranslation === 'function'
  ) {
    config.onMissingTranslation({
      translationId: id,
      languageCode: config.activeLanguage,
    })
  }

  return !translated
    ? id
    : data
      ? replaceWithData(translated, data)
      : translated
}
