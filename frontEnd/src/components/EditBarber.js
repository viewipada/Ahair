import React from 'react';
import { Link } from 'react-router-dom';
import addIcon from './pic/add_icon.png';
import InputBarber from './InputBarber';
import NavBarShop from './NavBarShop';
import axios from 'axios'
import userIcon from './pic/user_green_icon.png'

class AddBarber extends React.Component {
    constructor()
    {
        super();
        this.state = {    
            list_womenServices:[],
            list_menServices:[],
            list_womenShort:[],
            list_womenMedium:[],
            list_womenLong:[],
            list_menShort:[],
            list_menLong:[],
            posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/hairStyle/'+localStorage.getItem('shopname'),{headers: {'Authorization':'Bearer ' + localStorage.getItem('token')}})
        .then(res => {
            // console.log(res.data)
            this.setState({
                posts: res.data
            })
            let i=0
            res.data.hairStyles.forEach(e => {
                if(e.type==="service_women"){
                    this.state.list_womenServices.push({hairId:e.hairId, hairName: e.hairName, isChecked:false, key:i+=1, copy: e.hairName+this.props.id})
                }
                else if (e.type==="service_men"){
                    this.state.list_menServices.push({hairId:e.hairId, hairName: e.hairName, isChecked:false, key:i+=1,copy: e.hairName+this.props.id,time:0})
                }
                else if(e.type ==="women_short"){
                    this.state.list_womenShort.push({hairId:e.hairId, hairName: e.hairName, isChecked:false, key:i+=1,copy: e.hairName+this.props.id,time:0})
                }
                else if(e.type === "women_medium"){
                    this.state.list_womenMedium.push({hairId:e.hairId, hairName: e.hairName, isChecked:false, key:i+=1,copy: e.hairName+this.props.id,time:0})
                }
                else if(e.type ==="women_long"){
                    this.state.list_womenLong.push({hairId:e.hairId, hairName: e.hairName, isChecked:false, key:i+=1,copy: e.hairName+this.props.id,time:0})
                }
                else if (e.type==="men_short"){
                    this.state.list_menShort.push({hairId:e.hairId, hairName: e.hairName, isChecked:false, key:i+=1,copy: e.hairName+this.props.id,time:0})
                }
                else {
                    this.state.list_menLong.push({hairId:e.hairId, hairName: e.hairName, isChecked:false, key:i+=1,copy: e.hairName+this.props.id,time:0})
                }
            })
            console.log(this.props.newisChecked+ this.props.id)
        })
        .catch(err => console.log(err));

    }
    render() { 
        return (
            <div style={{pointerEvents: this.props.edit}} >
                <InputBarber 
                    getBarber={this.props.getBarber} 
                    {...this.props}
                    list_menLong={this.state.list_menLong}
                    list_menServices={this.state.list_menServices}
                    list_menShort={this.state.list_menShort}
                    list_womenLong={this.state.list_womenLong}
                    list_womenMedium={this.state.list_womenMedium}
                    list_womenServices={this.state.list_womenServices}
                    list_womenShort={this.state.list_womenShort}
                /> 
            </div>
        )
    }
}

class EditHairBarber extends React.Component {
    constructor()
    {
        super();
        const token = localStorage.getItem('token')
        let isSignin = true
        if (!token) isSignin =false
        this.state = {    
            name:"",
            imageUrl: "",
            phone:"",
            hair:"",
            time:[],
            numOfbarber:[{id:0,edit:"visible",newisChecked :false}],
            barber: [],
            isSignin: null,
            isEdit:false,
            addBox:false,
            barberOlder:[]
        }
        this.getBarber = this.getBarber.bind(this);
    }
    componentDidMount() {
        axios.get("https://us-central1-g10ahair.cloudfunctions.net/api/barber/" + localStorage.getItem('shopname'),{headers: {'Authorization':'Bearer ' + localStorage.getItem('token')}})
        .then(res => {
           this.setState({
               isSignin:true,
               barberOlder : res.data.barber,
               numOfbarber : [{id:res.data.barber.length, edit:"visible", newisChecked:false}]
           })
        })
    }

    funcEdit = () => {
        this.setState({isEdit: !this.state.isEdit})
    }

