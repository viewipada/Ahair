import React from 'react';
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import addIcon from './pic/add_icon.png';
import userImage from './pic/user_green_icon.png'
import ProfileShop from './ProfileShop';

export const AddBarber = props => {
    return(
        // <div style={{marginBottom:"30px"}} >
            <InputBarber 
                getBarber={props.getBarber} 
            /> 
        // </div>
    )
}

export const HairCheckbox = props => {
    return (
        <div className = "checkbox_line" >
            <div style={{margin:"5px"}}>
                <input 
                    // className = "name_barber"
                    key = {props.hair}  
                    onClick = {props.womenShortChecked} 
                    type = "checkbox" 
                    checked = {props.isChecked} 
                    value = {props.hair} 
                    onChange={props.checkboxChange}
                    // style = {{display:"inline-flex"}}
                /> {props.hair}
            </div>
                <input 
                    className = "time_barber"
                    type="text" 
                    id= {props.hair}
                    placeholder="60"
                    style={{display: props.isChecked? "flex": "none" }} 
                    onChange={props.checkboxChange}
                />
        </div>
    )
}

class InputBarber extends React.Component {
    constructor()
    {
        super();
        this.state = { 
            barber:"",
            list_womenShort:[
                {hair:"hair1",price:0,img:"",isChecked:false,key:1},
                {hair:"hair2",price:0,img:"",isChecked:false,key:2},
                {hair:"hair3",price:0,img:"",isChecked:false,key:3},
                {hair:"hair4",price:0,img:"",isChecked:false,key:4}
            ],
            imageUrl: "",
            imageFile:"",
            imagePreview:"",
            name:"",
            hair:[],
            time: [],
            isSaved:false
        }
        this.getFile = this.getFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getFile(img_file, img_preview, img_url) {
        this.setState({isSaved:true})
        this.setState({imageFile:img_file, imagePreview:img_preview, imageUrl:img_url})
    }

    checkboxChange = () => {
        this.setState({isSaved:true})
    }
    handleChange = event => { //name
        this.setState({isSaved:true})
        this.setState({name:event.target.value})
    }
   
    handleSubmit = event => {
        event.preventDefault();
        let check = true;
        this.setState({hair:[], time:[]})
        this.state.list_womenShort.forEach(list_womenShort => {
            let timeForEach = document.getElementById(list_womenShort.hair)
            if(list_womenShort.isChecked && !timeForEach.value){
                check = false;
            }
        })
        // console.log(check)
        if(check && this.state.name && this.state.imageUrl){
            this.state.list_womenShort.forEach(list_womenShort => {
                let timeForEach = document.getElementById(list_womenShort.hair)
                if(list_womenShort.isChecked) {
                    this.state.hair.push(list_womenShort.hair)  
                    this.state.time.push(timeForEach.value)
                }
            });
            console.log("saved")
            this.setState({isSaved:false})
            // this.props.setHairAndTime(this.state.hair,this.state.time);    
            // this.props.changeName(this.state.name);
            // this.props.getFile(this.state.imageFile, this.state.imagePreview, this.state.imageUrl);
            this.props.getBarber(this.state.name, this.state.imageUrl, this.state.hair, this.state.time)
        }
        else if(!this.state.name){
            alert("Please enter a valid barber's name")
        }
        else if (!check){
            alert("invalid time")
        }
        else if (!this.state.imageUrl){
            alert("Please select barber's profile")
        }
        
    }

    womenShortChecked = event => {
        this.state.list_womenShort.forEach(list_womenShort => {
            if (list_womenShort.hair === event.target.value) {
                list_womenShort.isChecked =  event.target.checked
            }
        })

        this.setState({list_womenShort: this.state.list_womenShort})
    }
    
    render() { 
      return (
        <div className = "line_price">
                <div className = "wrap_barber" style={{alignItems:"center"}}>
                    <div style={{width:"35%", marginRight:"40px"}}>
                        <ImageUpload getFile={this.getFile} imagePreview={userImage}/>
                    </div>
                    <div style={{width:"60%", display:"block", flexWrap:"wrap"}}>
                        <div style={{width:"75%", marginBottom:"20px", marginTop:"20px"}}>
                            <input 
                                className = "name_barber"
                                type="text"
                                id="barber_name"
                                value={this.props.name}
                                placeholder="Barber's name"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div style={{color:"#14A098", padding:"10px",width:"fit-content", fontSize:"16px"}}>
                            Select hairstyles that barber can do and enter the time spent in minutes.
                        </div>
                        
                        { 
                            this.state.list_womenShort.map((list_womenShort) => {
                                return (<HairCheckbox 
                                            womenShortChecked={this.womenShortChecked}
                                            handleChange={this.handleChange} 
                                            checkboxChange={this.checkboxChange}
                                            {...list_womenShort} 
                                        />)
                            })
                        }
                        <div className="container_right_bt">
                            <button className={this.state.isSaved ? "login_button" : "saved_bt"} type="submit" onClick={this.state.isSaved ? this.handleSubmit : ()=>{}}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
        </div>
      )
    }
}

class HairBarBer extends React.Component {
    constructor()
    {
        super();
        this.state = {    
            name:"",
            imageUrl: "",
            hair:[],
            time:[],
            numOfbarber:[{id:0}],
            barber: []
        }
        this.getBarber = this.getBarber.bind(this);
    }

    getBarber(name, img, hair, time) {
        this.setState({
            name:name, imageUrl:img, hair:hair, time:time
        })
    }

    newBarber = event => {
        event.preventDefault()
        if(this.state.name) {
            this.state.numOfbarber.push({id: this.state.numOfbarber.length})
            this.setState({numOfbarber: this.state.numOfbarber})
            this.state.barber.push({name: this.state.name, img_barber: this.state.imageUrl, hair: this.state.hair, time: this.state.time})    
        }
        this.setState({
            name:"", imageUrl:"", hair:[], time:[]
        })
        console.log(this.state)
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.name) {
            this.state.barber.push({name: this.state.name, img_barber: this.state.imageUrl, hair: this.state.hair, time: this.state.time})
        }// console.log(this.state);
        // let isValid = this.validate();
        // if (this.state.name && this.state.imageUrl) {
          console.log(this.state);
          this.setState(this.state);
        //   this.props.history.push('/signup_shop_2')
        // }
        // if(!this.state.name || !this.state.imageUrl){
        //     alert("please save")
        // }
    };

    render(){
        return(
            <div className="big_container">
                {/* <div className="container_signup"> */}
                    <div className="wrap_info">

                        <div className = "title">
                            <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                                Barber
                            </h1>
                        </div>
                        
                        <div className="signup_form">

                            <div className = "bigcontainer_info">
                                <div className = "line_info">
                                    <div  >
                                    { 
                                        this.state.numOfbarber.map((numOfbarber) => {
                                            return (<AddBarber getBarber={this.getBarber} {...numOfbarber} key={numOfbarber.id}/>)
                                        })
                                    }
                                    </div>
                                    <div className="container_right_bt"  style={{marginBottom:"40px"}}>
                                        <button className="login_button" type="submit" onClick={this.newBarber}>
                                            <img src={addIcon} width="30px" style={{marginRight:"10px"}} />
                                            New barber
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="container_next_bt">
                                <Link className="link" to="">
                                    <div>
                                        <button className="login_button" type="reset">
                                            Back
                                        </button>
                                    </div>
                                </Link>
                                <form onSubmit={this.handleSubmit} >
                                    <button className="login_button" type="submit" onClick={this.handleSubmit}>
                                        Next
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                {/* </div> */}
            </div>
        );
    }
}
export default HairBarBer;