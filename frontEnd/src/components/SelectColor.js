import React from "react";
import { connect } from 'react-redux';
import {Colorstock} from '../redux/index'
import { Link, Redirect } from 'react-router-dom';
import NavBarShop from "./NavBarShop";
import axios from 'axios'

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

class SelectColors extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')
        let isSignin = true
        if (!token) isSignin =false
        this.state = {
            color: [], 
            add: "",
            addcolor: [],
            pickColer : "",
            isSignin:null,
            // hadData: null,
            address:'',
            closehours:"",
            openhours:"",
        }
    }
    
    colorChecked = event => {
        this.state.color.forEach(color => {
        if (color.value === event.target.value){
            color.isChecked =  event.target.checked
            this.setState({pickColor: color.value})
        }
        else {
            color.isChecked =  false
        }}
        )
        this.setState({color: this.state.color})
    }

    componentDidMount(){
        let currentState=this
        axios.get('https://us-central1-g10ahair.cloudfunctions.net/api/shopcolors/'+"ไทน์ คนชิคชิค",{headers: {'Authorization':'Bearer ' + localStorage.getItem('token')}})
        .then(res => {
            // console.log(res.data)
            this.setState({
                isSignin : true,
                color: res.data.colors
            })
            this.state.color.forEach(e => {
                e.isChecked = false
            })
            this.setState({color:this.state.color})
            console.log(this.state)
        })
        .catch(err => {
            console.log(err)
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.pickColor)
    }

    render() {
        // if(!this.state.isSignin) return <Redirect to='/home'/>
        return (
            
            <div className="big_container">
                <NavBarShop />
                <div className="wrap_info">

                <div className = "title">
                    <div className="container_next_bt">
                        <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                            Select Color
                        </h1>
                    </div>
                </div>
                    
                    <div className="signup_form">

                        <div className = "bigcontainer_info">
                            <div className="line_info">
                                <div className = "wrap_checkbox" >
                                    
                                    { 
                                        this.state.color.map((color) => {
                                            return (<ColorCheckBox colorChecked={this.colorChecked}  {...color} />)
                                        })
                                    }
                                    

                                </div>
                            </div>
      
                        </div>
                        <div className="container_next_bt">
                            <Link className="link" to="/">
                                <div>
                                    <button className="login_button" type="reset" >
                                        Back
                                    </button>
                                </div>
                            </Link>
                                <button className="login_button" type="submit" onClick={this.handleSubmit} >
                                    Next
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectColors