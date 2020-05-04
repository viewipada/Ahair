import React, { Component } from 'react'
import shopIcon1 from './pic/1.jpg';

export default class ShopImageItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        // const { img1 } = this.props.img
        return (

            // ShopReviewItem
                <div class="box_img_shop">
                    <div class="row_box"><img className="image_shop" src={this.props.item} alt="" /></div>
                    <div class="row_box"><img className="image_shop" src={this.props.item} alt="" /></div>
                    <div class="row_box"><img className="image_shop" src={this.props.item} alt="" /></div>
                    <div class="row_box"><img className="image_shop" src={this.props.item} alt="" /></div>
                    <div class="row_box"><img className="image_shop" src={this.props.item} alt="" /></div>
                </div>

            // Lightbox
        );
    }
}
