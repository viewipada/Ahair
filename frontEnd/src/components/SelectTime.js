import React, { Component } from 'react';
import Axios from 'axios'
import moment from 'moment/moment'
import shopIcon from './pic/1.jpg'
import Sidebar from './Sidebar'
import NavBar from './navbar'
import img1 from './pic/1.jpg'
import { connect } from 'react-redux';
import { Shop_5 } from '../redux/index'

import Timetable from 'react-timetable-events'

// import { Grid, Image } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import format from "date-fns/format";

class SelectTime extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            timetableProps: this.props.shopStore.timetableProps,
            date: new Date(),
            startTime: new Date(),
            stopTime: new Date(),
            calstartTime: new Date(),
            showstopTime: new Date(),
            totalTime: 90
            // moment().toISOString()
        };
    }

    componentDidMount() {
        // console.log("Timetable: ", this.state.timetableProps)
        // console.log("shopStore: ", this.props.shopStore)
        // console.log("Datepicker", setHours(setMinutes(new Date(), 0), 7))
        // console.log(moment('2018-02-23T11:30:00').format('LLL'))
        document.getElementById("myBtn").disabled = true
    }

    handleChange = date => {
        this.setState({
            calstartTime: date,
            startTime: moment(date).toISOString()
        },
            () => {
                console.log("Change: ", this.state)
            });
    };

    handleSelect = date => {
        if (document.getElementById("myBtn").disabled) {
            document.getElementById("myBtn").disabled = false
        } 
        this.setState({
            calstartTime: date,
            startTime: moment(date).toISOString()
        },
            () => {
                console.log("Select: ", this.state)
                this.calculateStoptime()
            });
    }

    calculateStoptime = () => {
        this.setState({ 
            stopTime: moment(this.state.calstartTime).add(this.state.totalTime, 'minutes').toISOString(),
            showstopTime: moment(this.state.calstartTime).add(this.state.totalTime, 'minutes')
        },
            () => {
                console.log("StopTime: ",this.state)
                console.log("datewithmomentandISOSrting: ",moment(this.state.date).toISOString())
            })
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
        this.props.shop(this.state)
        this.props.history.push('/confirmbooking')
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
                                    {this.props.shopStore.shopName}
                                </div>
                                <hr class="major" />

                                {/* Edit Button for admin */}
                                {/* <Link className="link" to="/shop">
                                    <button type="back" name="Signin">Edit</button>
                                </Link> */}


                                <div class="box_item2" style={{ padding: '0' }}>
                                    {/* Hair Style Info */}
                                    <div class="sub_box_item2" style={{ padding: '0' }}>
                                        <div class="box_item2" style={{ textAlign: 'left', marginLeft: '-4em' }}>
                                            {/* image */}
                                            <div class="row_box"><img className="image_shop" src={img1} alt="" /></div>
                                            {/* เขียว color: '#cb2c6f' */}
                                            <div class="sub_box_item2" style={{ paddingTop: '1.5em' }}>
                                                <h3 style={{ color: '#cb2c6f' }}>{this.props.shopStore.barbarName}</h3>
                                                {/* <p style={{ color: '#cb2c6f' }}>HairStyle Name</p> */}
                                                <p style={{ color: '#14a098' }}>{this.props.shopStore.totalTime} hr.</p>
                                                <p style={{ color: '#14a098' }}>{this.props.shopStore.total} Bath</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <p style={{ color: '#14a098'}}>{moment(createAt).format('LLL')}</p> */}

                                    {/* select time */}
                                    <div class="sub_box_item2" style={{ borderRadius: '20px', backgroundColor: '#ffffff0e', margin: '1em 0 1em 0' }}>
                                        <h3 style={{ color: '#cb2c6f', marginTop: '1em' }}>Select time</h3>
                                        <div class="sub_box_item3" style={{ textAlign: 'left', paddingLeft: '1em' }}>
                                            <h3 style={{ color: '#cb2c6f' }}>Start time</h3>

                                            <DatePicker
                                                className="wrap_input_time"
                                                selected={this.state.calstartTime}
                                                onSelect={this.handleSelect} //when day is clicked
                                                onChange={this.handleChange} //only when value has changed
                                                minDate={new Date()}
                                                maxDate={addDays(new Date(), 1)}
                                                placeholderText="Select Start Time"
                                                showTimeInput
                                                timeInputLabel="Time:"
                                                excludeTimes={[
                                                    setHours(setMinutes(new Date(), 0), 7),
                                                    setHours(setMinutes(new Date(), 30), 18),
                                                    setHours(setMinutes(new Date(), 0), 9),
                                                    setHours(setMinutes(new Date(), 30), 17)
                                                ]}
                                                minTime={setHours(setMinutes(new Date(), 0), 0)}
                                                maxTime={setHours(setMinutes(new Date(), 30), 20)}
                                                dateFormat="MM/dd/yyyy h:mm aa"
                                            />
                                            <h3 style={{ color: '#cb2c6f', marginTop: '0.5em' }}>Stop time</h3>
                                            <h3 style={{ color: '#cb2c6f',marginTop:'0.5em' }}>{moment(this.state.stopTime).format('L')} {moment(this.state.stopTime).format('LT')}</h3>
                                            <form className="container_next" onSubmit={this.handleSubmit} >
                                                <button id="myBtn" className="login_button" type="submit" onClick={this.handleSubmit}>
                                                    Next
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <Timetable {...this.props.shopStore.timetableProps} />

                            </section>
                        </div>
                    </div>
                </div>
            </body >
        );
    }
}

const mapStateToProps = (state) => { //subscribe
    return {
        shopStore: state.ShopReducer.shop
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        shop: (data) => dispatch(Shop_5(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTime);