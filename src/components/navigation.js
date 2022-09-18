import {NavLink} from 'react-router-dom'

const Navigation = (event) => {
  // event.preventDefault();
  return (
      <nav className="navigation">
        <ul className="header-navigation">
          <li>
            <div className="header-link-container">
              <NavLink
                to="/"
              >
               Головна
               </NavLink>
            </div>
          </li>
          <li>
            <div className="header-link-container">
            <NavLink
                to="/honey"
              >
              Різновиди меду
              </NavLink>
            </div>
          </li>
          <li>
            <div className="header-link-container">
            <NavLink
                to="/tools"
              >
              Реманент для пасіки
              </NavLink>
            </div>
          </li>
          <li>
            <div className="header-link-container">
            <NavLink
                to="/offer"
              >
              Замовити мед
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
  );
};

export default Navigation;
