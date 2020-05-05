import React from 'react';
import { Link ,Redirect} from 'react-router-dom';
import emailIcon from './pic/email_icon.png';
import userIcon from './pic/user_icon.png';
import phoneIcon from './pic/phone_icon.png';
import genderIcon from './pic/gender_icon.png';
import errorIcon from './pic/error_icon.png';
import NavBar from './navbar';
import userImage from './pic/default_user.jpg'
// import ImageUpload from './ImageUpload';
import axios from 'axios';

class ProfileCustomer extends React.Component {
    constructor()
    {
        super();
        const token = localStorage.getItem('token')
        let isSignin = true
        if (!token) isSignin =false
        this.state = { 
            posts:[],
            isSignin
        }
    }
    
    componentDidMount(){
        axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/user',{headers: {'Authorization':'Bearer ' + localStorage.getItem('token')}})
        .then(res => {
            console.log(res.data.credentials)
            this.setState({
                posts: res.data.credentials,
                isSignin : true
            })
        })
        .catch(err => console.log(err));
    }

    render(){
        if(!this.state.isSignin) return <Redirect to='/home' />
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
                                                    src = {this.state.posts.imgUrl || userImage} //get data form backend
                                                    
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