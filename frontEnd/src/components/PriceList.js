import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {PriceListDetail} from '../redux/index'
import NavBarShop from './NavBarShop';

class InputListServices extends React.Component {
    servicesChange(index, event) {
      this.props.onChange(index, {...this.props.services[index], price: event.target.value})
    }

    render() { 
      return (
        <div className = "line_price">
            {this.props.services.map((services,index) => 
                <div className = "line_price" key = {services.hair} style={{marginLeft:"50px"}}>
                    <div className="name_hair">
                        {services.hair}
                    </div>
                    <div className = "price">
                        <input  
                            type ="number" 
                            className= "input_price" 
                            min="0"
                            placeholder = "0"
                            onChange={this.servicesChange.bind(this, index)} 
                            style={{placeholder:"gray"}}
                        />
                    </div>
                    <div className = "baht">Baht</div>
                </div>
            )}
        </div>
      )
    }
}

class InputListHairstyle extends React.Component {
    hairstyleChange(index, event) {
      this.props.onChange(index, {...this.props.hairstyle[index], price: event.target.value})
    }

    imghairstyleChange(index, event) {
        this.props.imgChange(index, {...this.props.hairstyle[index], img: URL.createObjectURL(event.target.files[0])})
      }
    
    render() { 
      return (
        <div className = "line_price">
            {this.props.hairstyle.map((hairstyle,index) => 
                <div className = "line_price" key = {hairstyle.hair} style={{marginLeft:"50px"}}>
                    <div className="name_hair">
                        {hairstyle.hair}
                    </div>
                    <div className = "price">
                        <input  
                            type ="number" 
                            className= "input_price" 
                            min="0"
                            placeholder = "0"
                            onChange={this.hairstyleChange.bind(this, index)} 
                        />
                    </div>
                    <div className = "baht">Baht</div>
                    <div className = "hairstype_img">
                        <input 
                            className = "hairstype_img_input"
                            type = "file"
                            id = "image_file"
                            onChange = {this.imghairstyleChange.bind(this, index)}
                        />
                    </div>
                </div>
            )}
        </div>
      )
    }
}

