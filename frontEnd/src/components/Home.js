import React, { Component } from 'react';
import logo from './pic/logo_V2.1.png'
import img1 from './pic/1.jpg'
import { FaSistrix } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import { GiShop } from "react-icons/gi"

class Home extends Component {

  constructor(props) {
    super(props);
    this.state={
        statename:'Sign in',
        displayMenu: false,
        checkLogin: false
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.logoutevent=this.logoutevent.bind(this)
  }

  showDropdownMenu=()=> {
    const checkLogin =this.state.checkLogin;
    if (!checkLogin) {
      this.setState({ statename: 'Pixy' });
      this.setState({checkLogin:true});
      console.log("hereee!!");
    }
    else {
      this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
      });
    }
  }

  hideDropdownMenu=()=> {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  logoutevent=()=>{
    this.setState({checkLogin:false});
    this.setState({statename:'Sign-in'});
  }
  render() {
    return (
      <div class="wrap">
        <div class="wrapnavbar">
          <img src={logo} class="homelogo" alt="Home" height="8%" width="8%" />
          <div class="searchBox">
            <input type="text" placeholder="Search" />
            <div>
              <FaSistrix class="searchicon" size='1.5rem' color="white" />
            </div>
          </div>
          <div class="dropdown" >
    <button class="Signin" onClick={this.showDropdownMenu}><FaUserFriends class="usericon" />  {this.state.statename}</button>

            {this.state.displayMenu ? (
              <ul>
                <li><a href="#Profile">Profile</a></li>
                <li><a href="#LogOut" onClick={this.logoutevent}>Log Out</a></li>
              </ul>
            ) :
              (
                null
              )
            }

          </div>
        </div>
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
