import { NavLink } from 'react-router-dom'
import goldStar from '../styles/img/favoritesgold_star.png'
import silverStar from '../styles/img/favoritesilver_star.png'

export const Catalog = ({items}) => {
  return (
      items.map((card, i) => (
        <div className="catalog-item">
          <div className="catalog-img-container">
            <img src={card.imageUrl} className="catalog-item-img" alt={card.name} />
            <img className="favorite_star_gold" src={goldStar} alt="" />
            <img className="favorite_star_silver" src={silverStar} alt="" />
          </div>
          <div className="characteristics">
            <span className="catalog-item-name">{card.name}</span>
            <span className="catalog-item-price">{card.price} грн</span>
          </div>
          <NavLink to="/offer" className="catalog-link catalog-item-link">
            Замовити мед
          </NavLink>
        </div>
      ))
  );
};