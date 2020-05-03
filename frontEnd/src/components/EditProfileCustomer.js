import React from 'react';
import { Link } from 'react-router-dom';
import emailIcon from './pic/email_icon.png';
import userIcon from './pic/user_icon.png';
import phoneIcon from './pic/phone_icon.png';
import errorIcon from './pic/error_icon.png';
import genderIcon from './pic/gender_icon.png';
import passwordIcon from './pic/password_icon.png';
import visibleIcon from './pic/visible_icon.png'
import invisibleIcon from './pic/invisible_icon.png'
import ImageUpload from './ImageUpload';
import NavBar from './navbar';
import axios from 'axios'

class ProfileCustomer extends React.Component {
    constructor()
    {
        super();
        this.state = { 
            name: "",
            phone : "",
            gender : "",
            nameError: "",
            phoneError: "",
            imageFile: "",
            imagePreview: "",
            imageUrl: "",
            posts:[]
        }
        this.getFile = this.getFile.bind(this);
    }

    componentDidMount(){
        axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/user',{headers: {'Authorization':'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4ODQ4YjVhZmYyZDUyMDEzMzFhNTQ3ZDE5MDZlNWFhZGY2NTEzYzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZzEwYWhhaXIiLCJhdWQiOiJnMTBhaGFpciIsImF1dGhfdGltZSI6MTU4ODQ0NDM1NiwidXNlcl9pZCI6IjVuNjBiQlBLQjVNdkNpZ2VjUjNmQW1COTRmSDMiLCJzdWIiOiI1bjYwYkJQS0I1TXZDaWdlY1IzZkFtQjk0ZkgzIiwiaWF0IjoxNTg4NDQ0MzU2LCJleHAiOjE1ODg0NDc5NTYsImVtYWlsIjoibmV3N0BlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmV3N0BlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.W4BaTtULcVDxb1thACZFnJORW3uRDS1RjcdAiqQGUR2mWMGshcsELXiNw17NOm5-BRR8q4hhEGQrQ16RkCsKY739tKmkSk8DSU20Jz8PxxpSMwbj-tm6T4vjqrofwXbancsNm9w8qR_GjtB5njbSYpX7GZLZ2bIQjwhhfDo-T0qXvDE0gW-4jaEiEpMashaiwIMtvJILf2tWKtHAlQrwJ5hr9b8W089arf-2W_SAUzfiSDwO9KNZsB-l6wi58tpelFTAGM57dB9cEzyZJpCSAAWwTYAUm9S8GaZPqnqiKqhlZZ3EreKl-cXrx77yVWrM9IKL0VJiPDtSJ2Tp_3JBtA'}})
        .then(res => {
            console.log(res.data.credentials)
            this.setState({
                posts: res.data.credentials,
                name:res.data.credentials.name,
                phone: res.data.credentials.phoneNum,
                gender: res.data.credentials.userGender,
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
        let nameError=""
        let phoneError=""
        
        if(!this.state.name){
            nameError = "invalid name !"
        }
        else if(this.state.name.match(/[0-9]+/)){
            nameError = "Must be letters only"
        }
        if(!this.state.phone.match(/^[0-9]{10}$/) || !this.state.phone){
            phoneError = "invalid phone number !"
        }
        if(nameError || phoneError){
            this.setState({  nameError, phoneError });
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
        console.log(this.state);
        if (isValid) {
        //   console.log(this.state);
          this.setState(this.state);
          const editUser = {
            email : this.state.posts.email,
            handle: this.state.posts.handle,
            name: this.state.name,
            phoneNum: this.state.phone,
            userGender: this.state.gender,
            imgUrl: this.state.imageUrl
        }
          axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/editUser',editUser, {headers :{'Authorization':'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg4ODQ4YjVhZmYyZDUyMDEzMzFhNTQ3ZDE5MDZlNWFhZGY2NTEzYzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZzEwYWhhaXIiLCJhdWQiOiJnMTBhaGFpciIsImF1dGhfdGltZSI6MTU4ODQ0NDM1NiwidXNlcl9pZCI6IjVuNjBiQlBLQjVNdkNpZ2VjUjNmQW1COTRmSDMiLCJzdWIiOiI1bjYwYkJQS0I1TXZDaWdlY1IzZkFtQjk0ZkgzIiwiaWF0IjoxNTg4NDQ0MzU2LCJleHAiOjE1ODg0NDc5NTYsImVtYWlsIjoibmV3N0BlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmV3N0BlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.W4BaTtULcVDxb1thACZFnJORW3uRDS1RjcdAiqQGUR2mWMGshcsELXiNw17NOm5-BRR8q4hhEGQrQ16RkCsKY739tKmkSk8DSU20Jz8PxxpSMwbj-tm6T4vjqrofwXbancsNm9w8qR_GjtB5njbSYpX7GZLZ2bIQjwhhfDo-T0qXvDE0gW-4jaEiEpMashaiwIMtvJILf2tWKtHAlQrwJ5hr9b8W089arf-2W_SAUzfiSDwO9KNZsB-l6wi58tpelFTAGM57dB9cEzyZJpCSAAWwTYAUm9S8GaZPqnqiKqhlZZ3EreKl-cXrx77yVWrM9IKL0VJiPDtSJ2Tp_3JBtA'}})
            .then(res => {
                console.log(res.data.credentials)
            })
            .catch(err => console.log(err));
          this.props.history.push('/profilecustomer')
        }
    };

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
                                            {this.state.posts.handle}
                                            </div>
                                        </div>

                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={userIcon} alt=""/>
                                            <input  
                                                className = "input_info" 
                                                type = "text"
                                                id = "name"
                                                placeholder = {this.state.posts.name}
                                                value = {this.state.name}  
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
                                    
                                        <div className="wrap_input_info">
                                            <img className="input_icon"src={emailIcon} alt=""/>
                                            <div className = "input_info" style={{color:"gray"}}> 
                                            {this.state.posts.email}
                                            </div>
                                        </div>
                                        
                                        <div className="box_profile_phone">
                                            <div className = "container_iput" >
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
                                            </div>

                                            <div className = "container_iput">
                                                <div className="wrap_input_info">
                                                    <img className="input_icon" src={genderIcon} alt=""/>
                                                    <select className="input_info" id="gender" onChange={this.selectGender}>
                                                        <option value={this.state.posts.userGender} style={{backgroundColor:"#0F292F"}}>
                                                            {this.state.posts.userGender}
                                                        </option> 
                                                        <option value="Agender" style={{backgroundColor:"#0F292F", visibility: this.state.posts.userGender === "Agender" ? "hidden": "visible"}} >
                                                            Agender
                                                        </option>
                                                        <option value="Female" style={{backgroundColor:"#0F292F", visibility: this.state.posts.userGender=== "Female" ? "hidden": "visible"}}>
                                                            Female
                                                        </option>
                                                        <option value="Male" style={{backgroundColor:"#0F292F", visibility: this.state.posts.userGender=== "Male" ? "hidden": "visible"}}>
                                                            Male
                                                        </option>
                                                    </select>
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
export default ProfileCustomer;