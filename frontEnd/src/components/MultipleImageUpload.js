import React from 'react'
import axios from 'axios'

class MultipleImageUpload extends React.Component {

    constructor(){
        super();
        this.state = {
            imageFile: [],
            imagePreview: [],
            imageUrl: [],
            isSaved: false
        }
        // this.deleteImage = this.deleteImage.bind(this)
    }

    // deleteImage = event => {
    //     this.setState({
    //         imageFile: this.state.imageFile.pop(event.target.key),
    //         imagePreview: this.state.imagePreview.pop(event.target.key),
    //         imageUrl: this.state.imageUrl.pop(event.target.key)
    //     });
    //     console.log(this.state)
    // }
    
    hideSaved = () => {
        this.setState({ isSaved: false})
    }

    handleSubmit = event => {
        event.preventDefault()
        // console.log(this.state.imageFile)
        let formData = new FormData()

        if(!this.state.isSaved){
            this.props.getFile(this.state.imageFile, this.state.imagePreview, this.state.imageUrl )
        }

        formData.append('imgUrl',this.state.imageFile)
        axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/user/shopDetails/image',formData,{headers: {'Authorization':'Bearer ' + localStorage.getItem('token')}})
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
            this.setState((prevState) => ({ 
                imageFile: prevState.imageFile.concat(file), 
                imagePreview: prevState.imagePreview.concat(reader.result),
                imageUrl: prevState.imageUrl.concat(URL.createObjectURL(file))
            }));
        }
        this.setState({ isSaved: true })
        if (file && file.type.match('image.*')) {
            reader.readAsDataURL(file);
        }
        // console.log(this.state)
    }

    render(){
        return(
            <div className = "container_mutiplefile">
                
                <div className = "wrap_multipreview">
                    {(this.state.imagePreview || []).map(file => (
                        <img 
                            className = "multiple_image_preview"
                            src = {file} 
                            alt = "" 
                            key = {file.toString()}
                            // onClick = {this.deleteImage}
                        />
                    ))}
                </div>

                <form className="input_image_box" onSubmit={this.handleSubmit}>
                    <input 
                        className = "multiple_file_input"
                        type = "file"
                        id = "image_file"
                        onChange = {this.handleChange}
                        style={{display: this.state.imageFile.length == 1? "none": "flex"}}
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

export default MultipleImageUpload; 