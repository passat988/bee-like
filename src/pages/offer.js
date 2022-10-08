import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import copyImg from '../components/footer/copy.jpg'
import { Modal } from '../components/modal'

export const Offer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="wrapper">
      <section className="main-page-section main-page-section2">
        <div className="main-page-wrapper">
          <div className="content-box">
            <div className="main-page-heading-container">
              <h1 className="main-heading order-heading">
                Вже обрали, що замовити?
              </h1>
              <div className="advances">
                <div className="first-column">
                  <h2>Як замовити мед?</h2>
                  <ul className="advances-list">
                    <li>
                      Робити ваші замовлення Ви можете за телефоном
                      <span className="number-and-img">
                        <a className="phone-number">+380 098 96 56 054 </a>
                        <img className="copy-img" src={ copyImg } alt=""/>
                      </span>
                      або заповнити форму нижче
                    </li>
                    <li>
                      Вкажіть тару, в якій бажаєте отримати мед. Є два варіанти
                      тари: скляна (на обмін) та пластикова (1л, 10грн/відерце)
                    </li>
                  </ul>
                </div>
                <div className="second-column">
                  <h2>Доставка</h2>
                  <ul className="advances-list">
                    <li>по м. Житомир безкоштовна</li>
                    <li>в інші міста за рахунок покупця</li>
                  </ul>
                </div>
              </div>
              <div className="catalog-link-container">
                <NavLink to="/" className="catalog-link">
                  На головну
                </NavLink>
              </div>
              <button
                className="catalog-link-button catalog-link"
                value="Форма для замовлення"
                onClick={ () => setIsModalOpen(true) }
              >
                Форма для замовлення
              </button>
              <Modal isModalOpen={ isModalOpen } setIsModalOpen={ setIsModalOpen }/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
