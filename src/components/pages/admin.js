import { useState } from "react";
import Backendless from "backendless";

const APP_ID = "B7C0D037-45EF-4404-FF39-93A2C8A23F00";
const API_KEY = "6B2871D1-D777-45E8-A321-4B8BD3E837D3";
Backendless.serverURL = "https://eu-api.backendless.com";
Backendless.initApp(APP_ID, API_KEY);

const defaultState = {
  name: "",
  price: "",
  type: "items",
  imgURL: "",
};

const Admin = () => {
  const [state, setState] = useState(defaultState);

  const typeHandler = (e) =>
    setState((state) => ({ ...state, type: e.target.value }));
  console.log({ state });

  const formSubmit = function (event) {
    event.preventDefault();

    var objToSave = state;
    Backendless.Data.of("Products")
      .save(objToSave)
      .then(function (object) {
        console.log("Object has been saved");
        return object;
      })
      .catch(function (error) {
        console.log("Error " + error.message);
        throw error;
      });
  };

  return (
    <div className="admin-form wrapper">
      <form>
        <div>
          <label htmlFor="name_of_product">Назва товару</label>
          <input
            id="name_of_product"
            type="text"
            name="name"
            value={state.name}
            onChange={(e) =>
              setState((state) => ({ ...state, name: e.target.value }))
            }
            required
          />
        </div>
        <div className="radio">
          <span>Тип</span> <br />
          <input
            checked={state.type === "items"}
            onChange={typeHandler}
            id="honey_type"
            type="radio"
            value="items"
            name="type"
          />
          <label htmlFor="honey_type"> Медові продукти </label>
          <input
            checked={state.type === "tools"}
            onChange={typeHandler}
            id="honey_tools"
            type="radio"
            value="tools"
            name="type"
          />
          <label htmlFor="honey_tools"> Реманент</label>
        </div>
        <div>
          <label htmlFor="price">Ціна</label>
          <input
            id="price"
            type="text"
            name="price"
            value={state.price}
            onChange={(e) =>
              setState((state) => ({ ...state, price: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="item_image">Посилання на зображення </label>
          <input
            id="item_image"
            type="text"
            name="item_image"
            value={state.imgURL}
            onChange={(e) =>
              setState((state) => ({ ...state, imgURL: e.target.value }))
            }
            required
          />
        </div>

        <button type="submit" onClick={formSubmit}>
          Відправити
        </button>
      </form>
    </div>
  );
};

export { Admin };
