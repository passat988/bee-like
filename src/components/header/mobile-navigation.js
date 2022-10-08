import cn from 'classnames'

import { useMobileContext } from '../../context'

export const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileContext()

  const onClick = () => {
    setIsMobileMenuOpen(v => !v)
    document.body.classList.toggle('_lock', !isMobileMenuOpen)
  }

  return (
    <div onClick={ onClick } className={ cn('mobile-menu', { '_active': isMobileMenuOpen }) }>
      <span></span>
    </div>
  )
}

