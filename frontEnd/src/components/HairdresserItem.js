import React, { Component } from 'react'
import img1 from './pic/1.jpg';
import userIcon from './pic/default_user.jpg'

export default class HairdresserItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { barberId, barberName, phoneNum } = this.props.barber_item
        return (

            // ShopItem
            <div class="box_item" style={{ textAlign: 'left',border:'0',borderRadius:'20px'}}>

                {/* hairdresser image */}
                {/* <div className="image_upload" > */}
                    <div className = "wrap_preview_barber">
                        <img 
                            className = "image_preview"
                            alt = ""
                            id = "profile"
                            src = {userIcon }           
                        />
                    </div>
                {/* </div> */}
                {/* hairdresser information */}
                {/* เขียว color: '#cb2c6f' */}
                <div class="sub_box_item" style={{width:'80%'}}>
                    <h3 style={{ color: '#14a098' }}>{barberName}</h3>
                    <p style={{ color: '#14a098' }}>Tel. {phoneNum}</p>
                </div>
            </div>
        );
    }
}