import React, { Component, Fragment } from 'react';
import Navbar from './navbar'
import Axios from 'axios';

class notice_Cus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notice: '',
            icon: 'null',
            image: 'null',
            noticecontent: [],
            noticestage: null,
        };
    }
    componentDidMount() {
        Axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/booking', { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
            .then(res => {
                this.setState({ noticecontent: res.data })
            })
            .catch(err => {
                console.log(err.response);
            })
    }
    onclick
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
                            this.state.noticecontent &&
                            this.state.noticecontent.map((data) => {
                                return (
                                    <div key={data.bookingId}>
                                        < button className='NoticeContent'>
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
                                            <a href='/BookInfo_Cus' style={{ marginLeft: '20px', color: "white", fontSize: '10px', marginBottom: '20px' }}>
                                                <i className="hand point right outline icon" style={{ color: 'white' }}></i>
                                            click for more information</a>
                                        </button>
                                        <button className='NoticeContent'>
                                            <p style={{ margin: '10px 0px 0px 20px', fontSize: '20px' }}>Review your new Look!</p>
                                            <p
                                                style={{
                                                    margin: '0px 0px 20px 25px',
                                                    fontSize: '10px',
                                                    color: '#8DE8E3',
                                                }}>
                                                order number #{data.bookingId}
                                            </p>
                                            <a href={data.reviewed ? '/thank4Review_Cus' : '/ReviewforCustomer'} style={{ marginLeft: '20px', color: "white", fontSize: '10px', marginBottom: '20px' }}>
                                                <i className="hand point right outline icon" style={{ color: 'white' }}></i>
                                        click for more information</a>
                                        </button>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div >
        );
    }
}

export default notice_Cus;