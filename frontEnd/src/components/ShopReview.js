import React, { Component } from 'react';
import Axios from 'axios'
import ShopReviewItem from './ShopReviewItem'
import NavBar from './navbar'
import { Link } from 'react-router-dom'
import { Shop_7 } from '../redux/index'
import { connect } from 'react-redux';

class ShopReview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            reviewrows: []
        }
    }

    componentDidMount() {
        // this.review(this.props.shopStore.shopName)
        this.review('ไทน์ คนชิคชิค')
    }

    review = (keyword) => {
        var dataArray = []
        var reviewurl = "https://us-central1-g10ahair.cloudfunctions.net/api/reviewfromuser/" + keyword;
        Axios.get(reviewurl).then(result => {
            const dataCount = result.data.reviewFromUser.length
            if (dataCount === undefined) {
                this.setState({ reviewrows: result.data })
            }
            else {
                result.data.reviewFromUser.forEach(item => {
                    dataArray.push(item)
                })
                this.setState({ reviewrows: dataArray });
            }
            console.log("state: ", this.state)
        })
    }

    render() {

        return (
            <body class="is-preload">
                {/* <!-- Wrapper --> */}

                <NavBar />

                <div id="wrapper">

                    <div id="main">

                        {/* <!-- Content --> */}
                        <div class="inner">
                            <section>

                                {/* Topic */}

                                <div className="title">
                                    <h1 style={{ color: "#CB2D6F", fontSize: "30px" }}>
                                        <img class="shop_logo" src={this.props.shopStore.shopdata.imgUrl} />
                                        Review
                                    </h1>
                                </div>
                                
                                {/* Body */}
                                {this.state.reviewrows.map(item => (
                                    <ShopReviewItem key={item.userId} review={item} />
                                ))}

                                <div className="review_box" style={{margin: '1em 0 0 0'}}>

                                    <Link className="link" to="/shop" style={{ textAlign: 'center' }}>
                                        <div>
                                            <button className="login_button" type="reset">
                                                Back
                                        </button>
                                        </div>
                                    </Link>
                                </div>

                            </section>
                        </div>
                        <div>

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
        shop: (data) => dispatch(Shop_7(data))
    }
}

export default connect(mapStateToProps)(ShopReview);