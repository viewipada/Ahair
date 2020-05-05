import React from 'react';
import {Redirect} from 'react-router-dom'
import ProfileBarber from './ProfileBarber';
import userImage from './pic/default_user.jpg'
import downIcon from './pic/arrowdown_icon.png'
import upIcon from './pic/arrowup_icon.png'
import axios from 'axios'

export const Checkbox = props => {
    return (
        <div className = "checkbox_line"  >
            <div style={{margin:"5px"}}>
                <input 
                    // className = "name_barber"
                    key = {props.hairId}  
                    onClick = {props.onChecked} 
                    type = "checkbox" 
                    checked = {props.isChecked} 
                    value = {props.hairName} 
                    onChange={props.checkboxChange}
                    // style={{pointerEvents: props.nonEditable ? "none" : "visible"}}
                /> {props.hairName}
            </div>
                <input 
                    className = "time_barber"
                    type="number" 
                    min="0"
                    id= {props.copy}
                    placeholder="60"
                    style={{display: props.isChecked? "flex": "none"}} 
                    onChange={(event) =>{
                        props.timeChange(event.target.id, event.target.value)
                        }
                    }
                />
        </div>
    )
}

class InputBarber extends React.Component {
    constructor(props)
    {
        super(props);
        const token = localStorage.getItem('token')
        let isSignin = true
        if(!token) isSignin = false
        this.state = { 
            barber:"",
            list_womenServices:this.props.list_womenServices || [],
            list_menServices:this.props.list_menServices || [],
            list_womenShort:this.props.list_womenShort || [],
            list_womenMedium:this.props.list_womenMedium || [],
            list_womenLong:this.props.list_womenLong || [],
            list_menShort:this.props.list_menShort || [],
            list_menLong:this.props.list_menLong || [],
            imageUrl: "",
            imageFile:"",
            imagePreview:"",
            imgError:"",
            name:"",
            nameError:"",
            phone:"",
            phoneError:"",
            hair:[],
            time: [],
            timeError:"",
            isSaved:false,
            // nonEditable:false,
            isHideServices:true,
            isHideWomenHairstyle:true,
            isHideMenHairstyle:true,
            posts:[],
            isSignin
        }
        console.log(this.props, this.state)
        this.getFile = this.getFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.timeChange = this.timeChange.bind(this)
    }
    
    validate = () => {
        var phonepattern = new RegExp(/^[0-9]{10}$/)
        let nameError=""
        let phoneError=""
        
        if(!this.state.name){
            nameError = "Invalid name !"
        }
        else if(this.state.name.match(/[0-9]+/)){
            nameError = "Name must be letters only"
        }
        if(!phonepattern.test(this.state.phone) || !this.state.phone){
            phoneError = "Invalid phone number !"
        }
        if(nameError || phoneError){
            this.setState({ nameError : nameError, phoneError: phoneError });
            return false;
        }
        return true;
    };

    hideServicesMenu = () => {
        this.setState({isHideServices: !this.state.isHideServices})
    }
    hideWomenhairstyle = () => {
        this.setState({isHideWomenHairstyle: !this.state.isHideWomenHairstyle})
    }
    hideMenhairstyle = () => {
        this.setState({isHideMenHairstyle: !this.state.isHideMenHairstyle})
    }
    getFile(img_file, img_preview, img_url) {
        this.setState({isSaved:true})
        this.setState({imageFile:img_file, imagePreview:img_preview, imageUrl:img_url})
    }

    checkboxChange = () => {
        this.setState({isSaved:true})
    }
    timeChange(id, time)  {
        this.setState({isSaved:true})
        this.state.list_womenServices.forEach(e => {
            if(id === e.copy) {
                e.time = time
            }
        });
        this.setState({list_womenServices:this.state.list_womenServices})
        this.state.list_menServices.forEach(e => {
            if(id === e.copy) {
                e.time = time
            }
        });
        this.setState({list_menServices:this.state.list_menServices})
        this.state.list_womenShort.forEach(e => {
            if(id === e.copy) {
                e.time = time
            }
        });
        this.setState({list_womenShort:this.state.list_womenShort})
        this.state.list_womenMedium.forEach(e => {
            if(id === e.copy) {
                e.time = time
            }
        });
        this.setState({list_womenMedium:this.state.list_womenMedium})
        this.state.list_womenLong.forEach(e => {
            if(id === e.copy) {
                e.time = time 
            }
        });
        this.setState({list_womenLong:this.state.list_womenLong})
        this.state.list_menShort.forEach(e => {
            if(id === e.copy) {
                e.time = time  
            }
        });
        this.setState({list_menShort:this.state.list_menShort})
        this.state.list_menLong.forEach(e => {
            if(id === e.copy) {
                e.time = time
            }
        });
        this.setState({list_menLong:this.state.list_menLong})
    }
    handleChange = event => { //name
        this.setState({isSaved:true})
        this.setState({name:event.target.value})
    }
    handleChangePhone = event => { //phone
        this.setState({isSaved:true})
        this.setState({phone:event.target.value})
    }
   
