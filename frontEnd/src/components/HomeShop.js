import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Rating } from 'semantic-ui-react'
import Axios from 'axios'
import shopIcon from './pic/1.jpg';
import ShopImgItem from './ShopImgItem'
import shopcreate from './pic/shop_icon.png';
import Sidebar from './Sidebar';
import Hairdresser from './HairdresserItem';
import NavBar from './NavBarShop'
import { connect } from 'react-redux';
import { Admin_1 } from '../redux/index'
import HairdresserItem from './HairdresserItem';

class HomeShop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shopId:"",
            barberName: "",
            barberId: "",
            shopdata: [],
            barberdata: [],
            hadData :false
        }
    }

    componentDidMount() {
        // this.getShopData("ไทน์ คนชิคชิค")
        this.getShopData()
    }

    getShopData = (keyword) => {
        let currentState = this
        var dataArray = []
        var barberurl = "https://us-central1-g10ahair.cloudfunctions.net/api/barber/" + localStorage.getItem('shopname');
        Axios.get(barberurl).then(result => {
            console.log("GetAxios: ",result.data)
            this.setState({ shopdata: result.data });
            result.data.barber.forEach(item => {
                dataArray.push(item)
            })
            this.setState({ barberdata: dataArray});
            if(result.data.barber) this.setState({hadData: true})
            console.log("push: ", this.state.shopdata, this.state.barberdata)
        })
        .catch(function(error) {
            console.log(error)
            currentState.setState({hadData: false})
        })
    }

    handleOnClick = (item) => {
        console.log("barber: ", this.state.barberdata)
        this.setState({
            barberName: item.barberName,
            barberId: item.barberId,
            shopId: this.state.shopdata.shopId
        }, () => {
            this.submit()
        }
        );
    };

    submit = () =>{
        console.log("submitHomeShop: ",this.state)
        this.props.admin(this.state)
        this.props.history.push('/filltimetableshop')
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
                                <div className = "title">
                                    <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                                        <img class="shop_logo" src={this.state.shopdata.imgUrl} alt="" />
                                        {this.state.shopdata.shopName}
                                    </h1>
                                </div>

                                <div style={{display : this.state.hadData ? "block":"none"}}>
                                    {/* image ร้าน*/}
                                    <div style={{display: this.state.shopdata.imgUrl === [] ? "flex":"none"}}>
                                        <ShopImgItem item={this.state.shopdata} /> 
                                    </div>

                                    {/* information */}
                                    <div class="box_item2" style={{ border: '0' }}>
                                        <div class="sub_box_item">
                                            <h2 style={{ color: '#cb2c6f' }}>Contact</h2>
                                            <p style={{ color: '#14a098' }}>Tel. {this.state.shopdata.phoneNum}</p>
                                            <p style={{ color: '#14a098' }}>Email.{this.state.shopdata.email}</p>
                                        </div>
                                        <div class="sub_box_item">
                                            <a href="/shopreview"><h2 style={{ color: '#cb2c6f' }}>Rate</h2></a>
                                            <p style={{ color: 'goldenrod' }}>
                                            <Rating defaultRating={this.state.shopdata.averageRate} maxRating={5} disabled icon='star' /> ({this.state.shopdata.averageRate+0})
                                            </p>
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
                                </div>
                                <div style={{display : this.state.hadData ? "none":"flex",textAlign:"center",flexDirection:"column" ,flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"100%"}}>
                                    
                                    <div style={{color:"white",textAlign:"center",width:"100%,", justifyContent:"center", alignItems:"center"}}>
                                        <img src={shopcreate} alt="" width="250px"style={{ alignItems:"center"}}/>
                                        <p style={{marginBottom:"30px",fontSize:"20px"}}>Shop Information Did Not Create</p>
                                    </div>
                                    <div style={{color:"white",textAlign:"center",width:"100%,", justifyContent:"center", alignItems:"center"}}>
                                        <Link className="link" to="/information">
                                            <div style={{justifyContent:"center", alignItems:"center"}}>
                                                <button className="login_button" type="submit">
                                                    Create Shop Information
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                    
                                </div>
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
        adminStore: state.AdminReducer.admin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        admin: (data) => dispatch(Admin_1(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeShop);
