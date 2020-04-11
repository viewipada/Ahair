import React from 'react';
import ImageUpload from './ImageUpload';
import userImage from './pic/user_green_icon.png'
import downIcon from './pic/arrowdown_icon.png'
import upIcon from './pic/arrowup_icon.png'

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
                {hair:"hair1",price:0,img:"",isChecked:false,key:1},
                {hair:"hair2",price:0,img:"",isChecked:false,key:2},
                {hair:"hair3",price:0,img:"",isChecked:false,key:3},
                {hair:"hair4",price:0,img:"",isChecked:false,key:4}
            ],
            list_womenShort:[
                {hair:"hair1",price:0,img:"",isChecked:false,key:1},
                {hair:"hair2",price:0,img:"",isChecked:false,key:2},
                {hair:"hair3",price:0,img:"",isChecked:false,key:3},
                {hair:"hair4",price:0,img:"",isChecked:false,key:4}
            ],
            list_womenMedium:[
                {hair:"hair1",price:0,img:"",isChecked:false,key:1},
                {hair:"hair2",price:0,img:"",isChecked:false,key:2},
                {hair:"hair3",price:0,img:"",isChecked:false,key:3},
                {hair:"hair4",price:0,img:"",isChecked:false,key:4}
            ],
            list_womenLong:[
                {hair:"hair1",price:0,img:"",isChecked:false,key:1},
                {hair:"hair2",price:0,img:"",isChecked:false,key:2},
                {hair:"hair3",price:0,img:"",isChecked:false,key:3},
                {hair:"hair4",price:0,img:"",isChecked:false,key:4}
            ],
            list_menShort:[
                {hair:"hair1",price:0,img:"",isChecked:false,key:1},
                {hair:"hair2",price:0,img:"",isChecked:false,key:2},
                {hair:"hair3",price:0,img:"",isChecked:false,key:3},
                {hair:"hair4",price:0,img:"",isChecked:false,key:4}
            ],
            list_menLong:[
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
            isSaved:false,
            isHideServices:true,
            isHideWomenHairstyle:true,
            isHideMenHairstyle:true
        }
        this.getFile = this.getFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
   
    handleSubmit = event => {
        event.preventDefault();
        let check = true;
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

        if(check && this.state.name && this.state.imageUrl){
            this.state.list_womenServices.forEach(list_womenServices => {
                let timeForEach = document.getElementById(list_womenServices.hair)
                if(list_womenServices.isChecked) {
                    this.state.hair.push(list_womenServices.hair)  
                    this.state.time.push(timeForEach.value)
                }
            });
            this.state.list_menServices.forEach(list_menServices => {
                let timeForEach = document.getElementById(list_menServices.hair)
                if(list_menServices.isChecked) {
                    this.state.hair.push(list_menServices.hair)  
                    this.state.time.push(timeForEach.value)
                }
            });
            this.state.list_womenShort.forEach(list_womenShort => {
                let timeForEach = document.getElementById(list_womenShort.hair)
                if(list_womenShort.isChecked) {
                    this.state.hair.push(list_womenShort.hair)  
                    this.state.time.push(timeForEach.value)
                }
            });
            this.state.list_womenMedium.forEach(list_womenMedium => {
                let timeForEach = document.getElementById(list_womenMedium.hair)
                if(list_womenMedium.isChecked) {
                    this.state.hair.push(list_womenMedium.hair)  
                    this.state.time.push(timeForEach.value)
                }
            });
            this.state.list_womenLong.forEach(list_womenLong => {
                let timeForEach = document.getElementById(list_womenLong.hair)
                if(list_womenLong.isChecked) {
                    this.state.hair.push(list_womenLong.hair)  
                    this.state.time.push(timeForEach.value)
                }
            });
            this.state.list_menShort.forEach(list_menShort => {
                let timeForEach = document.getElementById(list_menShort.hair)
                if(list_menShort.isChecked) {
                    this.state.hair.push(list_menShort.hair)  
                    this.state.time.push(timeForEach.value)
                }
            });
            this.state.list_menLong.forEach(list_menLong => {
                let timeForEach = document.getElementById(list_menLong.hair)
                if(list_menLong.isChecked) {
                    this.state.hair.push(list_menLong.hair)  
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
        <div className = "line_price">
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
                                onChange={this.handleChange}
                            />
                        </div>
                        <div style={{color:"white", padding:"10px",width:"fit-content", fontSize:"16px"}}>
                            Select hairstyles that barber can do and enter the time spent in minutes.
                        </div>
                        <div className="services_menu" onClick={this.hideServicesMenu}>
                            <img src={this.state.isHideServices ? downIcon : upIcon} width="30px" />
                            Services menu
                        </div>
                        <ul style ={{display: this.state.isHideServices ? "none" : "block"}}>
                            <div className="title_menu">Women</div>
                            { 
                                this.state.list_womenServices.map((list_womenServices) => {
                                    return (<WomenServicesCheckbox 
                                                womenServicesChecked={this.womenServicesChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                {...list_womenServices} 
                                            />)
                                })
                            }
                           <div className="title_menu">Men</div>
                            { 
                                this.state.list_menServices.map((list_menServices) => {
                                    return (<MenServicesCheckbox 
                                                menServicesChecked={this.menServicesChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                {...list_menServices} 
                                            />)
                                })
                            }
                        </ul>
                        <div className="services_menu" onClick={this.hideWomenhairstyle}>
                            <img src={this.state.isHideWomenHairstyle ? downIcon : upIcon} width="30px"/>
                            Women hairstyles
                        </div>
                        <ul style={{display: this.state.isHideWomenHairstyle ? "none": "block"}}>
                        <   div className="title_menu">Short lenght</div>
                            { 
                                this.state.list_womenShort.map((list_womenShort) => {
                                    return (<HairstyleWomenShortCheckbox 
                                                womenShortChecked={this.womenShortChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                {...list_womenShort} 
                                            />)
                                })
                            }
                            <div className="title_menu">Medium lengh</div>
                            { 
                                this.state.list_womenMedium.map((list_womenMedium) => {
                                    return (<HairstyleWomenMediumCheckbox
                                                womenMediumChecked={this.womenMediumChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                {...list_womenMedium} 
                                            />)
                                })
                            }
                            <div className="title_menu">Long lenght</div>
                            { 
                                this.state.list_womenLong.map((list_womenLong) => {
                                    return (<HairstyleWomenLongCheckbox
                                                womenLongChecked={this.womenLongChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                {...list_womenLong} 
                                            />)
                                })
                            }
                        </ul>
                        <div className="services_menu" onClick={this.hideMenhairstyle}>
                            <img src={this.state.isHideMenHairstyle ? downIcon : upIcon} width="30px" />
                            Men short hairstyles
                        </div>
                        <ul style={{display: this.state.isHideMenHairstyle? "none": "block"}}>
                            <div className="title_menu">Short lenght</div>
                            { 
                                this.state.list_menShort.map((list_menShort) => {
                                    return (<HairstyleMenShortCheckbox
                                                menShortChecked={this.menShortChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                {...list_menShort} 
                                            />)
                                })
                            }
                            <div className="title_menu">Long lenght</div>
                            { 
                                this.state.list_menLong.map((list_menLong) => {
                                    return (<HairstyleMenLongCheckbox
                                                menLongChecked={this.menLongChecked}
                                                handleChange={this.handleChange} 
                                                checkboxChange={this.checkboxChange}
                                                {...list_menLong} 
                                            />)
                                })
                            }
                        </ul>
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
export default InputBarber;