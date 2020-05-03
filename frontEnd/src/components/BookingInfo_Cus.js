import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './navbar'

class BookingInfo_Cus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: []
        };
    }
    componentDidMount() {
        const id = 'bTMJ1FTzpEmqMFCRPQjP'
        axios.get(`https://us-central1-g10ahair.cloudfunctions.net/api/booking/${id}`)
            .then((res) => {
                this.setState({ info: [res.data] });
            })
            .catch((err) => {
                console.log(err.response);
            })
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="Format_Container">
                    <div className="title">
                        <h1 style={{
                            color: "#cb2c6f",
                            fontSize: "30px",
                            fontFamily: "cloud",
                        }}>Booking Infomation</h1>
                    </div>
                        {
                            this.state.info &&
                            this.state.info.map(data => {
                                return (
                                    <div className='BookInfo' key={data.userId}>
                                        <p>Name : <span className="subdetail">{data.userHandle}</span></p>
                                        <p>Hair Styles : <span className="subdetail">{data.hairName}</span></p>
                                        <p>Barber : <span className="subdetail">{data.barberName}</span></p>
                                        <p>Total Price : <span className="subdetail">{data.price} Bath</span></p>
                                        <p>Time : <span className="subdetail">{data.time} minute</span></p>
                                    </div>
                                );
                            })
                        }
                    <div className="container_right_bt" >
                        <button
                            type="submit"
                            className="submit_button"
                        >
                            OK
                    </button>
                        <button
                            className="submit_button"
                            style={{ margin: '3% 0% 0% 2%' }}
                        >
                            Cancle
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingInfo_Cus;