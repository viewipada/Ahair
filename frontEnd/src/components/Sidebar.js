import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {

    constructor(props) {
        super(props)

        this.dropdownSidebar = this.dropdownSidebar.bind(this);
    }

    componentDidMount(){
        this.dropdownSidebar()
    }

    onSidebarClick = (key) => {
        if (this.props._keySearch) {
            this.props._keySearch(key)
        }
    }

    dropdownSidebar = () => {
        // alert(id)
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;

        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }

    render() {

        return (
            <div id="sidebar">
                <div class="inner">

                    <p class="topicCatalog">Catagory</p>

                    {/* Dropdown Sidebar */}
                    <div class="sidenav">

                        <button
                            class="dropdown-btn"
                            id={() => { this.dropdownSidebar() }}>
                            Women
                        </button>

                        <div class="dropdown-container">
                            <a onClick={() => { this.onSidebarClick("Long hair") }} href='/searchpage' >Long hair</a>
                            <a onClick={() => { this.onSidebarClick("Medium length") }} href='/searchpage' >Medium length</a>
                            <a onClick={() => { this.onSidebarClick("Short hair") }} href='/searchpage' >Short hair</a>
                            <a onClick={() => { this.onSidebarClick("Perm") }} href='/searchpage' >Perm</a>
                            <a onClick={() => { this.onSidebarClick("Perm") }} href='/searchpage' >Corn</a>

                            <button
                                class="dropdown-btn"
                                id={() => { this.dropdownSidebar() }}>
                                Colored
                            </button>

                            <div class="dropdown-container">
                                <a onClick={() => { this.onSidebarClick("Something") }} href='/searchpage' >Something</a>
                                <a onClick={() => { this.onSidebarClick("Something") }} href='/searchpage' >Something</a>
                                <a onClick={() => { this.onSidebarClick("Something") }} href='/searchpage' >Something</a>
                            </div>
                        </div>

                        <button
                            class="dropdown-btn"
                            id={() => { this.dropdownSidebar() }}>
                            Men
                        </button>

                        <div class="dropdown-container">

                            <button
                                class="dropdown-btn"
                                id={() => { this.dropdownSidebar() }}>
                                Long hair
                            </button>

                            <div class="dropdown-container">
                                <a onClick={() => { this.onSidebarClick("Something") }} href='/searchpage' >Something</a>
                                <a onClick={() => { this.onSidebarClick("Something") }} href='/searchpage' >Something</a>
                                <a onClick={() => { this.onSidebarClick("Something") }} href='/searchpage' >Something</a>
                            </div>
                            <a onClick={() => { this.onSidebarClick("Short hair") }} href='/searchpage' >Short hair</a>
                            <a onClick={() => { this.onSidebarClick("Perm") }} href='/searchpage' >Perm</a>
                            <a onClick={() => { this.onSidebarClick("Corn") }} href='/searchpage' >Corn</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
