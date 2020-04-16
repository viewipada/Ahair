import React, { Component } from 'react'

export default class ShopReviewItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { id, title, overview, poster_src, vote_average, backdrop_src } = this.props.review
        return (

            // ShopReviewItem
            <div key={id} style={{ textAlign: 'left', paddingLeft: '0', paddingTop: '1em' }}>
                <strong style={{ color: '#14a098' }}>{title}</strong>
                <p style={{ color: 'goldenrod', paddingLeft: '2em' }}>shopRate : {vote_average}</p>
                <p style={{ color: '#cb2c6f', paddingLeft: '4em' }}>{overview}</p>

                <section>
                    <div class="box_img_shopreview">
                        <div class="row_box"><img className="image_shop" src={poster_src} alt="" /></div>
                        <div class="row_box"><img className="image_shop" src={backdrop_src} alt="" /></div>
                        <div class="row_box"><img className="image_shop" src={poster_src} alt="" /></div>
                    </div>
                </section>
            </div>

            // Lightbox
        );
    }
}