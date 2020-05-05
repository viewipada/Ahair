import React, { Component } from 'react'
import moment from 'moment/moment'
import { Rating } from 'semantic-ui-react'

export default class ShopReviewItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ratingValue: '',
        }
        this.getStar = this.getStar.bind(this);
    }

    getStar(rating) {
        this.setState({ ratingValue: rating });
    }

    render() {

        const { userId, userHandle, message, rate, shopId, createAt, imgUrl} = this.props.review
        return (

            // ShopReviewItem
            <div style={{ textAlign: 'left', paddingLeft: '0', paddingTop: '1em' }}>
                <h2 style={{ color: '#14a098' }}>{userHandle}</h2>
                <p style={{ color: '#14a098'}}>{moment(createAt).format('LLL')}</p>
                {/* <StarRate getStar={this.getStar} /> */}
                <Rating icon='star' defaultRating={parseInt(rate, 10)} maxRating={5} disabled style={{ paddingLeft: '1.5em' }}/>
                <p style={{ color: '#cb2c6f', padding: '1em 0 0 4em' }}>{message}</p>

                <section>
                    <div class="box_img_shopreview">
                        <div class="row_box"><img className="image_shop" src={imgUrl[0]} alt="" /></div>
                        <div class="row_box"><img className="image_shop" src={imgUrl[1]} alt="" /></div>
                        <div class="row_box"><img className="image_shop" src={imgUrl[2]} alt="" /></div>
                    </div>
                </section>
            </div>

            // Lightbox
        );
    }
}