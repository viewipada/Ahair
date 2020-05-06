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
import content1_1 from './content4/2.jpg'
import content1_2 from './content4/3.jpg'
import content1_3 from './content4/4.jpg'
import content1_4 from './content4/5.jpg'
import content1_5 from './content4/6.jpg'
import content1_6 from './content4/7.jpg'
import content1_7 from './content4/8.jpg'
import content1_8 from './content4/9.jpg'
import content1_9 from './content4/10.jpg'

//ที่อยู่ เวลา รูปบรรยากาศ
class CategoryFour extends React.Component {
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
                            <div className="title_hairstyles"><h1>Best Hot Men's Haircuts</h1></div>
                            
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
                                    <div className="box">
                                        <img src={content1_8} alt="" width="100%"onClick={()=>this.show(content1_8)}/>
                                    </div>
                                    <div className="box">
                                        <img src={content1_9} alt="" width="100%"onClick={()=>this.show(content1_9)}/>
                                    </div>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                        // </div>

        );
    }
}
export default CategoryFour