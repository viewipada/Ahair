import React, { Component } from 'react';
import img1 from './pic/1.jpg'
import { GiShop } from "react-icons/gi"
import Navbar from './navbar'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state={
        statename:'Sign in',
        displayMenu: false,
        checkLogin: ''
    };

  }

  
  render() {
    return (
      <div class="wrap">
        <Navbar/>
        <div class="wrapcontainer">
          <div class="slideContainer">
            <span id="sliderImg1"></span>
            <span id="sliderImg2"></span>
            <span id="sliderImg3"></span>
            <div class="imgContainer">
              <img src={img1} class="sliderImg" />
              <img src={img1} class="sliderImg" />
              <img src={img1} class="sliderImg" />
            </div>
            <div class="buttonContainer">
              <a href="#sliderImg1" class="sliderButton"></a>
              <a href="#sliderImg2" class="sliderButton"></a>
              <a href="#sliderImg3" class="sliderButton"></a>
            </div>
          </div>
          <text class="Topictext">Category</text>
          <div class="btcatContainer">
            <button class="catbt" type="women">Women</button>
            <button class="catbt" type="longW">Long Hairs</button>
            <button class="catbt" type="sholderW">Sholder Lengh</button>
            <button class="catbt" type="shortW">Short Hairs</button>
            <button class="catbt" type="permW">Perm</button>
            <button class="catbt" type="colorsW">Colors</button><br />
            <button class="catbt" type="men">Men</button>
            <button class="catbt" type="skinheadM">Skin Head</button>
            <button class="catbt" type="ShortM">Short Hairs</button>
            <button class="catbt" type="LongM">Long Hairs</button>
            <button class="catbt" type="PermM">Perm</button>
            <button class="catbt" type="colorsM">Colors</button>
          </div>
          <text class="Topictext">Reccomended</text>
          <div class="shopRec">
            <div class="rec1"><GiShop class="Recshop" /><a class="shopname">Barber Shop1</a></div>
            <div class="rec2"><GiShop class="Recshop" /><a class="shopname">Barber Shop2</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
