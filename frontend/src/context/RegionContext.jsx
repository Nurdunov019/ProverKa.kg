import { createContext, useContext, useState } from 'react'

const RegionContext = createContext(null)

export function RegionProvider({ children }) {
  const [region, setRegion] = useState('bishkek')
  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  )
}

export function useRegion() {
  const ctx = useContext(RegionContext)
  if (!ctx) throw new Error('useRegion must be used within RegionProvider')
  return ctx
}
