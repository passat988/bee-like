import { useRef } from 'react'
import cn from 'classnames'

import { useClickOutside } from '../hooks'
import { Form } from './form'

export const Modal = ({ isModalOpen, setIsModalOpen }) => {
  const modalRef = useRef()

  useClickOutside(modalRef, () => setIsModalOpen(false))

  if (!isModalOpen) {
    return null
  }

  return (
    <div className={ cn('modal', isModalOpen ? 'block' : 'none') }>
      <div className="modal-content" ref={ modalRef }>
          <span className="close" onClick={ () => setIsModalOpen(false) }>
            &times;
          </span>
        <div className="form-wrap">
          <div className="profile">
            <h1>Замовити</h1>
          </div>
          <Form setIsModalOpen={ setIsModalOpen }/>
        </div>
      </div>
    </div>
  )
}
