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
                        Review
                    </h1>
                </div>
                <div className="starRate">
                    <StarRate/>
                </div>
                <div className="wrapAddimg">
                    <p style={{color:"white",margin:"0px"}}>Add Image (Maximum 5 Image)</p>
                    <div className="AddImgReview">
                        <MultipleImageUpload getFile={this.getFile} />
                    </div>
                </div>
                <div className="ReviewtxtBox">
                    <h2 style={{color:"white",fontSize:"20px"}}>Description</h2>
                    <div className="descriptionBox">
                        <textarea type="text" placeholder="Write some Review..." rows="5"></textarea>
                    </div>
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