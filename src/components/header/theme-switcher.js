import { useEffect, useRef, useState } from 'react'

const THEME_KEY = 'theme'
const Themes = { LIGHT: 'light', DARK: 'dark' }
const getTheme = () => localStorage.getItem(THEME_KEY) || Themes.LIGHT

const ThemeSwitcher = () => {
  const switchRef = useRef(null)
  const [currentTheme, setCurrentTheme] = useState(() => getTheme())

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
    localStorage.setItem(THEME_KEY, currentTheme)
  }, [currentTheme])

  const toggleTheme = e => setCurrentTheme(e.target.checked ? Themes.DARK : Themes.LIGHT)

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input
          checked={ currentTheme === Themes.DARK }
          ref={ switchRef }
          type="checkbox"
          id="checkbox"
          onChange={ toggleTheme }
        />
        <div className="slider round"/>
      </label>
    </div>
  )
}

export { ThemeSwitcher }
