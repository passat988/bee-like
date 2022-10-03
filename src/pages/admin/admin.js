import { useState } from "react";
import Backendless from "backendless";

const defaultState = {
  name  : "",
  price : "",
  type  : "items",
  imgURL: "",
};

const RadioButton = ({ value, label, checked, onChange }) => (
  <label>
    <input checked={ checked } onChange={ onChange } type="radio" value={ value }/>
    { label }
  </label>
)


function RadioGroup({ options, value, onChange }) {
  return (
    <>
      { options.map((option, i) => (
        <RadioButton
          key={ i }
          value={ option.value }
          label={ option.label }
          checked={ option.value === value }
          onChange={ () => onChange(option.value) }
        />
      )) }
    </>
  )
}

const options = [
  { label: 'Реманент', value: 'tools' },
  { label: 'Медові продукти', value: 'items' },
]

const Admin = () => {
  const [state, setState] = useState(defaultState);

  const typeHandler = type => setState(state => ({ ...state, type }));

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await Backendless.Data.of("Products").save(state)
    } catch (err) {
      throw err
    }
  };

  return (
    <div className="admin-form wrapper">
      <form onSubmit={ onSubmit }>
        <div>
          <label htmlFor="name_of_product">Назва товару</label>
          <input
            id="name_of_product"
            type="text"
            name="name"
            value={ state.name }
            onChange={ (e) =>
              setState((state) => ({ ...state, name: e.target.value }))
            }
            required
          />
        </div>
        <div className="radio">
          <span>Тип</span> <br/>
          <RadioGroup options={ options } value={ state.type } onChange={ typeHandler }/>
        </div>
        <div>
          <label htmlFor="price">Ціна
            <input
              id="price"
              type="text"
              name="price"
              value={ state.price }
              onChange={ (e) =>
                setState((state) => ({ ...state, price: e.target.value }))
              }
            />
          </label>

        </div>
        <div>
          <label htmlFor="item_image">Посилання на зображення </label>
          <input
            id="item_image"
            type="text"
            name="item_image"
            value={ state.imgURL }
            onChange={ (e) =>
              setState((state) => ({ ...state, imgURL: e.target.value }))
            }
            required
          />
        </div>

        <button type="submit"> Відправити</button>
      </form>
    </div>
  );
};

export { Admin };
