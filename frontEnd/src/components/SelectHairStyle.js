import React, { Component } from 'react';
import Axios from 'axios'
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
            hairstylesdata: []
        }
    }

    componentDidMount() {
        // this.getHairStyle(this.props.shopStore.shopName)
        this.getHairStyle('newshop4')
        document.getElementById("myBtn").disabled = true;
    }

    getHairStyle = (keyword) => {
        var dataArray = []
        var url = "https://us-central1-g10ahair.cloudfunctions.net/api/hairStyle/" + keyword;
        Axios.get(url).then(result => {
            result.data.hairStyles.forEach(item => {
                dataArray.push(item)
            })
            this.setState({ hairstylesdata: dataArray });
        })
    }

    hairstyleChecked = event => {
        console.log("hairstyleChecked");
        this.state.hairstylesdata.forEach(hairstyle => {
            // console.log("inForEach",hairstyle.hairName,event.target.value)
            if (hairstyle.hairName === event.target.value) {
                this.state.hairStyles.push({
                    hairId: hairstyle.hairId,
                    hairName: hairstyle.hairName,
                    price: hairstyle.price,
                    type: hairstyle.type,
                    time: hairstyle.time
                })
                if(document.getElementById("myBtn").disabled){
                    document.getElementById("myBtn").disabled = false
                }
                // this.setState(this.state)
                this.setState({ total: this.state.total + hairstyle.price })
                this.setState({ totalTime: this.state.totalTime + hairstyle.time })
                console.log("state: ", this.state)
            }
        })
    }

    handleSubmit = event => {
        console.log("handleSubmit :", this.state);
        event.preventDefault();
        this.props.shop(this.state)
        this.props.history.push('/selecttime')
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
                                                    value={item.hairName}
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