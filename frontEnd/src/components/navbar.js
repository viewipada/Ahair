import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './pic/logo_V2.1.png'
import { FaSistrix, FaUser } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
import { FaGrin } from 'react-icons/fa'

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

    showDropdownMenu = () => {
        const checkLogin = this.state.checkLogin;
        if (!checkLogin) {
            this.setState({ statename: 'Pixy' });
            this.setState({ checkLogin: true });
            console.log("hereee!!");
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
        this.setState({ checkLogin: false });
        this.setState({ statename: 'SignIn' });
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
                        this.state.checkLogin ?
                            (
                                <button className="iconBt"><FaGrin color='white' size='1.8em' /></button>

                            )
                            : null
                    }
                    {
                        this.state.checkLogin ?
                            (
                                <button className="iconBt"><IoIosNotifications color='white' size='2em' /></button>
                            )
                            : null
                    }

                    <button
                        class="Signin"
                        onClick={() => { this.showDropdownMenu() }}>
                        <i class={!this.state.checkLogin ? "users icon" : "user circle icon"}></i>
                        {this.state.statename}
                    </button>

                    {this.state.displayMenu ? (
                        <ul>
                            <a href="#Profile" >Profile</a>
                            <a href="#LogOut" onClick={this.logoutevent}>Log Out</a>
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