import { NavLink } from "react-router-dom";

const MainPageWrapper = () => {
  return (
    <div className="main-page-heading-container">
      <h1 className="main-heading">Натуральний мед</h1>
      <span className="sourse-of-product">Домашня пасіка</span>
      <span className="feature">Безкоштовна доставка по Житомиру</span>
      <div className="advances">
        <div className="first-column">
          <ul className="advances-list">
            <li>домашня пасіка</li>
            <li>без консервантів та інших домішків</li>
            <li>приємна оптова ціна (50 кг та більше)</li>
          </ul>
        </div>
        <div className="second-column">
          <ul className="advances-list">
            <li>наявність необхідних документів та експертиз</li>
            <li>дев'ятирічний досвід пасічництва</li>
          </ul>
        </div>
      </div>
      <div className="catalog-link-container">
        <NavLink to="/honey" className="catalog-link">
          До рiзновидiв меду
        </NavLink>
      </div>
    </div>
  );
};

export { MainPageWrapper };