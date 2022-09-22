import KolyaPhoto from '../styles/img/118200914_363529841304670_3523098714375215375_n.jpg'

const PhotoSectionContainer = () => {
  return (
    <div className="photo-section-container">
      <div className="photo-container">
        <img src={KolyaPhoto} />
      </div>
      <p className="photo-section-paragraph">
        Розповім трохи про себе. Мене звати Микола. Я займаюсь пасічництвом з 15
        років. Зараз вже не уявляю свого життя без пасіки. З року в рік покращую
        свої знання про мед і пасіку, а зараз вже готовий демонструвати свій
        продукт людям.
      </p>
    </div>
  );
};

export  {PhotoSectionContainer};
