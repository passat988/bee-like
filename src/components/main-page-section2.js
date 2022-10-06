import { useEffect } from "react";
import {CatalogItem} from "./catalog-item";

const MainPageSection2 = () => {

  return (
    <section className="main-page-section main-page-section2">
      <div className="main-page-wrapper main-page-wrapper2">
        <h1 className="main-heading">Різновиди меду</h1>
        <div className="catalog">
        <CatalogItem/>
        </div>
      </div>
    </section>
  );
};

export {MainPageSection2};
