import React from 'react';
import { connect } from 'react-redux';
import {Information} from '../redux/index'
import { Link } from 'react-router-dom';
import shopIcon from './pic/shop_icon.png';
import timeIcon from './pic/clock_icon.png';
import errorIcon from './pic/error_icon.png'
import MultipleImageUpload from './MultipleImageUpload';
import NavBarShop from './NavBarShop';
import { Redirect } from 'react-router';
import axios from 'axios'
import moment from 'moment/moment'

class EditShopInformation extends React.Component {
    constructor(props)
    {
        super(props);
        const token = localStorage.getItem('token')
        let isSignin = true
        if (!token) isSignin =false
        this.state = { 
            posts:[],
            address: "",
            addressError: "",
            openhours:"09:00",
            closehours: "18:00",
            imageFile: "",
            imagePreview: "",
            imageUrl:"",
            colors:[],
            isSignin:null,
            isEdit:false,
            hadData: false
        }
        this.getFile = this.getFile.bind(this);
    }
    componentDidMount(){
        let currentState=this
        axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/Ashop',{headers: {'Authorization':'Bearer ' + localStorage.getItem('token')}})
        .then(res => {
            console.log(res.data)
            let open = moment(res.data.credentials.openTime).format("kk:mm")
            let close = moment(res.data.credentials.closeTime).format("kk:mm")
            // console.log(open,close)
            this.setState({
                posts: res.data.credentials,
                isSignin : true, 
                openhours: open, 
                closehours: close,
                address: res.data.credentials.address,
                colors: res.data.credentials.colors,
                imageUrl: res.data.credentials.imgUrlDetails
            })
            if(res.data.credentials.address) this.setState({hadData: true})
        })
        .catch(err => {
            console.log(err)
            currentState.setState({hadData: false})
        });
    }

    getFile(img_file, img_preview, img_url) {
        this.setState({
            imageFile: img_file, imagePreview: img_preview, imageUrl: img_url
        });
    }

    validate = () => {
        if(!this.state.address){
            this.setState({ addressError :"invalid address !"});
            return false;
        }
        return true;
    }

    handleChange = event => {
        // event.preventDefault();
        this.setState({[event.target.id]: event.target.value});
    };
    funcEdit = () => {
        this.setState({isEdit: !this.state.isEdit})
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);
        let isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(this.state);
            this.setState({isEdit: !this.state.isEdit})
            let dateObj = new Date();
            let dateStr = dateObj.toISOString().split('T').shift();
            let open = moment(dateStr + ' ' + this.state.openhours).toISOString();
            let close = moment(dateStr + ' ' + this.state.closehours).toISOString();
            const shopInformation = {
                address : this.state.address,
                openTime : open,
                closeTime : close,
                // imgUrl : this.props.shopInfoStore.imgUrl,
                colors : this.state.colors
            }

            axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/shop',shopInformation ,{headers: {'Authorization':'Bearer ' + localStorage.getItem('token')}})
            .then(function(response){
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            })
        }
    };


    render(){
        // if(!this.state.isSignin) return <Redirect to='/home'/>
        return(
            <div className="big_container">
                <NavBarShop />
                {/* <div className="container_signup"> */}
                    <div className="wrap_info">

                        <div className = "title">
                            <div className="container_next_bt">
                                <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                                    Shop Infomation
                                </h1>
                                    <div style={{display : this.state.hadData ? "flex":"none"}} >
                                        <button className="login_button" type="submit" onClick={this.state.isEdit? this.handleSubmit : this.funcEdit}> 
                                            {this.state.isEdit ? "Save":"Edit"}
                                        </button>
                                    </div>
                            </div>
                        </div>
                        
                        <div className="signup_form">

                            <div className = "bigcontainer_info" style={{display : this.state.hadData ? "flex":"none"}}>
                                <div className = "line_info">
                                    <div style={{width:"100px"}}>
                                        <p style={{color:"white", marginRight:"20px"}}>Adress</p>
                                    </div>
                                    <div className="wrap_input_info" style={{width:"70%"}}>
                                        <img className="input_icon"src={shopIcon} alt=""/>
                                        <input  
                                            className = "showinput_info" 
                                            type = "text"
                                            id = "address"
                                            placeholder = {this.state.posts.address}  
                                            value = {this.state.address}  
                                            style={{pointerEvents: this.state.isEdit ? "visible":"none"}}
                                            onChange = {this.handleChange} 
                                        />
                                    </div>
                                </div>
                                
                                <div className = "line_info">
                                    <div style={{width:"100px"}}>
                                        <p style={{color:"white", marginRight:"20px"}}>Open</p>
                                    </div>
                                    <div className="wrap_time">
                                        <img className="input_icon"src={timeIcon} alt=""/>
                                        <input  
                                            className = "input_info" 
                                            type = "time"
                                            id = "openhours"
                                            // placeholder = {this.state.posts.openTime} 
                                            value = {this.state.openhours} 
                                            style={{pointerEvents: this.state.isEdit ? "visible":"none"}}
                                            onChange = {this.handleChange} 
                                            step = "3600"
                                        />
                                    </div>

                                    <div style={{width:"100px"}}>
                                        <p style={{color:"white", marginRight:"20px", marginLeft:"30px"}}>Close</p>
                                    </div>
                                    <div className="wrap_time">
                                        <img className="input_icon"src={timeIcon} alt=""/>
                                        <input  
                                            className = "input_info" 
                                            type = "time"
                                            id = "closehours"
                                            // placeholder = {this.state.posts.closeTime}
                                            value = {this.state.closehours}
                                            style={{pointerEvents: this.state.isEdit ? "visible":"none"}}
                                            onChange = {this.handleChange} 
                                            step = "3600"
                                        />
                                    </div>
                                </div>

                                <div className = "line_info">
                                    <div style={{width:"200px"}}>
                                        <p style={{color:"white", marginRight:"20px"}}>Images about shop</p>
                                    </div>
                                    <div>
                                        <img alt="" src=
                                        {
                                            this.state.posts.imgUrlDetails
                                        }
                                        width="200px"
                                        />
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div style={{display : this.state.hadData ? "none":"flex",textAlign:"center",flexDirection:"column" ,flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"100%"}}>
                                    
                                <div style={{color:"white",textAlign:"center",width:"100%,", justifyContent:"center", alignItems:"center"}}>
                                    <img src={shopIcon} alt="" width="250px"style={{ alignItems:"center"}}/>
                                    <p style={{marginBottom:"30px",fontSize:"20px"}}>Shop Information Did Not Create</p>
                                </div>
                                <div style={{color:"white",textAlign:"center",width:"100%,", justifyContent:"center", alignItems:"center"}}>
                                    <Link className="link" to="/information">
                                        <div style={{justifyContent:"center", alignItems:"center"}}>
                                            <button className="login_button" type="submit">
                                                Create Shop Information
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                                    
                            </div>
                            
                            <div className="container_right_bt" style={{display : this.state.hadData ? "flex":"none"}}>
                                <Link className="link" to="/editcolors">    
                                    <button className="login_button" type="submit" style={{display: this.state.isEdit? "none":"block"}}>
                                        Next
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                {/* </div> */}
            </div>
        );
    }
}

export default (EditShopInformation);