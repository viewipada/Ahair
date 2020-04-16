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
import ProfileCustomer from './components/ProfileCustomer';
import ProfileShop from './components/ProfileShop';
import EditProfileCustomer from './components/EditProfileCustomer';
import EditProfileShop from './components/EditProfileShop';
import HairStyles from './components/Hairstyles';
import Review_Cus from './components/Review_Cus';
import Review_Shop from './components/Review_Shop';
import Home from './components/Home';
import PriceList from './components/PriceList';
import HairBarBer from './components/HairBarber';
import Colors from './components/Colors';
import Notification_Cus from './components/Notification_Cus'
import NavBar from './components/NavBar';

import ShopReview from './components/ShopReview';
import SearchPage from './components/SearchPage';
import NavBarShop from './components/NavBarShop';

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
              <Route path='/editprofilecustomer' component={EditProfileCustomer} />
              <Route path='/profileshop' component={ProfileShop} />
              <Route path='/editprofileshop' component={EditProfileShop} />
              <Route path='/hairstyles' component={HairStyles} />
              <Route path='/ReviewforCustomer' component={Review_Cus}/>
              <Route path='/ReviewforShop' component={Review_Shop}/>
              <Route path='/Home' component={Home}/>
              <Route path='/pricelist' component={PriceList} />
              <Route path='/hairbarber' component={HairBarBer} />
              <Route path='/colors' component={Colors} />
              <Route path='/noticeforcustomer' component={Notification_Cus}/>
              <Route path='/navbar' component={NavBar}/>
              <Route path='/navbarshop' component={NavBarShop} />
              <Route path='/shopreview' component={ShopReview} />
              <Route path='/searchpage' component={SearchPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
