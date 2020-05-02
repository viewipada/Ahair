import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FaSistrix } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import Axios from 'axios'
import ShopItem_S from './ShopItem_S'
import Sidebar from './Sidebar'
import NavBar from './navbar'


class SearchPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchValue: 'null',
            rows: []
        }
        this.keySearch = this.keySearch.bind(this)
    }

    keySearch = (name) => {
        console.log(name)
        alert(name)
        // if(this.state.keyword != name){
        console.log(name + this.state.keyword)
        const n = name
        this.setState({ keyword: n });
        alert(this.state.keyword)
        console.log(name + this.state.keyword)
        // }
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
        console.log("Submit: " + data);
        this.search(data)
    }
    keyPress = (event) => {
        if (event.key === "Enter") {
            const data = this.state.searchValue;
            console.log("KeyPress: " + data);
            this.search(data)
        }
    }


    componentDidMount() {
        this.search('')
    }

    search = (keyword) => {
        console.log("Search: " + keyword)
        var dataArray = []
        // test api: http://api.themoviedb.org/3/search/movie?api_key=0696a5d8f4f751e4493e133825a494f4&query=
        var url = "https://us-central1-g10ahair.cloudfunctions.net/api/shop" + keyword;
        Axios.get(url).then(result => {
            // console.log(JSON.stringify(result.data.results))
            result.data.forEach(item => {
                // item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path
                dataArray.push(item)
            })

            this.setState({ rows: dataArray });
        })
    }



    render() {

        return (
            <body class="is-preload">
                {/* <!-- Wrapper --> */}

                <NavBar />

                <div id="wrapper">

                    {/* Sidebar */}
                    {/* <Sidebar keySearch={this.keySearch}/> */}

                    {/* <!-- Main --> */}
                    <div id="main">

                        <div class="inner">

                            {/* <!-- Content --> */}
                            <section>
                                <div class="searchBox" style={{marginTop:'1em'}}>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="searchInput"
                                        name="searchValue"
                                        onChange={this.handleInputChange}
                                        onKeyPress={this.keyPress}
                                        style={{height:'40px'}}
                                    />
                                    <button 
                                        className="searchBt" 
                                        onClick={this.handleSubmit}
                                        style={{height:'40px'}}>
                                        <FaSistrix size='1.5em' color="white" />
                                    </button>
                                </div>

                                {/* Topic */}
                                <div class="topic" style={{ marginTop: '1.7em' }} >Search Result</div>
                                <hr class="major" />

                                {/* Body */}
                                {/* <div style={{marginLeft:'2.5em'}}> */}
                                {this.state.rows.map(item => (
                                    <ShopItem_S shop_item={item} />
                                ))}

                                {/* </div> */}
                            </section>
                        </div>
                    </div>
                </div>
            </body >
        );
    }
}

export default SearchPage;