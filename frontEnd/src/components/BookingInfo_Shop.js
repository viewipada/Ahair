import React, { Component } from 'react';
import Navbar from './NavBarShop';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BookingInfo_Cus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            hairStyle: [],
            startTime: '',
            stopTime: '',
            price: '',
            name: '',
            shopname: '',
            barber: '',
            isLoading: true,
            shopId: '',
            bookingId: '',
            done: ''
        };
    }
    componentDidMount() {
        const { bookingId } = this.props.match.params;
        const dataArray = [];
        axios.get(`https://us-central1-g10ahair.cloudfunctions.net/api/booking/${bookingId}`)
            .then((res) => {
                res.data.hairStyles.forEach(element => {
                    dataArray.push(element);
                });
                dataArray.map(data => {
                    this.state.hairStyle.push(data.hairName)
                })
                this.setState({
                    date: res.data.date,
                    startTime: res.data.startTime,
                    stopTime: res.data.stopTime,
                    price: res.data.total,
                    name: res.data.username,
                    shopname: res.data.shopName,
                    barber: res.data.barberName,
                    shopId: res.data.shopId,
                    isLoading: false,
                    bookingId: bookingId,
                    done: res.data.done
                })
                console.log(this.state.done)

            })
            .catch((err) => {
                console.log(err.response);
            })
    }
    handleCancle = () => {
        axios.delete(`https://us-central1-g10ahair.cloudfunctions.net/api/booking/${this.state.bookingId}`, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
            .then(res => {
                console.log(res.status)
                this.props.history.push('/noticeforcustomer');
            })
            .catch(err => {
                console.log(err.response)
            })
    }
    onClickStart = () => {
        axios.get(`https://us-central1-g10ahair.cloudfunctions.net/api/done/${this.state.bookingId}`, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
            .then(res => {
                this.props.history.push('/dontforgettoreview');
            })
            .catch(err => {
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
                        this.state.isLoading ? (
                            <div class="ui massive active centered inline loader"></div>
                        )
                            :
                            (
                                <div className='BookInfo' >
                                    <p>Name           <span className="subdetail">{this.state.name}</span></p>
                                    <p>Hair Styles    <span className="subdetail">{this.state.hairStyle.join(' , ')}</span></p>
                                    <p>Barber         <span className="subdetail">{this.state.barber}</span></p>
                                    <p>Total Price    <span className="subdetail">{this.state.price} Bath</span></p>
                                    <p>Date           <span className="subdetail">{this.state.date}</span></p>
                                    <p>Time           <span className="subdetail">{this.state.startTime} - {this.state.stopTime} </span></p>
                                </div>
                            )
                    }

                    <div className="container_right_bt" >
                        {
                            this.state.done ?
                                (
                                    <Link className='link' to='/shop'>
                                        <button
                                            className="submit_button"
                                        >
                                            OK
                                    </button>
                                    </Link>
                                )
                                :
                                (
                                    <div style={{display:'flex'}}>
                                        <button
                                            type="submit"
                                            className="submit_button"
                                            style={{ margin: '5% 0% 0% 2%' }}
                                            onClick={() => this.onClickStart()}
                                        >
                                            Start
                                </button>
                                        <button
                                            className="submit_button"
                                            style={{ margin: '5% 0% 0% 2%' }}
                                            onClick={() => this.handleCancle()}
                                        >
                                            Cancle
                                </button>
                                    </div>
                                )


                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default BookingInfo_Cus;