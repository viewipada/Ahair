import React, { Component } from 'react';
import img1 from './pic/1.jpg'
import { GiShop } from "react-icons/gi"
import Navbar from './navbar'
import Sliderimg from './sliderimg'
import axios from 'axios';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statename: 'Sign in',
      displayMenu: false,
      checkLogin: '',
      shopinfo: ''
    };

  }
  componentDidMount() {
    axios.get(`https://us-central1-g10ahair.cloudfunctions.net/api/shop`, {
      params: {

      }
    })
      .then((res) => {
        console.log(res.data);
        this.setState({ shopinfo: res.data });
      });
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
              {
                this.state.shopinfo &&
                this.state.shopinfo.map((info) => {
                  return (
                    <div key={info.shopId} class="card">
                      <div class="ui medium centered image">
                        <img src={info.imgUrl} />
                      </div>
                      <div class="content">
                        <div class="header" >{info.shopName}</div>
                        <div class="meta">
                          <span class="date">Tel.{info.phoneNum}</span>
                        </div>
                        <div class="description">
                          Rate
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
