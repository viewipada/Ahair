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
        // this.getHairStyle('ไทน์ คนชิคชิค')
        document.getElementById("myBtn").disabled = true
        // console.log("test", this.props.shopStore.shopdata.barber)
    }

    getHairStyle = (keyword) => {
        var dataArray = []
        var url = "https://us-central1-g10ahair.cloudfunctions.net/api/hairStyle/" + keyword;
        // var url = "https://us-central1-g10ahair.cloudfunctions.net/api/barber/" + keyword;
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

    // hairstyleChecked = () => {
    //     this.state.hairstylesdata.forEach(hairstyle => {
    //         console.log("0.5", hairstyle)
    //         if (hairstyle.hairId === event.target.value) { //ถ้าใช่ตัวที่คลิก
    //             console.log("1")
    //             this.props.shopStore.shopdata.barber.forEach(barber => {
    //                 console.log("1.5", barber.barberName, this.props.shopStore.barberName)
    //                 if (barber.barberName === this.props.shopStore.barberName) { //ถ้าใช่ชางคนที่เลือก
    //                     console.log("2")
    //                     barber.hairAble.forEach(hairable => {
    //                         console.log("3")
    //                         if (hairable.hairId === hairstyle.hairId) { //ถ้าหาแล้วตรงกัน
    //                             console.log("value :", hairable.time)
    //                             this.state.hairStyles.push({
    //                                 hairId: hairstyle.hairId,
    //                                 hairName: hairstyle.hairName,
    //                                 price: hairstyle.price,
    //                                 type: hairstyle.type,
    //                                 time: hairable.time
    //                             })
    //                             console.log("submit1: ",this.state)
    //                             this.hairstyleChecked2(hairstyle, hairable)
    //                         }
    //                     })
    //                 }
    //             })
    //         }
    //     })
    //     console.log("hairSubmit1: ", this.state)
    // }

    // hairstyleChecked2 = (hairstyle, hairable) => {
    //     this.setState({
    //         total: this.state.total + hairstyle.price,
    //         totalTime: this.state.totalTime + hairable.time
    //     })
    //     if (document.getElementById("myBtn").disabled) {
    //         document.getElementById("myBtn").disabled = false
    //     }
    //     console.log("hairSubmit2: ", this.state)
    //     // this.handleSubmit3()
    // }

    // handleSubmit2 = (hairstyle, hairable) => {
    //     console.log("sub2Total: ",this.state.total , hairstyle.price)
    //     this.setState({
    //         total: this.state.total + hairstyle.price,
    //         totalTime: this.state.totalTime + hairable.time
    //     })
    //     // if (document.getElementById("myBtn").disabled) {
    //     //     document.getElementById("myBtn").disabled = false
    //     // }
    //     console.log("hairSubmit2: ", this.state)
    //     this.handleSubmit3()
    // }



    hairstyleChecked = event => {
        document.getElementById("myBtn").disabled = true
        this.state.hairstylesdata.forEach(hairstyle => {
            // console.log("0.5", hairstyle)
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
                console.log("1")
                this.props.shopStore.shopdata.barber.forEach(barber => {
                    console.log("1.5", barber.barberName, this.props.shopStore.barberName)
                    if (barber.barberName === this.props.shopStore.barberName) { //ถ้าใช่ชางคนที่เลือก
                        console.log("2")
                        barber.hairAble.forEach(hairable => {
                            console.log("3")
                            if (hairable.hairId === hairstyle.hairId) { //ถ้าหาแล้วตรงกัน
                                console.log("value :", hairable.time)
                                this.state.hairStyles.push({
                                    hairId: hairstyle.hairId,
                                    hairName: hairstyle.hairName,
                                    price: hairstyle.price,
                                    type: hairstyle.type,
                                    time: hairable.time
                                })
                                console.log("submit1: ", this.state)
                                // this.handleSubmit2(hairstyle, hairable)
                            }
                        })
                    }
                })
            }
        })
        console.log("hairSubmit1: ", this.state)
        this.handleSubmit2()
    }

    handleSubmit2 = () => {
        // console.log("sub2Total: ",this.state.total , hairstyle.price)
        this.state.hairStyles.forEach(hairstyle => {
            console.log("CheckData: ", hairstyle.price, hairstyle.time)
            console.log("CheckProcess: ", this.state.total, hairstyle.price, this.state.total+hairstyle.price)
            this.setState({
                total: this.state.total+=hairstyle.price,
                totalTime: this.state.totalTime+=hairstyle.time
            })
        })
        console.log("hairSubmit2: ", this.state)
        this.handleSubmit3()
    }

    handleSubmit3 = () => {
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
                                            <div key={item.hairId} >
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

                                    {/* </div> */}

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