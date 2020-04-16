import React, { Component } from 'react'
import shopIcon1 from './pic/test1.png';
import shopIcon2 from './pic/test2.png';
import shopIcon3 from './pic/test3.png';

export default class ShopImageItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        // const { img1 } = this.props.img
        return (

            // ShopReviewItem
                <div class="box_img_shop">
                    <div class="row_box"><img className="image_shop" src={shopIcon1} alt="" /></div>
                    <div class="row_box"><img className="image_shop" src={shopIcon2} alt="" /></div>
                    <div class="row_box"><img className="image_shop" src={shopIcon3} alt="" /></div>
                    <div class="row_box"><img className="image_shop" src={shopIcon2} alt="" /></div>
                    <div class="row_box"><img className="image_shop" src={shopIcon3} alt="" /></div>
                </div>

            // Lightbox
        );
    }
}
