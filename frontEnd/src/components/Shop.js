import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FaSistrix } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import Axios from 'axios'
import shopIcon from './pic/1.jpg';
import ShopImgItem from './ShopImgItem'
import Sidebar from './Sidebar';
import Hairdresser from './HairdresserItem';

export default class Shop extends Component {
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
                <div id="wrapper">

                    {/* Sidebar */}
                    <Sidebar />

                    {/* <!-- Main --> */}
                    <div id="main">

                        {/* Search and Signin */}
                        <div class="wrap_search_signin">

                            <div class="wrap_search_icon">
                                <input className="search" fontSize="30" placeholder="Search"
                                    onChange={(event) => { this.search(event.target.value) }} />
                                <div><FaSistrix class="searchIcon" size='1.5rem' color="white" /></div>
                            </div>

                            <Link className="link" to="/signin">
                                <button type="signIn_2" name="Signin"><FaUserFriends class="usericon" />   Sign-in</button>
                            </Link>

                        </div>

                         {/* <!-- Content --> */}
                        <div class="inner">
                            <section>

                                {/* Topic */}
                                <div class="topic" style={{ marginTop: '1em', marginLeft: '-1em' }}>
                                    <img class="shop_logo" src={shopIcon}/>
                                    Barber Shop
                                </div>
                                <hr class="major" />

                                {/* Edit Button for admin */}
                                {/* <Link className="link" to="/shop">
                                    <button type="back" name="Signin">Edit</button>
                                </Link> */}
                                
                                {/* image */}
                                <ShopImgItem />

                                {/* information */}
                                <div class="box_item" style={{border:'0'}}>
                                    <div class="sub_box_item">
                                        <h2 style={{ color: '#cb2c6f' }}>Description</h2>
                                        <p style={{ color: '#14a098'  }}>Something</p>
                                    </div>
                                    <div class="sub_box_item">
                                        <a href="/shopreview"><h2 style={{ color: '#cb2c6f' }}>Rate</h2></a>
                                        <p style={{ color: 'goldenrod' }}>Something</p>
                                    </div>
                                    <div class="sub_box_item">
                                        <h2 style={{ color: '#cb2c6f' }}>Location</h2>
                                        <p style={{ color: '#14a098'  }}>Something</p>
                                    </div>
                                </div>

                                <h2 style={{ color: '#cb2c6f',marginLeft:'0.8em' }}>Hairdresser</h2>

                                <Hairdresser/>
                                <Hairdresser/>
                                <Hairdresser/>

                                {/* Body */}
                                {/* {this.state.rows.map(item => (
                                    <ShopReviewItem review={item} />
                                ))} */}

                                
                            </section>
                        </div>
                    </div>
                </div>
            </body >
        );
    }
}