    handleSubmit = event => {
        event.preventDefault();
        let check = true;
        const isValid = this.validate()
        
        this.setState({hair:[], time:[]})

        this.state.list_womenServices.forEach(e => {
            if(!e.time && e.isChecked){ check = false}
        })
        this.state.list_menServices.forEach(e => {
            if(!e.time && e.isChecked){ check = false}
        })
        this.state.list_womenShort.forEach(e => {
            if(!e.time && e.isChecked){ check = false}
        })
        this.state.list_womenMedium.forEach(e => {
            if(!e.time && e.isChecked){ check = false}
        })
        this.state.list_womenLong.forEach(e => {
            if(!e.time && e.isChecked){ check = false}
        })
        this.state.list_menShort.forEach(e => {
            if(!e.time && e.isChecked){ check = false}
        })
        this.state.list_menLong.forEach(e => {
            if(!e.time && e.isChecked){ check = false}
        })
        // console.log(check)
        if(isValid){
            this.setState({nameError:"", phoneError:""})
        }
        if(check) {
            this.setState({timeError:""})
        }
        else if (!check){
            this.setState({timeError:"Invalid time !"}) 
        }
           console.log(check)
        if(check && isValid){
            this.state.list_womenServices.forEach(e => {
                if(e.isChecked) {
                    this.state.hair.push({hairId : e.hairId, time:parseInt(e.time)})  
                }
            });
            this.state.list_menServices.forEach(e => {
                if(e.isChecked) {
                    this.state.hair.push({hairId : e.hairId, time:parseInt(e.time)})  
                }
            });
            this.state.list_womenShort.forEach(e => {
                if(e.isChecked) {
                    this.state.hair.push({hairId : e.hairId, time:parseInt(e.time)})  
                }
            });
            this.state.list_womenMedium.forEach(e => {
                if(e.isChecked) {
                    this.state.hair.push({hairId : e.hairId, time:parseInt(e.time)})  
                }
            });
            this.state.list_womenLong.forEach(e => {
                if(e.isChecked) {
                    this.state.hair.push({hairId : e.hairId, time:parseInt(e.time)})  
                }
            });
            this.state.list_menShort.forEach(e => {
                if(e.isChecked) {
                    this.state.hair.push({hairId : e.hairId, time:parseInt(e.time)})  
                }
            });
            this.state.list_menLong.forEach(e => {
                if(e.isChecked) {
                    this.state.hair.push({hairId : e.hairId, time:parseInt(e.time)})  
                }
            });
            console.log("saved")
            this.setState({isSaved:false})
            this.props.getBarber(this.state.name, this.state.imageUrl, this.state.phone, this.state.hair)
            this.setState({isHideServices:true, isHideWomenHairstyle:true, isHideMenHairstyle:true})
        }
        

    }

    womenServicesChecked = event => {
        this.state.list_womenServices.forEach(list_womenServices => {
            if (list_womenServices.hairName === event.target.value) {
                list_womenServices.isChecked =  event.target.checked
            }
        })

        this.setState({list_womenServices: this.state.list_womenServices})
    }
    menServicesChecked = event => {
        this.state.list_menServices.forEach(list_menServices => {
            if (list_menServices.hairName === event.target.value) {
                list_menServices.isChecked =  event.target.checked
            }
        })

        this.setState({list_menServices: this.state.list_menServices})
    }
    womenShortChecked = event => {
        this.state.list_womenShort.forEach(list_womenShort => {
            if (list_womenShort.hairName === event.target.value) {
                list_womenShort.isChecked =  event.target.checked
            }
        })

        this.setState({list_womenShort: this.state.list_womenShort})
    }

    womenMediumChecked = event => {
        this.state.list_womenMedium.forEach(list_womenMedium => {
            if (list_womenMedium.hairName === event.target.value) {
                list_womenMedium.isChecked =  event.target.checked
            }
        })

        this.setState({list_womenMedium: this.state.list_womenMedium})
    }

    womenLongChecked = event => {
        this.state.list_womenLong.forEach(list_womenLong => {
            if (list_womenLong.hairName === event.target.value) {
                list_womenLong.isChecked =  event.target.checked
            }
        })

        this.setState({list_womenShort: this.state.list_womenShort})
    }

    menShortChecked = event => {
        this.state.list_menShort.forEach(list_menShort => {
            if (list_menShort.hairName === event.target.value) {
                list_menShort.isChecked =  event.target.checked
            }
        })

        this.setState({list_menShort: this.state.list_menShort})
    }

    menLongChecked = event => {
        this.state.list_menLong.forEach(list_menLong => {
            if (list_menLong.hairName === event.target.value) {
                list_menLong.isChecked =  event.target.checked
            }
        })

        this.setState({list_menLong: this.state.list_menLong})
    }
    
