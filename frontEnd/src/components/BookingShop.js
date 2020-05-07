import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './navbar'
import { connect } from 'react-redux';
import moment from 'moment/moment'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


class BookingShop extends Component {

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
        console.log("Hi")
        const baberName = this.props.adminStore.barberName;
        axios.get(`https://us-central1-g10ahair.cloudfunctions.net/api/bookingforbarber/${baberName}`)
            .then(res => {
                this.setState({bookingData: res.data})
                this.eventEmpty();
                this.setState({ isLoading: false })
                console.log(this.state.bookingData)
            })
    }

    render() {
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}

const mapStateToProps = (state) => { //subscribe
    return {
        adminStore: state.AdminReducer.admin
    }
}

export default connect(mapStateToProps)(BookingShop);