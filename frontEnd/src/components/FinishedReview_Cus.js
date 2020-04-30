import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar'

class FinishedReview_Cus extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="Format_Container">
                    <div className="TextContainer">
                        <div className="IconContainer">
                            <i className="thumbs up icon" style={{ color: "white", fontSize: "50px" }} ></i>
                        </div>
                        <h1 style={{ color: "#cb2d6f" }}>Thank You For Your Review!</h1>
                    </div>
                    <div className="container_right_bt_Review" >
                        <Link className="link" to="/home">
                            <button
                                type="submit"
                                className="submit_button"
                            >
                                Submit
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

        );
    }
}

export default FinishedReview_Cus;