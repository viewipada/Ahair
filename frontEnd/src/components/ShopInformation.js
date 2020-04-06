import React from 'react';
import { Link } from 'react-router-dom';
import shopIcon from './pic/shop_icon.png';
import timeIcon from './pic/clock_icon.png'
import MultipleImageUpload from './MultipleImageUpload';

//ที่อยู่ เวลา รูปบรรยากาศ
class ShopInformation extends React.Component {
    constructor()
    {
        super();
        this.state = { 
            address: "",
            openhours: "09:00",
            closehours: "18:00",
            imageFile: [],
            imagePreview: [],
            imageUrl: []
        }
        this.getFile = this.getFile.bind(this);
    }

    getFile(img_file, img_preview, img_url) {
        this.setState({
            imageFile: img_file, imagePreview: img_preview, imageUrl: img_url
        });
    }

    handleChange = event => {
        // event.preventDefault();
        this.setState({[event.target.id]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);
        // if (isValid) {
          console.log(this.state);
          this.setState(this.state);
        //   this.props.history.push('/signup_shop_2')
        // }
    };

    render(){
        return(
            <div className="big_container">
                {/* <div className="container_signup"> */}
                    <div className="wrap_info">

                        <div className = "title">
                            <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                                Shop Infomation
                            </h1>
                        </div>
                        
                        <div className="signup_form">

                            <div className = "bigcontainer_info">
                                <div className = "line_info">
                                    <div style={{width:"100px"}}>
                                        <p style={{color:"white", marginRight:"20px"}}>Adress</p>
                                    </div>
                                    <div className="wrap_input_info">
                                        <img className="input_icon"src={shopIcon} alt=""/>
                                        <input  
                                            className = "input_info" 
                                            type = "text"
                                            id = "address"
                                            // placeholder = "Address"
                                            value = {this.state.address}                                              
                                            onChange = {this.handleChange} 
                                        />
                                    </div>
                                </div>
                                
                                <div className = "line_info">
                                    <div style={{width:"100px"}}>
                                        <p style={{color:"white", marginRight:"20px"}}>Open</p>
                                    </div>
                                    <div className="wrap_input_time">
                                        <img className="input_icon"src={timeIcon} alt=""/>
                                        <input  
                                            className = "input_info" 
                                            type = "time"
                                            id = "openhours"
                                            // placeholder = "Open hours"
                                            value = {this.state.openhours}                                              
                                            onChange = {this.handleChange} 
                                        />
                                    </div>

                                    <div style={{width:"100px"}}>
                                        <p style={{color:"white", marginRight:"20px", marginLeft:"30px"}}>Close</p>
                                    </div>
                                    <div className="wrap_input_time">
                                        <img className="input_icon"src={timeIcon} alt=""/>
                                        <input  
                                            className = "input_info" 
                                            type = "time"
                                            id = "closedhours"
                                            // placeholder = "Open hours"
                                            value = {this.state.closehours}                                              
                                            onChange = {this.handleChange} 
                                        />
                                    </div>
                                </div>

                                <div className = "line_info">
                                    <div style={{width:"200px"}}>
                                        <p style={{color:"white", marginRight:"20px"}}>Images about shop</p>
                                        <p style={{color:"gray", marginRight:"20px"}}>(maximum 5 images)</p>
                                    </div>
                                    <div>
                                        <MultipleImageUpload getFile={this.getFile} />
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="container_right_bt">
                                {/* <Link className="link" to="/signup">
                                    <div>
                                        <button className="login_button" type="reset">
                                            Back
                                        </button>
                                    </div>
                                </Link> */}
                                <form onSubmit={this.handleSubmit} >
                                    <button className="login_button" type="submit" onClick={this.handleSubmit}>
                                        Next
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                {/* </div> */}
            </div>
        );
    }
}
export default ShopInformation;