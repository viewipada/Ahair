import React, { Component } from 'react';
import { Link ,Redirect} from 'react-router-dom'
import logo from './pic/logo_V2.1.png'
import { FaSistrix, FaUser } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
import { FaGrin } from 'react-icons/fa'
import { storage } from 'firebase';

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

    showDropdownMenu = () => {
        if (!this.state.isSignin) {
            // <Link className="link" to="/signin"/>
        }
        else {
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
        this.setState({ isSignin: false });
        this.props.history.push('/home')
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('shopname')
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state.searchValue;
        console.log(data);
        if (this.props._keySearch) {
            this.props._keySearch(data)
        }
        this.setState({ statesubmit: true })
    }
    keyPress = (event) => {
        if (event.key === "Enter") {
            const data = this.state.searchValue;
            console.log(data);
            if (this.props._keySearch) {
                this.props._keySearch(data)
            }
            this.setState({ statesubmit: true })
        }
    }

    render() {
        return (
            <div class="wrapnavbar">
                <Link className="link" to="">
                    <img src={logo} class="homelogo" alt="Home" />
                </Link>
                <div class="searchBox">
                    <input
                        type="text"
                        placeholder="Search"
                        className="searchInput"
                        name="searchValue"
                        onChange={this.handleInputChange}
                        onKeyPress={this.keyPress}
                    />
                    <button className="searchBt" onClick={this.handleSubmit}>
                        <FaSistrix size='1.5em' color="white" />
                    </button>
                    {
                        this.state.statesubmit ?
                            (
                                <div href='/searchpage'/>
                            )
                            : null
                    }
                </div>
                <div className="leftGroup">
                    {
                        this.state.isSignin ?
                            (
                                <button className="iconBt"><FaGrin color='white' size='1.8em' /></button>

                            )
                            : null
                    }
                    {
                        this.state.isSignin ?
                            (
                                <button className="iconBt"><IoIosNotifications color='white' size='2em' /></button>
                            )
                            : null
                    }

                    <button 
                        class="Signin"
                        onClick={() => { this.showDropdownMenu() }}>
                        <i class={!this.state.isSignin ? "users icon" : "user circle icon"}></i>
                        {this.state.statename}
                    </button>

                    {this.state.displayMenu ? (
                        <ul>
                            <a href= {localStorage.getItem('username') ? "/profilecustomer" : "/profileshop"}>Profile</a>
                            <a onClick={this.logoutevent}>Log Out</a>
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