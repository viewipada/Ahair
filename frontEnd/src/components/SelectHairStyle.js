import React, { Component } from 'react';
import shopIcon from './pic/1.jpg';
import {Link} from 'react-router-dom'
import Sidebar from './Sidebar';
import HairStyleItem from './HairStyleItem';
import NavBar from './navbar'
import { connect } from 'react-redux';
import { Shop_3 } from '../redux/index'

class SelectHairStyle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            totalTime: 0,
            hairStyles: [],
            hairstylesdata: this.props.shopStore.hairstylesdata,
            isSignin:false
        }
    }

    componentDidMount() {
        document.getElementById("myBtn").disabled = true
        if(localStorage.getItem('username')){
            this.setState({isSignin:true})
        }
    }

    hairstyleChecked = event => {
        document.getElementById("myBtn").disabled = true
        this.state.hairstylesdata.forEach(hairstyle => {
            if (hairstyle.hairId === event.target.value) { //ถ้าใช่ตัวที่คลิก
                hairstyle.isChecked = event.target.checked
            }
            if (hairstyle.isChecked) {
                if (document.getElementById("myBtn").disabled) {
                    document.getElementById("myBtn").disabled = false
                }
            }
        })

    }

    handleSubmit = () => {
        var isColor = false
        this.state.hairstylesdata.forEach(hairstyle => {
            if (hairstyle.isChecked) { //ถ้าใช่ตัวที่คลิก
                if(hairstyle.hairName==="Color"){
                    isColor = true
                }
                this.state.hairStyles.push({
                    hairId: hairstyle.hairId,
                    hairName: hairstyle.hairName,
                    price: hairstyle.price,
                    type: hairstyle.type,
                    time: hairstyle.time,
                    color: hairstyle.color
                })
                this.setState(this.state)
            }
        })
        this.state.hairStyles.forEach(hairstyle => {
            this.setState({
                total: this.state.total += hairstyle.price,
                totalTime: this.state.totalTime += hairstyle.time
            })
        })
        console.log("handleSubmitSelectHairStle :", this.state);
        this.props.shop(this.state)
        if(isColor){
            this.props.history.push('/selectcolor')
        }
        else{
            this.props.history.push('/filltimetable')
        }
    }
    createBooking = () => {
        this.props.history.push('/signin')
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
                                <div class="topic" style={{ marginTop: '0.4em', marginLeft: '-1em' }}>
                                    <a href="/shop"><img class="shop_logo" src={this.props.shopStore.shopdata.imgUrl} /></a>
                                    {this.props.shopStore.shopName}
                                </div>
                                <hr class="major" />
                                <h1 style={{ color: '#cb2c6f' }}>Hair Style</h1>
                                <div class="box_item2" style={{ border: '0', justifyContent: 'left' ,pointerEvents: this.state.isSignin ? "visible":"none"}}>

                                    {/* Hair cut */}
                                    {/* <div class="sub_box_item2" style={{ width: '100%' }}> */}
                                    <div className="sub_box_item3" style={{ width: '30%' }}>
                                        {this.state.hairstylesdata.map(item => (
                                            <div key={item.hairId} style={{ marginBottom: '1em' }}>
                                                <input
                                                    onClick={this.hairstyleChecked}
                                                    type="checkbox"
                                                    checked={item.isChecked}
                                                    value={item.hairId}
                                                    onChange={() => { }}
                                                />
                                                <HairStyleItem hairstyle_item={item} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link className="link" to="/shop">
                                    <div>
                                        <button className="login_button" type="reset">
                                            Back
                                        </button>
                                    </div>
                                </Link>
                                <form className="container_next" onSubmit={this.handleSubmit} >
                                    <button id="myBtn" className="login_button" type="submit" onClick={this.handleSubmit}
                                    style={{display: this.state.isSignin? "flex":"none"}}>
                                        Next
                                    </button>
                                    <button  className="login_button" type="submit" onClick={this.createBooking}
                                    style={{display: this.state.isSignin? "none":"flex"}}>
                                        Create Booking
                                    </button>
                                </form>

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
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        shop: (data) => dispatch(Shop_3(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectHairStyle);