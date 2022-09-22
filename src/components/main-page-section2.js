import { useEffect } from "react";
import {CatalogItem} from "./catalog-item";

const MainPageSection2 = () => {
  const requestURL = "https://queenlyrain.backendless.app/api/data/items";

  useEffect(() => {
    getRequest();
  }, []);

  async function getRequest() {
    let response = await fetch(requestURL);
    let content = await response.json();
    console.log(content);
    let catalogList = document.querySelector(".catalog");
      <CatalogItem props={content}/>
  }

  return (
    <section className="main-page-section main-page-section2">
      <div className="main-page-wrapper main-page-wrapper2">
        <h1 className="main-heading">Різновиди меду</h1>
        <div className="catalog"></div>
      </div>
    </section>
  );
};

export {MainPageSection2};
