import React from 'react';
import { Link } from 'react-router-dom';
import emailIcon from './pic/email_icon.png';
import userIcon from './pic/user_icon.png';
import phoneIcon from './pic/phone_icon.png';
import genderIcon from './pic/gender_icon.png';
import errorIcon from './pic/error_icon.png';
import NavBar from './navbar';
// import ImageUpload from './ImageUpload';
import axios from 'axios';

class ProfileCustomer extends React.Component {
    constructor()
    {
        super();
        this.state = { 
            posts:[]
        }
    }
    
    componentDidMount(){
        axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/user',{headers: {'Authorization':'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4ODQ4YjVhZmYyZDUyMDEzMzFhNTQ3ZDE5MDZlNWFhZGY2NTEzYzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZzEwYWhhaXIiLCJhdWQiOiJnMTBhaGFpciIsImF1dGhfdGltZSI6MTU4ODQ0NDM1NiwidXNlcl9pZCI6IjVuNjBiQlBLQjVNdkNpZ2VjUjNmQW1COTRmSDMiLCJzdWIiOiI1bjYwYkJQS0I1TXZDaWdlY1IzZkFtQjk0ZkgzIiwiaWF0IjoxNTg4NDQ0MzU2LCJleHAiOjE1ODg0NDc5NTYsImVtYWlsIjoibmV3N0BlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmV3N0BlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.W4BaTtULcVDxb1thACZFnJORW3uRDS1RjcdAiqQGUR2mWMGshcsELXiNw17NOm5-BRR8q4hhEGQrQ16RkCsKY739tKmkSk8DSU20Jz8PxxpSMwbj-tm6T4vjqrofwXbancsNm9w8qR_GjtB5njbSYpX7GZLZ2bIQjwhhfDo-T0qXvDE0gW-4jaEiEpMashaiwIMtvJILf2tWKtHAlQrwJ5hr9b8W089arf-2W_SAUzfiSDwO9KNZsB-l6wi58tpelFTAGM57dB9cEzyZJpCSAAWwTYAUm9S8GaZPqnqiKqhlZZ3EreKl-cXrx77yVWrM9IKL0VJiPDtSJ2Tp_3JBtA'}})
        .then(res => {
            console.log(res.data.credentials)
            this.setState({
                posts: res.data.credentials
            })
        })
        .catch(err => console.log(err));
    }

    render(){
        
        return(
            <div className="big_container">
                <NavBar />
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
                                                    src = {this.state.posts.imgUrl} //get data form backend
                                                    
                                                />
                                            </div>
                                        </div>
                                    </div> 
                                </div>

                                <div className = "bigcontainer_info">
                                    <div className ="bigcontainer_info_profile">
                                    
                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={userIcon} alt=""/>
                                            <div className = "input_info"> 
                                            {this.state.posts.handle}
                                            </div>
                                        </div>

                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={userIcon} alt=""/>
                                            <div className = "input_info">
                                            {this.state.posts.name}
                                            </div>
                                        </div>
                                    
                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={emailIcon} alt=""/>
                                            <div className = "input_info">
                                            {this.state.posts.email}
                                            </div>
                                        </div>
                                        
                                        <div className="box_profile_phone">
                                            <div className = "container_iput" >
                                                <div className="wrap_input_info">
                                                    <img className="input_icon"src={phoneIcon} alt=""/>
                                                    <div className = "input_info">
                                                    {this.state.posts.phoneNum}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className = "container_iput">
                                                <div className="wrap_input_info">
                                                    <img className="input_icon" src={genderIcon} alt=""/>
                                                    <div className = "input_info">
                                                    {this.state.posts.userGender}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link className="link" to='editprofilecustomer'>
                                <div className="container_right_bt">
                                    <form onSubmit={this.handleSubmit} >
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
export default ProfileCustomer;