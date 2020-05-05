import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import StarRate from './StarRate';
import Navbar from './NavBarShop'
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
        const reviewData = {
            rate: this.state.starRate_shop,
            bookingId: this.state.bookingId,
        }

        Axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/reviewfromshop', reviewData, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
            .then(res => {
                console.log(res);
                this.props.history.push('/noticeforshop');
            })
            .catch(err=>{
                console.log(err.response);
            })

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
                    <div className="starRate" style={{ margin: "13%" }}>
                        <StarRate getStar={this.getStar} />
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