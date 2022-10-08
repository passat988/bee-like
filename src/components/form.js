export const Form = ({ setIsModalOpen }) => {
  const formSubmit = event => {
    event.preventDefault()

    setIsModalOpen(false)
  }

  return (
    <form>
      <div>
        <label htmlFor="name">Ім'я</label>
        <input type="text" name="name" required/>
      </div>
      <div className="radio">
        <span>Тара</span> <br/>
        <label htmlFor="container"></label>
        <input type="radio" value="Скляна" name="container"/>
        Скляна
        <div className="radio-control glass"></div>
        <input type="radio" value="Харчовий пластик" name="container"/>
        Харчовий пластик
        <div className="radio-control plastic"></div>
      </div>
      <div>
        <label htmlFor="number">Номер для зворотнього зв'язку</label>
        <input type="text" name="number"/>
      </div>
      <div>
        <label htmlFor="product">Прорукція</label>
        <select name="product">
          <option>Оберіть продукт</option>
          <option value="Мед">Мед</option>
          <option value="Реманент">Реманент</option>
        </select>
        <div className="select-arrow"></div>
      </div>
      <button type="submit" onClick={ formSubmit }>
        Відправити
      </button>
    </form>
  )
}
