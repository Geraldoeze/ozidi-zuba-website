// TODO: Re-enable when theme system is fixed
// 'use client'

// import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // force light always
    setThemeState('light')
    localStorage.setItem('theme', 'light')

    document.documentElement.classList.remove('dark')
  }, [])

  const setTheme = () => {
    // always light, ignore input
    setThemeState('light')
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: 'light',
        setTheme,
        resolvedTheme: 'light',
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}