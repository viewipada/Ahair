import React, { Component } from 'react';
import img1 from './pic/1.jpg'
import { GiShop } from "react-icons/gi"
import Navbar from './navbar'
import Sliderimg from './sliderimg'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statename: 'Sign in',
      displayMenu: false,
      checkLogin: ''
    };

  }

  render() {
    return (
      <div class="wrap">
        <Navbar />
        <div>
          <Sliderimg />
        </div>
        <div class="wrapcontainer">
          <text class="Topictext">Category</text>
          <div class="btcatContainer">
            <button class="catbt" type="women">Women</button>
            <button class="catbt" type="longW">Long Hairs</button>
            <button class="catbt" type="sholderW">Sholder</button>
            <button class="catbt" type="shortW">Short Hairs</button>
            <br />
            <button class="catbt" type="men">Men</button>
            <button class="catbt" type="skinheadM">Skin Head</button>
            <button class="catbt" type="ShortM">Short Hairs</button>
            <button class="catbt" type="LongM">Long Hairs</button>
          </div>
          <text class="Topictext">Reccomended</text>
          <div class="shopRec">
            <div className='ui two link cards'>
              <div class="card">
                <div class="image">
                  <img class="ui medium rounded image" src={img1} />
                </div>
                <div class="content">
                  <div class="header">ShopName</div>
                  <div class="meta">
                    <span class="date">Location</span>
                  </div>
                  <div class="description">
                    Rate
                    </div>
                </div>
              </div>
              <div class="card">
                <div class="image">
                  <img class="ui medium rounded image" src={img1} />
                </div>
                <div class="content">
                  <div class="header">ShopName</div>
                  <div class="meta">
                    <span class="date">Location</span>
                  </div>
                  <div class="description">
                    Rate
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
