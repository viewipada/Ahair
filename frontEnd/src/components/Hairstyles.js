import React from "react";
import { Link } from 'react-router-dom';

export const WomenShortCheckBox = props => {
    return (
        <div className = "checkbox_info">
            <input 
                key = {props.id} 
                onClick = {props.womenShortChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> {props.value}
        </div>
    )
}


export const WomenMediumCheckBox = props => {
    return (
        <div className = "checkbox_info">
            <input 
                key = {props.id} 
                onClick = {props.womenMediumChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> {props.value}
        </div>
    )
}

export const WomenLongCheckBox = props => {
    return (
        <div className = "checkbox_info">
            <input 
                key = {props.id} 
                onClick = {props.womenLongChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> {props.value}
        </div>
    )
}

export const MenShortCheckBox = props => {
    return (
        <div className = "checkbox_info">
            <input 
                key = {props.id} 
                onClick = {props.menShortChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> {props.value}
        </div>
    )
}

export const MenLongCheckBox = props => {
    return (
        <div className = "checkbox_info">
            <input 
                key = {props.id} 
                onClick = {props.menLongChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> {props.value}
        </div>
    )
}

class Hairstyles extends React.Component {
    constructor() {
        super()
        this.state = {
            add: "",
            womenShort: [],
            womenMedium: [],
            womenLong: [],
            menShort: [],
            menLong: [],
            addwomenShort: [],

            list_womenShort: [
                {id: "ws1", value: "ws1", key: 1-1, isChecked: false},
                {id: "ws2", value: "ws2", key: 1-2, isChecked: false},
                {id: "ws3", value: "ws3", key: 1-3, isChecked: false},
                {id: "ws4", value: "ws4", key: 1-4, isChecked: false}
            ],
            list_womenMedium: [
                {id: "wm1", value: "wm1", key: 2-1, isChecked: false},
                {id: "wm2", value: "wm2", key: 2-2, isChecked: false},
                {id: "wm3", value: "wm3", key: 2-3, isChecked: false},
                {id: "wm4", value: "wm4", key: 2-4, isChecked: false}
            ],
            list_womenLong: [
                {id: "wl1", value: "wl1", key: 3-1, isChecked: false},
                {id: "wl2", value: "wl2", key: 3-2, isChecked: false},
                {id: "wl3", value: "wl3", key: 3-3, isChecked: false},
                {id: "wl4", value: "wl4", key: 3-4, isChecked: false}
            ],
            list_menShort: [
                {id: "ms1", value: "ms1", key: 4-1, isChecked: false},
                {id: "ms2", value: "ms2", key: 4-2, isChecked: false},
                {id: "ms3", value: "ms3", key: 4-3, isChecked: false},
                {id: "ms4", value: "ms4", key: 4-4, isChecked: false}
            ],
            list_menLong: [
                {id: "ml1", value: "ml1", key: 5-1, isChecked: false},
                {id: "ml2", value: "ml2", key: 5-2, isChecked: false},
                {id: "ml3", value: "ml3", key: 5-3, isChecked: false},
                {id: "ml4", value: "ml4", key: 5-4, isChecked: false}
            ],
        }
    }
    
    womenShortAllChecked = event => {
        this.state.list_womenShort.forEach(list_womenShort => list_womenShort.isChecked = event.target.checked) 
        this.setState({list_womenShort: this.state.list_womenShort})
    }

    womenMediumAllChecked = event => {
        this.state.list_womenMedium.forEach(list_womenMedium => list_womenMedium.isChecked = event.target.checked) 
        this.setState({list_womenMedium: this.state.list_womenMedium})
    }

    womenLongAllChecked = event => {
        this.state.list_womenLong.forEach(list_womenLong => list_womenLong.isChecked = event.target.checked) 
        this.setState({list_womenLong: this.state.list_womenLong})
    }

    menShortAllChecked = event => {
        this.state.list_menShort.forEach(list_menShort => list_menShort.isChecked = event.target.checked) 
        this.setState({list_menShort: this.state.list_menShort})
    }

    menLongAllChecked = event => {
        this.state.list_menLong.forEach(list_menLong => list_menLong.isChecked = event.target.checked) 
        this.setState({list_menLong: this.state.list_menLong})
    }

    womenShortChecked = event => {
        this.state.list_womenShort.forEach(list_womenShort => {
        if (list_womenShort.value === event.target.value)
            list_womenShort.isChecked =  event.target.checked
        })
        this.setState({list_womenShort: this.state.list_womenShort})
        // console.log(this.state)
    }

    womenMediumChecked = event => {
        this.state.list_womenMedium.forEach(list_womenMedium => {
        if (list_womenMedium.value === event.target.value)
            list_womenMedium.isChecked =  event.target.checked
        })
        this.setState({list_womenMedium: this.state.list_womenMedium})
        // console.log(this.state)
    }

    womenLongChecked = event => {
        this.state.list_womenLong.forEach(list_womenLong => {
        if (list_womenLong.value === event.target.value)
            list_womenLong.isChecked =  event.target.checked
        })
        this.setState({list_womenLong: this.state.list_womenLong})
        // console.log(this.state)
    }

    menShortChecked = event => {
        this.state.list_menShort.forEach(list_menShort => {
        if (list_menShort.value === event.target.value)
            list_menShort.isChecked =  event.target.checked
        })
        this.setState({list_menShort: this.state.list_menShort})
        // console.log(this.state)
    }

    menLongChecked = event => {
        this.state.list_menLong.forEach(list_menLong => {
        if (list_menLong.value === event.target.value)
            list_menLong.isChecked =  event.target.checked
        })
        this.setState({list_menLong: this.state.list_menLong})
        // console.log(this.state)
    }

    handleSubmit = event => {
        event.preventDefault();
        this.state.list_womenShort.forEach(list_womenShort => {
            if(list_womenShort.isChecked){
                this.state.womenShort.push(list_womenShort.value)
            }
        })
        this.state.addwomenShort.forEach(addwomenShort => {
            this.state.womenShort.push(addwomenShort)
        })
        this.state.list_womenMedium.forEach(list_womenMedium => {
            if(list_womenMedium.isChecked){
                this.state.womenMedium.push(list_womenMedium.value)
            }
        })
        this.state.list_womenLong.forEach(list_womenLong => {
            if(list_womenLong.isChecked){
                this.state.womenLong.push(list_womenLong.value)
            }
        })
        this.state.list_menShort.forEach(list_menShort => {
            if(list_menShort.isChecked){
                this.state.menShort.push(list_menShort.value)
            }
        })
        this.state.list_menLong.forEach(list_menLong => {
            if(list_menLong.isChecked){
                this.state.menLong.push(list_menLong.value)
            }
        })
        
        console.log(this.state)
    }

    typewomenShort = event => {
        this.setState({[event.target.id]: event.target.value});
        this.setState({add: event.target.value})
        console.log(this.state.add)
    };

    addwomenShort = event => {
        // event.preventDefault()
        this.state.addwomenShort.push(this.state.add)
        console.log(this.state.add)
        // console.log(this.state.addwomenShort)
    }

    render() {
        return (
            <div className="big_container">
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
                                    <p style={{color:"white", marginRight:"20px"}}>Women Hairstyles</p>
                                </div>
                            </div>
                            <ul className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Short length</p></div>
                                    <div className = "checkbox_info">
                                        <input
                                            type="checkbox" 
                                            value="checkedallshort_women"
                                            onClick={this.womenShortAllChecked}   
                                            onChange={()=>{}}
                                        /> All
                                    </div>
                        
                                    { this.state.list_womenShort.map((list_womenShort) => {
                                        return (<WomenShortCheckBox womenShortChecked={this.womenShortChecked}  {...list_womenShort} />)
                                    })}
                                    <div className = "wrap_input_add">
                                        <input
                                            className = "input_add" 
                                            type ="text"
                                            id = "addws"
                                            placeholder = "Type what you want..."
                                            onChange = {this.typewomenShort}
                                        />
                                        <button type="reset" className="login_button" onClick={this.addwomenShort}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </ul>

                            <ul className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Medium length</p></div>
                                    <div className = "checkbox_info">
                                        <input
                                            type="checkbox" 
                                            value="checkedallmedium_women"
                                            onClick={this.womenMediumAllChecked}   
                                            onChange={()=>{}}
                                        /> All
                                    </div>
                        
                                    { this.state.list_womenMedium.map((list_womenMedium) => {
                                        return (<WomenMediumCheckBox womenMediumChecked={this.womenMediumChecked}  {...list_womenMedium} />)
                                    })}
                                </div>
                            </ul>

                            <ul className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Long length</p></div>
                                    <div className = "checkbox_info">
                                        <input
                                            type="checkbox" 
                                            value="checkedalllong_women"
                                            onClick={this.womenLongAllChecked}   
                                            onChange={()=>{}}
                                        /> All
                                    </div>
                        
                                    { this.state.list_womenLong.map((list_womenLong) => {
                                        return (<WomenLongCheckBox womenLongChecked={this.womenLongChecked}  {...list_womenLong} />)
                                    })}
                                </div>
                            </ul>

                            <div className = "line_info">
                                <div style={{width:"200px"}}>
                                    <p style={{color:"white", marginRight:"20px"}}>Men Hairstyles</p>
                                </div>
                            </div>
                            <ul className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Short length</p></div>
                                    <div className = "checkbox_info">
                                        <input
                                            type="checkbox" 
                                            value="checkedallshort_men"
                                            onClick={this.menShortAllChecked}   
                                            onChange={()=>{}}
                                        /> All
                                    </div>
                        
                                    { this.state.list_menShort.map((list_menShort) => {
                                        return (<MenShortCheckBox menShortChecked={this.menShortChecked}  {...list_menShort} />)
                                    })}
                                </div>
                            </ul>

                            <ul className="line_info">
                                <div className = "wrap_checkbox">
                                    <div className="title_hairstyles"><p>Long length</p></div>
                                    <div className = "checkbox_info">
                                        <input
                                            type="checkbox" 
                                            value="checkedalllong_men"
                                            onClick={this.menLongAllChecked}   
                                            onChange={()=>{}}
                                        /> All
                                    </div>
                        
                                    { this.state.list_menLong.map((list_menLong) => {
                                        return (<MenLongCheckBox menLongChecked={this.menLongChecked}  {...list_menLong} />)
                                    })}
                                </div>
                            </ul>
                            
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
        );
    }
}
export default Hairstyles;