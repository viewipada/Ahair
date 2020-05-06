import React, { Component } from 'react';
import Navbar from './NavBarShop';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Rating } from 'semantic-ui-react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import moment from 'moment/moment'
import StarRatings from 'react-star-ratings';


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
            done: '',
            averageRate: '0',
            color: '',
            startTime: ''
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
                    done: res.data.done,
                    hairStyle: dataArray,
                    startTime: res.data.startTime
                })
                axios.get(`https://us-central1-g10ahair.cloudfunctions.net/api/reviewfromShop/${this.state.name}`)
                    .then(res => {
                        this.setState({ averageRate: parseInt(res.data.averageRate) })
                        
                    })
                    .catch((err) => {
                        console.log(err.response);
                    })

            })
            .catch((err) => {
                console.log(err.response);
            })
    }
    handleCancle = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <h1 style={{ color: 'white', textAlign: 'center' }}>Are you sure to CANCEL this Booking?</h1>
                        <button className='confirmBT' onClick={() => { this.delBook(); onClose(); }}>Yes</button>
                        <button
                            className='confirmBT'
                            onClick={() => {
                                onClose();
                            }}
                        >
                            No
                      </button>
                    </div>
                );
            }
        });
    }
    delBook = () => {
        axios.delete(`https://us-central1-g10ahair.cloudfunctions.net/api/bookingfromshop/${this.state.bookingId}`, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
            .then(res => {
                console.log(res.status)
                this.props.history.push('/noticeforshop');
            })
            .catch(err => {
                console.log(err.response)
            })
    }
    onClickStart = () => {
        if (moment().isAfter(moment(this.state.startTime)) || (!moment().isBefore(moment(this.state.startTime)) && !moment().isAfter(moment(this.state.startTime)))) {
            axios.get(`https://us-central1-g10ahair.cloudfunctions.net/api/done/${this.state.bookingId}`, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
                .then(res => {
                    this.props.history.push('/dontforgettoreview');
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
        else {
            console.log(moment().isAfter(moment(this.state.startTime)))
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='custom-ui'>
                            <h1 style={{ color: 'white', textAlign: 'center' }}>It not a Booking Time!</h1>
                            <button
                                className='confirmBT'
                                onClick={() => {
                                    onClose();
                                }}
                            >
                                OK
                      </button>
                        </div>
                    );
                }
            });
        }

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
                        }}><i className></i>New Booking</h1>
                    </div>
                    {
                        this.state.isLoading ? (
                            <div class="ui massive active centered inline loader"></div>
                        )
                            :
                            (
                                <div className='BookInfo' >
                                    <p>Name           <span className="subdetail">{this.state.name}
                                        (rate : {parseFloat(this.state.averageRate).toFixed(2)})</span> </p>
                                    <p>Hair Styles    </p>
                                    {
                                        this.state.hairStyle &&
                                        this.state.hairStyle.map(data => {
                                            return (
                                                <div key={data.hairStyles}>
                                                    <span className='subdetail'><i className='hand point right icon' style={{ color: '#cb2d6f' }}></i>HairStyle : {data.hairName}</span>
                                                </div>
                                            );
                                        })
                                    }
                                    {
                                        this.state.hairStyle &&
                                        this.state.hairStyle.map(data => {
                                            return (
                                                <div key={data.hairStyles}>
                                                    {data.colors ?
                                                        <span className='subdetail'><i className='hand point right icon' style={{ color: '#cb2d6f' }}></i>color : {data.colors}</span>
                                                        : null
                                                    }
                                                </div>
                                            );
                                        })
                                    }
                                    <p>Barber         <span className="subdetail">{this.state.barber}</span></p>
                                    <p>Total Price    <span className="subdetail">{this.state.price} Bath</span></p>
                                    <p>Date           <span className="subdetail">{this.state.date}</span></p>
                                    <p>Time           <span className="subdetail">{moment(this.state.startTime).format('kk:mm')} - {moment(this.state.stopTime).format('kk:mm')} </span></p>
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
                                    <div style={{ display: 'flex' }}>
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