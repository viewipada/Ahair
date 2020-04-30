import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FaSistrix } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import Axios from 'axios'
import shopIcon from './pic/1.jpg';
import Sidebar from './Sidebar';
import NavBar from './navbar'
import img1 from './pic/1.jpg';

export default class Shop extends Component {
    constructor(props) {
        super(props)

        this.state = { rows: [] }
    }

    TotalTime(time){
        var totalTime = document.getElementById("total_time")
        totalTime.innerHTML = totalTime + time
        this.StopTime()
    }

    StopTime(totalTime){

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


                                <div class="box_item2" style={{ padding: '0' }}>
                                    {/* Hair Style Info */}
                                    <div class="sub_box_item2" style={{ padding: '0' }}>
                                        <div class="box_item2" style={{ textAlign: 'left',marginLeft:'-4em'}}>
                                            {/* image */}
                                            <div class="row_box"><img className="image_shop" src={img1} alt="" /></div>
                                            {/* เขียว color: '#cb2c6f' */}
                                            <div class="sub_box_item2" style={{ paddingTop: '1.5em' }}>
                                                <h3 style={{ color: '#cb2c6f' }}>Hairdresser Name</h3>
                                                <p style={{ color: '#cb2c6f' }}>HairStyle Name</p>
                                                <p style={{ color: '#14a098' }}>hour</p>
                                                <p style={{ color: '#14a098' }}>price</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* select time */}
                                    <div class="sub_box_item2" style={{ borderRadius: '20px', backgroundColor: '#ffffff0e', marginTop: '1em' }}>
                                        <h3 style={{ color: '#cb2c6f', marginTop: '1em' }}>Select time</h3>
                                        <div class="box_item2" style={{ textAlign: 'left' }}>
                                            <div class="sub_box_item2">
                                                <h3 style={{ color: '#cb2c6f' }}>Start time</h3>
                                                <div className="wrap_input_time">
                                                    <input
                                                        className="input_time"
                                                    />
                                                </div>
                                            </div>
                                            <div class="sub_box_item2">
                                                <h3 style={{ color: '#cb2c6f' }}>Stop time</h3>
                                                <h3 id="stop_time" />
                                            </div>
                                        </div>
                                        <div class="box_item2" style={{justifyContent:'flex-start' }}>
                                            <h3 style={{ color: '#cb2c6f', margin: '-2.5em 0 1em 0.7em' }}>Total time <h3 id="total_time" /></h3>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </body >
        );
    }
}