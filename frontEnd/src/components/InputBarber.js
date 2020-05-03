import React from 'react';
import ImageUpload from './ImageUpload';
import userImage from './pic/user_green_icon.png'
import downIcon from './pic/arrowdown_icon.png'
import upIcon from './pic/arrowup_icon.png'

export const Checkbox = props => {
    return (
        <div className = "checkbox_line"  >
            <div style={{margin:"5px"}}>
                <input 
                    // className = "name_barber"
                    key = {props.hair}  
                    onClick = {props.onChecked} 
                    type = "checkbox" 
                    checked = {props.isChecked} 
                    value = {props.hair} 
                    onChange={props.checkboxChange}
                    // style={{pointerEvents: props.nonEditable ? "none" : "visible"}}
                /> {props.hair}
            </div>
                <input 
                    className = "time_barber"
                    type="number" 
                    min="0"
                    id= {props.hair}
                    placeholder="60"
                    style={{display: props.isChecked? "flex": "none"}} 
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
            list_womenServices:[
                {hair:"hair1",price:0,img:"",isChecked:false,key:1},
                {hair:"hair2",price:0,img:"",isChecked:false,key:2},
                {hair:"hair3",price:0,img:"",isChecked:false,key:3},
                {hair:"hair4",price:0,img:"",isChecked:false,key:4}
            ],
            list_menServices:[
                {hair:"hair5",price:0,img:"",isChecked:false,key:5},
                {hair:"hair6",price:0,img:"",isChecked:false,key:6},
                {hair:"hair7",price:0,img:"",isChecked:false,key:7},
                {hair:"hair8",price:0,img:"",isChecked:false,key:8}
            ],
            list_womenShort:[
                {hair:"hair9",price:0,img:"",isChecked:false,key:9},
                {hair:"hair10",price:0,img:"",isChecked:false,key:10},
                {hair:"hair11",price:0,img:"",isChecked:false,key:11},
                {hair:"hair12",price:0,img:"",isChecked:false,key:12}
            ],
            list_womenMedium:[
                {hair:"hair13",price:0,img:"",isChecked:false,key:13},
                {hair:"hair14",price:0,img:"",isChecked:false,key:14},
                {hair:"hair15",price:0,img:"",isChecked:false,key:15},
                {hair:"hair16",price:0,img:"",isChecked:false,key:16}
            ],
            list_womenLong:[
                {hair:"hair17",price:0,img:"",isChecked:false,key:17},
                {hair:"hair18",price:0,img:"",isChecked:false,key:18},
                {hair:"hair19",price:0,img:"",isChecked:false,key:19},
                {hair:"hair20",price:0,img:"",isChecked:false,key:20}
            ],
            list_menShort:[
                {hair:"hair21",price:0,img:"",isChecked:false,key:21},
                {hair:"hair22",price:0,img:"",isChecked:false,key:22},
                {hair:"hair23",price:0,img:"",isChecked:false,key:23},
                {hair:"hair24",price:0,img:"",isChecked:false,key:24}
            ],
            list_menLong:[
                {hair:"hair25",price:0,img:"",isChecked:false,key:25},
                {hair:"hair26",price:0,img:"",isChecked:false,key:26},
                {hair:"hair27",price:0,img:"",isChecked:false,key:27},
                {hair:"hair28",price:0,img:"",isChecked:false,key:28}
            ],
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
            isHideMenHairstyle:true
        }
        this.getFile = this.getFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    componentDidMount() {
        // axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/barber')
        // .then(function(response){
        //     console.log(response.data)
        //     this.setState({posts: response.data})
        // })
        // .catch(function(error) {
        //     console.log(error)
        // })
    }

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
        this.state.list_womenServices.forEach(list_womenServices => {
            let timeForEach = document.getElementById(list_womenServices.hair)
            if(list_womenServices.isChecked && !timeForEach.value){
                check = false;
            }
        })
        this.state.list_menServices.forEach(list_menServices => {
            let timeForEach = document.getElementById(list_menServices.hair)
            if(list_menServices.isChecked && !timeForEach.value){
                check = false;
            }
        })
        this.state.list_womenShort.forEach(list_womenShort => {
            let timeForEach = document.getElementById(list_womenShort.hair)
            if(list_womenShort.isChecked && !timeForEach.value){
                check = false;
            }
        })
        this.state.list_womenMedium.forEach(list_womenMedium => {
            let timeForEach = document.getElementById(list_womenMedium.hair)
            if(list_womenMedium.isChecked && !timeForEach.value){
                check = false;
            }
        })
        this.state.list_womenLong.forEach(list_womenLong => {
            let timeForEach = document.getElementById(list_womenLong.hair)
            if(list_womenLong.isChecked && !timeForEach.value){
                check = false;
            }
        })
        this.state.list_menShort.forEach(list_menShort => {
            let timeForEach = document.getElementById(list_menShort.hair)
            if(list_menShort.isChecked && !timeForEach.value){
                check = false;
            }
        })
        this.state.list_menLong.forEach(list_menLong => {
            let timeForEach = document.getElementById(list_menLong.hair)
            if(list_menLong.isChecked && !timeForEach.value){
                check = false;
            }
        })

        if(check && isValid){
            this.state.list_womenServices.forEach(list_womenServices => {
                let timeForEach = document.getElementById(list_womenServices.hair)
                if(list_womenServices.isChecked) {
                    this.state.hair.push({hairId : list_womenServices.hair, time:timeForEach.value})  
                }
            });
            this.state.list_menServices.forEach(list_menServices => {
                let timeForEach = document.getElementById(list_menServices.hair)
                if(list_menServices.isChecked) {
                    this.state.hair.push({hairId : list_menServices.hair, time:timeForEach.value})  
                }
            });
            this.state.list_womenShort.forEach(list_womenShort => {
                let timeForEach = document.getElementById(list_womenShort.hair)
                if(list_womenShort.isChecked) {
                    this.state.hair.push({hairId : list_womenShort.hair, time:timeForEach.value})  
                }
            });
            this.state.list_womenMedium.forEach(list_womenMedium => {
                let timeForEach = document.getElementById(list_womenMedium.hair)
                if(list_womenMedium.isChecked) {
                    this.state.hair.push({hairId : list_womenMedium.hair, time:timeForEach.value})  
                }
            });
            this.state.list_womenLong.forEach(list_womenLong => {
                let timeForEach = document.getElementById(list_womenLong.hair)
                if(list_womenLong.isChecked) {
                    this.state.hair.push({hairId : list_womenLong.hair, time:timeForEach.value})  
                }
            });
            this.state.list_menShort.forEach(list_menShort => {
                let timeForEach = document.getElementById(list_menShort.hair)
                if(list_menShort.isChecked) {
                    this.state.hair.push({hairId : list_menShort.hair, time:timeForEach.value})  
                }
            });
            this.state.list_menLong.forEach(list_menLong => {
                let timeForEach = document.getElementById(list_menLong.hair)
                if(list_menLong.isChecked) {
                    this.state.hair.push({hairId : list_menLong.hair, time:timeForEach.value})  
                }
            });
            console.log("saved")
            this.setState({isSaved:false})
            // this.props.setHairAndTime(this.state.hair,this.state.time);    
            // this.props.changeName(this.state.name);
            // this.props.getFile(this.state.imageFile, this.state.imagePreview, this.state.imageUrl);
            this.props.getBarber(this.state.name, this.state.imageUrl, this.state.phone, this.state.hair)
            this.setState({isHideServices:true, isHideWomenHairstyle:true, isHideMenHairstyle:true})
        }
        if(isValid){
            this.setState({nameError:"", phoneError:""})
        }
        if(check) {
            this.setState({timeError:""})
        }
        else if (!check){
            this.setState({timeError:"Invalid time !"})
            // console.log(check)
        }

    }

    womenServicesChecked = event => {
        this.state.list_womenServices.forEach(list_womenServices => {
            if (list_womenServices.hair === event.target.value) {
                list_womenServices.isChecked =  event.target.checked
            }
        })

        this.setState({list_womenServices: this.state.list_womenServices})
    }
    menServicesChecked = event => {
        this.state.list_menServices.forEach(list_menServices => {
            if (list_menServices.hair === event.target.value) {
                list_menServices.isChecked =  event.target.checked
            }
        })

        this.setState({list_menServices: this.state.list_menServices})
    }
    womenShortChecked = event => {
        this.state.list_womenShort.forEach(list_womenShort => {
            if (list_womenShort.hair === event.target.value) {
                list_womenShort.isChecked =  event.target.checked
            }
        })

        this.setState({list_womenShort: this.state.list_womenShort})
    }

    womenMediumChecked = event => {
        this.state.list_womenMedium.forEach(list_womenMedium => {
            if (list_womenMedium.hair === event.target.value) {
                list_womenMedium.isChecked =  event.target.checked
            }
        })

        this.setState({list_womenMedium: this.state.list_womenMedium})
    }

    womenLongChecked = event => {
        this.state.list_womenLong.forEach(list_womenLong => {
            if (list_womenLong.hair === event.target.value) {
                list_womenLong.isChecked =  event.target.checked
            }
        })

        this.setState({list_womenShort: this.state.list_womenShort})
    }

    menShortChecked = event => {
        this.state.list_menShort.forEach(list_menShort => {
            if (list_menShort.hair === event.target.value) {
                list_menShort.isChecked =  event.target.checked
            }
        })

        this.setState({list_menShort: this.state.list_menShort})
    }

    menLongChecked = event => {
        this.state.list_menLong.forEach(list_menLong => {
            if (list_menLong.hair === event.target.value) {
                list_menLong.isChecked =  event.target.checked
            }
        })

        this.setState({list_menLong: this.state.list_menLong})
    }
    
    render() { 
      return (
        <div className = "line_info">
                <div className = "wrap_barber" >
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