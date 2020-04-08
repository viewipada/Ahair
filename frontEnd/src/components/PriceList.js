import React from 'react';
import { Link } from 'react-router-dom';

class InputList extends React.Component {
    handleChange(index, event) {
      this.props.onChange(index, {...this.props.data[index], price: event.target.value})
    }

    imgChange(index, event) {
        this.props.imgChange(index, {...this.props.data[index], img: URL.createObjectURL(event.target.files[0])})
      }
    
    render() { 
      return (
        <div className = "line_price">
            {this.props.data.map((data,index) => 
                <ul className = "line_price" key = {data.hair}>
                    <div className="name_hair">
                        {data.hair}
                    </div>
                    <div className = "price">
                        <input  
                            type ="number" 
                            className= "input_price" 
                            min="0"
                            placeholder = "0"
                            // value={data.price} 
                            onChange={this.handleChange.bind(this, index)} 
                        />
                    </div>
                    <div className = "baht">Baht</div>
                    <div className = "hairstype_img">
                        <input 
                            className = "hairstype_img_input"
                            type = "file"
                            id = "image_file"
                            onChange = {this.imgChange.bind(this, index)}
                        />
                    </div>
                </ul>
            )}
        </div>
      )
    }
}
  
class PriceList extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {hair:"hair1", price: 0, img:""}, 
                {hair:"hair2", price: 0, img:""}
            ]
        }
        this.handleChange = this.handleChange.bind(this)
        this.imgChange = this.imgChange.bind(this)
    }
    
    handleChange(index, price) {
        // console.log(value)
        const data = [...this.state.data]
        data.splice(index, 1, price)
        this.setState({data, })
    }
    
    imgChange(index, img) {
        const data = [...this.state.data]
        data.splice(index, 1, img)
        this.setState({data, })
    }
    
    handleSubmit = event => {
        event.preventDefault();
        // let isValid = this.validate();
        // if (isValid) {
          console.log(this.state);
          this.setState(this.state);
        //   this.props.history.push('/signup_shop_2')
        // }
    };

    render() {
      return (
        <div className="big_container">
            <div className="wrap_info">

                <div className = "title">
                    <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                        Price List
                    </h1>
                </div>
                
                <div className="signup_form">

                    <div className = "bigcontainer_info">
                        <div className = "line_info">
                            <div style={{width:"200px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Women Hairstyles</p>
                            </div>
                        </div>
                        <InputList data={this.state.data} onChange={this.handleChange} imgChange={this.imgChange}/>
                    </div>

                    <div className="container_next_bt">
                        <Link className="link" to="">
                            <div>
                                <button className="login_button" type="reset">
                                    Back
                                </button>
                            </div>
                        </Link>
                        <form onSubmit={this.handleSubmit} >
                            <button className="login_button" type="submit" onClick={this.handleSubmit}>
                                Next
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default PriceList;