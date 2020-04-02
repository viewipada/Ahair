import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignUpForCustomerOne from './components/SignUpForCustomerOne';
import SignUpForCustomerTwo from './components/SignUpForCustomerTwo';
import SignUpForCustomerFinished from './components/SignUpForCustomerFinished'
import SignUpForShopOne from './components/SignUpForShopOne'
import SignUpForShopTwo from './components/SignUpForShopTwo'
import ShopInformation from './components/ShopInformation';
import MultipleImageUpload from './components/MultipleImageUpload';
import ProfileCustomer from './components/ProfileCustomer';


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/signup_customer_1' component={SignUpForCustomerOne} />
              <Route path='/signup_customer_2' component={SignUpForCustomerTwo} />
              <Route path='/signup_customer' component={SignUpForCustomerFinished} />
              <Route path='/signup_shop_1' component={SignUpForShopOne} />
              <Route path='/signup_shop_2' component={SignUpForShopTwo} />
              <Route path='/signup_shop' component={SignUpForCustomerFinished} />
              <Route path='/information' component={ShopInformation} />
              <Route path='/profilecustomer' component={ProfileCustomer} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
