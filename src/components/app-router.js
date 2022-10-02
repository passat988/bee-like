import { Route, Routes } from 'react-router-dom'

import { Admin } from '../pages/admin'
import { Honey } from '../pages/honey'
import { Main } from '../pages/main'
import { Offer } from '../pages/offer'
import { Tools } from '../pages/tools'

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={ <Main/> }/>
      <Route exact path="/honey" element={ <Honey/> }/>
      <Route exact path="/tools" element={ <Tools/> }/>
      <Route exact path="/offer" element={ <Offer/> }/>
      <Route exact path="/admin" element={ <Admin/> }/>
    </Routes>
  )
}

export { AppRouter }
