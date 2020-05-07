import React, { Component } from 'react';
import moment from 'moment/moment'
import NavBar from './navbar'
import img1 from './pic/1.jpg'
import { connect } from 'react-redux';
import { Shop_5 } from '../redux/index'

import Timetable from 'react-timetable-events'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays'


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
            totalTime: this.props.shopStore.totalTime
        };
    }

    componentDidMount() {
        document.getElementById("myBtn").disabled = true
    }

    handleChange = date => {
        this.setState({
            calstartTime: date,
            startTime: moment(date).toISOString()
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
        })
    }

    handleSubmit = () => {
        this.setState({
            date:moment(this.state.calstartTime).format('L'),   
        },
        ()=>{
            console.log("Check: ",moment(this.state.calstartTime).format('L'),moment(this.state.calstopTime).format('L'))
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

                <div id="wrapper">
                    <div id="main">

                        <div class="inner">
                            <section>

                                <div class="topic" style={{ marginTop: '0.4em', marginLeft: '-1em' }}>
                                    <img class="shop_logo" src={this.props.shopStore.shopdata.imgUrl} />
                                    {this.props.shopStore.shopName}
                                </div>
                                <hr class="major" />
                                <div class="box_item2" style={{ padding: '0' }}>
                                    {/* Hair Style Info */}
                                    <div class="sub_box_item2" style={{ padding: '0' }}>
                                        <div class="box_item2" style={{ textAlign: 'left', marginLeft: '-4em' }}>
                                            {/* image */}
                                            {/* <div class="row_box"><img className="image_shop" src={img1} alt="" /></div> */}
                                            {/* เขียว color: '#cb2c6f' */}
                                            <div class="sub_box_item2" style={{ paddingTop: '1.5em' }}>
                                                <h1 style={{ color: '#cb2c6f' }}>{this.props.shopStore.barberName}</h1>
                                                {/* <p style={{ color: '#cb2c6f' }}>HairStyle Name</p> */}
                                                <h3 style={{ color: '#14a098' }}>{this.props.shopStore.totalTime} min.</h3>
                                                <h3 style={{ color: '#14a098' }}>{this.props.shopStore.total} baht</h3>
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