    getBarber(name, img, phone, hair) {
        this.setState({
            name:name, imageUrl:img, phone: phone, hair:hair
        })
    }

    newBarber = event => {
        event.preventDefault()
        if(this.state.name) {
            this.state.numOfbarber[this.state.numOfbarber.length -1].edit = "none"
            this.state.numOfbarber.push({id: this.state.numOfbarber.length, edit: "visible", newisChecked :false})
            this.setState({numOfbarber: this.state.numOfbarber})
            this.state.barber.push({barberName: this.state.name, img_barber: this.state.imageUrl,phoneNum: this.state.phone, hairAble: this.state.hair})    
        }
        this.setState({
            name:"", imageUrl:"", hair:[], time:[],phone:""
        })
        // console.log(this.state)
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.name) {
            this.state.barber.push({barberName: this.state.name, img_barber: this.state.imageUrl,phoneNum: this.state.phone, hairAble: this.state.hair})
            // console.log(this.state.barber[0].hairAble);
            this.setState(this.state);
            this.state.barber.forEach(newBarber => {
                // const newBarber = {barber : e}
                axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/barber',newBarber ,{headers: {'Authorization':'Bearer ' + localStorage.getItem('token')}})
                .then(function(response){
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                })
            })
            
            this.props.history.push('/homeshop') 
        }
        console.log(this.state);
    };


    render(){
        return(
            <div className="big_container">
                {/* <div className="container_signup"> */}
                <NavBarShop />
                    <div className="wrap_info">

                        <div className = "title">
                            <div className="container_next_bt">
                                <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                                    Barber
                                </h1>
                                <button className="login_button" type="submit" onClick={this.state.isEdit? this.handleSubmit : this.funcEdit}> 
                                    {this.state.isEdit ? "Close":"Add Barber"}
                                </button>
                            </div>
                        </div>
                        
                        <div className="signup_form">

                            <div className = "bigcontainer_info" style={{pointerEvents: this.state.isEdit? "visible":"none"}}>
                                
                                    {
                                        this.state.barberOlder.map( e => {
                                            return (
                                                <div className = "wrap_barber" >
                                                    <div style={{width:"35%", marginRight:"40px"}}>
                                                        <div className="image_upload" >
                                                            <div className = "wrap_preview">
                                                                <img 
                                                                    className = "image_preview"
                                                                    alt = ""
                                                                    id = "profile"
                                                                    src = {userIcon }
                                                                    
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{width:"60%", display:"block", flexWrap:"wrap"}}>
                                                        <div style={{width:"75%", marginBottom:"20px", marginTop:"20px"}}>
                                                            <input 
                                                                className = "name_barber"
                                                                type="text"
                                                                id="barber_name"
                                                                value={e.barberName}
                                                                onChange={this.handleChange}
                                                            />
                                                        </div>
                                                        <div style={{width:"75%", marginBottom:"20px", marginTop:"20px"}}>
                                                            <input 
                                                                className = "name_barber"
                                                                type="text"
                                                                id="barber_phone"
                                                                maxLength="10"
                                                                value={e.phoneNum}
                                                                onChange={this.handleChangePhone}
                                                            />
                                                        </div>
                                
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                            </div>
                                <div style={{display: this.state.isEdit? "block": "none" }}> 
                                    { 
                                        this.state.numOfbarber.map((numOfbarber) => {
                                            return (<AddBarber getBarber={this.getBarber} {...numOfbarber} key={numOfbarber.id} /> )
                                            // console.log(numOfbarber.length)
                                        })
                                    }
                                    <div className="container_right_bt"  style={{marginBottom:"40px"}}>
                                        <button className="login_button" type="submit" onClick={this.newBarber}>
                                            <img src={addIcon} width="30px" style={{marginRight:"10px"}} />
                                            New barber
                                        </button>
                                    </div>
                                
                            </div>
                            
                            <div className="container_next_bt" >
                                <Link className="link" to="/edithairstyles">
                                    <div>
                                        <button className="login_button" type="reset"style={{display: this.state.isEdit? "none":"block"}}>
                                            Back
                                        </button>
                                    </div>
                                </Link>
                                <Link className="link" to="/homeshop">
                                    <button className="login_button" type="submit" style={{display: this.state.isEdit? "none":"block"}}>
                                        Close
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
export default EditHairBarber;