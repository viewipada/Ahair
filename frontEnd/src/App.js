import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/Store'
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
import EditShopInformation from './components/EditShopInformation'
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
import notice_Cus from './components/notice_Cus'
import notice_Shop from './components/notice_shop'
import Navbar from './components/navbar';
import ShopReview from './components/ShopReview';
import SearchPage from './components/SearchPage';
import NavBarShop from './components/NavBarShop';
import Shop from './components/Shop';
import SelectHairStyle from './components/SelectHairStyle';
import BookingInfo_Cus from './components/BookingInfo_Cus';
import BookingInfo_Shop from './components/BookingInfo_Shop';
import Thx4Review_Cus from './components/FinishedReview_Cus';
import SelectTime from './components/SelectTime';
import {PrivateRoute} from './components/PrivateRoute'
import HomeShop from './components/HomeShop';
import dontforgettoreview from './components/dontforget2Review'
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path='/signin' component={SignIn} />
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
              <PrivateRoute path='/ReviewforCustomer/:bookingId' component={Review_Cus}/>
              <PrivateRoute path='/ReviewforShop/:bookingId' component={Review_Shop}/>
              <Route path='/home' component={Home}/>
              <Route path='/pricelist' component={PriceList} />
              <Route path='/hairbarber' component={HairBarBer} />
              <Route path='/colors' component={Colors} />
              <PrivateRoute path='/noticeforcustomer' component={notice_Cus}/>
              <Route path='/noticeforshop' component={notice_Shop}/>
              <Route path='/navbar' component={Navbar}/>
              <Route path='/navbarshop' component={NavBarShop} />
              <Route path='/shopreview' component={ShopReview} />
              <Route path='/searchpage' component={SearchPage} />
              <Route path='/shop' component={Shop} />
              <Route path='/SelectHairStyle' component={SelectHairStyle} />
              <PrivateRoute path='/BookInfo_Cus/:bookingId' component={BookingInfo_Cus}/>
              <PrivateRoute path='/BookInfo_Shop/:bookingId' component={BookingInfo_Shop}/>
              <PrivateRoute path='/thank4Review_Cus' component={Thx4Review_Cus}/>
              <Route path='/selecttime' component={SelectTime} />
              <Route path='/homeshop' component={HomeShop} />
              <Route path='/editshopinformation' component={EditShopInformation} />
              <Route path='/dontforgettoreview' component={dontforgettoreview}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
