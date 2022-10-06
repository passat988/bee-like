import { BrowserRouter } from 'react-router-dom'
import { AppRouter, Footer, Header, BackgroundVideo } from './components';

import './styles/main.css'
import Backendless from "backendless";
import { useEffect } from "react";

import config from './configs/backendless'

function App() {
  useEffect(() => {
    const { APP_ID, API_KEY } = config

    Backendless.serverURL = "https://eu-api.backendless.com";
    Backendless.initApp(APP_ID, API_KEY);
  }, [])

  return (
    <BrowserRouter>
      <BackgroundVideo/>
      <Header/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
