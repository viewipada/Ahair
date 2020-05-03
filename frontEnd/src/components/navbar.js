import React, { Component } from 'react';
import { Link ,Redirect} from 'react-router-dom'
import logo from './pic/logo_V2.1.png'
import { FaSistrix, FaUser } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
import { FaGrin } from 'react-icons/fa'
import { storage } from 'firebase';
import axios from 'axios'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statename: localStorage.getItem('username')+localStorage.getItem('shopname') || "SignIn",
            displayMenu: false,
            // checkLogin: false,
            iconchange: "users icon",
            searchValue: 'null',
            isSignin: null
        };
        
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.logoutevent = this.logoutevent.bind(this)
    }
    componentDidMount(){
        const token = localStorage.getItem('token')
        if (!token) this.setState({isSignin:false})
        else this.setState({isSignin:true})
    }

<<<<<<< HEAD
    showDropdownMenu = () => {
        if (!this.state.isSignin) {
            // <Link className="link" to="/signin"/>
=======
    componentDidMount() {
        if (localStorage.getItem('user')) {
            this.setState({ checkLogin: true });
            this.setState({ statename: localStorage.getItem('username') });
>>>>>>> ecb6b71763f4bb70e12fd46d838fe838b3eb2d7b
        }
    }

    showDropdownMenu = () => {
        const checkLogin = this.state.checkLogin;
        if (checkLogin) {
            this.setState({ displayMenu: true }, () => {
                document.addEventListener('click', this.hideDropdownMenu);
            });
        }
    }

    hideDropdownMenu = () => {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    logoutevent = () => {
<<<<<<< HEAD
        this.setState({ isSignin: false });
        this.props.history.push('/home')
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('shopname')
=======
        this.setState({ checkLogin: false });
        this.setState({ statename: 'SignIn' });
        localStorage.clear();
>>>>>>> ecb6b71763f4bb70e12fd46d838fe838b3eb2d7b
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div class="wrapnavbar">
                <Link className="link" to="/home">
                    <img src={logo} class="ui small image" alt="Home" />
                </Link>
                <div className="leftGroup">
                    {
                        this.state.isSignin ?
                            (
                                <div>
                                    <Link className="link" to='/searchpage'>
                                        <button className="iconBt"><FaSistrix color='white' size='2em' /></button>
                                    </Link>
                                </div>
                            )
                            : null
                    }
                    {
                        this.state.isSignin ?
                            (
                                <div>
                                    <Link className="link" to='/noticeforcustomer'>
                                        <button className="iconBt"><IoIosNotifications color='white' size='2em' /></button>
                                    </Link>
                                </div>
                            )
                            : null
                    }
<<<<<<< HEAD

                    <button 
                        class="Signin"
                        onClick={() => { this.showDropdownMenu() }}>
                        <i class={!this.state.isSignin ? "users icon" : "user circle icon"}></i>
                        {this.state.statename}
=======
                    <button
                        class="Signin"
                        onClick={this.showDropdownMenu}>
                        {
                            this.state.checkLogin ? <i className='user circle icon'></i>
                                : <i className="users icon" size='2em'></i>
                        }
                        <span>{this.state.statename}</span>
>>>>>>> ecb6b71763f4bb70e12fd46d838fe838b3eb2d7b
                    </button>

                    {this.state.displayMenu ? (
                        <ul>
<<<<<<< HEAD
                            <a href= {localStorage.getItem('username') ? "/profilecustomer" : "/profileshop"}>Profile</a>
                            <a onClick={this.logoutevent}>Log Out</a>
=======
                            <a href="/profilecustomer" >Profile</a>
                            <a href="/home" onClick={this.logoutevent}>Log Out</a>
>>>>>>> ecb6b71763f4bb70e12fd46d838fe838b3eb2d7b
                        </ul>
                    ) :
                        (
                            null
                        )
                    }

                </div>
            </div>
        );
    }
}

export default NavBar;