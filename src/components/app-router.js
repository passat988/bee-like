import {Main} from "../pages/main";
import {Routes, Route} from 'react-router-dom'
import {Honey} from "../pages/honey";
import {Tools} from "../pages/tools";
import {Offer} from "../pages/offer";
import { Admin } from "../pages/admin/admin";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/honey" element={<Honey/>} />
      <Route exact path="/tools" element={<Tools/>} />
      <Route exact path="/offer" element={<Offer/>}/>
      <Route exact path="/admin" element={<Admin/>}/>
    </Routes>
  );
};

export {AppRouter};
