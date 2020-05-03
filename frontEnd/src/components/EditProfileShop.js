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
import NavBarShop from './NavBarShop';
import axios from 'axios'

class EditProfileShop extends React.Component {
    constructor()
    {
        super();
        this.state = { 
            adminname: "",
            phone : "",
            adminnameError: "",
            phoneError: "",
            imageFile: "",
            imagePreview: "",
            imageUrl: "",
            posts:[]
        }
        this.getFile = this.getFile.bind(this);
    }
    componentDidMount(){
        axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/Ashop',{headers: {'Authorization':'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4ODQ4YjVhZmYyZDUyMDEzMzFhNTQ3ZDE5MDZlNWFhZGY2NTEzYzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZzEwYWhhaXIiLCJhdWQiOiJnMTBhaGFpciIsImF1dGhfdGltZSI6MTU4ODQ0OTMxMCwidXNlcl9pZCI6IjFxNlZOUE9KVEdSQjFBN2xKR1JRdnJ1WXBwMTIiLCJzdWIiOiIxcTZWTlBPSlRHUkIxQTdsSkdSUXZydVlwcDEyIiwiaWF0IjoxNTg4NDQ5MzEwLCJleHAiOjE1ODg0NTI5MTAsImVtYWlsIjoibmV3c2hvcDVAZW1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5ld3Nob3A1QGVtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Z9lt85tcFo0mti3laAO4lyVLWHmGEPfjPf6efe9OOpiy9Ucr_9HXII_ImBIf-UIWW7nIYA6kWt8tBUyuVowVMugdkYTe3GXJcCnZaKASMTz6Uokn3Y-KelfDVEBZK5y_Il8H2pnm_rtCa2NFcGpI908i0uQoF1_kFb3zA1KLC4-vVKJb7mtlzfVcr4h3E-BOaCF4Ia77zoNzcUZvvwyPLaRLh3V6KN1z_31l2mK1VuKLhxyAGIUFb8S2xKjIJhvRZy5BGOeo5MFuWKHE2CothnDQCe15o4PxMOV_7Pe263ohjNY_sU-rrRMNDRlPXhPplH4iNn9VR1PdsBAKKIaBiA'}})
        .then(res => {
            console.log(res.data[0])
            this.setState({
                posts: res.data.credentials,
                adminname:res.data.credentials.adminName,
                phone: res.data.credentials.phoneNum,
            })
        })
        .catch(err => console.log(err));
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
    
    validate = () => {
        let adminnameError=""
        let phoneError=""
        
        if(!this.state.adminname){
            adminnameError = "invalid name !"
        }
        else if(this.state.adminname.match(/[0-9]+/)){
            adminnameError = "Must be letters only"
        }
        if(!this.state.phone.match(/^[0-9]{10}$/) || !this.state.phone){
            phoneError = "invalid phone number !"
        }
        if(adminnameError || phoneError){
            this.setState({ adminnameError, phoneError });
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
        if (isValid){
          console.log(this.state);
          this.setState(this.state);
          const editShop = {
            adminName : this.state.adminname,
            address: this.state.posts.address,
            phoneNum: this.state.phone,
            openTime: this.state.posts.openTime,
            closeTime: this.state.posts.closeTime,
            // imgUrl: this.state.imageUrl
        }
          axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/editShop',editShop, {headers: {'Authorization':'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4ODQ4YjVhZmYyZDUyMDEzMzFhNTQ3ZDE5MDZlNWFhZGY2NTEzYzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZzEwYWhhaXIiLCJhdWQiOiJnMTBhaGFpciIsImF1dGhfdGltZSI6MTU4ODQ0OTMxMCwidXNlcl9pZCI6IjFxNlZOUE9KVEdSQjFBN2xKR1JRdnJ1WXBwMTIiLCJzdWIiOiIxcTZWTlBPSlRHUkIxQTdsSkdSUXZydVlwcDEyIiwiaWF0IjoxNTg4NDQ5MzEwLCJleHAiOjE1ODg0NTI5MTAsImVtYWlsIjoibmV3c2hvcDVAZW1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5ld3Nob3A1QGVtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Z9lt85tcFo0mti3laAO4lyVLWHmGEPfjPf6efe9OOpiy9Ucr_9HXII_ImBIf-UIWW7nIYA6kWt8tBUyuVowVMugdkYTe3GXJcCnZaKASMTz6Uokn3Y-KelfDVEBZK5y_Il8H2pnm_rtCa2NFcGpI908i0uQoF1_kFb3zA1KLC4-vVKJb7mtlzfVcr4h3E-BOaCF4Ia77zoNzcUZvvwyPLaRLh3V6KN1z_31l2mK1VuKLhxyAGIUFb8S2xKjIJhvRZy5BGOeo5MFuWKHE2CothnDQCe15o4PxMOV_7Pe263ohjNY_sU-rrRMNDRlPXhPplH4iNn9VR1PdsBAKKIaBiA'}})
          .then(res => {
              console.log(res.data.credentials)
          })
          .catch(err => console.log(err));
          
          this.props.history.push('/profileshop')
        }
    };

    render(){
        return(
            <div className="big_container">
                <NavBarShop />
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
                                                <ImageUpload getFile={this.getFile} imagePreview={this.state.posts.imgUrl}/>
                                            </div>
                                        </div>
                                    </div> 
                                </div>

                                <div className = "bigcontainer_info">
                                    <div className ="bigcontainer_info_profile">
                                    
                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={userIcon} alt=""/>
                                            <div className = "input_info" style={{color:"gray"}}> 
                                            {this.state.posts.shopName}
                                            </div>
                                        </div>

                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={userIcon} alt=""/>
                                            <input  
                                                className = "input_info" 
                                                type = "text"
                                                id = "adminname"
                                                placeholder = {this.state.posts.adminName}
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
                                            <img className="input_icon"src={userIcon} alt=""/>
                                            <div className = "input_info" style={{color:"gray"}}> 
                                            {this.state.posts.email}
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
                                                placeholder = {this.state.posts.phoneNum}  
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

                                        {/* <div className="change_password" onClick={this.toggleChangePassword} style={{display:this.state.passwordBox? "flex" : "none"}}>
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
                                        </div> */}

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