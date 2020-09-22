import React from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OrderDetails from './components/OrderDetails/OrderDetails';
import WrongPath from './components/WrongPath/WrongPath';


const App = () => {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/shop'>
                <Shop></Shop>
          </Route>
          <Route path='/review'>
                <OrderDetails></OrderDetails>
          </Route>
          <Route exact path='/'>
              <Shop></Shop>
          </Route>
          <Route path='/:key'>
              <OrderDetails></OrderDetails>
          </Route>
          <Route path='*'>
              <WrongPath></WrongPath>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;