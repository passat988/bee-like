import { useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import { useMobileContext } from '../../context'

const navigationItems = [
  { content: 'Головна', path: '/' },
  { content: 'Різновиди меду', path: '/honey' },
  { content: 'Реманент для пасіки', path: '/tools' },
  { content: 'Замовити мед', path: '/offer' },
]

export const Navigation = () => {
  const { isMobileMenuOpen } = useMobileContext()
  const items = useMemo(() => navigationItems.map((item, i) => {
    return (<NavigationItem key={ i } { ...item } />)
  }), [])

  return (
    <nav className={ cn('navigation', { '_active': isMobileMenuOpen }) }>
      <ul className="header-navigation">
        { items }
      </ul>
    </nav>
  )
}

const NavigationItem = ({ content, path }) => {
  return (
    <li>
      <div className="header-link-container">
        <NavLink to={ path }>{ content }</NavLink>
      </div>
    </li>
  )
}
