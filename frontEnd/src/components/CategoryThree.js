import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {Information} from '../redux/index'
// import { Link } from 'react-router-dom';
import shopIcon from './pic/shop_icon.png';
import timeIcon from './pic/clock_icon.png';
import errorIcon from './pic/error_icon.png'
import MultipleImageUpload from './MultipleImageUpload';
import NavBar from './navbar'
import { Redirect } from 'react-router';
// import axios from 'axios'
// import moment from 'moment'
import content1_1 from './content3/2.jpg'
import content1_2 from './content3/3.jpg'
import content1_3 from './content3/4.jpg'
import content1_4 from './content3/5.jpg'
import content1_5 from './content3/6.jpg'
import content1_6 from './content3/7.jpg'
import content1_7 from './content3/8.jpg'

//ที่อยู่ เวลา รูปบรรยากาศ
class CategoryThree extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            preview : content1_1
        }
        this.show = this.show.bind(this)
    }
    show = (img) => {
        this.setState({preview:img})
    }
    render(){
        return(
                        
                        <div className="wrap_content">

                           
                            <div className = "bigcontainer_info">
                                <div className = "line_info">
                                <div className="container1">
                                    <div className="boxpreview">
                                        <img src={this.state.preview} alt="" width="40%" />
                                    </div>
                                </div>
                                </div>
                                <div  className="line_info">
                                <div className="container1">
                                    <div className="box">
                                        <img src={content1_1} alt="" width="100%" onClick={()=>this.show(content1_1)} />
                                    </div>
                                    <div className="box">
                                    <   img src={content1_2} alt="" width="100%"onClick={()=>this.show(content1_2)}/>
                                    </div>
                                    <div className="box">
                                        <img src={content1_3} alt=""width="100%" onClick={()=>this.show(content1_3)}/>
                                    </div>
                                    <div className="box">
                                        <img src={content1_4} alt="" width="100%"onClick={()=>this.show(content1_4)}/>
                                    </div>
                                    <div className="box">
                                        <img src={content1_5} alt="" width="100%"onClick={()=>this.show(content1_5)}/>
                                    </div>
                                    <div className="box">
                                        <img src={content1_6} alt="" width="100%"onClick={()=>this.show(content1_6)}/>
                                    </div>
                                    <div className="box">
                                        <img src={content1_7} alt="" width="100%"onClick={()=>this.show(content1_7)}/>
                                    </div>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                        // </div>

        );
    }
}
export default CategoryThree