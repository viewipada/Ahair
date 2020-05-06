import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import StarRate from './StarRate';
import Navbar from './NavBarShop';
import errorIcon from './pic/error_icon.png';
import Axios from 'axios';

class review_Cus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            starRate_shop: null,
            bookingId: '',
            userId: ''
        }
        this.getStar = this.getStar.bind(this);
    }
    componentDidMount() {
        const { bookingId } = this.props.match.params;

        this.setState({ bookingId: bookingId });
    }
    getStar(rating) {
        this.setState({ starRate_shop: rating });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const rate = this.state.starRate_shop;
        const reviewData = {
            rate: this.state.starRate_shop,
            bookingId: this.state.bookingId,
        }
        console.log(this.state.starRate_shop)
        if (rate != null) {
            this.setState({ isEmpty: false }, () => {
                console.log(this.state.isEmpty);
            });
            Axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/reviewfromshop', reviewData, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
                .then(res => {
                    console.log(res);
                    this.props.history.push('/noticeforshop');
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
        else {
            this.setState({ isEmpty: true }, () => {
                console.log(this.state.isEmpty);
            });

        }

    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="Format_Container">
                    <div className="title">
                        <h1 style={{ color: "#cb2d6f", fontSize: "30px" }}>
                            Review Customer
                    </h1>
                    </div>
                    <div className="starRate" style={{ margin: "10%" }}>
                        <StarRate getStar={this.getStar} />
                        <div
                            className={!this.state.isEmpty ? "validate_review_wrap" : "invalidate_review_wrap"}>
                            <div className="erroricon_review">
                                <img src={errorIcon} alt="" width="20px" />
                            </div>
                            <div className="texterror_review">
                                <p>Please Rate Some Star!</p>
                            </div>
                        </div>
                    </div>
                    <div className="container_right_bt" >
                        <button type="submit" className="submit_button" onClick={this.handleSubmit}>
                            Submit
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default review_Cus;