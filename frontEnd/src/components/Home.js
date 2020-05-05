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
      <div className="wrap">
        <Navbar />
        <div>
          <Sliderimg />
        </div>
        <div className="wrapcontainer">
          <h1 className="Topictext">Category</h1>
          <div className="btcatContainer">
            <button className="catbt" type="women">Women</button>
            <button className="catbt" type="longW">Long Hairs</button>
            <button className="catbt" type="sholderW">Sholder</button>
            <button className="catbt" type="shortW">Short Hairs</button>
            <br />
            <button className="catbt" type="men">Men</button>
            <button className="catbt" type="skinheadM">Skin Head</button>
            <button className="catbt" type="ShortM">Short Hairs</button>
            <button className="catbt" type="LongM">Long Hairs</button>
          </div>
          <h1 className="Topictext">Reccomended</h1>
          <div className="shopRec">
            <div className='ui two link cards'>
              {
                this.state.shopinfo &&
                this.state.shopinfo.map((info) => {
                  return (
                    <div key={info.shopId} className="card">
                      <div className="ui medium centered image">
                        <img src={info.imgUrl} />
                      </div>
                      <div className="content">
                        <div className="header" >{info.shopName}</div>
                        <div className="meta">
                          <span className="date">Tel.{info.phoneNum}</span>
                        </div>
                        <div className="description">
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
