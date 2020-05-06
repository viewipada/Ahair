import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux';
import { Admin_2 } from '../redux/index'
import moment from 'moment/moment'

class FillTimeTableShop extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // today: moment(new Date()).format('L'),
            // tomorrow: moment(new Date().setDate(new Date().getDate()+1)).format('L'),
            today: "22/05/2020",
            tomorrow: "27/05/2020",
            bookingdata: [],
            timetableProps: {
                events: {
                    Today: [],
                    Tomorrow: []
                },
                // hoursInterval: [moment(this.props.adminStore.shopdata.openTime).hour(), moment(this.props.adminStore.shopdata.closeTime).hour()],
                hoursInterval: [8, 20],
                timeLabel: "Time",
                renderHour(hour, defaulAttributes, styles) {
                    return (
                        <div {...defaulAttributes} key={hour}>
                            {hour}
                        </div>
                    );
                },
                renderEvent(event, defaultAttributes, styles) {
                    return (
                        <div {...defaultAttributes} title={event.name} key={event.id}>
                            <span className={styles.event_info}>หมายเลขการจอง {event.name}</span>
                            <span className={styles.event_info}>
                                {event.startTime.format("HH:mm")} - {" "}
                                {event.endTime.format("HH:mm")}
                            </span>
                        </div>
                    );
                }
            }
        };
    }

    componentDidMount() {
        // this.getBooking(this.props.shopStore.barbarName)
        // console.log("TomorrowDate",moment(new Date().setDate(new Date().getDate()+1)).format('L'))
        // console.log("test: ",moment(this.props.shopStore.shopdata.openTime).hour(),moment(this.props.shopStore.shopdata.closeTime).hour())
        this.getBooking('idea')
    }

    getBooking = (keyword) => {
        var dataArray = []
        var url = "https://us-central1-g10ahair.cloudfunctions.net/api/bookingforbarber/" + keyword;
        Axios.get(url).then(result => {
            const dataCount = result.data.length
            if (dataCount === undefined) {
                this.setState({ bookingdata: result.data })
            }
            else {
                result.data.forEach(item => {
                    dataArray.push(item)
                })
                this.setState({ bookingdata: dataArray });
            }
            this.fillEvent()
        })
    }

    fillEvent = () => {
        var id = 0
        console.log("booking: ",this.state.bookingdata)
        this.state.bookingdata.forEach(book => {
            // console.log("test: ", book.date)
            if (book.date === this.state.today) {
                this.state.timetableProps.events.Today.push({
                    id: id,
                    name: book.bookingId,
                    type: 'Invalid',
                    startTime: moment(book.startTime),
                    endTime: moment(book.stopTime)
                })
            }
            if (book.date === this.state.tomorrow) {
                this.state.timetableProps.events.Tomorrow.push({
                    id: id,
                    name: book.bookingId,
                    type: 'Invalid',
                    startTime: moment(book.startTime),
                    endTime: moment(book.stopTime)
                })
            }
            id += 1
        })
        this.handleSubmit()
    }

    handleSubmit = () => {
        console.log("handleSubmitFillTimeTable :", this.state)
        this.props.admin(this.state)
        this.props.history.push('/selecttimeshop')
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
const mapStateToProps = (state) => { //subscribe
    return {
        adminStore: state.AdminReducer.admin
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        admin: (data) => dispatch(Admin_2(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FillTimeTableShop);