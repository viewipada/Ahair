import React from 'react';
import { Link } from 'react-router-dom';
import emailIcon from './pic/email_icon.png';
import userIcon from './pic/user_icon.png';
import phoneIcon from './pic/phone_icon.png';
import genderIcon from './pic/gender_icon.png';
import errorIcon from './pic/error_icon.png';
import ImageUpload from './ImageUpload';
// import java.util.regex.*;

class ProfileCustomer extends React.Component {
    constructor()
    {
        super();
        this.state = { 
            username: "",
            name: "",
            email: "",
            phone : "",
            gender : "agender",
            usernameError: "",
            nameError: "",
            emailError: "",
            phoneError: ""
        }
    }
    
    validate = () => {
        var emailpattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var namepattern = new RegExp(/\W/)
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
        if(!this.state.phone.match(/^[0-9]{10}$/) || !this.state.phone){
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
          this.props.history.push('/signup_customer_2')
        }
    };

    render(){
        return(
            <div className="big_container">
                <div className="wrap_info">
                        
                        <div className = "title">
                            <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                                Profile
                            </h1>
                        </div>

                        <div className="signup_form">
                            <div style={{display:"inline-flex",width:"100%"}}>
                            <div style={{width:"40%"}}>
                                <div className="bigcontainer_info_profile">
                                    <div className="image_upload" >
                                        <ImageUpload /> //get image from data
                                    </div>
                                </div> 
                            </div>

                            <div className = "bigcontainer_info">
                                <div className ="bigcontainer_info_profile">
                                
                                    <div className="wrap_input_info">
                                        <img className="input_icon"src={userIcon} alt=""/>
                                        <div className = "input_info">
                                        
                                        </div>
                                    </div>

                                    <div className="wrap_input_info">
                                        <img className="input_icon"src={userIcon} alt=""/>
                                        <div className = "input_info">
                                        
                                        </div>
                                    </div>
                                
                                    <div className="wrap_input_info">
                                        <img className="input_icon"src={emailIcon} alt=""/>
                                        <div className = "inpinput_infout">
                                        
                                        </div>
                                    </div>
                                    
                                    <div className="box_profile_phone">
                                        <div className = "container_iput" >
                                            <div className="wrap_input_info">
                                                <img className="input_icon"src={phoneIcon} alt=""/>
                                                <div className = "input_info">
                                            
                                                </div>
                                            </div>
                                        </div>

                                        <div className = "container_iput">
                                            <div className="wrap_input_info">
                                                <img className="input_icon" src={genderIcon} alt=""/>
                                                <div className = "input_info">
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div className="container_right_bt">
                                <form onSubmit={this.handleSubmit} >
                                    <button className="login_button" type="submit" onClick={this.handleSubmit}>
                                        Edit
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
            </div>
        );
    }
}
export default ProfileCustomer;