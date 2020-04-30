import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FaSistrix } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import Axios from 'axios'
import ShopReviewItem from './ShopReviewItem'
import Sidebar from './Sidebar'
import shopIcon from './pic/1.jpg';
import NavBar from './navbar'


class ShopReview extends Component {

    constructor(props) {
        super(props)

        this.state = { rows: [] }
    }

    componentDidMount() {
        this.search('Harry Potter')
    }

    search = (keyword) => {
        console.log(keyword)
        var dataArray = []
        var url = "http://api.themoviedb.org/3/search/movie?api_key=0696a5d8f4f751e4493e133825a494f4&query=" + keyword;
        Axios.get(url).then(result => {
            console.log(JSON.stringify(result.data.results))
            result.data.results.forEach(item => {
                item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path
                item.backdrop_src = "https://image.tmdb.org/t/p/w185" + item.backdrop_path
                dataArray.push(item)
            })

            this.setState({ rows: dataArray });
        })
    }

    render() {

        return (
            <body class="is-preload">
                {/* <!-- Wrapper --> */}
                
                <NavBar/>
                
                <div id="wrapper">

                    {/* Sidebar */}
                    <Sidebar />

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