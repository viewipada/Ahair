import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavBarShop'

class dontforget2Review extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="Format_Container">
                    <div className="TextContainer">
                        <div className="IconContainer">
                            <i className="hand scissors icon" style={{ color: "white", fontSize: "50px" }} ></i>
                        </div>
                        <h1 style={{ color: "#cb2d6f" }}>Don't forget to review your customer!</h1>
                    </div>
                    <div className="container_right_bt_Review" >
                        <Link className="link" to="/noticeforshop">
                            <button
                                type="submit"
                                className="submit_button"
                            >
                                OK
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default dontforget2Review;