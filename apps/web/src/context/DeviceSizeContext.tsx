import { ReactNode, useEffect, useState, createContext } from 'react'
import { defaultTheme } from '~/core/constants/theme'

interface DeviceSizeContextType {
  isMobile: boolean
}

export const DeviceSizeContext = createContext<DeviceSizeContextType>(
  {} as DeviceSizeContextType
)

interface DeviceSizeContextProps {
  children: ReactNode
}

export default function DeviceSizeContextProvider({
  children,
}: DeviceSizeContextProps) {
  const [isMobile, setMobile] = useState(true)

  const updateMedia = () => {
    setMobile(window.innerWidth < Number.parseInt(defaultTheme.screens.s, 10))
  }

  useEffect(() => {
    updateMedia()
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [])

  return (
    <DeviceSizeContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </DeviceSizeContext.Provider>
  )
}
