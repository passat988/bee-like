import { NavLink } from "react-router-dom";
import goldStar from '../styles/img/favoritesgold_star_favorite_6338.png'
import silverStar from '../styles/img/favoritesilver_star_favorite_6337.png'

const CatalogItem = (props) => {
  let key;
    for (key in props.content) {
      return (
        <div class="catalog-item">
          <div class="catalog-img-container">
            <img
              src="${content[key].imageUrl}"
              class="catalog-item-img"
              alt="${content[key].name}"
            />
            <img
              class="favorite_star_gold"
              src={goldStar}
              alt=""
            />
            <img
              class="favorite_star_silver"
              src={silverStar}
              alt=""
            />
          </div>
          <div class="characteristics">
            <span class="catalog-item-name">${props.content[key].name}</span>
            <span class="catalog-item-price">${props.content[key].price} грн</span>
          </div>
          <NavLink to="/offer" className="catalog-link catalog-item-link">
            Замовити мед
          </NavLink>
        </div>
      );
    }
  
};

export default CatalogItem;
