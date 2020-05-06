import React, { Component } from 'react';
import moment from 'moment/moment'
import shopIcon from './pic/1.jpg'
import Sidebar from './Sidebar'
import NavBar from './navbar'
import img1 from './pic/1.jpg'
import { connect } from 'react-redux';
import { Admin_3 } from '../redux/index'

import Timetable from 'react-timetable-events'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays'

class SelectTimeShop extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            timetableProps: this.props.adminStore.timetableProps,
            date: new Date(),
            startTime: new Date(),
            stopTime: new Date(),
            calstartTime: new Date(),
            calstopTime: new Date(),
            start: false,
            stop: false
        };
    }

    componentDidMount() {
        document.getElementById("myBtn").disabled = true
    }

    handleChangeStartTime = date => {
        this.checkBT("start")
        this.setState({
            calstartTime: date,
            startTime: moment(date).toISOString()
        },()=>{
            console.log("Cstart: ",this.state)
        });
    };

    handleSelectStartTime = date => {
        this.checkBT("start")
        this.setState({
            calstartTime: date,
            startTime: moment(date).toISOString()
        },()=>{
            console.log("Sstart: ",this.state)
        });
    }

    handleChangeStopTime = date => {
        this.checkBT("stop")
        this.setState({
            calstopTime: date,
            stopTime: moment(date).toISOString()
        },()=>{
            console.log("Cstop: ",this.state)
        });
    };

    handleSelectStopTime = date => {
        this.checkBT("stop")
        this.setState({
            calstopTime: date,
            stopTime: moment(date).toISOString()
        },()=>{
            console.log("Sstop: ",this.state)
        });
    }

    checkBT = (key) => {
        if(key==="start"&&!this.state.start){
            this.setState({ start: true})
        }
        if(key==="stop"&&!this.state.stop){
            this.setState({ stop: true})
        }
        if(this.state.start&&this.state.stop){
            document.getElementById("myBtn").disabled = false
        }
    }

    handleSubmit = () => {
        this.setState({
            date:moment(this.state.calstartTime).format('L'),   
        },
        ()=>{
            this.submit()
        })
    }

    submit = () => {
        console.log("handleSubmitSelectTime :", this.state)
        this.props.admin(this.state)
        this.props.history.push('/confirmbookingshop')
    }

    render() {
        return (
            <body class="is-preload">

                <NavBar />

                {/* <!-- Wrapper --> */}
                <div id="wrapper">

                    {/* Sidebar */}
                    {/* <Sidebar /> */}

                    {/* <!-- Main --> */}
                    <div id="main">

                        {/* <!-- Content --> */}
                        <div class="inner">
                            <section>

                                {/* Topic */}
                                <div class="topic" style={{ marginTop: '0.4em', marginLeft: '-1em' }}>
                                    <a href="/shop"><img class="shop_logo" src={shopIcon} /></a>
                                    {localStorage.getItem('shopname')}
                                </div>
                                <hr class="major" />

                                <div class="box_item2" style={{ padding: '0' }}>
                                    {/* Hair Style Info */}
                                    <div class="sub_box_item2" style={{ padding: '0' }}>
                                        <div class="box_item2" style={{ textAlign: 'left', marginLeft: '-4em' }}>
                                            {/* image */}
                                            <div class="row_box"><img className="image_shop" src={img1} alt="" /></div>
                                            {/* เขียว color: '#cb2c6f' */}
                                            <div class="sub_box_item2" style={{ paddingTop: '1.5em' }}>
                                                <h3 style={{ color: '#cb2c6f' }}>{this.props.adminStore.barberName}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* select time */}
                                    <div class="sub_box_item2" style={{ borderRadius: '20px', backgroundColor: '#ffffff0e', margin: '1em 0 1em 0' }}>
                                        <h3 style={{ color: '#cb2c6f', marginTop: '1em' }}>Select time</h3>
                                        <div class="sub_box_item3" style={{ textAlign: 'left', paddingLeft: '1em' }}>
                                            <h3 style={{ color: '#cb2c6f' }}>Start time</h3>
                                            <DatePicker
                                                className="wrap_input_time"
                                                selected={this.state.calstartTime}
                                                onSelect={this.handleSelectStartTime} //when day is clicked
                                                onChange={this.handleChangeStartTime} //only when value has changed
                                                minDate={new Date()}
                                                maxDate={addDays(new Date(), 1)}
                                                placeholderText="Select Start Time"
                                                showTimeInput
                                                timeInputLabel="Time:"
                                                dateFormat="MM/dd/yyyy h:mm aa"
                                            />
                                            <h3 style={{ color: '#cb2c6f', marginTop: '0.5em' }}>Stop time</h3>
                                            <DatePicker
                                                className="wrap_input_time"
                                                selected={this.state.calstopTime}
                                                onSelect={this.handleSelectStopTime} //when day is clicked
                                                onChange={this.handleChangeStopTime} //only when value has changed
                                                minDate={new Date()}
                                                maxDate={addDays(new Date(), 1)}
                                                placeholderText="Select Start Time"
                                                showTimeInput
                                                timeInputLabel="Time:"
                                                dateFormat="MM/dd/yyyy h:mm aa"
                                            />
                                            <form className="container_next" onSubmit={this.handleSubmit} >
                                                <button id="myBtn" className="login_button" type="submit" onClick={this.handleSubmit}>
                                                    OK
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <Timetable {...this.props.adminStore.timetableProps} />

                            </section>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

const mapStateToProps = (state) => { //subscribe
    return {
        adminStore: state.AdminReducer.admin
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        admin: (data) => dispatch(Admin_3(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTimeShop);