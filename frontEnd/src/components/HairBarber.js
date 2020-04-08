import React from 'react';
import { Link } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import timeIcon from './pic/clock_icon.png';
import userImage from './pic/user_green_icon.png'

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
                    onChange={()=>{}}
                    // style = {{display:"inline-flex"}}
                /> {props.hair}
            </div>
                <input 
                    className = "time_barber"
                    type="text" 
                    id= {props.hair}
                    placeholder="Minutes"
                    style={{display: props.isChecked? "flex": "none" }} 
                    onChange={()=>{}}
                />
        </div>
    )
}

class InputBarber extends React.Component {
    constructor()
    {
        super();
        this.state = { 
            list_womenShort:[
                {hair:"hair1",price:0,img:"",isChecked:false,key:1},
                {hair:"hair2",price:0,img:"",isChecked:false,key:2},
                {hair:"hair3",price:0,img:"",isChecked:false,key:3},
                {hair:"hair4",price:0,img:"",isChecked:false,key:4}
            ],
            imageFile: [],
            imagePreview: [],
            imageUrl: [],
            hair:[],
            time:[]
        }
        this.getFile = this.getFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getFile(img_file, img_preview, img_url) {
        this.props.getFile(img_file, img_preview, img_url)
    }

    handleChange = event => {
        this.props.changeName(event.target.value)
    }
   
    handleSubmit = event => {
        event.preventDefault();
        this.state.list_womenShort.forEach(list_womenShort => {
            if(list_womenShort.isChecked){
                this.state.hair.push(list_womenShort.hair)  
                let timeForEach = document.getElementById(list_womenShort.hair)
                this.state.time.push(timeForEach.value)
            }
        })
        this.props.setHairAndTime(this.state.hair,this.state.time);
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
                <div className = "wrap_checkbox" style={{justifyContent:"center"}}>
                    <div style={{width:"40%", marginRight:"40px"}}>
                        <ImageUpload getFile={this.getFile} imagePreview={userImage}/>
                    </div>
                    <div style={{width:"55%", display:"block", flexWrap:"wrap"}}>
                        <div style={{width:"75%", marginBottom:"20px"}}>
                            <input 
                                className = "name_barber"
                                type="text"
                                id="barber_name"
                                value={this.props.name}
                                placeholder="Barber's name"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div >
                        { 
                            this.state.list_womenShort.map((list_womenShort) => {
                                return (<HairCheckbox 
                                            womenShortChecked={this.womenShortChecked}
                                            handleChange={this.handleChange} 
                                            {...list_womenShort} 
                                        />)
                            })
                        }
                        </div>
                        <button type="submit" onClick={this.handleSubmit}>save</button>
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
            barber: [
                // {id:0, name:"", img_barber:"", hair:"", time:0, isChecked:false}
            ],
            name:"",
            hair:[],
            time:[],
            imageFile: [],
            imagePreview: [],
            imageUrl: []
        }
        this.getFile = this.getFile.bind(this);
        this.changeName = this.changeName.bind(this);
        this.setHairAndTime = this.setHairAndTime.bind(this);
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

    changeName(value) {
        this.setState({name: value});
    }

    setHairAndTime(hair, time) {
        this.setState({hair: hair, time: time});
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);
        // let isValid = this.validate();
        // if (isValid) {
          console.log(this.state);
          this.setState(this.state);
        //   this.props.history.push('/signup_shop_2')
        // }
    };

    render(){
        return(
            <div className="big_container">
                {/* <div className="container_signup"> */}
                    <div className="wrap_info">

                        <div className = "title">
                            <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                                BarBer
                            </h1>
                        </div>
                        
                        <div className="signup_form">

                            <div className = "bigcontainer_info">
                                <div className = "line_info">
                                    <InputBarber 
                                        // barber={this.state.barber} 
                                        changeName={this.changeName} 
                                        getFile={this.getFile}
                                        setHairAndTime={this.setHairAndTime}
                                    /> 
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
                                    <button className="login_button" type="submit" onSubmit={this.timeForEach} onClick={this.handleSubmit}>
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