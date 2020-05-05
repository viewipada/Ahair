import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './navbar'
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
            color:[]
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
                    hairStyle: dataArray
                })

                console.log(this.state)
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
                                    <p>Hair Styles    </p>
                                        {
                                            this.state.hairStyle &&
                                            this.state.hairStyle.map(data=>{
                                                return(
                                                    <div key={data.hairStyles}>
                                                        <span className='subdetail'><i className='hand point right icon' style={{color:'#cb2d6f'}}></i>HairStyle : {data.hairName}</span>
                                                    </div>
                                                );
                                            })
                                        }
                                        {
                                            this.state.hairStyle &&
                                            this.state.hairStyle.map(data=>{
                                                return(
                                                    <div key={data.hairStyles}>
                                                        <span className='subdetail'><i className='hand point right icon' style={{color:'#cb2d6f'}}></i>color : {data.colors}</span>
                                                    </div>
                                                );
                                            })
                                        }
                                        
                                    <p>Barber         <span className="subdetail">{this.state.barber}</span></p>
                                    <p>Total Price    <span className="subdetail">{this.state.price} Bath</span></p>
                                    <p>Date           <span className="subdetail">{this.state.date}</span></p>
                                    <p>Time           <span className="subdetail">{this.state.startTime} - {this.state.stopTime} </span></p>
                                </div>
                            )
                    }

                    <div className="container_right_bt" >
                        <Link className='link' to='/noticeforcustomer'>
                            <button
                                type="submit"
                                className="submit_button"
                            >
                                OK
                    </button>
                        </Link>
                        {
                            this.state.done ?
                                (
                                    null
                                )
                                :
                                (
                                    <button
                                        className="submit_button"
                                        style={{ margin: '3% 0% 0% 2%' }}
                                        onClick={() => this.handleCancle()}
                                    >
                                        Cancle
                                    </button>
                                )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingInfo_Cus;