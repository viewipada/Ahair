import React, { Component } from 'react';
import Axios from 'axios'
import shopIcon from './pic/1.jpg';
import ShopImgItem from './ShopImgItem'
import Sidebar from './Sidebar';
import Hairdresser from './HairdresserItem';
import NavBar from './navbar'

export default class Shop extends Component {
    constructor(props) {
        super(props)
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
                                    <img class="shop_logo" src={shopIcon} />
                                    Barber Shop
                                </div>
                                <hr class="major" />

                                {/* Edit Button for admin */}
                                {/* <Link className="link" to="/shop">
                                    <button class="Back">Edit</button>
                                </Link> */}

                                {/* image */}
                                <ShopImgItem />

                                {/* information */}
                                <div class="box_item2" style={{ border: '0' }}>
                                    <div class="sub_box_item">
                                        <h2 style={{ color: '#cb2c6f' }}>Description</h2>
                                        <p style={{ color: '#14a098' }}>Something</p>
                                    </div>
                                    <div class="sub_box_item">
                                        <a href="/shopreview"><h2 style={{ color: '#cb2c6f' }}>Rate</h2></a>
                                        <p style={{ color: 'goldenrod' }}>Something</p>
                                    </div>
                                    <div class="sub_box_item">
                                        <h2 style={{ color: '#cb2c6f' }}>Location</h2>
                                        <p style={{ color: '#14a098' }}>Something</p>
                                    </div>
                                </div>

                                <h2 style={{ color: '#cb2c6f', marginLeft: '0.8em' }}>Hairdresser</h2>

                                <Hairdresser />
                                <Hairdresser />
                                <Hairdresser />

                            </section>
                        </div>
                    </div>
                </div>
            </body >
        );
    }
}
