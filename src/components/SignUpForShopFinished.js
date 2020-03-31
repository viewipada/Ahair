import React from 'react';
import { Link } from 'react-router-dom';
import finishedIcon from './pic/checked_green_icon.png';

class SignUpForShopFinished extends React.Component {
    
    render(){
        return(
            <div className="big_container">
                <div className="container_signup">
                    <div className="wrap_signup">
                        <div className="signup_form">

                            <span className="signup_form_title">
                                <h1 style={{color:"#CB2D6F",fontSize:"50px"}}>
                                    Sign up
                                </h1>
                                <h5 style={{color:"#CB2D6F"}}>
                                    Finished
                                </h5>
                            </span>
        
                            <div className="block_finished">
                                <img className="finished_icon" src={finishedIcon} alt="" style={{width:"200px"}}/>
                            </div>

                            <h5 style={{color:"#CB2D6F", justifyContent:"center",textAlign:"center"}}>Let's create your shop</h5>
                            
                            <Link className="link" to="/signin">
                                <div className="wrap_button">
                                    <button className="login_button">
                                        Sign in
                                    </button>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUpForShopFinished;