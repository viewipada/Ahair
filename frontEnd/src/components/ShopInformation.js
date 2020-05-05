import React from 'react';
import { connect } from 'react-redux';
import {Information} from '../redux/index'
// import { Link } from 'react-router-dom';
import shopIcon from './pic/shop_icon.png';
import timeIcon from './pic/clock_icon.png';
import errorIcon from './pic/error_icon.png'
import MultipleImageUpload from './MultipleImageUpload';
import NavBarShop from './NavBarShop';
import { Redirect } from 'react-router';
// import axios from 'axios'
import moment from 'moment'

//ที่อยู่ เวลา รูปบรรยากาศ
class ShopInformation extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { 
            address: this.props.shopInfoStore.address || "",
            addressError: "",
            openhours: this.props.shopInfoStore.openhours || "09:00",
            closehours: this.props.shopInfoStore.closehours || "18:00",
            imageFile: [],
            imagePreview: [],
            imageUrl: this.props.shopInfoStore.imageUrl || [],
            isSignin:null
        }
        this.getFile = this.getFile.bind(this);
    }
    componentDidMount() {
        const token = localStorage.getItem('token')
        if (!token) this.setState({isSignin:false})
        else this.setState({isSignin:true})
    }

    getFile(img_file, img_preview, img_url) {
        this.setState({
            imageFile: img_file, imagePreview: img_preview, imageUrl: img_url
        });
    }

    validate = () => {
        if(!this.state.address){
            this.setState({ addressError :"invalid address !"});
            return false;
        }
        return true;
    }

    handleChange = event => {
        // event.preventDefault();
        this.setState({[event.target.id]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        
        let isValid = this.validate();
        if (isValid) {
            
            this.setState(this.state);
            const dateObj = new Date();
            const dateStr = dateObj.toISOString().split('T').shift();
            const open = moment(dateStr + ' ' + this.state.openhours).toISOString();
            const close = moment(dateStr + ' ' + this.state.closehours).toISOString();
            this.setState({openhours: open, closehours: close})
            this.props.shopInfo(this.state)
            this.props.history.push('/colors')
            console.log(this.state);
        }
    };

    render(){
        return(
            <div className="big_container">
                <NavBarShop />
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
                                    <div style={{width:"100px"}}>
                                        <p style={{color:"white", marginRight:"20px"}}>Adress</p>
                                    </div>
                                    <div className="wrap_input_info" style={{width:"70%"}}>
                                        <img className="input_icon"src={shopIcon} alt=""/>
                                        <input  
                                            className = "input_info" 
                                            type = "text"
                                            id = "address"
                                            // placeholder = "Address"
                                            value = {this.state.address}                                              
                                            onChange = {this.handleChange}
                                            style = {{placeholder:"gray"}}
                                        />
                                        <div className={this.state.addressError===""? "validate_wrap" :"invalidate_wrap"}>
                                            <div className="erroricon">
                                                <img src={errorIcon} alt= "" width="20px" />
                                            </div>
                                            <div className="texterror">
                                                <span>{this.state.addressError}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className = "line_info">
                                    <div style={{width:"100px"}}>
                                        <p style={{color:"white", marginRight:"20px"}}>Open</p>
                                    </div>
                                    <div className="wrap_time">
                                        <img className="input_icon"src={timeIcon} alt=""/>
                                        <input  
                                            className = "input_info" 
                                            type = "time"
                                            id = "openhours"
                                            // placeholder = "Open hours"
                                            value = {this.state.openhours}                                              
                                            onChange = {this.handleChange} 
                                            style = {{placeholder:"gray"}}
                                            step = "3600"
                                        />
                                    </div>

                                    <div style={{width:"100px"}}>
                                        <p style={{color:"white", marginRight:"20px", marginLeft:"30px"}}>Close</p>
                                    </div>
                                    <div className="wrap_time">
                                        <img className="input_icon"src={timeIcon} alt=""/>
                                        <input  
                                            className = "input_info" 
                                            type = "time"
                                            id = "closehours"
                                            value = {this.state.closehours}                                              
                                            onChange = {this.handleChange} 
                                            style = {{placeholder:"gray"}}
                                            step = "3600"
                                        />
                                    </div>
                                </div>

                                <div className = "line_info">
                                    <div style={{width:"200px"}}>
                                        <p style={{color:"white", marginRight:"20px"}}>Images about shop</p>
                                        <p style={{color:"gray", marginRight:"20px"}}>(maximum 5 images)</p>
                                    </div>
                                    <div>
                                        <MultipleImageUpload getFile={this.getFile} />
                                    </div>
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
const mapStateToProps = (state) => { //subscribe
    return {
        shopInfoStore: state.ShopInformationReducer.shopinfo
    }       
}
const mapDispatchToProps =(dispatch) => {
    return {
        shopInfo: (data) => dispatch(Information(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopInformation);