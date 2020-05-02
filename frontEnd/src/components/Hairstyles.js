import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBarShop from "./NavBarShop";
import {HairStyleswomenShort,HairStyleswomenMedium,HairStyleswomenLong, HairStylesmenShort, HairStylesmenLong } from "../redux/action/ShopInformationAction";

export const CheckBox = props => {
    return (
        <div className = "checkbox_info">
            <input 
                key = {props.id}  
                onClick = {props.onClick} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> {props.value}
        </div>
    )
}

class Hairstyles extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.shopcolor)
        this.state = {
            womenShort: [], 
            womenMedium: [],
            womenLong: [],
            menShort: [],
            menLong: [],
            addws: "",
            addwm: "",
            addwl: "",
            addms: "",
            addml: "",
            addwomenShort: [],
            addwomenMedium: [],
            addwomenLong: [],
            addmenShort: [],
            addmenLong: [],
            list_womenShort: this.props.womenShortStore || [],
            list_womenMedium: this.props.womenMediumStore ||[],
            list_womenLong: this.props.womenLongStore ||[],
            list_menShort: this.props.menShortStore ||[],
            list_menLong: this.props.menLongStore ||[]
        }
    }
    
    womenShortAllChecked = event => {
        this.props.womenShortStore.forEach(list_womenShort => list_womenShort.isChecked = event.target.checked) 
        this.setState({list_womenShort: this.props.womenShortStore})
    }

    womenMediumAllChecked = event => {
        this.props.womenMediumStore.forEach(list_womenMedium => list_womenMedium.isChecked = event.target.checked) 
        this.setState({list_womenMedium: this.props.womenMediumStore})
    }

    womenLongAllChecked = event => {
        this.props.womenLongStore.forEach(list_womenLong => list_womenLong.isChecked = event.target.checked) 
        this.setState({list_womenLong: this.props.womenLongStore})
    }

    menShortAllChecked = event => {
        this.props.menShortStore.forEach(list_menShort => list_menShort.isChecked = event.target.checked) 
        this.setState({list_menShort: this.props.menShortStore})
    }

    menLongAllChecked = event => {
        this.props.menLongStore.forEach(list_menLong => list_menLong.isChecked = event.target.checked) 
        this.setState({list_menLong: this.props.menLongStore})
    }

    womenShortChecked = event => {
        this.props.womenShortStore.forEach(list_womenShort => {
        if (list_womenShort.value === event.target.value)
            list_womenShort.isChecked =  event.target.checked
        })
        this.setState({list_womenShort: this.prosp.womenShortStore})
    }

    womenMediumChecked = event => {
        this.props.womenMediumStore.forEach(list_womenMedium => {
        if (list_womenMedium.value === event.target.value)
            list_womenMedium.isChecked =  event.target.checked
        })
        this.setState({list_womenMedium: this.props.womenMediumStore})
    }

    womenLongChecked = event => {
        this.prosp.womenLongStore.forEach(list_womenLong => {
        if (list_womenLong.value === event.target.value)
            list_womenLong.isChecked =  event.target.checked
        })
        this.setState({list_womenLong: this.props.womenLongStore})
    }

    menShortChecked = event => {
        this.props.menShortStore.forEach(list_menShort => {
        if (list_menShort.value === event.target.value)
            list_menShort.isChecked =  event.target.checked
        })
        this.setState({list_menShort: this.props.menShortStore})
    }

    menLongChecked = event => {
        this.props.menLongStore.forEach(list_menLong => {
        if (list_menLong.value === event.target.value)
            list_menLong.isChecked =  event.target.checked
        })
        this.setState({list_menLong: this.props.menLongStore})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({addwomenShort:[],addwomenMedium:[],addwomenLong:[],addmenShort:[],addmenLong:[]})
        // this.props.womenShortStore.forEach(list_womenShort => {
        //     if(list_womenShort.isChecked){
        //         this.state.womenShort.push({hair: list_womenShort.value, price:0, img:"", isChecked:false, key: this.state.womenShort.length})
        //     }
        // })
        this.state.addwomenShort.forEach(addwomenShort => {
            if(addwomenShort.isChecked){ 
                this.props.womenShortStore.push({id: "ws"+this.props.womenShortStore.length, value: addwomenShort.value,key: 1-this.props.womenShortStore.length, isChecked:this.props.womenShortStore.isChecked})
            }
        })
        // this.props.womenMediumStore.forEach(list_womenMedium => {
        //     if(list_womenMedium.isChecked){
        //         this.state.womenMedium.push({hair: list_womenMedium.value, price:0, img:"", isChecked:false, key: this.state.womenMedium.length})
        //     }
        // })
        this.state.addwomenMedium.forEach(addwomenMedium => {
            if(addwomenMedium.isChecked){
                this.props.womenMediumStore.push({id: "wm"+this.props.womenMediumStore.length, value: addwomenMedium.value,key: 2-this.props.womenMediumStore.length, isChecked:this.props.womenMediumStore.isChecked})
            }
        })
        // this.props.womenLongStore.forEach(list_womenLong => {
        //     if(list_womenLong.isChecked){
        //         this.state.womenLong.push({hair: list_womenLong.value, price:0, img:"", isChecked:false, key: this.state.womenLong.length})
        //     }
        // })
        this.state.addwomenLong.forEach(addwomenLong => {
            if(addwomenLong.isChecked){
                this.props.womenLongStore.push({id: "wl"+this.props.womenLongStore.length, value: addwomenLong.value,key: 3-this.props.womenLongStore.length, isChecked:this.props.womenLongStore.isChecked})
            }
        })
        // this.props.menShortStore.forEach(list_menShort => {
        //     if(list_menShort.isChecked){
        //         this.state.menShort.push({hair: list_menShort.value, price:0, img:"", isChecked:false, key: this.state.menShort.length})
        //     }
        // })
        this.state.addmenShort.forEach(addmenShort => {
            if(addmenShort.isChecked){
                this.props.menShortStore.push({id: "ms"+this.props.menShortStore.length, value: addmenShort.value,key: 4-this.props.menShortStore.length, isChecked:this.props.menShortStore.isChecked})
            }
        })
        // this.props.menLongStore.forEach(list_menLong => {
        //     if(list_menLong.isChecked){
        //         this.state.menLong.push({hair: list_menLong.value, price:0, img:"", isChecked:false, key: this.state.menLong.length})
        //     }
        // })
        this.state.addmenLong.forEach(addmenLong => {
            if(addmenLong.isChecked){
                this.props.menLongStore.push({id: "ml"+this.props.menLongStore.length, value: addmenLong.value,key: 5-this.props.menLongStore.length, isChecked:this.props.menLongStore.isChecked})
            }
        })
        
        console.log(this.state)
        this.props.hsWomenShort(this.state.list_womenShort)
        this.props.hsWomenMedium(this.state.list_womenMedium)
        this.props.hsWomenLong(this.state.list_womenLong)
        this.props.hsMenShort(this.state.list_menShort)
        this.props.hsMenLong(this.state.list_menLong)
        this.props.history.push('/pricelist')
    }

    typeAddwomenShort = event => {
        this.setState({[event.target.id]: event.target.value});
        this.setState({addws: event.target.value})
    };
    typeAddwomenMedium = event => {
        this.setState({[event.target.id]: event.target.value});
        this.setState({addwm: event.target.value})
    };
    typeAddwomenLong = event => {
        this.setState({[event.target.id]: event.target.value});
        this.setState({addwl: event.target.value})
    };
    typeAddmenShort = event => {
        this.setState({[event.target.id]: event.target.value});
        this.setState({addms: event.target.value})
    };
    typeAddmenLong = event => {
        this.setState({[event.target.id]: event.target.value});
        this.setState({addml: event.target.value})
    };

    addlist_womenShort = () => {
        this.state.addwomenShort.push({id: this.state.addwomenShort.length, value: this.state.addws, key: this.state.addwomenShort.length, isChecked: true})
        this.setState({addws:""})
    }
    addlist_womenMedium = () => {
        this.state.addwomenMedium.push({id: this.state.addwomenMedium.length, value: this.state.addwm, key: this.state.addwomenMedium.length, isChecked: true})
        this.setState({addwm:""})
    }
    addlist_womenLong = () => {
        this.state.addwomenLong.push({id: this.state.addwomenLong.length, value: this.state.addwl, key: this.state.addwomenLong.length, isChecked: true})
        this.setState({addwl:""})
    }
    addlist_menShort = () => {
        this.state.addmenShort.push({id: this.state.addmenShort.length, value: this.state.addms, key: this.state.addmenShort.length, isChecked: true})
        this.setState({addms:""})
    }
    addlist_menLong = () => {
        this.state.addmenLong.push({id: this.state.addmenLong.length, value: this.state.addml, key: this.state.addmenLong.length, isChecked: true})
        this.setState({addml:""})
    }

    addwomenShortChecked = event => {
        this.state.addwomenShort.forEach(addwomenShort => {
        if (addwomenShort.value === event.target.value)
            addwomenShort.isChecked =  event.target.checked
        })
        this.setState({addwomenShort: this.state.addwomenShort})
    }
    addwomenMediumChecked = event => {
        this.state.addwomenMedium.forEach(addwomenMedium => {
        if (addwomenMedium.value === event.target.value)
            addwomenMedium.isChecked =  event.target.checked
        })
        this.setState({addwomenMedium: this.state.addwomenMedium})
    }
    addwomenLongChecked = event => {
        this.state.addwomenLong.forEach(addwomenLong => {
        if (addwomenLong.value === event.target.value)
        addwomenLong.isChecked =  event.target.checked
        })
        this.setState({addwomenLong: this.state.addwomenLong})
    }
    addmenShortChecked = event => {
        this.state.addmenShort.forEach(addmenShort => {
        if (addmenShort.value === event.target.value)
            addmenShort.isChecked =  event.target.checked
        })
        this.setState({addmenShort: this.state.addmenShort})
    }
    addmenLongChecked = event => {
        this.state.addmenLong.forEach(addmenLong => {
        if (addmenLong.value === event.target.value)
            addmenLong.isChecked =  event.target.checked
        })
        this.setState({addmenLong: this.state.addmenLong})
    }

    render() {
        return (
            <div className="big_container">
                <NavBarShop />
                <div className="wrap_info">

                    <div className = "title">
                        <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                            Hairstyles
                        </h1>
                    </div>
                    
                    <div className="signup_form">

                        <div className = "bigcontainer_info">
                            <div className = "line_info">
                                <div style={{width:"200px"}}>
                                    <p style={{color:"white", marginRight:"20px", marginBottom:"30px"}}>Women Hairstyles</p>
                                </div>
                            </div>
                            <div className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Short length</p></div>
                                    <div className = "checkbox_info">
                                        <input
                                            type="checkbox" 
                                            id="checkedallshort_women"
                                            onClick={this.womenShortAllChecked}   
                                            onChange={()=>{}}
                                        /> All
                                    </div>
                        
                                    { 
                                        this.props.womenShortStore.map((list_womenShort) => {
                                            return (<CheckBox onClick={this.womenShortChecked}  {...list_womenShort} />)
                                        })
                                    }
                                    { 
                                        this.state.addwomenShort.map((addwomenShort) => {
                                            return (<CheckBox onClick={this.addwomenShortChecked}  {...addwomenShort} />)
                                        })
                                    }

                                    <div className = "wrap_input_add">
                                        <input
                                            className = "input_add" 
                                            type ="text"
                                            value = {this.state.addws}
                                            placeholder = "Type what you want..."
                                            onChange = {this.typeAddwomenShort}
                                        />
                                        <button type="reset" className="login_button" onClick={this.addlist_womenShort}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Medium length</p></div>
                                    <div className = "checkbox_info">
                                        <input
                                            type="checkbox" 
                                            id="checkedallmedium_women"
                                            onClick={this.womenMediumAllChecked}   
                                            onChange={()=>{}}
                                        /> All
                                    </div>
                        
                                    { 
                                        this.props.womenMediumStore.map((list_womenMedium) => {
                                            return (<CheckBox onClick={this.womenMediumChecked}  {...list_womenMedium} />)
                                        })
                                    }
                                    { 
                                        this.state.addwomenMedium.map((addwomenMedium) => {
                                            return (<CheckBox onClick={this.addwomenMediumChecked}  {...addwomenMedium} />)
                                        })
                                    }

                                    <div className = "wrap_input_add">
                                        <input
                                            className = "input_add" 
                                            type ="text"
                                            value = {this.state.addwm}
                                            placeholder = "Type what you want..."
                                            onChange = {this.typeAddwomenMedium}
                                        />
                                        <button type="reset" className="login_button" onClick={this.addlist_womenMedium}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Long length</p></div>
                                    <div className = "checkbox_info">
                                        <input
                                            type="checkbox" 
                                            id="checkedalllong_women"
                                            onClick={this.womenLongAllChecked}   
                                            onChange={()=>{}}
                                        /> All
                                    </div>
                        
                                    { 
                                        this.props.womenLongStore.map((list_womenLong) => {
                                            return (<CheckBox onClick={this.womenLongChecked}  {...list_womenLong} />)
                                        })
                                    }
                                    { 
                                        this.state.addwomenLong.map((addwomenLong) => {
                                            return (<CheckBox onClick={this.addwomenLongChecked}  {...addwomenLong} />)
                                        })
                                    }

                                    <div className = "wrap_input_add">
                                        <input
                                            className = "input_add" 
                                            type ="text"
                                            value = {this.state.addwl}
                                            placeholder = "Type what you want..."
                                            onChange = {this.typeAddwomenLong}
                                        />
                                        <button type="reset" className="login_button" onClick={this.addlist_womenLong}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className = "line_info">
                                <div style={{width:"200px"}}>
                                    <p style={{color:"white", marginRight:"20px", marginBottom:"30px"}}>Men Hairstyles</p>
                                </div>
                            </div>
                            <div className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Short length</p></div>
                                    <div className = "checkbox_info">
                                        <input
                                            type="checkbox" 
                                            id="checkedallshort_men"
                                            onClick={this.menShortAllChecked}   
                                            onChange={()=>{}}
                                        /> All
                                    </div>
                        
                                    { 
                                        this.props.menShortStore.map((list_menShort) => {
                                            return (<CheckBox onClick={this.menShortChecked}  {...list_menShort} />)
                                        })
                                    }
                                    { 
                                        this.state.addmenShort.map((addmenShort) => {
                                            return (<CheckBox onClick={this.addmenShortChecked}  {...addmenShort} />)
                                        })
                                    }

                                    <div className = "wrap_input_add">
                                        <input
                                            className = "input_add" 
                                            type ="text"
                                            value = {this.state.addms}
                                            placeholder = "Type what you want..."
                                            onChange = {this.typeAddmenShort}
                                        />
                                        <button type="reset" className="login_button" onClick={this.addlist_menShort}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Long length</p></div>
                                    <div className = "checkbox_info">
                                        <input
                                            type="checkbox" 
                                            id="checkedalllong_men"
                                            onClick={this.menLongAllChecked}   
                                            onChange={()=>{}}
                                        /> All
                                    </div>
                        
                                    { 
                                        this.props.menLongStore.map((list_menLong) => {
                                            return (<CheckBox onClick={this.menLongChecked}  {...list_menLong} />)
                                        })
                                    }
                                    { 
                                        this.state.addmenLong.map((addmenLong) => {
                                            return (<CheckBox onClick={this.addmenLongChecked}  {...addmenLong} />)
                                        })
                                    }

                                    <div className = "wrap_input_add">
                                        <input
                                            className = "input_add" 
                                            type ="text"
                                            value = {this.state.addml}
                                            placeholder = "Type what you want..."
                                            onChange = {this.typeAddmenLong}
                                        />
                                        <button type="reset" className="login_button" onClick={this.addlist_menLong}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="container_next_bt">
                            <Link className="link" to="/colors">
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
        );
    }
}const mapStateToProps = (state) => { //subscribe
    return {
        womenShortStore: state.ShopInformationReducer.list_womenShort,
        womenMediumStore: state.ShopInformationReducer.list_womenMedium,
        womenLongStore: state.ShopInformationReducer.list_womenLong,
        menShortStore: state.ShopInformationReducer.list_menShort,
        menLongStore: state.ShopInformationReducer.list_menLong
    }       
}
const mapDispatchToProps =(dispatch) => {
    return {
        hsWomenShort: (data) => dispatch(HairStyleswomenShort(data)),
        hsWomenMedium: (data) => dispatch(HairStyleswomenMedium(data)),
        hsWomenLong: (data) => dispatch(HairStyleswomenLong(data)),
        hsMenShort: (data) => dispatch(HairStylesmenShort(data)),
        hsMenLong: (data) => dispatch(HairStylesmenLong(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hairstyles);