import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/app-router';
import Footer from './components/footer';
import Header from './components/header';
import Video from './components/video';

import './styles/main_styles.css'

function App() {
  return(
      <BrowserRouter>
        <Video/>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
