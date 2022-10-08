import { BrowserRouter } from 'react-router-dom'

import './styles/main.css'

import { AppRouter, BackgroundVideo, Footer, Header } from './components'
import { useBackendless } from './hooks'

function App() {
  useBackendless()

  return (
    <BrowserRouter>
      <BackgroundVideo/>
      <Header/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
