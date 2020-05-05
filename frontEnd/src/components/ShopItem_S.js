import React, { Component } from 'react'
import { Rating } from 'semantic-ui-react'

export default class ShopItem_S extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { shopId, shopName, address, phoneNum, averageRate, email, imgUrl } = this.props.shop_item
        return (
            // ShopItem
            <div class="box_item" style={{ textAlign: 'left', paddingTop: '1em' }}>

                {/* {console.log(JSON.stringify({shopId}))} */}
                {/* shop image */}
                <div class="row_box"><img className="image_shop" src={imgUrl} alt="" /></div>

                {/* shopName and shopRate */}
                <div class="sub_box_item" style={{ width: '20%' }}>
                    <h3 style={{ color: '#cb2c6f' }}>{shopName}</h3>
                    <Rating icon='star' style={{  }} defaultRating={parseInt(averageRate, 10)} maxRating={5} disabled style={{ paddingLeft: '1.5em' }}/>
                    {/* <p style={{ color: 'gold' }}>Rate: {averageRate}</p>  */}
                </div>

                {/* shop location */}
                {/* เขียว color: '#14a098' */}
                <div class="sub_box_item">
                    <h4 style={{ color: '#cb2c6f' }}>Location</h4>
                    <p style={{ color: '#cb2c6f' }}>{address}</p>
                </div>

                {/* shop price */}
                <div class="sub_box_item">
                    <h4 style={{ color: '#cb2c6f' }}>Contact</h4>
                    <p style={{ color: '#cb2c6f' }}>Tel. {phoneNum}</p>
                    <p style={{ color: '#cb2c6f' }}>Email: {email}</p>
                </div>

            </div>
        );
    }
}