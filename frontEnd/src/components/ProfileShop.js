import React from 'react';
import { Link } from 'react-router-dom';
import emailIcon from './pic/email_icon.png';
import userIcon from './pic/user_icon.png';
import phoneIcon from './pic/phone_icon.png';
import errorIcon from './pic/error_icon.png';
import shopIcon from './pic/shop_icon.png';
import NavBarShop from './NavBarShop';
import axios from 'axios';
class ProfileShop extends React.Component {
    constructor()
    {
        super();
        this.state = { 
            posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/Ashop',{headers: {'Authorization':'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4ODQ4YjVhZmYyZDUyMDEzMzFhNTQ3ZDE5MDZlNWFhZGY2NTEzYzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZzEwYWhhaXIiLCJhdWQiOiJnMTBhaGFpciIsImF1dGhfdGltZSI6MTU4ODQ0OTMxMCwidXNlcl9pZCI6IjFxNlZOUE9KVEdSQjFBN2xKR1JRdnJ1WXBwMTIiLCJzdWIiOiIxcTZWTlBPSlRHUkIxQTdsSkdSUXZydVlwcDEyIiwiaWF0IjoxNTg4NDQ5MzEwLCJleHAiOjE1ODg0NTI5MTAsImVtYWlsIjoibmV3c2hvcDVAZW1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5ld3Nob3A1QGVtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Z9lt85tcFo0mti3laAO4lyVLWHmGEPfjPf6efe9OOpiy9Ucr_9HXII_ImBIf-UIWW7nIYA6kWt8tBUyuVowVMugdkYTe3GXJcCnZaKASMTz6Uokn3Y-KelfDVEBZK5y_Il8H2pnm_rtCa2NFcGpI908i0uQoF1_kFb3zA1KLC4-vVKJb7mtlzfVcr4h3E-BOaCF4Ia77zoNzcUZvvwyPLaRLh3V6KN1z_31l2mK1VuKLhxyAGIUFb8S2xKjIJhvRZy5BGOeo5MFuWKHE2CothnDQCe15o4PxMOV_7Pe263ohjNY_sU-rrRMNDRlPXhPplH4iNn9VR1PdsBAKKIaBiA'}})
        .then(res => {
            this.setState({
                posts: res.data.credentials
            })
        })
        .catch(err => console.log(err));
    }

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
                                                {/* <ImageUpload /> //get image from data */}
                                                <img 
                                                    className = "image_preview"
                                                    alt = ""
                                                    id = "profile"
                                                    src = {this.state.posts.imgUrl } //get data form backend
                                                    
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
                                            {this.state.posts.shopName}
                                            </div>
                                        </div>

                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={userIcon} alt=""/>
                                            <div className = "input_info">
                                            {this.state.posts.adminName}
                                            </div>
                                        </div>
                                    
                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={emailIcon} alt=""/>
                                            <div className = "input_info">
                                            {this.state.posts.email}
                                            </div>
                                        </div>

                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={phoneIcon} alt=""/>
                                            <div className = "input_info">
                                            {this.state.posts.phoneNum}
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