import React, { Component } from 'react';
import { db, auth, str } from '../services/firebase'
import Navbar from './NavBarShop'

class notice_Cus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notice: '',
            icon: 'null',
            image: 'null',
            noticecontent: 'null',
            noticestage: null
        };
    }

    componentDidMount() {
        db.collection('notification')
            .orderBy('createdAt')
            .get()
            .then(snapshot => {
                const data = [];
                snapshot.forEach(doc => {
                    const tmp = doc.data()
                    data.push(tmp)
                })
                this.setState({
                    notice: data,
                });
            })
            .catch(error => console.log(error))

    }


    render() {
        return (
            <div>
                <Navbar/>
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
                    <div>
                        {
                            this.state.notice &&
                            this.state.notice.map(data => {
                                return (
                                    <button className='NoticeContent'>
                                        <p style={{ margin: '10px 0px 0px 20px',fontSize:'20px' }}>
                                            {
                                                data.content==="Booking Infomation"?
                                                    <i className="calendar check icon" style={{color: "white" }}></i>
                                                    :<i className="star icon" style={{color: "white" }}></i>
                                            }
                                                {data.content}</p>
                                        <p
                                            style={{
                                                margin: '0px 0px 20px 25px',
                                                fontSize: '10px',
                                                color: '#8DE8E3',
                                            }}>
                                            order number #{data.id}
                                        </p>
                                        <a href='#' style={{ marginLeft: '20px', color: "white", fontSize: '10px', marginBottom: '20px' }}>
                                            <i className="hand point right outline icon" style={{color:'white'}}></i>
                                            click for more information</a>
                                    </button>
                                );

                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default notice_Cus;