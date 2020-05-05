import React from 'react'
import axios from 'axios'
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
        let formData = new FormData()

        if(!this.state.isSaved){
            this.props.getFile(this.state.imageFile, this.state.imagePreview, this.state.imageUrl )
        }

        formData.append('imgUrl',this.state.imageFile)
        axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/user/image',formData,{headers: {'Authorization':'Bearer ' + localStorage.getItem('token')}})
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        });
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
                
                <div className = "wrap_preview_Review">
                    <img 
                        className = "image_preview_Review"
                        alt = ""
                        src = {this.state.imagePreview? this.state.imagePreview : this.props.imagePreview }
                    />
                </div>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        className = "file_input_Review"
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