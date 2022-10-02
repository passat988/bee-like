import { useEffect, useState } from 'react'

// import { CatalogItem } from './catalog-item'

const requestURL = 'https://civicwheel.backendless.app/api/services/ProductService/products'

const MainPageSection2 = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  async function fetchItems() {
    const response = await fetch(requestURL)

    setItems(await response.json())
  }

  return (
    <section className="main-page-section main-page-section2">
      <div className="main-page-wrapper main-page-wrapper2">
        <h1 className="main-heading">Різновиди меду</h1>
        <div className="catalog">
          { items }
        </div>
      </div>
    </section>
  )
}

export { MainPageSection2 }
