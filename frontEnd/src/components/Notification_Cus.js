import React, { Component } from 'react';

class Notification_Cus extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    bookingNotice=()=>{
        
    }
    render() {
        return (
            <div className="Format_Container">
                <div className="title">
                    <h1 className='NoticeTitle'
                        style={{ 
                            color: "#cb2c6f", 
                            fontSize: "30px" 
                            }}>Notification
                    </h1>
                </div>
            </div>
        );
    }
}

export default Notification_Cus;