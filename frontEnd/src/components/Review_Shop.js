import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import StarRate from './StarRate';

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
            <div className="Review_Container">
                <div className="title">
                    <h1  style={{color:"#cb2d6f",fontSize:"30px"}}>
                        Review Customer
                    </h1>
                </div>
                <div className="starRate" style={{margin:"15%"}}>
                    <StarRate getStar={this.getStar}/>
                </div>
                <div className="container_right_bt" >
                    <button type="submit" className="submit_button" onSubmit={this.handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
    );
}
}

export default review_Cus;