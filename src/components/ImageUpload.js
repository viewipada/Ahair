import React from 'react'
import userImage from './pic/user_green_icon.png'

class ImageUpload extends React.Component {
    constructor(){
        super();
        this.state = {
            imageFile: "",
            imagePreview: "",
            imageUrl: "",
            isSaved: false
        }
    }
    
    hideSaved = () => {
        this.setState({ isSaved: false})
    }

    handleSubmit = event => {
        event.preventDefault()
        if(!this.state.isSaved){
            this.props.getFile(this.state.imageFile, this.state.imagePreview, this.state.imageUrl )
        }
    }

    handleChange = event => {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];
        

        reader.onloadend = () => {
            this.setState({
                imageFile: file, imagePreview: reader.result, imageUrl: URL.createObjectURL(file)
            });
            
        }
        this.setState({ isSaved: true })
        if (file && file.type.match('image.*')) {
            reader.readAsDataURL(file);
        }
        // console.log(this.state)
    }

    render(){
        return(
            <div className = "container_profile">
                
                <div className = "wrap_preview">
                    <img 
                        className = "image_preview"
                        alt = ""
                        src = {this.state.imagePreview? this.state.imagePreview : userImage }
                    />
                </div>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        className = "file_input"
                        type = "file"
                        id = "image_file"
                        onChange = {this.handleChange}
                    />
                   <div className="wrap_button">
                        <button className={this.state.isSaved? "showsave_button": "hidsave_button"} type="submit" onClick={this.hideSaved}>
                            Save
                        </button>
                    </div>
                </form>

            </div>
        )
    }
}

export default ImageUpload; 