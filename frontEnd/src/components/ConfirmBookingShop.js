import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment/moment'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class ConfirmBookingShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            startTime: '',
            stopTime: '',
            name: '',
            barberId: '',
            barberName:'',
            isLoading: true,
            shopId: '',
            bookingData: [],
            isElapes: '',
            isEqual: false,
        };
    }
    componentDidMount() {
        const baberName = this.props.adminStore.barberName;
        axios.get(`https://us-central1-g10ahair.cloudfunctions.net/api/bookingforbarber/${baberName}`)
            .then(res => {
                this.setState({bookingData: res.data})
                this.eventEmpty();
                this.setState({ isLoading: false })
                console.log(this.state.bookingData)
            })
    }

    eventEmpty = () => {
        const bookDate = this.props.adminStore.date
        const startTime = moment(this.props.adminStore.startTime)
        const stopTime = moment(this.props.adminStore.stopTime)
        const open = moment(this.props.adminStore.shopdata.openTime)
        const close = moment(this.props.adminStore.shopdata.closeTime)
        // if()
        if (open.hour() >= 12 && close.hour() <= 12) {
            close.add(1, "days");       // handle spanning days
        }
        const startisBetween = startTime.isBetween(open, close);
        const stopisBetween = stopTime.isBetween(open, close);
        if ((!startTime.isBefore(open) && !startTime.isAfter(open)) || (!stopTime.isBefore(close) && !stopTime.isAfter(close))) {
            this.setState({ isEqual: true });
        }
        if ((startisBetween && stopisBetween) || (startisBetween && this.state.isEqual) || (stopisBetween && this.state.isEqual) || (startTime != stopTime)) {
            console.log(this.state.bookingData)
            this.state.bookingData.forEach(booking => {
                console.log('sas')
                if (booking.date === bookDate) {
                    console.log('sasbook')
                    console.log(startTime,moment(booking.startTime))

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
                            <button className='confirmBT' onClick={() => {this.props.history.push('/filltimetable'); onClose();}}>OK</button>
                        </div>
                    );
                }
            });
        }
        this.onClickConfirm()
    }

    onClickConfirm = () => {
        if (this.state.isElapes) {
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='custom-ui'>
                            <h1 style={{ color: 'white', textAlign: 'center' }}>Booking Time Is ELAPSE !</h1>
                            <p>Please Select another Time</p>
                            <button className='confirmBT' onClick={() => {this.props.history.push('/filltimetableshop'); onClose();}}>OK</button>
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
                            <button className='confirmBT' onClick={() => {this.KeepData(); onClose();this.props.history.push('/filltimetableshop');}}>Yes</button>
                            <button
                                className='confirmBT'
                                onClick={() => {
                                    onClose();
                                    this.props.history.push('/homeshop');
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

    KeepData = () => {
        const bookData = {
            username: localStorage.getItem('username'),
            shopId: this.props.adminStore.shopId,
            barberId: this.props.adminStore.barberId,
            barberName: this.props.adminStore.barberName,
            date: this.props.adminStore.date,
            startTime: this.props.adminStore.startTime,
            stopTime: this.props.adminStore.stopTime,
        }
        console.log("Post: ",bookData)
        if (!this.state.isElapes) {
            axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/bookingsByShop', bookData, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
                .then(res => {
                    this.props.history.push('/filltimetableshop')
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
                
            </div>
        );
    }
}
const mapStateToProps = (state) => { //subscribe
    return {
        adminStore: state.AdminReducer.admin
    }
}
export default connect(mapStateToProps)(ConfirmBookingShop);