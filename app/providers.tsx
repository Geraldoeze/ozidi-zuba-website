// 'use client'

// import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

// type Theme = 'light' | 'dark' | 'system'

// interface ThemeContextType {
//   theme: Theme
//   setTheme: (theme: Theme) => void
//   resolvedTheme: 'light' | 'dark'
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// export function ThemeProvider({ children }: { children: ReactNode }) {
//   const [theme, setThemeState] = useState<Theme>('light')
//   const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark')
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
    
//     // Get stored theme or default to system
//     const storedTheme = (localStorage?.getItem('theme') as Theme) || 'light'
//     setThemeState(storedTheme)

//     // Determine actual theme
//     const determineTheme = () => {
//       if (storedTheme === 'system') {
//         return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'light'
//       }
//       return storedTheme
//     }

//     const actual = determineTheme()
//     setResolvedTheme(actual)
//     document.documentElement.classList.toggle('dark', actual === 'dark')
//   }, [])

//   const setTheme = (newTheme: Theme) => {
//     setThemeState(newTheme)
//     localStorage?.setItem('theme', newTheme)

//     // Determine actual theme
//     let actualTheme: 'light' | 'dark'
//     if (newTheme === 'system') {
//       actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'light'
//     } else {
//       actualTheme = newTheme
//     }

//     setResolvedTheme(actualTheme)
//     document.documentElement.classList.toggle('dark', actualTheme === 'dark')
//   }

//   // Listen for system theme changes
//   useEffect(() => {
//     if (theme !== 'system') return

//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
//     const handleChange = (e: MediaQueryListEvent) => {
//       const actualTheme = e.matches ? 'dark' : 'light'
//       setResolvedTheme(actualTheme)
//       document.documentElement.classList.toggle('dark', actualTheme === 'dark')
//     }

//     mediaQuery.addEventListener('change', handleChange)
//     return () => mediaQuery.removeEventListener('change', handleChange)
//   }, [theme])

//   if (!mounted) {
//     return <>{children}</>
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export function useTheme() {
//   const context = useContext(ThemeContext)
//   if (context === undefined) {
//     throw new Error('useTheme must be used within ThemeProvider')
//   }
//   return context
// }


'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

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