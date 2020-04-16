import React, { Component } from 'react'

export default class HairStyleItem_S extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {

        const { id, title, vote_average, poster_src, release_date, original_title } = this.props.movie

        return (   
             // ShopItem            
            <div key={id} class="box_item" style={{ textAlign: 'left', paddingTop: '1em' }}>

                    {/* shop image */}
                    <div class="row_box"><img className="image_shop" src={poster_src} alt="" /></div>

                    {/* shopName and shopRate */}
                    <div class="sub_box_item" style={{ width: '20%' }}>
                        <h4 style={{ color: '#14a098' }}>{title}</h4>
                    </div>

                    {/* shop location */}
                    {/* เขียว color: '#cb2c6f' */}
                    <div class="sub_box_item">
                        <p style={{ color: '#14a098' }}>Shop</p>
                        <p style={{ color: '#14a098' }}>{original_title}</p>
                        <p style={{ color: 'goldenrod' }}>shopRate : {vote_average}</p>
                    </div>

                    {/* shop price */}
                    <div class="sub_box_item">
                        <p style={{ color: '#14a098' }}>Price</p>
                        <p style={{ color: '#14a098' }}>{release_date}</p>
                    </div>

            </div>
        );
    }
}
