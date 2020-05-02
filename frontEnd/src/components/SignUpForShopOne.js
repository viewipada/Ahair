import React from 'react';
import { connect } from 'react-redux';
import {SignUpForShop_one} from '../redux/index'
import { Link } from 'react-router-dom';
import emailIcon from './pic/email_icon.png';
import userIcon from './pic/user_icon.png';
import phoneIcon from './pic/phone_icon.png';
import errorIcon from './pic/error_icon.png';
import shopIcon from './pic/shop_icon.png';

class SignUpForShopOne extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { 
            shopname: this.props.shopsignupStore.shopname,
            adminname: this.props.shopsignupStore.adminname,
            email: this.props.shopsignupStore.email,
            phone : this.props.shopsignupStore.phone,
            adminnameError: "",
            shopnameError: "",
            emailError: "",
            phoneError: ""
        }
    }
    
    validate = () => {
        var emailpattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var phonepattern = new RegExp(/^[0-9]{10}$/)
        let adminnameError=""
        let shopnameError=""
        let emailError=""
        let phoneError=""
        
        if(!this.state.adminname){
            adminnameError = "invalid name !"
        }
        else if(this.state.adminname.match(/[0-9]+/)){
            adminnameError = "Must be letters only"
        }
        // if(ซ้ำกับในระบบ) (/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)
        if(!this.state.shopname){
            shopnameError = "invalid name !"
        }
        if (!emailpattern.test(this.state.email)) {
            emailError = "invalid email !";
        }
        if(!phonepattern.test(this.state.phone) || !this.state.phone){
            phoneError = "invalid phone number !"
        }
        if(adminnameError || shopnameError || emailError || phoneError){
            this.setState({ shopnameError, adminnameError, emailError, phoneError });
            return false;
        }
        return true;
    };
    
    handleChange = event => {
        // event.preventDefault();
        this.setState({[event.target.id]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        // console.log(this.state);
        if (isValid) {
          console.log(this.state);
          this.setState(this.state);
          this.props.signupshop(this.state);
          this.props.history.push('/signup_shop_2')
        }
    };

    render(){
        return(
            <div className="big_container">
                <div className="container_signup">
                    <div className="wrap_signup">
                        <div className="signup_form">

                            <span className="signup_form_title">
                                <h1 style={{color:"#CB2D6F",fontSize:"50px"}}>
                                    Sign up
                                </h1>
                                <h5 style={{color:"#CB2D6F"}}>
                                    Page 1 of 2
                                </h5>
                            </span>

                            <div className = "bigcontainer_input">
                                <div className="wrap_input">
                                    <img className="input_icon"src={shopIcon} alt=""/>
                                    <input  
                                        className = "input" 
                                        type = "text"
                                        id = "shopname"
                                        placeholder = "Shop's Name *"
                                        value = {this.state.shopname || ""}                                              
                                        onChange = {this.handleChange} 
                                        
                                    />
                                    <div className={this.state.shopnameError===""? "validate_wrap" :"invalidate_wrap"}>
                                        <div className="erroricon">
                                            <img src={errorIcon} alt= "" width="20px" />
                                        </div>
                                        <div className="texterror">
                                            <span>{this.state.shopnameError}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="wrap_input">
                                    <img className="input_icon"src={userIcon} alt=""/>
                                    <input  
                                        className = "input" 
                                        type = "text"
                                        id = "adminname"
                                        placeholder = "Admin's name *"
                                        value = {this.state.adminname || ""}                                              
                                        onChange = {this.handleChange} 
                                    />
                                    <div className={this.state.adminnameError===""? "validate_wrap" :"invalidate_wrap"}>
                                        <div className="erroricon">
                                            <img src={errorIcon} alt= "" width="20px" />
                                        </div>
                                        <div className="texterror">
                                            <span>{this.state.adminnameError}</span>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="wrap_input">
                                    <img className="input_icon"src={emailIcon} alt=""/>
                                    <input  
                                        className = "input" 
                                        type = "email"
                                        id = "email"
                                        placeholder = "Email *"
                                        value = {this.state.email || ""}                                              
                                        onChange = {this.handleChange} 
                                    />
                                    <div className={this.state.emailError===""? "validate_wrap" :"invalidate_wrap"}>
                                        <div className="erroricon">
                                            <img src={errorIcon} alt= "" width="20px" />
                                        </div>
                                        <div className="texterror">
                                            <span>{this.state.emailError}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="wrap_input">
                                    <img className="input_icon"src={phoneIcon} alt=""/>
                                    <input  
                                        className = "input" 
                                        type = "text"
                                        // pattern="[0-9]{10}"
                                        id = "phone"
                                        maxLength = "10"
                                        placeholder = "Phone number *"
                                        value = {this.state.phone || ""}  
                                        onChange = {this.handleChange} 
                                    />
                                    <div className={this.state.phoneError===""? "validate_wrap" :"invalidate_wrap"}>
                                        <div className="erroricon">
                                            <img src={errorIcon} alt= "" width="20px" />
                                        </div>
                                        <div className="texterror">
                                            <span>{this.state.phoneError}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="container_next_bt">
                                <Link className="link" to="/signup">
                                    <div>
                                        <button className="login_button" type="reset">
                                            Back
                                        </button>
                                    </div>
                                </Link>
                                <form onSubmit={this.handleSubmit} >
                                    <button className="login_button" type="submit" onClick={this.handleSubmit}>
                                        Next
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => { //subscribe
    return {
        shopsignupStore: state.SignUpForShopReducer.shopsignup
    }       
}
const mapDispatchToProps =(dispatch) => {
    return {
        signupshop: (data) => dispatch(SignUpForShop_one(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForShopOne);