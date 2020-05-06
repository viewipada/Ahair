import React from 'react';
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
import Sidebar from './Sidebar'

//ที่อยู่ เวลา รูปบรรยากาศ
class CategoryOne extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div className="big_container">
                <NavBar />
                {/* <div className="container_signup"> */}
                    <div className="wrap_info">

                        <div className = "title">
                            <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                                Shop Infomation
                            </h1>
                        </div>
                        
                        <div className="signup_form">

                            <div className = "bigcontainer_info">
                                <div className = "line_info">
                                    
                                </div>
                                
                            </div>
                            
                            <div className="container_right_bt">
                                {/* <Link className="link" to="/signup">
                                    <div>
                                        <button className="login_button" type="reset">
                                            Back
                                        </button>
                                    </div>
                                </Link> */}
                                <form onSubmit={this.handleSubmit} >
                                    <button className="login_button" type="submit" onClick={this.handleSubmit}>
                                        Next
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                {/* </div> */}
            </div>
        );
    }
}
export default CategoryOne