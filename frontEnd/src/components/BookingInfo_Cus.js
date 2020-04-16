import React, { Component } from 'react';

class BookingInfo_Cus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: 'null'
        };
    }
    componentDidMount() {
        db.collection('BookingInfo')
            .get()
            .then(snapshot => {
                const data = [];
                snapshot.forEach(doc => {
                    const tmp = doc.data()
                    data.push(tmp)
                })
                this.setState({
                    info: data
                });
            })
            .catch(error => console.log(error))

    }
    render() {
        return (
            <div>
                {
                    this.state.info &&
                    this.state.info.map(data => {
                        return (
                            <div className='NoticeContent'>
                                <p style={{ margin: '10px 0px 0px 20px', fontSize: '20px' }}>
                                    {
                                        this.noticetypecheck ?
                                            <i className="calendar check icon" style={{ color: "white" }}></i>
                                            : <i className="star icon" style={{ color: "white" }}></i>
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
                                    <i className="hand point right outline icon" style={{ color: 'white' }}></i>
                                            click for more information</a>
                            </div>
                        );

                    })
                }
            </div>
        );
    }
}

export default BookingInfo_Cus;