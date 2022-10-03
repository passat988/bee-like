import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import goldStar from "../styles/img/favoritesgold_star_favorite_6338.png";
import silverStar from "../styles/img/favoritesilver_star_favorite_6337.png";

const requestURL = "https://civicwheel.backendless.app/api/data/Products";
let content;
async function getRequest() {
  let response = await fetch(requestURL);
  content = await response.json();
}
console.log(content);
const CreateCard = content.map((card, i) => {
  return (
    <div key={i} class="catalog-item">
      <div class="catalog-img-container">
        <img src={card.imageUrl} class="catalog-item-img" alt={card.name} />
        <img class="favorite_star_gold" src={goldStar} alt="" />
        <img class="favorite_star_silver" src={silverStar} alt="" />
      </div>
      <div class="characteristics">
        <span class="catalog-item-name">{card.name}</span>
        <span class="catalog-item-price">{card.price} грн</span>
      </div>
      <NavLink to="/offer" className="catalog-link catalog-item-link">
        Замовити мед
      </NavLink>
    </div>
  );
});

const CatalogItem = () => {

  useEffect(() => {
    getRequest();
  }, []);
  return (
    {CreateCard}
  )
};

export { CatalogItem };

// const CreateCard = function() {content.map((card, i) => {

//   <div key={i} class="catalog-item">
//     <div class="catalog-img-container">
//       <img src={card.imageUrl} class="catalog-item-img" alt={card.name} />
//       <img class="favorite_star_gold" src={goldStar} alt="" />
//       <img class="favorite_star_silver" src={silverStar} alt="" />
//     </div>
//     <div class="characteristics">
//       <span class="catalog-item-name">{card.name}</span>
//       <span class="catalog-item-price">{card.price} грн</span>
//     </div>
//     <NavLink to="/offer" className="catalog-link catalog-item-link">
//       Замовити мед
//     </NavLink>
//   </div>

// });
// }
