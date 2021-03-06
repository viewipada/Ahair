import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios'
import shopIcon from './pic/1.jpg';
import ShopImgItem from './ShopImgItem'
import Sidebar from './Sidebar';
import NavBar from './navbar'
import { connect } from 'react-redux';
import { Shop_2 } from '../redux/index'
import HairdresserItem from './HairdresserItem';
import { Rating } from 'semantic-ui-react'

class Shop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            barberName: "",
            barberId: "",
            shopdata: [],
            barberdata: [],
            hairstylesdata: [],
            hairstylesstore: [],
        }
    }

    componentDidMount() {
        this.getShopData(this.props.shopStore.shopName)
        // this.getShopData('newshop4')
    }

    getShopData = (keyword) => {
        var dataArray = []
        var barberurl = "https://us-central1-g10ahair.cloudfunctions.net/api/barber/" + keyword;
        Axios.get(barberurl).then(result => {
            this.setState({ shopdata: result.data })
            const dataCount = result.data.barber.length
            if (dataCount === undefined) {
                this.setState({ barberdata: result.data })
            }
            else {
                result.data.barber.forEach(item => {
                    dataArray.push(item)
                })
                this.setState({ barberdata: dataArray });
            }
            console.log(this.data)
        })
    }

    getHairStyle = (keyword) => {
        var dataArray = []
        var url = "https://us-central1-g10ahair.cloudfunctions.net/api/hairStyle/" + keyword;
        // var url = "https://us-central1-g10ahair.cloudfunctions.net/api/barber/" + keyword;
        Axios.get(url).then(result => {
            const dataCount = result.data.hairStyles.length
            if (dataCount === undefined) {
                this.setState({ hairstylesstore: result.data })
            }
            else {
                result.data.hairStyles.forEach(item => {
                    dataArray.push(item)
                })
                this.setState({ hairstylesstore: dataArray });
            }
            this.getHairStylesData()
        })
    }

    getHairStylesData = () => {
        this.props.shopStore.shopdata.barber.forEach(barber => {
            if (barber.barberName === this.props.shopStore.barberName) {
                barber.hairAble.forEach(hairable => {
                    this.state.hairstylesstore.forEach(hairstore => {
                        if (hairable.hairId === hairstore.hairId) {
                            this.state.hairstylesdata.push({
                                hairId: hairstore.hairId,
                                hairName: hairstore.hairName,
                                price: hairstore.price,
                                type: hairstore.type,
                                time: hairable.time,
                                color: ""
                            })
                        }
                    })
                })
            }
        })
        console.log("submitShop: ", this.state)
        this.props.shop(this.state)
        this.props.history.push('/selecthairstyle')
    }

    handleOnClick = (item) => {
        this.setState({
            barberName: item.barberName,
            barberId: item.barberId
        }, () => {
            this.submit()
        }
        );
    };

    submit = () => {
        this.props.shop(this.state)
        this.getHairStyle(this.props.shopStore.shopName)
    }

    toReview = () => {
        this.props.shop(this.state)
        this.props.history.push('/shopreview')
    }

    render() {
        return (
            <body class="is-preload">

                <NavBar />

                <div id="wrapper">
                    <div id="main">
                        <div class="inner">
                            <section>
                                <div className="title">
                                    <h1 style={{ color: "#CB2D6F", fontSize: "30px" }}>
                                        <img class="shop_logo" src={this.state.shopdata.imgUrl} />
                                        {this.state.shopdata.shopName}
                                    </h1>
                                </div>

                                <div style={{ display: this.state.shopdata.imgUrlDetails === true ? "flex" : "none" }}>
                                    <ShopImgItem item={this.state.shopdata.imgUrl} />
                                </div>

                                <div class="box_item2" style={{ border: '0' }}>
                                    <div class="sub_box_item">
                                        <h2 style={{ color: '#cb2c6f' }}>Contact</h2>
                                        <p style={{ color: '#14a098' }}>Tel. {this.state.shopdata.phoneNum}</p>
                                        <p style={{ color: '#14a098' }}>Email.{this.state.shopdata.email}</p>
                                    </div>
                                    <div onClick={() => { this.toReview() }} class="sub_box_item">
                                        <h2 style={{ color: '#cb2c6f' }}>Review</h2>
                                        <p style={{ color: '#14a098' }}>Average Rate : {this.state.shopdata.averageRate}</p>
                                        {/* <div className="sub_box_item5">
                                            <div className="description" style={{ color: 'goldenrod' }}>
                                                Rate <Rating defaultRating={parseInt(this.state.shopdata.averageRate,10)} maxRating={5} disabled icon='star' /> ({this.state.shopdata.averageRate + 0})
                                        </div>
                                        </div> */}
                                    </div>
                                    <div class="sub_box_item">
                                        <h2 style={{ color: '#cb2c6f' }}>Location</h2>
                                        <p style={{ color: '#14a098' }}>{this.state.shopdata.address}</p>
                                    </div>
                                </div>

                                <h2 style={{ color: '#cb2c6f', marginLeft: '0.8em' }}>Barber</h2>

                                {this.state.barberdata.map(item => (
                                    <a key={item.barberId} onClick={() => this.handleOnClick(item)}>
                                        <HairdresserItem barber_item={item} />
                                    </a>
                                ))}

                                {/* {this.state.hairstylesdata.map(item => (
                                    <div key={item.hairId} className="checkbox_info" style={{ display: "inline-flex", flexWrap: "wrap" }}>
                                        <input
                                            onClick={item.colorChecked}
                                            type="checkbox"
                                            checked={item.isChecked}
                                            value={item.hairId}
                                            onChange={() => { }}
                                        />
                                        <HairStyleItem hairstyle_item={item} />
                                    </div>
                                ))} */}

                            </section>
                        </div>
                    </div>
                </div>
            </body >
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
        shop: (data) => dispatch(Shop_2(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
