import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './navbar'

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
            barber: ''
        };
    }
    componentDidMount() {
        const id = 'sg3LITjTkc3YZ5cXReSH';
        const dataArray = [];
        axios.get(`https://us-central1-g10ahair.cloudfunctions.net/api/booking/${id}`)
            .then((res) => {
                res.data.hairStyles.forEach(element => {
                    dataArray.push(element);
                });
                dataArray.map(data=>{
                    this.state.hairStyle.push(data.hairName)
                })
                this.setState({date:res.data.date})
                this.setState({startTime:res.data.startTime})
                this.setState({stopTime:res.data.stopTime})
                this.setState({price:res.data.total})
                this.setState({name:res.data.username})
                this.setState({shopname:res.data.shopName})
                this.setState({barber:res.data.barberName})
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
                    <div className='BookInfo' >
                        <p>Name :           <span className="subdetail">{this.state.name}</span></p>
                        <p>Hair Styles :    <span className="subdetail">{this.state.hairStyle.join(' , ')}</span></p>
                        <p>Barber :         <span className="subdetail">{this.state.barber}</span></p>
                        <p>Total Price :    <span className="subdetail">{this.state.price} Bath</span></p>
                        <p>Date :           <span className="subdetail">{this.state.date}</span></p>
                        <p>Time :           <span className="subdetail">{this.state.startTime} - {this.state.stopTime} </span></p>
                    </div>
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