import React, { Component } from 'react'

export default class ShopItem_S extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { shopId, shopName, overview, poster_src, vote_average, release_date } = this.props.shop_item
        return (
            // ShopItem
            <div key={shopId} class="box_item" style={{ textAlign: 'left', paddingTop: '1em' }}>

                {/* shop image */}
                <div class="row_box"><img className="image_shop" src={poster_src} alt="" /></div>

                {/* shopName and shopRate */}
                <div class="sub_box_item" style={{ width: '20%' }}>
                    <a href="/shop"><h4 style={{ color: '#cb2c6f' }}>{shopName}</h4></a>
                    <p style={{ color: 'goldenrod' }}>shopRate : {vote_average}</p>
                </div>

                {/* shop location */}
                {/* เขียว color: '#14a098' */}
                <div class="sub_box_item">
                    <p style={{ color: '#cb2c6f' }}>Location</p>
                    <p style={{ color: '#cb2c6f' }}>{overview}</p>
                </div>

                {/* shop price */}
                <div class="sub_box_item">
                    <p style={{ color: '#cb2c6f' }}>Price</p>
                    <p style={{ color: '#cb2c6f' }}>{release_date}</p>
                </div>

            </div>
        );
    }
}