import React from 'react';
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import passwordIcon from './pic/password_icon.png';
import errorIcon from './pic/error_icon.png';
import visibleIcon from './pic/visible_icon.png'
import invisibleIcon from './pic/invisible_icon.png'
import userImage from './pic/user_green_icon.png'

class SignUpForCustomerTwo extends React.Component {
    constructor()
    {
        super();
        this.state = { 
            hidePassword: true ,
            imageFile: "",
            imagePreview: "",
            imageUrl: "",
            password: "",
            confirmPassword: "",
            passwordError: "",
            confirmPasswordError: ""
        }
        this.getFile = this.getFile.bind(this);
    }
    
    getFile(img_file, img_preview, img_url) {
        this.setState({
            imageFile: img_file, imagePreview: img_preview, imageUrl: img_url
        });
    }
    
    managePasswordVisibility = () =>
    {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    validate = () => {
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
            this.setState({ passwordError, confirmPasswordError });
            return false;
        }
        return true;
    };

    
    handleChange = event => {
        event.preventDefault();
        this.setState({[event.target.id]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        // console.log(this.state);
        if (isValid) {
            console.log(this.state);
            this.setState(this.state);
            this.props.history.push('/signup_customer')
        }
    };

    render(){
        return(
            <div className="big_container">
                <div className="container_signup">
                    <div className="wrap_signup">
                        <div className="signup_form" >

                            <span className="signup_form_title">
                                <h1 style={{color:"#CB2D6F",fontSize:"50px"}}>
                                    Sign up
                                </h1>
                                <h5 style={{color:"#CB2D6F"}}>
                                    Page 2 of 2
                                </h5>
                            </span>
                            <div className = "bigcontainer_input">
                                <div className = "container_iput_signup2">
                                    
                                    <div className="wrap_profile_signup">
                                        <div className="image_upload">
                                            <ImageUpload getFile={this.getFile} imagePreview={userImage} />
                                        </div>
                                    </div>    

                                    <div className = "wrap_password_signup">
                                        <div className="pattern">
                                            <p>Password must be at least 8 characters<br />contain 1 or more uppercase, lowercase and number</p>
                                        </div>
                                        
                                        <div className="wrap_input">
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

                                        <div className="wrap_input">
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
                            <div className="container_next_bt">
                                <Link className="link" to="/signup_customer_1">
                                    <div>
                                        <button className="login_button" type="button">
                                            Back
                                        </button>
                                    </div>
                                </Link>
                                <form onSubmit={this.handleSubmit} >
                                    <button className="login_button" type="submit" onClick={this.handleSubmit}>
                                        Submit
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
export default SignUpForCustomerTwo;