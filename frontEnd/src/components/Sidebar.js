import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './pic/logo_V2.1.png'

export default class Sidebar extends Component {
    render() {

        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;

        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                // this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }

        return (
            <div id="sidebar">
                <div class="inner">

                    {/* Logo */}
                    <Link className="link" to="/home">
                        <img src={logo} class="homelogo_n" alt="Home" height="8%" width="8%" />
                    </Link>

                    <p class="topicCatalog">Catagory</p>

                    {/* Dropdown Sidebar */}
                    <div class="sidenav">
                        <button class="dropdown-btn">Women
                                        <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-container">
                            <a href='/searchpage' onClick={(event) => { this.search('Long hair') }}>Long hair</a>
                            <a href='/searchpage' onClick={(event) => { this.search('Medium length') }}>Medium length</a>
                            <a href='/searchpage' onClick={(event) => { this.search('Short hair') }}>Short hair</a>
                            <a href='/searchpage' onClick={(event) => { this.search('Perm') }}>Perm</a>
                            <a href='/searchpage' onClick={(event) => { this.search('Corn') }}>Corn</a>
                            <button class="dropdown-btn">Colored
                                            <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-container">
                                <a href='/searchpage' onClick={(event) => { this.search('Something') }}>Something</a>
                                <a href='/searchpage' onClick={(event) => { this.search('Something') }}>Something</a>
                                <a href='/searchpage' onClick={(event) => { this.search('Something') }}>Something</a>
                            </div>
                        </div>
                        <button class="dropdown-btn">Men
                                        <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-container">
                            <button class="dropdown-btn">Long hair
                                            <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-container">
                                <a href='/searchpage' onClick={(event) => { this.search('Something') }}>Something</a>
                                <a href='/searchpage' onClick={(event) => { this.search('Something') }}>Something</a>
                                <a href='/searchpage' onClick={(event) => { this.search('Something') }}>Something</a>
                            </div>
                            <a href='/searchpage' onClick={(event) => { this.search('Short hair') }}>Short hair</a>
                            <a href='/searchpage' onClick={(event) => { this.search('Perm') }}>Perm</a>
                            <a href='/searchpage' onClick={(event) => { this.search('Corn') }}>Corn</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
