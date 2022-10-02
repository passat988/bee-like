import { MobileContextProvider } from '../../context'
import { Logo } from './logo'
import { MobileMenu } from './mobile-navigation'
import { Navigation } from './navigation'
import { ThemeSwitcher } from './theme-switcher'

export const Header = () => (
  <MobileContextProvider>
    <header>
      <Logo/>
      <Navigation/>
      <ThemeSwitcher/>
      <MobileMenu/>
    </header>
  </MobileContextProvider>
)
