import React from "react";
import { connect } from 'react-redux';
import {Colorstock} from '../redux/index'
import { Link, Redirect } from 'react-router-dom';
import NavBarShop from "./NavBarShop";
import axios from 'axios'

export const AddColorCheckBox = props => {
    return (
        <div className = "checkbox_info">
            <input 
                key = {props.id}  
                onClick = {props.addcolorChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> 
            <div style={{backgroundColor:props.value, width:"90%", textAlign:"center", padding:"20px 0px 20px 0px", marginLeft:"5px", borderColor:"white", borderWidth:"1px", borderStyle:"solid"}}>
                {props.value}
            </div>
        </div>
    )
}

export const ColorCheckBox = props => {
    return (
        <div className = "checkbox_info" style={{display:"inline-flex",flexWrap:"wrap"}}>
            <input 
                key = {props.id} 
                onClick = {props.colorChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> 
            <div style={{backgroundColor:props.value, width:"90%", textAlign:"center", padding:"20px 0px 20px 0px", marginLeft:"5px", borderColor:"white", borderWidth:"1px", borderStyle:"solid"}}>
                {props.value}
            </div>
        </div>
    )
}

class EditColors extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')
        let isSignin = true
        if (!token) isSignin =false
        this.state = {
            color: [], 
            add: "",
            addcolor: [],
            shopColorstock : [],
            isSignin:null,
            isEdit:false,
            hadData: null,
            address:'',
            closehours:"",
            openhours:""
        }
    }
    
    colorChecked = event => {
        this.props.shopColorStore.forEach(color => {
        if (color.value === event.target.value)
            color.isChecked =  event.target.checked
        })
        this.setState({color: this.props.shopColorStore})
    }

    componentDidMount(){
        let currentState=this
        axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/shopcolors/'+localStorage.getItem('shopname'),{headers: {'Authorization':'Bearer ' + localStorage.getItem('token')}})
        .then(res => {
            console.log(res.data.credentials)
            this.setState({
                posts: res.data.credentials,
                isSignin : true, 
                hadData: true, 
                openhours: res.data.credentials.openTime, 
                closehours: res.data.credentials.closeTime,
                address: res.data.credentials.address,
                color: res.data.credentials.colors

            })
        })
        .catch(err => {
            console.log(err)
            currentState.setState({hadData: false})
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({shopColorstock:[]})
        this.setState({isEdit: !this.state.isEdit})
        this.state.color.forEach(color => {
            if(color.isChecked){
                this.state.shopColorstock.push({
                    id:this.state.shopColorstock.length, 
                    value: color.value, 
                    key: this.state.shopColorstock.length, 
                    isChecked:color.isChecked
                })
            }
        })
        if(this.state.addcolor) {
            this.state.addcolor.forEach(addcolor => {
                if(addcolor.isChecked){
                    this.state.shopColorstock.push({id:this.state.shopColorstock.length, value: addcolor.value, key: this.state.shopColorstock.length, isChecked:addcolor.isChecked})
                    // this.props.shopColorStore.push({id:this.props.shopColorStore.length, value: addcolor.value, key: this.props.shopColorStore.length, isChecked:addcolor.isChecked})
                }
            })
        }
        
        console.log(this.state.shopColorstock)
        // this.props.stock(this.state.color)
        
        const shopInformation = {
            address : this.state.address,
            openTime : this.state.openhours,
            closeTime : this.state.closehours,
            // shopImg : this.props.shopInfoStore.imageUrl,
            colors : this.state.shopColorstock
        }
        
        axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/shop',shopInformation ,{headers: {'Authorization':'Bearer ' + localStorage.getItem('token')}})
            .then(function(response){
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            }
        )
    }
    funcEdit = () => {
        this.setState({isEdit: !this.state.isEdit})
    }

    typeAddcolor = event => {
        this.setState({[event.target.id]: event.target.value});
        this.setState({add: event.target.value})
    };
    addlist_color = () => {
        this.state.addcolor.push({id: this.state.addcolor.length, value: this.state.add, key: this.state.addcolor.length, isChecked: true})
        this.setState({add:""})
    }

    addcolorChecked = event => {
        this.state.addcolor.forEach(addcolor => {
        if (addcolor.value === event.target.value)
            addcolor.isChecked =  event.target.checked
        })
        this.setState({addcolor: this.state.addcolor})
    }

    render() {
        // if(!this.state.isSignin) return <Redirect to='/home'/>
        return (
            
            <div className="big_container">
                <NavBarShop />
                <div className="wrap_info">

                    <div className = "title">
                        <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                            Hair Dye Stock
                        </h1>
                        <div style={{display : this.state.hadData ? "flex":"none"}} >
                            <button className="login_button" type="submit" onClick={this.state.isEdit? this.handleSubmit : this.funcEdit}> 
                                {this.state.isEdit ? "Save":"Edit"}
                            </button>
                        </div>
                    </div>
                    
                    <div className="signup_form">

                        <div className = "bigcontainer_info">
                            <div className="line_info">
                                <div className = "wrap_checkbox">
                                    
                                    <div className = "wrap_input_add" style={{visibility: this.state.isEdit? "visible":"hidden"}}>
                                        <input
                                            className = "input_add" 
                                            type ="text"
                                            value = {this.state.add}
                                            placeholder = "Type what you want..."
                                            onChange = {this.typeAddcolor}
                                        />
                                        <button type="reset" className="login_button" onClick={this.addlist_color}>
                                            Add
                                        </button>
                                    </div>
                                    {/* { 
                                        this.props.shopColorStore.map((color) => {
                                            return (<ColorCheckBox colorChecked={this.colorChecked}  {...color} />)
                                        })
                                    } */}
                                    
                                    {/* { 
                                        
                                        this.state.addcolor.map((addcolor) => {
                                                return (<AddColorCheckBox addcolorChecked={this.addcolorChecked}  {...addcolor} />)
                                        })
                                    } */}

                                </div>
                            </div>
      
                        </div>
                        <div className="container_next_bt">
                            <Link className="link" to="/editshopinformation">
                                <div>
                                    <button className="login_button" type="reset" style={{display: this.state.isEdit? "none":"block"}}>
                                        Back
                                    </button>
                                </div>
                            </Link>
                            <Link className="link" to="/edithairstyles">
                                <button className="login_button" type="submit"  style={{display: this.state.isEdit? "none":"block"}}>
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

export default EditColors