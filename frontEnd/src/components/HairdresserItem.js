import React, { Component } from 'react'
import img1 from './pic/test1.png';

export default class HairdresserItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        // const { id, title, overview, poster_src, vote_average, release_date } = this.props.movie
        return (

            // ShopItem
            <div class="box_item" style={{ textAlign: 'left',border:'0' }}>

                {/* hairdresser image */}
                <div class="row_box"><img className="image_shop" src={img1} alt="" /></div>

                {/* hairdresser information */}
                {/* เขียว color: '#cb2c6f' */}
                <div class="sub_box_item" style={{width:'80%'}}>
                    <a href="/selecthairstyle"><h3 style={{ color: '#14a098' }}>Hairdresser Name</h3></a>
                    <p style={{ color: '#14a098' }}>Description</p>
                </div>
            </div>
        );
    }
}