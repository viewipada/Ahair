import React, { Component } from 'react';
import Axios from 'axios'
import ShopReviewItem from './ShopReviewItem'
import Sidebar from './Sidebar'
import shopIcon from './pic/1.jpg'
import NavBar from './NavBarShop'
import { connect } from 'react-redux';

class ShopReview extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            rows: [] 
        }
    }

    componentDidMount() {
        this.review(this.props.shopStore.shopName)
        // this.review('newshop4')
    }

    review = (keyword) => {
        var dataArray = []
        var reviewurl = "https://us-central1-g10ahair.cloudfunctions.net/api/barber/" + keyword;
        Axios.get(reviewurl).then(result => {
            const dataCount = result.data.barber.length
            if (dataCount === undefined) {
                this.setState({ rows: result.data })
            }
            else {
                result.data.barber.forEach(item => {
                    dataArray.push(item)
                })
                this.setState({ rows: dataArray });
            }
        })
    }

    render() {

        return (
            <body class="is-preload">
                {/* <!-- Wrapper --> */}
                
                <NavBar/>
                
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
                                    <a href="/shop"><img class="shop_logo" src={shopIcon}/></a>
                                    Review
                                </div>
                                <hr class="major" />

                                {/* Body */}
                                {this.state.rows.map(item => (
                                    <ShopReviewItem key={item.userId} review={item} />
                                ))}

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

export default connect(mapStateToProps)(ShopReview);