import React, { Component } from 'react';
import Navbar from './navbar'
import Axios from 'axios';


class notice_Cus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notice: '',
            icon: 'null',
            image: 'null',
            noticecontent: [],
            noticestage: null,
            bookingId: '',
            canReview: true,
            isLoading: true,
            done: '',
            isEmpty:false
        };
    }
    componentDidMount() {
        Axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/booking', { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
            .then(res => {
                this.setState({ noticecontent: res.data, isLoading: false })
                console.log(res.data)
                if(this.state.noticecontent.length===0){
                    this.setState({isEmpty:true})
                }
                console.log(this.state.isEmpty)
            })
            .catch(err => {
                console.log(err.response);
            })
    }
    onclickBooking(bookingId) {
        this.props.history.push(`/bookInfo_Cus/${bookingId}`)
    }
    onclickReview(bookingId, reviewed) {
        if (reviewed) {
            this.props.history.push(`/thank4Review_Cus/${bookingId}`);
        }
        else {
            this.props.history.push(`/ReviewforCustomer/${bookingId}`)
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="Format_Container">
                    <div className="title">
                        <h1 className='NoticeTitle'
                            style={{
                                color: "#cb2c6f",
                                fontSize: "30px",
                                fontFamily: "cloud",
                            }}>Notification
                    </h1>
                    </div>
                    {
                        (this.state.isEmpty && !this.state.isLoading)?
                        <div>
                            <h1 style={{color:'white', fontSize:'250%',textAlign:'center'}}> No Notification Now </h1>
                        </div>
                        :null
                    }
                    <div>
                        {
                            !this.state.isLoading ?
                                (
                                    this.state.noticecontent &&
                                    this.state.noticecontent.map((data) => {
                                        return (

                                            <div key={data.bookingId}>
                                                {
                                                    (data.done && !data.reviewedFromUser) ?
                                                        (
                                                            <button className='NoticeContent' onClick={() => this.onclickReview(data.bookingId, data.reviewedFromUser)}>
                                                                <p style={{ margin: '10px 0px 0px 20px', fontSize: '20px' }}><i className='thumbs up icon'></i> Review your new Look!</p>
                                                                <p
                                                                    style={{
                                                                        margin: '0px 0px 20px 25px',
                                                                        fontSize: '10px',
                                                                        color: '#8DE8E3',
                                                                    }}>
                                                                    order number #{data.bookingId}
                                                                </p>
                                                                <p style={{ marginLeft: '20px', color: "white", fontSize: '10px', marginBottom: '20px' }}>
                                                                    <i className="hand point right outline icon" style={{ color: 'white' }}></i>
                                                click for more information</p>
                                                            </button>
                                                        )
                                                        :
                                                        (null)
                                                }
                                                < button className='NoticeContent' onClick={() => this.onclickBooking(data.bookingId)}>
                                                    <p style={{ margin: '10px 0px 0px 20px', fontSize: '20px' }}>
                                                    <i className='thumbtack icon'></i>    {data.done?'Booking Information (Done!)':'Booking Information'}</p>
                                                    <p
                                                        style={{
                                                            margin: '0px 0px 20px 25px',
                                                            fontSize: '10px',
                                                            color: '#8DE8E3',
                                                        }}>
                                                        order number #{data.bookingId}
                                                    </p>
                                                    <p style={{ marginLeft: '20px', color: "white", fontSize: '10px', marginBottom: '20px' }}>
                                                        <i className="hand point right outline icon" style={{ color: 'white' }}></i>
                                                    click for more information</p>
                                                </button>

                                            </div>
                                        );
                                    })
                                )
                                :
                                (
                                    <div className="ui massive active centered inline loader"></div>
                                )

                        }

                    </div>
                </div>
            </div >
        );
    }
}



export default (notice_Cus);