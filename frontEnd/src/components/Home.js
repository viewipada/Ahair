import React, { Component } from 'react';
import img1 from './pic/1.jpg'
import { GiShop } from "react-icons/gi"
import Navbar from './navbar'
import Sliderimg from './sliderimg'
import axios from 'axios';
import { Rating } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { HomeShop } from '../redux/index'
import content1 from './content1/1.jpg'
import content2 from './content2/1.jpg'
import content3 from './content3/1.jpg'
import content4 from './content4/1.jpg'
import CategoryOne from './CategoryOne';
import CategoryTwo from './CategoryTwo';
import CategoryThree from './CategoryThree'
import CategoryFour from './CategoryFour'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statename: 'Sign in',
      displayMenu: false,
      checkLogin: '',
      shopinfo: '',
      isLoading: true,
      shopId: '',
      isCategoryOne:false,
      isCategoryTwo:false,
      isCategoryThree:false,
      isCategoryFour:false
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
  chooseContentOne =()=> {
    this.setState({isCategoryOne:!this.state.isCategoryOne,isCategoryTwo: false, isCategoryThree:false, isCategoryFour:false})
  }
  chooseContentTwo =()=> {
    this.setState({isCategoryTwo:!this.state.isCategoryTwo, isCategoryOne:false, isCategoryThree:false,isCategoryFour:false})
  }
  chooseContentThree =()=> {
    this.setState({isCategoryThree:!this.state.isCategoryThree, isCategoryFour:false,isCategoryOne:false,isCategoryTwo:false})
  }
  chooseContentFour =()=> {
    this.setState({isCategoryFour:!this.state.isCategoryFour,isCategoryTwo:false,isCategoryThree:false,isCategoryOne:false})
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
                  <h1 className="Topictext">Hot Contents</h1>
                  <div className="btcatContainer">
                    <div className="container">
                      <div className="card"onClick={this.chooseContentOne}>
                        <img src={content1} alt="" />
                        <div className="card__head">How to Figure Out Your Face Shape</div>
                      </div>
                      <div className="card"onClick={this.chooseContentTwo}>
                        <img src={content2} alt="" />
                        <div className="card__head">Trendy Summer Hair Color</div>
                      </div>
                      <div className="card" onClick={this.chooseContentThree}>
                        <img src={content3} alt="" />
                        <div class="card__head">Short Haircut Ideas</div>
                      </div>
                      <div className="card"onClick={this.chooseContentFour}>
                        <img src={content4} alt="" />
                        <div className="card__head">Best Hot Men's Haircuts</div>
                      </div>
                    </div>
                    <div>
                    <div  style={{display: this.state.isCategoryOne? "flex":"none"}}><CategoryOne/></div>
                    <div style={{display: this.state.isCategoryTwo? "flex":"none"}}><CategoryTwo /></div>
                    <div style={{display: this.state.isCategoryThree? "flex":"none"}}><CategoryThree /></div>
                    <div style={{display: this.state.isCategoryFour? "flex":"none"}}><CategoryFour/></div>
                    </div>
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
                                  Rate <Rating defaultRating={info.averageRate} maxRating={5} disabled icon='star' /> ({info.averageRate+0})
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
