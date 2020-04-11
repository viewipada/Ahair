import React ,{useState}from 'react'
import MultipleImageUpload from './MultipleImageUpload';
import { Link } from 'react-router-dom';
import StarRate from './StarRate';

class review_Cus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
    render() {
        return (
            <div className="Review_Container">
                <div className="title">
                    <h1  style={{color:"#cb2d6f",fontSize:"30px"}}>
                        Review Customer
                    </h1>
                </div>
                <div className="starRate" style={{margin:"15%"}}>
                    <StarRate/>
                </div>
                <div className="container_right_bt" >
                    <button type="submit" className="submit_button">
                        Submit
                    </button>
                </div>
            </div>
    );
}
}

export default review_Cus;