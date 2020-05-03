import React, { Component } from 'react';
import { db, auth, str } from '../services/firebase'
import Navbar from './navbar'

class BookingInfo_Cus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ''
        };
    }
    componentDidMount() {
        

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
                                <div className='BookInfo'>
                                    <p style={{ fontSize: '20px', color: '#14A098' }}>
                                        InfomationBill No #{data.id}</p>
                                    <p>Name : <p className="subdetail">{data.name}</p></p>
                                    <p>Hair Styles : <p className="subdetail">{data.hairStyle}</p></p>
                                    <p>Barber : <p className="subdetail">{data.barber}</p></p>
                                    <p>Total Price : <p className="subdetail">{data.price} Bath</p></p>
                                    <p>Time : <p className="subdetail">{data.timeStart} - {data.timeStop}</p></p>
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
                            style={{margin:'3% 0% 0% 2%'}}
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