    render() { 
        if(!this.state.isSignin) return <Redirect to='/home' />
      return (
        <div className = "line_info">
                <div className = "wrap_barber" >
                    <div style={{width:"35%", marginRight:"40px"}}>
                        <ProfileBarber getFile={this.getFile} imagePreview={userImage}/>
                    </div>
                    <div style={{width:"60%", display:"block", flexWrap:"wrap"}}>
                        <div style={{width:"75%", marginBottom:"20px", marginTop:"20px"}}>
                            <input 
                                className = "name_barber"
                                type="text"
                                id="barber_name"
                                value={this.props.name}
                                placeholder="Barber's name"
                                // style={{pointerEvents: this.state.nonEditable? "none": "visible"}}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div style={{width:"75%", marginBottom:"20px", marginTop:"20px"}}>
                            <input 
                                className = "name_barber"
                                type="text"
                                id="barber_phone"
                                maxLength="10"
                                value={this.props.phone}
                                placeholder="Phone Number"
                                // style={{pointerEvents: this.state.nonEditable? "none": "visible"}}
                                onChange={this.handleChangePhone}
                            />
                        </div>
                        <div style={{color:"white", padding:"10px",width:"fit-content", fontSize:"16px"}}>
                            Select hairstyles that barber can do and enter the time spent in minutes.
                        </div>
                        <div className="services_menu" onClick={this.hideServicesMenu}>
                            <img src={this.state.isHideServices ? downIcon : upIcon} alt="" width="15px" style={{marginRight:"10px"}}/>
                            Services menu
                        </div>
                        <div style ={{display: this.state.isHideServices ? "none" : "block"}}>
                            <div className="title_menu">Women</div>
                            { 
                                this.state.list_womenServices.map((list_womenServices) => {
                                    return (<Checkbox 
                                                onChecked={this.womenServicesChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                timeChange={this.timeChange}
                                                {...list_womenServices} 
                                            />)
                                })
                            }
                           <div className="title_menu">Men</div>
                            { 
                                this.state.list_menServices.map((list_menServices) => {
                                    return (<Checkbox 
                                                onChecked={this.menServicesChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                timeChange={this.timeChange}
                                                {...list_menServices} 
                                            />)
                                })
                            }
                        </div>
                        <div className="services_menu" onClick={this.hideWomenhairstyle}>
                            <img src={this.state.isHideWomenHairstyle ? downIcon : upIcon} alt="" width="15px" style={{marginRight:"10px"}}/>
                            Women hairstyles
                        </div>
                        <div style={{display: this.state.isHideWomenHairstyle ? "none": "block"}}>
                        <   div className="title_menu">Short lenght</div>
                            { 
                                this.state.list_womenShort.map((list_womenShort) => {
                                    return (<Checkbox 
                                                onChecked={this.womenShortChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                timeChange={this.timeChange}
                                                {...list_womenShort} 
                                            />)
                                })
                            }
                            <div className="title_menu">Medium lengh</div>
                            { 
                                this.state.list_womenMedium.map((list_womenMedium) => {
                                    return (<Checkbox
                                                onChecked={this.womenMediumChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                timeChange={this.timeChange}
                                                {...list_womenMedium} 
                                            />)
                                })
                            }
                            <div className="title_menu">Long lenght</div>
                            { 
                                this.state.list_womenLong.map((list_womenLong) => {
                                    return (<Checkbox
                                                onChecked={this.womenLongChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                timeChange={this.timeChange}
                                                {...list_womenLong} 
                                            />)
                                })
                            }
                        </div>
                        <div className="services_menu" onClick={this.hideMenhairstyle}>
                            <img src={this.state.isHideMenHairstyle ? downIcon : upIcon} alt="" width="15px" style={{marginRight:"10px"}} />
                            Men short hairstyles
                        </div>
                        <div style={{display: this.state.isHideMenHairstyle? "none": "block"}}>
                            <div className="title_menu">Short lenght</div>
                            { 
                                this.state.list_menShort.map((list_menShort) => {
                                    return (<Checkbox
                                                onChecked={this.menShortChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                timeChange={this.timeChange}
                                                {...list_menShort} 
                                            />)
                                })
                            }
                            <div className="title_menu">Long lenght</div>
                            { 
                                this.state.list_menLong.map((list_menLong) => {
                                    return (<Checkbox
                                                onChecked={this.menLongChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                timeChange={this.timeChange}
                                                {...list_menLong} 
                                            />)
                                })
                            }
                        </div>
                        <div className="container_right_bt">
                            <div style={{display:"block"}}>
                                <p style={{fontSize:"16px",color:"#cb2c6f",marginRight:"20px"}}>
                                    {this.state.nameError}
                                </p>
                                <p style={{fontSize:"16px",color:"#cb2c6f",marginRight:"20px"}}>
                                    {this.state.phoneError}
                                </p>
                                <p style={{fontSize:"16px",color:"#cb2c6f",marginRight:"20px"}}>
                                    {this.state.timeError}
                                </p>
                            </div>
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
export default InputBarber;