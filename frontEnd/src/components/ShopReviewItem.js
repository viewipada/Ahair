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

        const { userId, userHandle, message, rate, shopId, createAt, imgUrl } = this.props.review
        return (

            // ShopReviewItem
            <div className="sub_box_item5">
                <div className="sub_box_item5" style={{ textAlign: 'left', paddingLeft: '0', paddingTop: '1em' }}>
                    <h2 style={{ color: '#14a098' }}>{userHandle}</h2>
                    <p style={{ color: '#14a098' }}>{moment(createAt).format('LLL')}</p>
                    {/* <StarRate getStar={this.getStar} /> */}
                    <div className="sub_box_item2" style={{paddingLeft:'-2em'}}>
                        <Rating icon='star' defaultRating={parseInt(rate, 10)} maxRating={5} disabled style={{ paddingLeft: '1.5em' }} />
                    </div>
                    <div className="sub_box_item5" style={{marginRight:'2em'}}>
                        
                    <p style={{ color: '#cb2c6f', padding: '1em 2em 0 4em', width:'100%'}}>{message}</p>

                    </div>
                    <section>
                        <div class="box_img_shopreview">
                            <div class="row_box"><img className="image_shop" src={imgUrl} alt="" /></div>
                        </div>
                    </section>
                </div>
            </div>

            // Lightbox
        );
    }
}