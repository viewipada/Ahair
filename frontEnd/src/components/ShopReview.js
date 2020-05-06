import React, { Component } from 'react';
import Axios from 'axios'
import ShopReviewItem from './ShopReviewItem'
import Sidebar from './Sidebar'
import shopIcon from './pic/1.jpg'
import NavBar from './NavBarShop'
import { Shop_7 } from '../redux/index'
import { connect } from 'react-redux';

class ShopReview extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            reviewrows: [] 
        }
    }

    toShop=()=>{
        this.props.history.push('/shop')
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
            console.log("state: ",this.state)
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
                                    <img onClick={()=>{this.toShop()}}class="shop_logo" src={this.props.shopStore.shopdata.imgUrl}/>
                                    Review
                                </div>
                                <hr class="major" />

                                {/* Body */}
                                {this.state.reviewrows.map(item => (
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

const mapDispatchToProps = (dispatch) => {
    return {
        shop: (data) => dispatch(Shop_7(data))
    }
}

export default connect(mapStateToProps)(ShopReview);