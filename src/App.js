import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as Icon from 'bootstrap-icons-react';


function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
