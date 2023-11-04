import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import MarketPlace from './components/MarketPlace';
import Sell from './components/Sell';
import ProductPage from './components/ProductPage';
import MyProducts from './components/MyProducts'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }


  return (
    <>

      <Router>
        < Navbar showAlert={showAlert} />
        < Alert alert={alert} />
        <Switch>
          <Route exact path="/">< Home /></Route>
          <Route exact path="/login">< Login showAlert={showAlert} /></Route>
          <Route exact path="/signup">< Signup showAlert={showAlert} /></Route>
          <Route exact path="/marketplace">< MarketPlace /></Route>
          <Route exact path="/marketplace/request">< MarketPlace /></Route>
          <Route exact path="/marketplace/rent">< MarketPlace /></Route>
          <Route exact path="/marketplace/donate">< MarketPlace /></Route>
          <Route exact path="/marketplace/sell">< Sell showAlert={showAlert} /></Route>
          <Route path="/product/:productName" ><ProductPage /></Route>
          <Route exact path="/myproducts" ><MyProducts /></Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
