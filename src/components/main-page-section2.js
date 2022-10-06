import { useEffect, useState } from 'react'
import { Catalog } from './catalog-item'

// import { CatalogItem } from './catalog-item'

const requestURL = 'https://civicwheel.backendless.app/api/data/Products'

const MainPageSection2 = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  async function fetchItems() {
    const response = await fetch(requestURL)

    setItems(await response.json())
    console.log(items);
  }

  

  return (
    <section className="main-page-section main-page-section2">
      <div className="main-page-wrapper main-page-wrapper2">
        <h1 className="main-heading">Різновиди меду</h1>
        <div className="catalog">
        <Catalog items={items}/>
        </div>
      </div>
    </section>
  );
};

export {MainPageSection2};
