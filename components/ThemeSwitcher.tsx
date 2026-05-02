// TODO: Re-enable when theme system is fixed
// 'use client'

// import { useTheme } from '@/app/providers'
import { Moon, Sun, Monitor } from 'lucide-react'
import { useState } from 'react'

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themes: Array<{ value: 'light' | 'dark' | 'system'; label: string; icon: React.ReactNode }> = [
    { value: 'light', label: 'Light', icon: <Sun size={18} /> },
    { value: 'dark', label: 'Dark', icon: <Moon size={18} /> },
    { value: 'system', label: 'System', icon: <Monitor size={18} /> },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-card rounded-lg transition-colors"
        aria-label="Toggle theme"
        title={`Current: ${theme}`}
      >
        {resolvedTheme === 'dark' ? (
          <Moon size={20} className="text-primary" />
        ) : (
          <Sun size={20} className="text-primary" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => {
                setTheme(t.value)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 flex items-center gap-2 text-sm transition-colors ${
                theme === t.value
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-foreground'
              }`}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
