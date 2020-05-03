import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FaSistrix } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import Axios from 'axios'
import ShopReviewItem from './ShopReviewItem'
import Sidebar from './Sidebar'
import shopIcon from './pic/1.jpg'
import NavBar from './navbar'


class ShopReview extends Component {

    constructor(props) {
        super(props)

        this.state = { rows: [] }
    }

    componentDidMount() {
        this.review('newshop1')
    }

    review = (shopName) => {
        // console.log(shopName)
        var dataArray = []
        var url = "https://us-central1-g10ahair.cloudfunctions.net/api/reviewfromuser/" + shopName;
        Axios.get(url).then(result => {
            // console.log(JSON.stringify(result.data.reviewFromUser))
            result.data.reviewFromUser.forEach(item => {
                dataArray.push(item)
            })
            this.setState({ rows: dataArray });
        })
        // .catch(error => console.error(error));
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
                                    <ShopReviewItem review={item} />
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

export default ShopReview;