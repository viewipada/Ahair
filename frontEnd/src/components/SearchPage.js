import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './pic/logo_V2.1.png'
import { FaSistrix } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import Axios from 'axios'
import ShopItem from './ShopItem'
import HairStyleItem from './HairStyleItem'


class SearchPage extends Component {

    constructor(props) {
        super(props)

        this.state = { rows: [] }
    }

    componentDidMount() {
        this.search('A')
    }

    search = (keyword) => {
        console.log(keyword)
        var dataArray = []
        var url = "http://api.themoviedb.org/3/search/movie?api_key=0696a5d8f4f751e4493e133825a494f4&query=" + keyword;
        Axios.get(url).then(result => {
            console.log(JSON.stringify(result.data.results))
            result.data.results.forEach(item => {
                item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path
                dataArray.push(item)
            })

            this.setState({ rows: dataArray });
        })
    }

    render() {


        // Dropdown Sidebar
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
            <body class="is-preload">
                {/* <!-- Wrapper --> */}
                <div id="wrapper">

                    {/* Sidebar */}
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
                                    <a onClick={(event) => { this.search('Long hair') }}>Long hair</a>
                                    <a onClick={(event) => { this.search('Medium length') }}>Medium length</a>
                                    <a onClick={(event) => { this.search('Short hair') }}>Short hair</a>
                                    <a onClick={(event) => { this.search('Perm') }}>Perm</a>
                                    <a onClick={(event) => { this.search('Corn') }}>Corn</a>
                                    <button class="dropdown-btn">Colored
                                            <i class="fa fa-caret-down"></i>
                                    </button>
                                    <div class="dropdown-container">
                                        <a onClick={(event) => { this.search('Something') }}>Something</a>
                                        <a onClick={(event) => { this.search('Something') }}>Something</a>
                                        <a onClick={(event) => { this.search('Something') }}>Something</a>
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
                                        <a onClick={(event) => { this.search('Something') }}>Something</a>
                                        <a onClick={(event) => { this.search('Something') }}>Something</a>
                                        <a onClick={(event) => { this.search('Something') }}>Something</a>
                                    </div>
                                    <a onClick={(event) => { this.search('Short hair') }}>Short hair</a>
                                    <a onClick={(event) => { this.search('Perm') }}>Perm</a>
                                    <a onClick={(event) => { this.search('Corn') }}>Corn</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Main --> */}
                    <div id="main">
                        <div class="wrap_search_signin">

                            {/* Search */}
                            <div class="wrap_search_icon">
                                <input className="search" fontSize="30" placeholder="Search"
                                    onChange={(event) => { this.search(event.target.value) }} />
                                <div><FaSistrix class="searchIcon" size='1.5rem' color="white" /></div>
                            </div>

                            {/* Signin button */}
                            <Link className="link" to="/signin">
                                <button type="signIn_2" name="Signin"><FaUserFriends class="usericon" />   Sign-in</button>
                            </Link>

                        </div>
                        <div class="inner">
                            {/* <!-- Content --> */}
                            <section>

                                {/* Topic */}
                                <div class="topic">Search Result</div>
                                <hr class="major" />

                                {/* Body */}
                                {this.state.rows.map(item => (
                                    <ShopItem movie={item} />
                                ))}

                                {this.state.rows.map(item => (
                                    <HairStyleItem movie={item} />
                                ))}

                            </section>
                        </div>
                    </div>
                </div>
            </body >
        );
    }
}

export default SearchPage;