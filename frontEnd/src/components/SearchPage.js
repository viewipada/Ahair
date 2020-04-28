import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FaSistrix } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import Axios from 'axios'
import ShopItem_S from './ShopItem_S'
import HairStyleItem_S from './HairStyleItem_S'
import Sidebar from './Sidebar'
import NavBar from './navbar'


class SearchPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            keyword: "a", 
            rows: []
        }
    }

    keySearch = (name) => {
        // alert(name)
        // this.search(name)
        // alert(typeof(name)+ typeof(this.state.keyword));
        // alert(name+ this.state.keyword);
        if(this.state.keyword != name){
            // alert(name);
            this.setState({keyword:name});
            alert(this.state.keyword);
        }
    }

    componentDidMount() {
        this.search(this.state.keyword)
    }

    search = (keyword) => {
        console.log(keyword)
        // alert(keyword)
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

        return (
            <body class="is-preload">
                {/* <!-- Wrapper --> */}

                <NavBar  _keySearch={this.keySearch.bind(this)}/>

                <div id="wrapper">

                    {/* Sidebar */}
                    <Sidebar _keySearch={this.keySearch.bind(this)}/>

                    {/* <!-- Main --> */}
                    <div id="main">

                        <div class="inner">
                            {/* <!-- Content --> */}
                            <section>

                                {/* Topic */}
                                <div class="topic" style={{marginTop:'1.7em'}} >Search Result</div>
                                <hr class="major"/>

                                {/* Body */}
                                {/* <div style={{marginLeft:'2.5em'}}> */}
                                    {this.state.rows.map(item => (
                                        <ShopItem_S shop_item={item} />
                                    ))}

                                    {this.state.rows.map(item => (
                                        <HairStyleItem_S hairstyle_item={item} />
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