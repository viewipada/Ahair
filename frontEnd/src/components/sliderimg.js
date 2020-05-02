import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import banner from './pic/banner1.jpg'

class sliderimg extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const settings = {
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 4000,
            className: 'slides'
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img width="100%" src={banner} />
                    </div>
                    <div>
                        <img width="100%" src={banner} />
                    </div>
                    <div>
                        <img width="100%" src={banner} />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default sliderimg;