import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './pic/logo_V2.1.png'
import { FaSistrix, FaUser } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
import { FaGrin } from 'react-icons/fa'
import axios from 'axios'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statename: 'SignIn',
            displayMenu: false,
            checkLogin: false,
            iconchange: "users icon",
            searchValue: 'null'
        };
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.logoutevent = this.logoutevent.bind(this)
    }

    componentDidMount() {
        if (localStorage.getItem('user')) {
            this.setState({ checkLogin: true });
            this.setState({ statename: localStorage.getItem('username') });
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
        this.setState({ checkLogin: false });
        this.setState({ statename: 'SignIn' });
        localStorage.clear();
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
                        this.state.checkLogin ?
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
                        this.state.checkLogin ?
                            (
                                <div>
                                    <Link className="link" to='/noticeforcustomer'>
                                        <button className="iconBt"><IoIosNotifications color='white' size='2em' /></button>
                                    </Link>
                                </div>
                            )
                            : null
                    }
                    <button
                        class="Signin"
                        onClick={this.showDropdownMenu}>
                        {
                            this.state.checkLogin ? <i className='user circle icon'></i>
                                : <i className="users icon" size='2em'></i>
                        }
                        <span>{this.state.statename}</span>
                    </button>

                    {this.state.displayMenu ? (
                        <ul>
                            <a href="/profilecustomer" >Profile</a>
                            <a href="/home" onClick={this.logoutevent}>Log Out</a>
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