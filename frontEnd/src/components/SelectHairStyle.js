import React, { Component } from 'react';
import shopIcon from './pic/1.jpg';
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
            hairstylesdata: this.props.shopStore.hairstylesdata
        }
    }

    componentDidMount() {
        document.getElementById("myBtn").disabled = true
    }

    hairstyleChecked = event => {
        document.getElementById("myBtn").disabled = true
        this.state.hairstylesdata.forEach(hairstyle => {
            if (hairstyle.hairId === event.target.value) { //ถ้าใช่ตัวที่คลิก
                hairstyle.isChecked = event.target.checked
                console.log("Click: ", hairstyle.hairId, hairstyle.isChecked)
            }
            if (hairstyle.isChecked) {
                if (document.getElementById("myBtn").disabled) {
                    document.getElementById("myBtn").disabled = false
                }
            }
        })

    }

    handleSubmit = () => {
        this.state.hairstylesdata.forEach(hairstyle => {
            console.log("0.5", hairstyle.hairId, hairstyle.isChecked)
            if (hairstyle.isChecked) { //ถ้าใช่ตัวที่คลิก
                this.state.hairStyles.push({
                    hairId: hairstyle.hairId,
                    hairName: hairstyle.hairName,
                    price: hairstyle.price,
                    type: hairstyle.type,
                    time: hairstyle.time,
                    color: hairstyle.color
                })
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
        this.props.history.push('/filltimetable')
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
                                    <a href="/shop"><img class="shop_logo" src={shopIcon} /></a>
                                    {this.props.shopStore.shopName}
                                </div>
                                <hr class="major" />
                                <h1 style={{ color: '#cb2c6f' }}>Hair Style</h1>
                                <div class="box_item2" style={{ border: '0', justifyContent: 'left' }}>

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

                                <form className="container_next" onSubmit={this.handleSubmit} >
                                    <button id="myBtn" className="login_button" type="submit" onClick={this.handleSubmit}>
                                        Next
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