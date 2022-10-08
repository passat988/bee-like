import { createContext, useContext, useState } from 'react'

const MobileContext = createContext({})

export const MobileContextProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const context = { isMobileMenuOpen, setIsMobileMenuOpen }

  return (
    <MobileContext.Provider value={ context }>
      { children }
    </MobileContext.Provider>
  )
}

export function useMobileContext() {
  return useContext(MobileContext)
}
