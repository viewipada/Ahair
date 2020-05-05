import React, { Component } from 'react';
import { FaSistrix } from "react-icons/fa"
import Axios from 'axios'
import ShopItem_S from './ShopItem_S'
import Sidebar from './Sidebar'
import NavBar from './navbar'
import { connect } from 'react-redux';
import { Shop_1 } from '../redux/index'


class SearchPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            shopName: "",
            shopId: "",
            shoprows: [],
            barberrows: []
        }
        // this.keySearch = this.keySearch.bind(this)
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
        var shopurl = "https://us-central1-g10ahair.cloudfunctions.net/api/shop" + keyword;
        Axios.get(shopurl).then(result => {
            // console.log(JSON.stringify(result.data.results))
            const dataCount = result.data.length
            // console.log("test: ",dataCount)
            if(dataCount===undefined){
                this.setState({ shoprows : result.data })
            }
            else{
                result.data.forEach(item => {
                     // item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path
                    dataArray.push(item)
                })
                this.setState({ shoprows : dataArray });
            }
        })
        // var barberurl = "https://us-central1-g10ahair.cloudfunctions.net/api/searchBarber?key=" + keyword;
        // Axios.get(barberurl).then(result => {
        //     const dataCount = result.data.length
        //     if(dataCount===undefined){
        //         this.setState({ barberrows:result.data })
        //     }
        //     else{
        //         result.data.forEach(item => {
        //             dataArray.push(item)
        //         })
        //         this.setState({ barberrows: dataArray });
        //     }
        // })
    }

    handleOnClick = (item) => {
        this.setState({
            shopName: item.shopName,
            shopId: item.shopId
        }, () => {
            this.submit()
        }
        );
    }


    submit = () =>{
        console.log("submitSearch: ",this.state)
        this.props.shop(this.state)
        this.props.history.push('/shop')
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
                                <div class="searchBox" style={{ marginTop: '1em' }}>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="searchInput"
                                        name="searchValue"
                                        onChange={this.handleInputChange}
                                        onKeyPress={this.keyPress}
                                        style={{ height: '40px' }}
                                    />
                                    <button
                                        className="searchBt"
                                        onClick={this.handleSubmit}
                                        style={{ height: '40px' }}>
                                        <FaSistrix size='1.5em' color="white" />
                                    </button>
                                </div>

                                {/* Topic */}
                                <div class="topic" style={{ marginTop: '1.7em' }} >Search Result</div>
                                <hr class="major" />

                                {/* Body */}
                                {/* <div style={{marginLeft:'2.5em'}}> */}
                                {this.state.shoprows.map(item => (
                                    <div key={item.shopId} onClick={() => this.handleOnClick(item)}>
                                        <ShopItem_S shop_item={item} />
                                    </div>
                                ))}

                                {/* </div> */}
                            </section>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

const mapStateToProps = (state) => { //subscribe
    return {
        shopStore: state.ShopReducer.shop
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        shop: (data) => dispatch(Shop_1(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);