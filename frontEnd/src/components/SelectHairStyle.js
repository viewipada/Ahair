import React, { Component } from 'react';
import Axios from 'axios'
import shopIcon from './pic/1.jpg';
import Sidebar from './Sidebar';
import HairStyleItem from './HairStyleItem';
import NavBar from './navbar'

export default class SelectHairStyle extends Component {
    constructor(props) {
        super(props)

        this.state = { rows: [] }
    }

    render() {
        return (
            <body class="is-preload">

                <NavBar />

                {/* <!-- Wrapper --> */}
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
                                    <a href="/shop"><img class="shop_logo" src={shopIcon} /></a>
                                    Barber Shop
                                </div>
                                <hr class="major" />

                                {/* Edit Button for admin */}
                                {/* <Link className="link" to="/shop">
                                    <button type="back" name="Signin">Edit</button>
                                </Link> */}


                                <div class="box_item2" style={{ border: '0' }}>

                                    {/* Hair cut */}
                                    <div class="sub_box_item2">
                                        <h2 style={{ color: '#cb2c6f', marginLeft: '0.8em' }}>Hair Cut</h2>
                                        <HairStyleItem />
                                        <HairStyleItem />
                                        <HairStyleItem />
                                        <HairStyleItem />
                                        <HairStyleItem />
                                    </div>

                                    {/* Hair Style */}
                                    <div class="sub_box_item2">
                                        <h2 style={{ color: '#cb2c6f', marginLeft: '0.8em' }}>Hair Style</h2>
                                        <HairStyleItem />
                                        <HairStyleItem />
                                        <HairStyleItem />
                                        <HairStyleItem />
                                        <HairStyleItem />
                                        <HairStyleItem />
                                    </div>
                                </div>

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