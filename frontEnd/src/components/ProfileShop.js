import React from 'react';
import { Link } from 'react-router-dom';
import emailIcon from './pic/email_icon.png';
import userIcon from './pic/user_icon.png';
import phoneIcon from './pic/phone_icon.png';
import errorIcon from './pic/error_icon.png';
import shopIcon from './pic/shop_icon.png';
// import ImageUpload from './ImageUpload';

class ProfileShop extends React.Component {
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
                                                {/* <ImageUpload /> //get image from data */}
                                                <img 
                                                    className = "image_preview"
                                                    alt = ""
                                                    id = "profile"
                                                    src = {errorIcon } //get data form backend
                                                    
                                                />
                                            </div>
                                        </div>
                                    </div> 
                                </div>

                                <div className = "bigcontainer_info">
                                    <div className ="bigcontainer_info_profile">
                                    
                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={shopIcon} alt=""/>
                                            <div className = "input_info">
                                            {/*shopname*/}
                                            </div>
                                        </div>

                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={userIcon} alt=""/>
                                            <div className = "input_info">
                                            {/*adminname*/}
                                            </div>
                                        </div>
                                    
                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={emailIcon} alt=""/>
                                            <div className = "inpinput_infout">
                                            {/*email*/}
                                            </div>
                                        </div>

                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={phoneIcon} alt=""/>
                                            <div className = "inpinput_infout">
                                            {/*phone*/}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <Link className="link" to='/editprofileshop'>
                                <div className="container_right_bt">
                                    <form onSubmit={this.handleSubmit}>
                                        <button className="login_button" type="submit" onClick={this.handleSubmit}>
                                            Edit
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
export default ProfileShop;