import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type ReplenishTheme = 'light' | 'dark'

type ReplenishThemeContextValue = {
  theme: ReplenishTheme
  setTheme: (theme: ReplenishTheme) => void
  toggleTheme: () => void
}

const ReplenishThemeContext = createContext<ReplenishThemeContextValue | null>(
  null,
)

export function ReplenishThemeProvider({
  children,
  defaultTheme = 'dark',
}: {
  children: ReactNode
  defaultTheme?: ReplenishTheme
}) {
  const [theme, setTheme] = useState<ReplenishTheme>(defaultTheme)

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, toggleTheme],
  )

  return (
    <ReplenishThemeContext.Provider value={value}>
      {children}
    </ReplenishThemeContext.Provider>
  )
}

export function useReplenishTheme() {
  const context = useContext(ReplenishThemeContext)
  if (!context) {
    throw new Error('useReplenishTheme must be used within ReplenishThemeProvider')
  }
  return context
}
