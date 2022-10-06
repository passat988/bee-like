import { useEffect, useState } from 'react'
import cn from 'classnames'

import copyImage from './copy.jpg'

const TEL = '+380 098 96 56 054'
const copyPhone = () => navigator.clipboard.writeText(TEL)

export const Footer = () => {
  const [isToastVisible, setIsToastVisible] = useState(false)
  const [updated, setUpdated] = useState(null)

  useEffect(() => {
    if (isToastVisible) {
      const T = setTimeout(() => setIsToastVisible(false), 2000)

      return () => clearTimeout(T)
    }
  }, [isToastVisible, updated])

  const handleToast = () => {
    setIsToastVisible(true)
    setUpdated(Date.now())
  }

  return (
    <footer>
      <span className={ cn('copy-toast', { active: isToastVisible }) }>Скопійовано!</span>
      <span className="footer-location-text">Житомирська обл., Черняхівський р-н, с. Високе</span>
      <span className="footer-name-text">Микола:</span>
      <span className="number-and-img" onClick={ handleToast }>
        <a className="phone-number" onClick={ copyPhone }>{ TEL }</a>
        <img className="copy-img" src={ copyImage } alt="copied"/>
      </span>
    </footer>
  )
}