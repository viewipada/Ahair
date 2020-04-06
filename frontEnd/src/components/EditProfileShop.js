import React from 'react';
import { Link } from 'react-router-dom';
import emailIcon from './pic/email_icon.png';
import userIcon from './pic/user_icon.png';
import phoneIcon from './pic/phone_icon.png';
import errorIcon from './pic/error_icon.png';
import shopIcon from './pic/shop_icon.png';
import passwordIcon from './pic/password_icon.png';
import visibleIcon from './pic/visible_icon.png'
import invisibleIcon from './pic/invisible_icon.png'
import ImageUpload from './ImageUpload';

class EditProfileShop extends React.Component {
    constructor()
    {
        super();
        this.state = { 
            shopname: "",
            adminname: "",
            email: "",
            phone : "",
            adminnameError: "",
            shopnameError: "",
            emailError: "",
            phoneError: "",
            hidePassword: true ,
            passwordBox: false,
            password: "",
            confirmPassword: "",
            passwordError: "",
            confirmPasswordError: "",
            imageFile: "",
            imagePreview: "",
            imageUrl: ""
        }
        this.getFile = this.getFile.bind(this);
    }

    getFile(img_file, img_preview, img_url) {
        this.setState({
            imageFile: img_file, imagePreview: img_preview, imageUrl: img_url
        });
    }

    toggleChangePassword = () => {
        this.setState({ passwordBox : !this.state.passwordBox});
    }

    managePasswordVisibility = () =>
    {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    validatePassword = () => {
        var pattern = new RegExp(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
        let passwordError=""
        let confirmPasswordError=""
        
        if(!this.state.password){
            passwordError = "invalid password !"
        }
        else if (!pattern.test(this.state.password)) {
            passwordError = "Must match pattern";
        }
        if(!this.state.confirmPassword){
            confirmPasswordError = "invalid password !"
        }
        else if(this.state.password != this.state.confirmPassword){
            confirmPasswordError = "Not match , please try again."
        }

        if(confirmPasswordError || passwordError){
            this.setState({ passwordError : passwordError, confirmPasswordError : confirmPasswordError });
            return false;
        }
        return true;
    };
    
    validate = () => {
        var emailpattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
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
        if(!this.state.phone.match(/^[0-9]{10}$/) || !this.state.phone){
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
        const isValidPassword = this.validatePassword();
        // console.log(this.state);
        if ((isValid && this.state.passwordBox && isValidPassword) || (isValid && !this.state.passwordBox)){
          console.log(this.state);
          this.setState(this.state);
          this.props.history.push('/signup_shop_2')
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
                                            <div className = "wrap_preview">
                                                <ImageUpload getFile={this.getFile} imagePreview={errorIcon}/> //get image from data
                                            </div>
                                        </div>
                                    </div> 
                                </div>

                                <div className = "bigcontainer_info">
                                    <div className ="bigcontainer_info_profile">
                                    
                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={shopIcon} alt=""/>
                                            <input  
                                                className = "input_info" 
                                                type = "text"
                                                id = "shopname"
                                                placeholder = "Get shop name"
                                                value = {this.state.shopname}                                              
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

                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={userIcon} alt=""/>
                                            <input  
                                                className = "input_info" 
                                                type = "text"
                                                id = "adminname"
                                                placeholder = "Get admin name"
                                                value = {this.state.adminname}                                              
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
                                    
                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={emailIcon} alt=""/>
                                            <input  
                                                className = "input_info" 
                                                type = "email"
                                                id = "email"
                                                placeholder = "Get email"
                                                value = {this.state.email}                                              
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

                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={phoneIcon} alt=""/>
                                            <input  
                                                className = "input_info" 
                                                type = "text"
                                                // pattern="[0-9]{10}"
                                                id = "phone"
                                                maxLength = "10"
                                                placeholder = "GEt phone"
                                                value = {this.state.phone}  
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

                                        <div className="change_password" onClick={this.toggleChangePassword} style={{display:this.state.passwordBox? "flex" : "none"}}>
                                            Cancle X
                                        </div>
                                        <div className="change_password" onClick={this.toggleChangePassword} style={{display:this.state.passwordBox? "none" : "flex"}}>
                                            Change password
                                        </div>

                                        <div style={{width:"100%", marginTop: "30px", display: this.state.passwordBox? "block":"none"}}>
                                            <div className="wrap_input_info">
                                                <img className="input_icon"src={passwordIcon} alt=""/>
                                                <input  
                                                    className = "input" 
                                                    type = {this.state.hidePassword? "password": "text"} 
                                                    id = "password"
                                                    placeholder = "Password"
                                                    maxLength = "16"
                                                    value = {this.state.password}  
                                                    onChange = {this.handleChange} 
                                                />
                                                <div className={this.state.passwordError===""? "validate_wrap" :"invalidate_wrap"}>
                                                    <div className="erroricon">
                                                        <img src={errorIcon} alt= "" width="20px" />
                                                    </div>
                                                    <div className="texterror">
                                                        <span>{this.state.passwordError}</span>
                                                    </div>
                                                </div>
                                                <img 
                                                    className="hideicon"
                                                    onClick={this.managePasswordVisibility} 
                                                    src={this.state.hidePassword? visibleIcon: invisibleIcon}  
                                                    alt=""
                                                />
                                            </div>

                                            <div className="wrap_input_info">
                                                <img className="input_icon"src={passwordIcon} alt=""/>
                                                <input  
                                                    className = "input" 
                                                    type = "password"
                                                    id = "confirmPassword"
                                                    placeholder = "Confirm password"
                                                    maxLength="16"
                                                    value = {this.state.confirmPassword}  
                                                    onChange = {this.handleChange} 
                                                />
                                                <div className={this.state.confirmPasswordError===""? "validate_wrap" :"invalidate_wrap"}>
                                                    <div className="erroricon">
                                                        <img src={errorIcon} alt= "" width="20px" />
                                                    </div>
                                                    <div className="texterror">
                                                        <span>{this.state.confirmPasswordError}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <Link className="link">
                                <div className="container_right_bt">
                                    <form onSubmit={this.handleSubmit} >
                                        <button className="login_button" type="submit" onClick={this.handleSubmit}>
                                            Save
                                        </button>
                                    </form>
                                </div>
                            </Link>
                        </div>
                    </div>
            </div>
        );
    }
}
export default EditProfileShop;