class PriceList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            servicesWomen: 
            [
                {hair:"Bang trim", price: 0, img:"", isCheck:false, key:0}, 
                {hair:"Blow dry", price: 0, img:"", isCheck:false, key:1}, 
                {hair:"Color", price: 0, img:"", isCheck:false, key:2}, 
                {hair:"Haircut", price: 0, img:"", isCheck:false, key:3},  
                {hair:"Highlights", price: 0, img:"", isCheck:false, key:4},
                {hair:"Perm", price: 0, img:"", isCheck:false, key:5},
                {hair:"Shampoo", price: 0, img:"", isCheck:false, key:6}, 
                {hair:"Straightening", price: 0, img:"", isCheck:false, key:7}, 
                {hair:"Treatment", price: 0, img:"", isCheck:false, key:8}
            ],
            servicesMen: 
            [
                {hair:"Beard trim", price: 0, img:"", isCheck:false, key:0}, 
                {hair:"Color", price: 0, img:"", isCheck:false, key:8},
                {hair:"Haircut", price: 0, img:"", isCheck:false, key:1}, 
                {hair:"Haircut (Children)", price: 0, img:"", isCheck:false, key:2},
                {hair:"Highlights", price: 0, img:"", isCheck:false, key:6},
                {hair:"Perm", price: 0, img:"", isCheck:false, key:5},  
                {hair:"Shampoo", price: 0, img:"", isCheck:false, key:3},  
                {hair:"Shave", price: 0, img:"", isCheck:false, key:4},
                {hair:"Straightening", price: 0, img:"", isCheck:false, key:7}, 
            ],
            hairstyleWomenShort : 
            [
                {hair:"Bang trim", price: 0, img:"", isCheck:false, key:0}, 
                {hair:"Blow dry", price: 0, img:"", isCheck:false, key:1}, 
                {hair:"Color", price: 0, img:"", isCheck:false, key:2}, 
                {hair:"Haircut", price: 0, img:"", isCheck:false, key:3},  
                {hair:"Highlights", price: 0, img:"", isCheck:false, key:4},
                {hair:"Perm", price: 0, img:"", isCheck:false, key:5},
                {hair:"Shampoo", price: 0, img:"", isCheck:false, key:6}, 
                {hair:"Straightening", price: 0, img:"", isCheck:false, key:7}, 
                {hair:"Treatment", price: 0, img:"", isCheck:false, key:8}
            ],
            hairstyleWomenMedium : 
            [
                {hair:"Bang trim", price: 0, img:"", isCheck:false, key:0}, 
                {hair:"Blow dry", price: 0, img:"", isCheck:false, key:1}, 
                {hair:"Color", price: 0, img:"", isCheck:false, key:2}, 
                {hair:"Haircut", price: 0, img:"", isCheck:false, key:3},  
                {hair:"Highlights", price: 0, img:"", isCheck:false, key:4},
                {hair:"Perm", price: 0, img:"", isCheck:false, key:5},
                {hair:"Shampoo", price: 0, img:"", isCheck:false, key:6}, 
                {hair:"Straightening", price: 0, img:"", isCheck:false, key:7}, 
                {hair:"Treatment", price: 0, img:"", isCheck:false, key:8}
            ],
            hairstyleWomenLong :
            [
                {hair:"Bang trim", price: 0, img:"", isCheck:false, key:0}, 
                {hair:"Blow dry", price: 0, img:"", isCheck:false, key:1}, 
                {hair:"Color", price: 0, img:"", isCheck:false, key:2}, 
                {hair:"Haircut", price: 0, img:"", isCheck:false, key:3},  
                {hair:"Highlights", price: 0, img:"", isCheck:false, key:4},
                {hair:"Perm", price: 0, img:"", isCheck:false, key:5},
                {hair:"Shampoo", price: 0, img:"", isCheck:false, key:6}, 
                {hair:"Straightening", price: 0, img:"", isCheck:false, key:7}, 
                {hair:"Treatment", price: 0, img:"", isCheck:false, key:8}
            ], 
            hairstyleMenShort : 
            [
                {hair:"Bang trim", price: 0, img:"", isCheck:false, key:0}, 
                {hair:"Blow dry", price: 0, img:"", isCheck:false, key:1}, 
                {hair:"Color", price: 0, img:"", isCheck:false, key:2}, 
                {hair:"Haircut", price: 0, img:"", isCheck:false, key:3},  
                {hair:"Highlights", price: 0, img:"", isCheck:false, key:4},
                {hair:"Perm", price: 0, img:"", isCheck:false, key:5},
                {hair:"Shampoo", price: 0, img:"", isCheck:false, key:6}, 
                {hair:"Straightening", price: 0, img:"", isCheck:false, key:7}, 
                {hair:"Treatment", price: 0, img:"", isCheck:false, key:8}
            ],
            hairstyleMenLong : 
            [
                {hair:"Bang trim", price: 0, img:"", isCheck:false, key:0}, 
                {hair:"Blow dry", price: 0, img:"", isCheck:false, key:1}, 
                {hair:"Color", price: 0, img:"", isCheck:false, key:2}, 
                {hair:"Haircut", price: 0, img:"", isCheck:false, key:3},  
                {hair:"Highlights", price: 0, img:"", isCheck:false, key:4},
                {hair:"Perm", price: 0, img:"", isCheck:false, key:5},
                {hair:"Shampoo", price: 0, img:"", isCheck:false, key:6}, 
                {hair:"Straightening", price: 0, img:"", isCheck:false, key:7}, 
                {hair:"Treatment", price: 0, img:"", isCheck:false, key:8}
            ]
        }
        this.servicesWomenChange = this.servicesWomenChange.bind(this)
        this.servicesMenChange = this.servicesWomenChange.bind(this)
        this.hairstyleWomenShortChange = this.hairstyleWomenShortChange.bind(this)
        this.imghairstyleWomenShortChange = this.imghairstyleWomenShortChange.bind(this)
        this.hairstyleWomenMediumChange = this.hairstyleWomenMediumChange.bind(this)
        this.imghairstyleWomenMediumChange = this.imghairstyleWomenMediumChange.bind(this)
        this.hairstyleWomenLongChange = this.hairstyleWomenLongChange.bind(this)
        this.imghairstyleWomenLongChange = this.imghairstyleWomenLongChange.bind(this)
        this.hairstyleMenShortChange = this.hairstyleMenShortChange.bind(this)
        this.imghairstyleMenShortChange = this.imghairstyleMenShortChange.bind(this)
        this.hairstyleMenLongChange = this.hairstyleMenLongChange.bind(this)
        this.imghairstyleMenLongChange = this.imghairstyleMenLongChange.bind(this)
    }
    
    servicesWomenChange(index, price) {
        // console.log(value)
        const servicesWomen = [...this.state.servicesWomen]
        servicesWomen.splice(index, 1, price)
        this.setState({servicesWomen, })
    }

    servicesMenChange(index, price) {
        // console.log(value)
        const servicesMen = [...this.state.servicesMen]
        servicesMen.splice(index, 1, price)
        this.setState({servicesMen, })
    }

    hairstyleWomenShortChange(index, price) {
        // console.log(value)
        const hairstyleWomenShort = [...this.state.hairstyleWomenShort]
        hairstyleWomenShort.splice(index, 1, price)
        this.setState({hairstyleWomenShort, })
    }

    hairstyleWomenMediumChange(index, price) {
        // console.log(value)
        const hairstyleWomenMedium = [...this.state.hairstyleWomenMedium]
        hairstyleWomenMedium.splice(index, 1, price)
        this.setState({hairstyleWomenMedium, })
    }

    hairstyleWomenLongChange(index, price) {
        // console.log(value)
        const hairstyleWomenLong = [...this.state.hairstyleWomenLong]
        hairstyleWomenLong.splice(index, 1, price)
        this.setState({hairstyleWomenLong, })
    }

    hairstyleMenShortChange(index, price) {
        // console.log(value)
        const hairstyleMenShort = [...this.state.hairstyleMenShort]
        hairstyleMenShort.splice(index, 1, price)
        this.setState({hairstyleMenShort, })
    }

    hairstyleMenLongChange(index, price) {
        // console.log(value)
        const hairstyleMenLong = [...this.state.hairstyleMenLong]
        hairstyleMenLong.splice(index, 1, price)
        this.setState({hairstyleMenLong, })
    }
    
    imghairstyleWomenShortChange(index, img) {
        const hairstyleWomenShort = [...this.state.hairstyleWomenShort]
        hairstyleWomenShort.splice(index, 1, img)
        this.setState({hairstyleWomenShort, })
    }

    imghairstyleWomenMediumChange(index, img) {
        const hairstyleWomenMedium = [...this.state.hairstyleWomenMedium]
        hairstyleWomenMedium.splice(index, 1, img)
        this.setState({hairstyleWomenMedium, })
    }

    imghairstyleWomenLongChange(index, img) {
        const hairstyleWomenLong = [...this.state.hairstyleWomenLong]
        hairstyleWomenLong.splice(index, 1, img)
        this.setState({hairstyleWomenLong, })
    }

    imghairstyleMenShortChange(index, img) {
        const hairstyleMenShort = [...this.state.hairstyleMenShort]
        hairstyleMenShort.splice(index, 1, img)
        this.setState({hairstyleMenShort, })
    }

    imghairstyleMenLongChange(index, img) {
        const hairstyleMenLong = [...this.state.hairstyleMenLong]
        hairstyleMenLong.splice(index, 1, img)
        this.setState({hairstyleMenLong, })
    }
    
    handleSubmit = event => {
        event.preventDefault();
        // let isValid = this.validate();
        // if (isValid) {
          console.log(this.state);
          this.setState(this.state);
          this.props.shopDetail(this.state)
          this.props.history.push('/hairbarber')
        // }
    };

    render() {
      return (
        <div className="big_container">
            <NavBarShop />
            <div className="wrap_info">

                <div className = "title">
                    <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                        Price List
                    </h1>
                </div>
                
                <div className="signup_form">

                    <div className = "bigcontainer_info">
                        <div className = "line_info">
                            <div style={{width:"200px", marginBottom:"20px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Services for women</p>
                            </div>
                        </div>
                        <InputListServices services={this.state.servicesWomen} onChange={this.servicesWomenChange} />
                    
                        <div className = "line_info">
                            <div style={{width:"200px", marginBottom:"20px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Services for men</p>
                            </div>
                        </div>
                        <InputListServices services={this.state.servicesMen} onChange={this.servicesMenChange} />
                    
                        <div className = "line_info">
                            <div style={{width:"200px", marginBottom:"20px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Women hairstyles</p>
                            </div>
                        </div>
                        <InputListHairstyle hairstyle={this.state.hairstyleWomenShort} onChange={this.hairstyleWomenShortChange} imgChange={this.imghairstyleWomenShortChange}/>
                    
                        <div className = "line_info">
                            <div style={{width:"200px",  marginBottom:"20px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Women hairstyles</p>
                            </div>
                        </div>
                        <InputListHairstyle hairstyle={this.state.hairstyleWomenMedium} onChange={this.hairstyleWomenMediumChange} imgChange={this.imghairstyleWomenMediumChange}/>
                    
                        <div className = "line_info">
                            <div style={{width:"200px", marginBottom:"20px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Women hairstyles</p>
                            </div>
                        </div>
                        <InputListHairstyle hairstyle={this.state.hairstyleWomenLong} onChange={this.hairstyleWomenLongChange} imgChange={this.imghairstyleWomenLongChange}/>
                    
                        <div className = "line_info">
                            <div style={{width:"200px", marginBottom:"20px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Men hairstyle</p>
                            </div>
                        </div>
                        <InputListHairstyle hairstyle={this.state.hairstyleMenShort} onChange={this.hairstyleMenShortChange} imgChange={this.imghairstyleMenShortChange}/>
                    
                        <div className = "line_info">
                            <div style={{width:"200px", marginBottom:"20px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Men hairstyle</p>
                            </div>
                        </div>
                        <InputListHairstyle hairstyle={this.state.hairstyleMenLong} onChange={this.hairstyleMenLongChange} imgChange={this.imghairstyleMenLongChange}/>
                    
                    </div>

                    <div className="container_next_bt" style={{marginTop:"40px"}}>
                        <Link className="link" to="/hairstyles">
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
const mapStateToProps = (state) => { //subscribe
    return {
        shopDetailStore: state.ShopInformationReducer.shopdetail
    }       
}
const mapDispatchToProps =(dispatch) => {
    return {
        shopDetail: (data) => dispatch(PriceListDetail(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PriceList);