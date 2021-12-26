import React from 'react'

import {
  translationsMap,
} from './init'
import { useLocalization } from './ProviderLocalization'

export type Data = Record<string, string | number>

export interface TranslateProps {
  id: string
  data?: Data
}

const Translate: React.FC<TranslateProps> = (props) => {
  const {
    id,
    data,
  } = props

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

  return (
    <>
      {!translated
        ? id
        : data
          ? replaceWithData(translated, data)
          : translated
      }
    </>
  )
}

export default Translate
