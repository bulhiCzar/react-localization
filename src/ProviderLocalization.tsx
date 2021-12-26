import React, { Dispatch, ReducerAction, useContext } from 'react'

import { config } from './init'
import useStore, { reducer } from './useStore'

interface ContextLocalizationProps {
  config: typeof config
  update: Dispatch<ReducerAction<typeof reducer>>
  setActiveLanguage: (code: string) => void
}

export const ContextLocalization = React.createContext<ContextLocalizationProps>({} as any)

export const ProviderLocalization: React.FC = ({ children }) => {
  const [state, dispatch] = useStore(config)

  const setActiveLanguage = (code: string) => {
    dispatch({
      type: 'setActiveLanguage',
      value: code,
    })
  }

  const stateMemo = React.useMemo(() => (
    { config: state, update: dispatch, setActiveLanguage }
  ), [state])

  return (
    <ContextLocalization.Provider value={stateMemo}>
      {children}
    </ContextLocalization.Provider>
  )
}

export const useLocalization = () => useContext(ContextLocalization)
