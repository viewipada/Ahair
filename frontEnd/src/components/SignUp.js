import React from 'react';
import { Link } from 'react-router-dom';
import customerIcon from './pic/customer_icon.png';
import shopIcon from './pic/shop_icon.png';

class SignUp extends React.Component {
    constructor()
    {
        super();
        this.state = { 
            isCustomer : false,
            isShop :false,
            userType : ""
        }
    }
    selectCustomer = () => {
        this.setState({ 
            isShop: false, isCustomer: true, userType : "customer type"
        });
    }
    selectShop = () => {
        this.setState({ 
            isShop: true, isCustomer: false, userType: "shop type"
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        if(this.state.isCustomer || this.state.isShop){
            console.log(this.state);
            this.setState(this.state);
            if(this.state.isCustomer) {
                this.props.history.push('/signup_customer_1')
            }
            else {
                this.props.history.push('/signup_shop_1')
            }
        }
    };

    render(){
        return(
            <div className="big_container">
                <div className="container_signup">
                    <div className="wrap_signup">
                        <div className="signup_form" >

                            <span className="signup_form_title">
                                <h1 style={{color:"#CB2D6F",fontSize:"50px"}}>
                                    Sign up
                                </h1>
                                <h5 style={{color:"#CB2D6F"}}>
                                    Please select an account type
                                </h5>
                            </span>

                            <div className="container_type">
                                <div 
                                    className="wrap_type" 
                                    id = "customer_type"
                                    value = "customer type"
                                    onClick = {this.selectCustomer} >
                                    <img 
                                        src = {customerIcon} 
                                        alt = "customer type" 
                                        width = "100px"
                                        style = {{ filter : this.state.isCustomer ? "brightness(0.6)" : "none"}}
                                    />
                                    <p style = {{ filter : this.state.isCustomer ? "brightness(0.6)" : "none"}}>Customer</p>
                                </div>
            
                                <div 
                                    className="wrap_type" 
                                    id = "shop_type"
                                    value = "shop type"
                                    onClick = {this.selectShop} >
                                    <img 
                                        src = {shopIcon} 
                                        alt = "shop type"
                                        width ="100px"
                                        style = {{ filter : this.state.isShop ? "brightness(0.6)" : "none"}}
                                    />
                                    <p  style = {{ filter : this.state.isShop ? "brightness(0.6)" : "none"}}>Shop</p>
                                </div>
                            </div>
                            <div className="container_next_bt">
                                <Link className="link" to='/signin'>
                                    <div>
                                        <button className="login_button" type="reset">
                                            Back
                                        </button>
                                    </div>
                                </Link>
                                <form onSubmit={this.handleSubmit}>
                                    <button className="login_button" >
                                        Next
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUp;