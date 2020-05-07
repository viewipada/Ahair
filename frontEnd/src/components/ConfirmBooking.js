import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './navbar'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment/moment'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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
            bookingData: [],
            isElapes: '',
            userId: '',
            isEqual: false,
            dataColor: [],
            isSame:false,
        };
    }
    componentDidMount() {
        const baberName = this.props.shopStore.barberName;
        axios.get(`https://us-central1-g10ahair.cloudfunctions.net/api/bookingforbarber/${baberName}`)
            .then(res => {
                this.setState({ bookingData: res.data })
                this.eventEmpty();
                this.props.shopStore.hairStyles.forEach(data => {
                    this.state.dataColor.push(data.color)
                })
                this.setState({ isLoading: false })
                console.log(this.state.bookingData)
            })
    }

    eventEmpty = () => {
        const bookDate = this.props.shopStore.date
        const startTime = moment(this.props.shopStore.startTime)
        const stopTime = moment(this.props.shopStore.stopTime)
        const open = moment(this.props.shopStore.shopdata.openTime).format('kk:mm').split(':')
        const close = moment(this.props.shopStore.shopdata.closeTime).format('kk:mm').split(':')
        const startTimeT = moment(this.props.shopStore.startTime).format('kk:mm').split(':')
        const stopTimeT = moment(this.props.shopStore.stopTime).format('kk:mm').split(':')
        const startTimes=[]
        const stopTimes=[]
        const opens=[]
        const closes=[]
        open.forEach(data=>{
            opens.push(parseInt(data))
        })
        close.forEach(data=>{
            closes.push(parseInt(data))
        })
        stopTimeT.forEach(data=>{
            stopTimes.push(parseInt(data))
        })
        startTimeT.forEach(data=>{
            startTimes.push(parseInt(data))
        })

        if((startTimes[0]>=opens[0]&&startTimes[0]<=closes[0]&&stopTimes[0]<=closes[0]&&stopTimes[0]<=closes[0])){
            if((startTimes[1]<=opens[1]||stopTimes[1]<=opens[1])&&(startTimes[1]<=closes[1]||stopTimes[1]<=closes[1])){
            console.log('hereeeeeeeee')

                this.setState({isSame:true})
            }
        }
        
        console.log('isSame',this.state.isSame)
        if (this.state.isSame) {
            this.state.bookingData.forEach(booking => {
                console.log('sas')
                if (booking.date === bookDate) {
                    console.log('sasbook')
                    console.log(startTime, moment(booking.startTime))

                    if (!startTime.isBefore(moment(booking.startTime)) && startTime.isBefore(moment(booking.stopTime))) {
                        this.setState({ isElapes: true })
                        return false
                    }
                    else if (!stopTime.isBefore(moment(booking.startTime)) && stopTime.isBefore(moment(booking.stopTime))) {
                        this.setState({ isElapes: true })
                        return false
                    }
                    else {
                        console.log('time not elape!!')
                    }
                }
            })
        }
        else {
            this.setState({ isElapes: true })
            console.log('here')
        }
        if (this.state.isElapes) {
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='custom-ui'>
                            <h1 style={{ color: 'white', textAlign: 'center' }}>Booking Time Is ELAPSE !</h1>
                            <p>Please Select another Time</p>
                            <button className='confirmBT' onClick={() => { this.props.history.push('/filltimetable'); onClose(); }}>OK</button>
                        </div>
                    );
                }
            });
        }

    }

    onClickConfirm = () => {
        if (this.state.isElapes) {
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='custom-ui'>
                            <h1 style={{ color: 'white', textAlign: 'center' }}>Booking Time Is ELAPSE !</h1>
                            <p>Please Select another Time</p>
                            <button className='confirmBT' onClick={() => { this.props.history.push('/filltimetable'); onClose(); }}>OK</button>
                        </div>
                    );
                }
            });
        }
        else {
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='custom-ui'>
                            <h1 style={{ color: 'white', textAlign: 'center' }}>Are you sure to Booking?</h1>
                            <button className='confirmBT' onClick={() => { this.KeepData(); onClose(); }}>Yes</button>
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

    }

    handleCancle = () => {
        this.props.history.push('/home');
    }

    KeepData = () => {
        const bookData = {
            shopId: this.props.shopStore.shopId,
            shopName: this.props.shopStore.shopName,
            barberId: this.props.shopStore.barberId,
            barberName: this.props.shopStore.barberName,
            hairStyles: this.props.shopStore.hairStyles,
            total: this.props.shopStore.total,
            date: this.props.shopStore.date,
            startTime: this.props.shopStore.startTime,
            stopTime: this.props.shopStore.stopTime,
        }
        if (!this.state.isElapes) {
            axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/bookings', bookData, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
                .then(res => {
                    this.props.history.push('/noticeforcustomer')
                    console.log(res)
                })
                .catch(err => {
                    console.log(err.response)
                })
        }
    };

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
                        }}>Confirm Booking</h1>
                    </div>
                    {
                        this.state.isLoading ? (
                            <div class="ui massive active centered inline loader"></div>
                        )
                            :
                            (
                                <div className='BookInfo' >
                                    <p>Name           <span className="subdetail">{localStorage.getItem('username')}</span></p>
                                    <p>Hair Styles    </p>
                                    {
                                        this.props.shopStore.hairStyles &&
                                        this.props.shopStore.hairStyles.map(data => {
                                            return (
                                                <div key={data.hairStyles}>
                                                    <span className='subdetail'><i className='hand point right icon' style={{ color: '#cb2d6f' }}></i>HairStyle : {data.hairName}</span>
                                                </div>
                                            );
                                        })
                                    }
                                    <div>
                                        {this.state.dataColor != '' ?
                                            <span className='subdetail'><i className='hand point right icon' style={{ color: '#cb2d6f' }}></i>color : {this.state.dataColor}</span>
                                            : null}

                                    </div>



                                    <p>Barber         <span className="subdetail">{this.props.shopStore.barberName}</span></p>
                                    <p>Total Price    <span className="subdetail">{this.props.shopStore.total} Bath</span></p>
                                    <p>Date           <span className="subdetail">{this.props.shopStore.date}</span></p>
                                    <p>Time           <span className="subdetail">{moment(this.props.shopStore.startTime).format("kk:mm")} - {moment(this.props.shopStore.stopTime).format("kk:mm")} </span></p>
                                </div>
                            )
                    }

                    <div className="container_right_bt" >

                        <button
                            type="submit"
                            className="submit_button"
                            onClick={() => this.onClickConfirm()}
                        >
                            OK
                    </button>

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
            </div >
        );
    }
}
const mapStateToProps = (state) => { //subscribe
    return {
        shopStore: state.ShopReducer.shop
    }
}
export default connect(mapStateToProps)(BookingInfo_Cus);