import React, { Component } from 'react';
import Navbar from './navbar'
import Axios from 'axios';
import { connect } from 'react-redux';
import { Booking } from '../redux/index';

class notice_Cus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notice: '',
            icon: 'null',
            image: 'null',
            noticecontent: [],
            noticestage: null,
            bookingId: '',
            canReview: true,
            isLoading: true
        };
    }
    componentDidMount() {
        Axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/booking', { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
            .then(res => {
                this.setState({ noticecontent: res.data, isLoading: false })
                this.props.shop(this.state.noticecontent)
            })
            .catch(err => {
                console.log(err.response);
            })
    }
    onclickBooking(bookingId) {
        this.props.history.push(`/bookInfo_Cus/${bookingId}`)
    }
    onclickReview(bookingId, reviewed) {
        if (reviewed) {
            this.props.history.push('/thank4Review_Cus');
        }
        else {
            this.props.history.push(`/ReviewforCustomer/${bookingId}`)
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="Format_Container">
                    <div className="title">
                        <h1 className='NoticeTitle'
                            style={{
                                color: "#cb2c6f",
                                fontSize: "30px",
                                fontFamily: "cloud",
                            }}>Notification
                    </h1>
                    </div>
                    <div>
                        {
                            !this.state.isLoading ?
                                (
                                    this.state.noticecontent &&
                                    this.state.noticecontent.map((data) => {
                                        return (

                                            <div key={data.bookingId}>
                                                < button className='NoticeContent' onClick={() => this.onclickBooking(data.bookingId)}>
                                                    <p style={{ margin: '10px 0px 0px 20px', fontSize: '20px' }}>
                                                        Booking Information</p>
                                                    <p
                                                        style={{
                                                            margin: '0px 0px 20px 25px',
                                                            fontSize: '10px',
                                                            color: '#8DE8E3',
                                                        }}>
                                                        order number #{data.bookingId}
                                                    </p>
                                                    <a style={{ marginLeft: '20px', color: "white", fontSize: '10px', marginBottom: '20px' }}>
                                                        <i className="hand point right outline icon" style={{ color: 'white' }}></i>
                                                    click for more information</a>
                                                </button>
                                                {
                                                    this.state.canReview ?
                                                        (
                                                            <button className='NoticeContent' onClick={() => this.onclickReview(data.bookingId, data.reviewedFromUser)}>
                                                                <p style={{ margin: '10px 0px 0px 20px', fontSize: '20px' }}>Review your new Look!</p>
                                                                <p
                                                                    style={{
                                                                        margin: '0px 0px 20px 25px',
                                                                        fontSize: '10px',
                                                                        color: '#8DE8E3',
                                                                    }}>
                                                                    order number #{data.bookingId}
                                                                </p>
                                                                <p style={{ marginLeft: '20px', color: "white", fontSize: '10px', marginBottom: '20px' }}>
                                                                    <i className="hand point right outline icon" style={{ color: 'white' }}></i>
                                                click for more information</p>
                                                            </button>
                                                        )
                                                        :
                                                        (null)
                                                }

                                            </div>
                                        );
                                    })
                                )
                                :
                                (
                                    <div class="ui massive active centered inline loader"></div>
                                )

                        }

                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => { //subscribe
    return {
        shopStore: state.ShopReducer.shop
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        shop: (data) => dispatch(Booking(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(notice_Cus);