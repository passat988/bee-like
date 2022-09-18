import { useEffect } from "react";

const MainPageSection3 = () => {
    const requestURL = "https://queenlyrain.backendless.app/api/data/tools"
    
    useEffect(() => {
        getRequest()
      },[]);

    async function getRequest(){
        let response = await fetch(requestURL)
        let content = await response.json()
        console.log(content);
        let catalogList = document.querySelector('.catalog')
        let key
        for (key in content){
            catalogList.innerHTML +=`
            <div class="catalog-item">
                  <div class="catalog-img-container">
                    <img
                      src="${content[key].imageUrl}"
                      class="catalog-item-img"
                      alt="${content[key].name}"
                    />
                    <img class="favorite_star_gold" src="./img/favoritesgold_star_favorite_6338.png" alt="">
                    <img class="favorite_star_silver" src="./img/favoritesilver_star_favorite_6337.png" alt="">
                  </div>
                  <div class="characteristics">
                    <span class="catalog-item-name">${content[key].name}</span>
                    <span class="catalog-item-price">${content[key].price} грн</span>
                  </div>
                  <a href="./index4.html" class="catalog-link catalog-item-link">Замовити</a>
                </div>
            `
        }
    }



  return (
    <section className="main-page-section main-page-section2">
      <div className="main-page-wrapper main-page-wrapper2">
      <h1 className="main-heading">Реманент для пасіки</h1>
          <div className="catalog">

          </div>
      </div>
    </section>
  );
};

export default MainPageSection3;
