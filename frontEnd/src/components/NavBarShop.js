import React, { Component } from 'react';
import logo from './pic/logo_V2.1.png'
import { FaSistrix, FaUser } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
import { FaGrin } from 'react-icons/fa'

class NavBarShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statename: 'Sign in',
            displayMenu: false,
            checkLogin: false,
            iconchange: "users icon",
            searchValue: 'null',
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
        this.setState({ statename: 'Sign-in' });
    }

    render() {
        return (
            <div class="wrapnavbar">
                <img src={logo} class="homelogo" alt="Home" />
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

export default NavBarShop;