import React from 'react';
import { connect } from 'react-redux';
import {SignUpForCustomer_one} from '../redux/index'
import { Link } from 'react-router-dom';
import emailIcon from './pic/email_icon.png';
import userIcon from './pic/user_icon.png';
import phoneIcon from './pic/phone_icon.png';
import genderIcon from './pic/gender_icon.png';
import errorIcon from './pic/error_icon.png';
// import java.util.regex.*;

class SignUpForCustomerOne extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { 
            username: this.props.customersignupStore.username,
            name: this.props.customersignupStore.name,
            email: this.props.customersignupStore.email,
            phone : this.props.customersignupStore.phone,
            gender : this.props.customersignupStore.gender || "Agender",
            usernameError: "",
            nameError: "",
            emailError: "",
            phoneError: ""
        }
    }
    
    validate = () => {
        var emailpattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var namepattern = new RegExp(/\W/)
        var phonepattern = new RegExp(/^[0-9]{10}$/)
        let usernameError=""
        let nameError=""
        let emailError=""
        let phoneError=""
        
        if(!this.state.username){
            usernameError = "invalid username !"
        }
        else if(namepattern.test(this.state.username)){
            usernameError = "Must be letters or numbers only"
        }
        // if(ซ้ำกับในระบบ) (/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)
        if(!this.state.name){
            nameError = "invalid name !"
        }
        else if(this.state.name.match(/[0-9]+/)){
            nameError = "Must be letters only"
        }
        if (!emailpattern.test(this.state.email)) {
            emailError = "invalid email !";
        }
        if(!phonepattern.test(this.state.phone) || !this.state.phone){
            phoneError = "invalid phone number !"
        }
        if(usernameError || nameError || emailError || phoneError){
            this.setState({ usernameError, nameError, emailError, phoneError });
            return false;
        }
        return true;
    };

    selectGender = () => {
        this.setState({gender: document.getElementById("gender").value})
    }
    
    handleChange = event => {
        // event.preventDefault();
        this.setState({[event.target.id]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate()
        // console.log(this.state);
        if (isValid) {
          console.log(this.state);
          this.setState(this.state);
          this.props.signupcustomer(this.state);
          this.props.history.push('/signup_customer_2')
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
                                    <img className="input_icon"src={userIcon} alt=""/>
                                    <input  
                                        className = "input" 
                                        type = "text"
                                        id = "username"
                                        placeholder = "Username *"
                                        maxLength = "20"
                                        value = {this.state.username || ""}  
                                        onChange = {this.handleChange} 
                                    />
                                    <div className={this.state.usernameError===""? "validate_wrap" :"invalidate_wrap"}>
                                        <div className="erroricon">
                                            <img src={errorIcon} alt= "" width="20px" />
                                        </div>
                                        <div className="texterror">
                                            <span>{this.state.usernameError}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="wrap_input">
                                    <img className="input_icon"src={userIcon} alt=""/>
                                    <input  
                                        className = "input" 
                                        type = "text"
                                        id = "name"
                                        placeholder = "Name *"
                                        value = {this.state.name || ""}  
                                        onChange = {this.handleChange} 
                                    />
                                    <div className={this.state.nameError===""? "validate_wrap" :"invalidate_wrap"}>
                                        <div className="erroricon">
                                            <img src={errorIcon} alt= "" width="20px" />
                                        </div>
                                        <div className="texterror">
                                            <span>{this.state.nameError}</span>
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
                                

                                <div className = "container_iput" >

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

                                <div className = "container_iput">
                                    <div className="wrap_input">
                                        <img className="input_icon" src={genderIcon} alt=""/>
                                        <select className="select_input" id="gender" onChange={this.selectGender}>
                                            <option value="Agender" >Agender</option>
                                            <option value="Female" >Female</option>
                                            <option value="Male" >Male</option>
                                        </select>
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
                                
                                <form onSubmit={this.handleSubmit}>
                                    <button className="login_button" type="submit">     
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
        customersignupStore: state.SignUpForCustomerReducer.customersignup
    }       
}
const mapDispatchToProps =(dispatch) => {
    return {
        signupcustomer: (data) => dispatch(SignUpForCustomer_one(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUpForCustomerOne);