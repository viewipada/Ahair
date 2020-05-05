import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios'
import shopIcon from './pic/1.jpg';
import ShopImgItem from './ShopImgItem'
import Sidebar from './Sidebar';
import NavBar from './NavBarShop'
import { connect } from 'react-redux';
import { Shop_2 } from '../redux/index'
import HairdresserItem from './HairdresserItem';

class Shop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            barberName: "",
            barberId: "",
            shopdata: [],
            barberdata: []
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
        })
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
        console.log("submitShop: ", this.state)
        this.props.shop(this.state)
        this.props.history.push('/selecthairstyle')
    }

    render() {
        return (
            <body class="is-preload">

                <NavBar />

                {/* <!-- Wrapper --> */}
                <div id="wrapper">

                    {/* Sidebar */}
                    {/* <Sidebar /> */}

                    {/* <!-- Main --> */}
                    <div id="main">

                        {/* <!-- Content --> */}
                        <div class="inner">
                            <section>

                                {/* Topic */}
                                <div className="title">
                                    <h1 style={{ color: "#CB2D6F", fontSize: "30px" }}>
                                        <img class="shop_logo" src={shopIcon} />
                                        {this.state.shopdata.shopName}
                                    </h1>
                                </div>

                                {/* image */}
                                <div style={{ display: this.state.shopdata.imgUrl === [] ? "flex" : "none" }}>
                                    <ShopImgItem item={this.state.shopdata.imgUrl} />
                                </div>

                                {/* information */}
                                <div class="box_item2" style={{ border: '0' }}>
                                    <div class="sub_box_item">
                                        <h2 style={{ color: '#cb2c6f' }}>Description</h2>
                                        <p style={{ color: '#14a098' }}>Tel. {this.state.shopdata.phoneNum}</p>
                                        <p style={{ color: '#14a098' }}>Email.{this.state.shopdata.email}</p>
                                    </div>
                                    <Link to="/shopreview" class="sub_box_item">
                                        <h2 style={{ color: '#cb2c6f' }}>Rate</h2>
                                        <p style={{ color: 'goldenrod' }}>Something</p>
                                    </Link>
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
