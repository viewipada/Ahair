import React, { Component } from 'react';
import img1 from './pic/1.jpg'
import { GiShop } from "react-icons/gi"
import Navbar from './navbar'
import Sliderimg from './sliderimg'
import axios from 'axios';
import { Rating } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { HomeShop } from '../redux/index'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statename: 'Sign in',
      displayMenu: false,
      checkLogin: '',
      shopinfo: '',
      isLoading: true,
      shopId: ''
    };

  }
  async componentDidMount() {
    await axios.get(`https://us-central1-g10ahair.cloudfunctions.net/api/shop`)
      .then((res) => {
        console.log(res.data);
        this.setState({ shopinfo: res.data, isLoading: false, shopId: res.data.shopId });

      });
  }
  handleClick = (shopId, shopName) => {
    const shopdata = {
      shopId: shopId,
      shopName: shopName
    }
    this.props.shop(shopdata)
    this.props.history.push('/shop')
  }
  render() {
    return (
      <div className="wrap">
        <Navbar />
        {
          this.state.isLoading ?
            <div class="ui massive active centered inline loader"></div>
            :
            (
              <div>
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
                    <div className='ui link cards'>
                      {
                        this.state.shopinfo &&
                        this.state.shopinfo.map((info) => {
                          return (
                            <div key={info.shopId} className="card" onClick={() => this.handleClick(info.shopId, info.shopName)}>
                              <div className="ui centered small image">
                                <img className="ui fluid image" src={info.imgUrl} />
                              </div>
                              <div className="content">
                                <div className="header" >{info.shopName}</div>
                                <div className="meta">
                                  <span className="date">Tel.{info.phoneNum}</span>
                                </div>
                                <div className="description">
                                  Rate <Rating defaultRating={info.averageRate} maxRating={5} disabled icon='star' /> ({info.averageRate})
                        </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            )
        }
      </div>

    );
  }
}
const mapStateToProps = (state) => { //subscribe
  return {
    shopStore: state.ShopReducer.shop
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    shop: (data) => dispatch(HomeShop(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
