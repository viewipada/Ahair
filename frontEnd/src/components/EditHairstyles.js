import React from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBarShop from "./NavBarShop";
import axios from 'axios'

class EditHairstyles extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')
        let isSignin = true
        if (!token) isSignin =false
        this.state = {
            list_womenServices:[],
            list_menServices:[],
            list_womenShort:[],
            list_womenMedium:[],
            list_womenLong:[],
            list_menShort:[],
            list_menLong:[],
            isSignin: null,
            posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/hairStyle/'+localStorage.getItem('shopname'),{headers: {'Authorization':'Bearer ' + localStorage.getItem('token')}})
        .then(res => {
            console.log(res.data.hairStyles)
            this.setState({
                posts: res.data.hairStyles
            })
            let i=0
            res.data.hairStyles.forEach(e => {
                if(e.type==="service_women"){
                    this.state.list_womenServices.push({hairName: e.hairName, price: e.price, key:i+=1})
                }
                else if (e.type==="service_men"){
                    this.state.list_menServices.push({hairName: e.hairName, price: e.price, key:i+=1})
                }
                else if(e.type ==="women_short"){
                    this.state.list_womenShort.push({hairName: e.hairName, price: e.price, key:i+=1})
                }
                else if(e.type === "women_medium"){
                    this.state.list_womenMedium.push({hairName: e.hairName, price: e.price, key:i+=1})
                }
                else if(e.type ==="women_long"){
                    this.state.list_womenLong.push({hairName: e.hairName, price: e.price, key:i+=1})
                }
                else if (e.type==="men_short"){
                    this.state.list_menShort.push({hairName: e.hairName, price: e.price, key:i+=1})
                }
                else {
                    this.state.list_menLong.push({hairName: e.hairName, price: e.price, key:i+=1})
                }
            })
            this.setState(this.state)
        })
        .catch(err => console.log(err));
    }
    render() {
        // if(!this.state.isSignin) return <Redirect to='/home'/>
        console.log(this.state)
        return (
            <div className="big_container">
                <NavBarShop />
                <div className="wrap_info">

                    <div className = "title">
                        <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                            Hairstyles and Prices
                        </h1>
                    </div>
                    
                    <div className="signup_form">

                        <div className = "bigcontainer_info">
                            <div className = "line_info">
                                <div style={{width:"200px"}}>
                                    <p style={{color:"white", marginRight:"20px", marginBottom:"30px"}}>Women Services</p>
                                </div>
                                <div className = "wrap_checkbox">
                                    {/* {this.state.list_womenServices[0].hairName} */}
                                {
                                    this.state.list_womenServices.map(element => {
                                        return (<div className="line_info" style={{justifyContent:"space-between"}}>
                                            <div style={{width:"50%",marginLeft:"20px", padding:"20px"}}>{element.hairName}</div>
                                            <div style={{padding:"20px"}}>{element.price}</div>
                                            <div style={{marginRight:"20px",padding:"20px"}}>
                                                 Baht
                                            </div>

                                        </div>)
                                    })
                                    
                                }
                                </div>
                            </div>
                            <div className = "line_info">
                                <div style={{width:"200px"}}>
                                    <p style={{color:"white", marginRight:"20px", marginBottom:"30px"}}>Men Services</p>
                                </div>
                                <div className = "wrap_checkbox">
                                {
                                    this.state.list_menServices.map(element => {
                                        return (<div className="line_info" style={{justifyContent:"space-between"}}>
                                        <div style={{width:"50%",marginLeft:"20px", padding:"20px"}}>{element.hairName}</div>
                                        <div style={{padding:"20px"}}>{element.price}</div>
                                        <div style={{marginRight:"20px",padding:"20px"}}>
                                             Baht
                                        </div>

                                    </div>)
                                    })
                                }
                                </div>
                            </div>
                            <div className = "line_info">
                                <div style={{width:"200px"}}>
                                    <p style={{color:"white", marginRight:"20px", marginBottom:"30px"}}>Women Hairstyles</p>
                                </div>
                            </div>
                            <div className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Short length</p></div>
                                    {
                                    this.state.list_womenShort.map(element => {
                                        return (<div className="line_info" style={{justifyContent:"space-between"}}>
                                        <div style={{width:"50%",marginLeft:"20px", padding:"20px"}}>{element.hairName}</div>
                                        <div style={{padding:"20px"}}>{element.price}</div>
                                        <div style={{marginRight:"20px",padding:"20px"}}>
                                             Baht
                                        </div>

                                    </div>)
                                    })
                                }
                                </div>
                            </div>

                            <div className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Medium length</p></div>
                                    {
                                    this.state.list_womenMedium.map(element => {
                                        return (<div className="line_info" style={{justifyContent:"space-between"}}>
                                            <div style={{width:"50%",marginLeft:"20px", padding:"20px"}}>{element.hairName}</div>
                                            <div style={{padding:"20px"}}>{element.price}</div>
                                            <div style={{marginRight:"20px",padding:"20px"}}>
                                                 Baht
                                            </div>

                                        </div>)
                                    })
                                }
                                </div>
                            </div>

                            <div className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Long length</p></div>
                                    {
                                    this.state.list_womenLong.map(element => {
                                        return (<div className="line_info" style={{justifyContent:"space-between"}}>
                                        <div style={{width:"50%",marginLeft:"20px", padding:"20px"}}>{element.hairName}</div>
                                        <div style={{padding:"20px"}}>{element.price}</div>
                                        <div style={{marginRight:"20px",padding:"20px"}}>
                                             Baht
                                        </div>

                                    </div>)
                                    })
                                }
                                </div>
                            </div>

                            <div className = "line_info">
                                <div style={{width:"200px"}}>
                                    <p style={{color:"white", marginRight:"20px", marginBottom:"30px"}}>Men Hairstyles</p>
                                </div>
                            </div>
                            <div className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Short length</p></div>
                                    {
                                    this.state.list_menShort.map(element => {
                                        return (<div className="line_info" style={{justifyContent:"space-between"}}>
                                        <div style={{width:"50%",marginLeft:"20px", padding:"20px"}}>{element.hairName}</div>
                                        <div style={{padding:"20px"}}>{element.price}</div>
                                        <div style={{marginRight:"20px",padding:"20px"}}>
                                             Baht
                                        </div>

                                    </div>)
                                    })
                                }
                                </div>
                            </div>

                            <div className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Long length</p></div>
                                    {
                                    this.state.list_menLong.map(element => {
                                        return (<div className="line_info" style={{justifyContent:"space-between"}}>
                                        <div style={{width:"50%",marginLeft:"20px", padding:"20px"}}>{element.hairName}</div>
                                        <div style={{padding:"20px"}}>{element.price}</div>
                                        <div style={{marginRight:"20px",padding:"20px"}}>
                                             Baht
                                        </div>

                                    </div>)
                                    })
                                }
                                </div>
                            </div>
                            
                        </div>
                        <div className="container_next_bt">
                            <Link className="link" to="/colors">
                                <div>
                                    <button className="login_button" type="reset">
                                        Back
                                    </button>
                                </div>
                            </Link>
                            <Link className="link" to="/editbarber">
                                <button className="login_button" type="submit" onClick={this.handleSubmit}>
                                    Next
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditHairstyles;