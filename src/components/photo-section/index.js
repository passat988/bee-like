import './style.css'

import Nicolas from './nicolas-photo.jpg'

export const PhotoSection = () => (
  <div className="photo-section">
    <div className="photo-section-container">
      <div className="photo-container">
        <img src={ Nicolas } alt="Nicolas"/>
      </div>
      <p className="photo-section-paragraph">
        Розповім трохи про себе. Мене звати Микола. Я займаюсь пасічництвом з 15
        років. Зараз вже не уявляю свого життя без пасіки. З року в рік покращую
        свої знання про мед і пасіку, а зараз вже готовий демонструвати свій
        продукт людям.
      </p>
    </div>
  </div>
)