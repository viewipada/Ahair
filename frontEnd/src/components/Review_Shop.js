import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import StarRate from './StarRate';
import Navbar from './navbar'

class review_Cus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            starRate_shop:''
        }
        this.getStar = this.getStar.bind(this);
    }
    getStar(rating){
        this.setState({starRate_shop: rating});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const data = this.state;
        console.log(data);
    }
    render() {
        return (
            <div>
                <Navbar/>
            <div className="Format_Container">
                <div className="title">
                    <h1  style={{color:"#cb2d6f",fontSize:"30px"}}>
                        Review Customer
                    </h1>
                </div>
                <div className="starRate" style={{margin:"13%"}}>
                    <StarRate getStar={this.getStar}/>
                </div>
                <div className="container_right_bt" >
                    <button type="submit" className="submit_button" onClick={this.handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
            </div>
    );
}
}

export default review_Cus;