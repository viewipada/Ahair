import React, { Component } from 'react';
import Axios from 'axios'
import shopIcon from './pic/1.jpg';
import Sidebar from './Sidebar';
import HairStyleItem from './HairStyleItem';
import NavBar from './navbar'
import { connect } from 'react-redux';
import { Shop_3 } from '../redux/index'
import moment from 'moment/moment'

class SelectHairStyle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            totalTime: 0,
            hairStyles: [],
            hairstylesdata: [],
        }
    }

    componentDidMount() {
        this.getHairStyle(this.props.shopStore.shopName)
        document.getElementById("myBtn").disabled = true
    }

    getHairStyle = (keyword) => {
        var dataArray = []
        var url = "https://us-central1-g10ahair.cloudfunctions.net/api/hairStyle/" + keyword;
        Axios.get(url).then(result => {
            const dataCount = result.data.hairStyles.length
            if (dataCount === undefined) {
                this.setState({ hairstylesdata: result.data })
            }
            else {
                result.data.hairStyles.forEach(item => {
                    dataArray.push(item)
                })
                this.setState({ hairstylesdata: dataArray });
            }
        })
    }

    hairstyleChecked = event => {
        this.state.hairstylesdata.forEach(hairstyle => {
            if (hairstyle.hairId === event.target.value) {
                // const time = 0
                // this.props.shopStore.barberdata.hairAble.forEach(hairable =>{
                //     if(hairstyle.hairId===hairable.hairId){
                //         time = hairable.time
                //     }
                // })
                this.state.hairStyles.push({
                    hairId: hairstyle.hairId,
                    hairName: hairstyle.hairName,
                    price: hairstyle.price,
                    type: hairstyle.type,
                    time: hairstyle.time
                    // time: time
                })
                this.setState({ 
                    total: this.state.total + hairstyle.price,
                    totalTime: this.state.totalTime + hairstyle.time
                })
                if (document.getElementById("myBtn").disabled) {
                    document.getElementById("myBtn").disabled = false
                }            
            }
        })
    }


    // hairstyleChecked = event => {
    //     console.log("hairstyleChecked");
    //     // document.getElementById("myBtn").disabled = true
    //     this.state.hairstylesdata.forEach(hairstyle => {
    //         if (hairstyle.hairId === event.target.value) {
    //             hairstyle.isChecked =  event.target.checked            
    //         }
    //     })
    //     this.state.hairstylesdata.forEach(hairstyle => {
    //         if (hairstyle.isChecked){
    //             if (document.getElementById("myBtn").disabled) {
    //                 document.getElementById("myBtn").disabled = false
    //             }
    //             return false // break;
    //         }
    //     })
    // }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.state.hairstylesdata.forEach(hairstyle => {
    //         if (hairstyle.isChecked) {
    //             this.state.hairStyles.push({
    //                 hairId: hairstyle.hairId,
    //                 hairName: hairstyle.hairName,
    //                 price: hairstyle.price,
    //                 type: hairstyle.type,
    //                 time: hairstyle.time
    //             })
    //             this.setState({ 
    //                 total: this.state.total + hairstyle.price,
    //                 totalTime: this.state.totalTime + hairstyle.time
    //             })
    //         }
    //     })
    //     this.submit(event)
    // }

    handleSubmit = () => {
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

                                <div class="box_item2" style={{ border: '0', justifyContent: 'left' }}>

                                    {/* Hair cut */}
                                    <div class="sub_box_item2" style={{ width: '100%' }}>
                                        <h2 style={{ color: '#cb2c6f', padding: '1em 0 1em 0' }}>Hair Style</h2>
                                        {this.state.hairstylesdata.map(item => (
                                            <div key={item.hairId} style={{ display: "flex", flexWrap: "wrap", marginTop: "1em" }}>
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

                                    {/* Hair Style */}
                                    {/* <div class="sub_box_item2">
                                        <h2 style={{ color: '#cb2c6f', marginLeft: '0.8em' }}>Hair Style</h2>
                                        <HairStyleItem />
                                        <HairStyleItem />
                                        <HairStyleItem />
                                        <HairStyleItem />
                                        <HairStyleItem />
                                        <HairStyleItem />
                                    </div> */}

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