import React from "react";
import { Link } from 'react-router-dom';

export const AddWomenShortCheckBox = props => {
    return (
        <div className = "checkbox_info">
            <input 
                key = {props.id}  
                onClick = {props.addwomenShortChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> {props.value}
        </div>
    )
}

export const AddWomenMediumCheckBox = props => {
    return (
        <div className = "checkbox_info">
            <input 
                key = {props.id} 
                onClick = {props.addwomenMediumChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> {props.value}
        </div>
    )
}

export const AddWomenLongCheckBox = props => {
    return (
        <div className = "checkbox_info">
            <input 
                key = {props.id} 
                onClick = {props.addwomenLongChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> {props.value}
        </div>
    )
}

export const AddMenShortCheckBox = props => {
    return (
        <div className = "checkbox_info">
            <input 
                key = {props.id} 
                onClick = {props.addmenShortChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> {props.value}
        </div>
    )
}

export const AddMenLongCheckBox = props => {
    return (
        <div className = "checkbox_info">
            <input 
                key = {props.id} 
                onClick = {props.addmenLongChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> {props.value}
        </div>
    )
}

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
            //เก็บ data 5 ตัวแปรแรกได้เลยจ้า รวมไว้หมดแล้ว
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

            list_womenShort: [
                {id: "ws1", value: "Beehive", key: 1-1, isChecked: false},
                {id: "ws2", value: "Bob", key: 1-2, isChecked: false},
                {id: "ws3", value: "Braided", key: 1-3, isChecked: false},
                {id: "ws4", value: "Bun", key: 1-4, isChecked: false},
                {id: "ws5", value: "Cornrows", key: 1-5, isChecked: false},
                {id: "ws6", value: "Crew cut", key: 1-6, isChecked: false},
                {id: "ws7", value: "Goth", key: 1-7, isChecked: false},
                {id: "ws8", value: "Half up / Half down", key: 1-8, isChecked: false},
                {id: "ws9", value: "Layers", key: 1-9, isChecked: false},
                {id: "ws10", value: "Loose", key: 1-10, isChecked: false},
                {id: "ws11", value: "Low bun", key: 1-11, isChecked: false},
                {id: "ws12", value: "Mohawk", key: 1-12, isChecked: false},
                {id: "ws14", value: "Pixie", key: 1-14, isChecked: false},
                {id: "ws15", value: "Shaved", key: 1-15, isChecked: false},
                {id: "ws16", value: "Short sides", key: 1-16, isChecked: false},
                {id: "ws17", value: "Short slicked", key: 1-17, isChecked: false},
                {id: "ws18", value: "Side swept", key: 1-18, isChecked: false},
                {id: "ws19", value: "Tousled", key: 1-19, isChecked: false}
            ],
            list_womenMedium: [
                {id: "wm1", value: "Beehive", key: 2-1, isChecked: false},
                {id: "wm2", value: "Braided", key: 2-2, isChecked: false},
                {id: "wm3", value: "Bun", key: 2-3, isChecked: false},
                {id: "wm4", value: "Cornrows", key: 2-4, isChecked: false},
                {id: "wm5", value: "Goth", key: 2-5, isChecked: false},
                {id: "wm6", value: "Half up / Half down", key: 2-6, isChecked: false},
                {id: "wm7", value: "Layers", key: 2-7, isChecked: false},
                {id: "wm8", value: "Loose", key: 2-8, isChecked: false},
                {id: "wm9", value: "Low bun", key: 2-9, isChecked: false},
                {id: "wm11", value: "Ponytail", key: 2-11, isChecked: false},
                {id: "wm12", value: "Tousled", key: 2-12, isChecked: false}
            
            ],
            list_womenLong: [
                {id: "wl1", value: "Beehive", key: 3-1, isChecked: false},
                {id: "wl2", value: "Braided", key: 3-2, isChecked: false},
                {id: "wl3", value: "Bun", key: 3-3, isChecked: false},
                {id: "wl4", value: "Cornrows", key: 3-4, isChecked: false},
                {id: "wl5", value: "Goth", key: 3-5, isChecked: false},
                {id: "wl6", value: "Half up / Half down", key: 3-6, isChecked: false},
                {id: "wl7", value: "Layers", key: 3-7, isChecked: false},
                {id: "wl8", value: "Loose", key: 3-8, isChecked: false},
                {id: "wl9", value: "Low bun", key: 3-9, isChecked: false},
                {id: "wl11", value: "Ponytail", key: 3-11, isChecked: false},
                {id: "wl12", value: "Tousled", key: 3-12, isChecked: false}

            ],
            list_menShort: [
                {id: "ms7", value: "Afro fade", key: 4-7, isChecked: false},
                {id: "ms13", value: "Buzz cut", key: 4-13, isChecked: false},
                {id: "ms11", value: "Comb Over", key: 4-11, isChecked: false},
                {id: "ms14", value: "Crew cut", key: 4-14, isChecked: false},
                {id: "ms15", value: "Faux Hawk", key: 4-15, isChecked: false},
                {id: "ms16", value: "Fringe", key: 4-16, isChecked: false},
                {id: "ms3", value: "Hight fade", key: 4-3, isChecked: false},
                {id: "ms2", value: "Low fade", key: 4-2, isChecked: false},
                {id: "ms4", value: "Mid fade", key: 4-4, isChecked: false},
                {id: "ms9", value: "Pompadour", key: 4-9, isChecked: false},
                {id: "ms10", value: "Quiff", key: 4-10, isChecked: false},
                {id: "ms17", value: "Side part", key: 4-17, isChecked: false},
                {id: "ms20", value: "Skinhead", key: 4-20, isChecked: false},
                {id: "ms6", value: "Skin Fade", key: 4-6, isChecked: false},
                {id: "ms12", value: "Slicked back", key: 4-12, isChecked: false},
                {id: "ms18", value: "Spiky", key: 4-18, isChecked: false},
                {id: "ms1", value: "Taper fade", key: 4-1, isChecked: false},
                {id: "ms5", value: "Temple fade", key: 4-5, isChecked: false},
                {id: "ms19", value: "Top kont", key: 4-19, isChecked: false},
                {id: "ms8", value: "Undercut", key: 4-8, isChecked: false},
                
            ],
            list_menLong: [
                
                {id: "ml8", value: "Braids", key: 5-8, isChecked: false},
                {id: "ml1", value: "Deadlocks", key: 5-1, isChecked: false},
                {id: "ml7", value: "Half up", key: 5-7, isChecked: false},
                {id: "ml9", value: "Long curls", key: 5-9, isChecked: false},
                {id: "ml10", value: "Long undercut", key: 5-10, isChecked: false},
                {id: "ml5", value: "Man bun", key: 5-5, isChecked: false},
                {id: "ml3", value: "Ponytail", key: 5-3, isChecked: false},
                {id: "ml6", value: "Side part", key: 5-6, isChecked: false},
                {id: "ml2", value: "Slick back", key: 5-2, isChecked: false},
                {id: "ml4", value: "Textured waves", key: 5-4, isChecked: false}    
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
    }

    womenMediumChecked = event => {
        this.state.list_womenMedium.forEach(list_womenMedium => {
        if (list_womenMedium.value === event.target.value)
            list_womenMedium.isChecked =  event.target.checked
        })
        this.setState({list_womenMedium: this.state.list_womenMedium})
    }

    womenLongChecked = event => {
        this.state.list_womenLong.forEach(list_womenLong => {
        if (list_womenLong.value === event.target.value)
            list_womenLong.isChecked =  event.target.checked
        })
        this.setState({list_womenLong: this.state.list_womenLong})
    }

    menShortChecked = event => {
        this.state.list_menShort.forEach(list_menShort => {
        if (list_menShort.value === event.target.value)
            list_menShort.isChecked =  event.target.checked
        })
        this.setState({list_menShort: this.state.list_menShort})
    }

    menLongChecked = event => {
        this.state.list_menLong.forEach(list_menLong => {
        if (list_menLong.value === event.target.value)
            list_menLong.isChecked =  event.target.checked
        })
        this.setState({list_menLong: this.state.list_menLong})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.state.list_womenShort.forEach(list_womenShort => {
            if(list_womenShort.isChecked){
                this.state.womenShort.push({hair: list_womenShort.value, price:0, img:"", isChecked:false, key: this.state.womenShort.length})
            }
        })
        this.state.addwomenShort.forEach(addwomenShort => {
            if(addwomenShort.isChecked){
                this.state.womenShort.push({hair: addwomenShort.value, price:0, img:"", isChecked:false, key: this.state.womenShort.length})
            }
        })
        this.state.list_womenMedium.forEach(list_womenMedium => {
            if(list_womenMedium.isChecked){
                this.state.womenMedium.push({hair: list_womenMedium.value, price:0, img:"", isChecked:false, key: this.state.womenMedium.length})
            }
        })
        this.state.addwomenMedium.forEach(addwomenMedium => {
            if(addwomenMedium.isChecked){
                this.state.womenMedium.push({hair: addwomenMedium.value, price:0, img:"", isChecked:false, key: this.state.womenMedium.length})
            }
        })
        this.state.list_womenLong.forEach(list_womenLong => {
            if(list_womenLong.isChecked){
                this.state.womenLong.push({hair: list_womenLong.value, price:0, img:"", isChecked:false, key: this.state.womenLong.length})
            }
        })
        this.state.addwomenLong.forEach(addwomenLong => {
            if(addwomenLong.isChecked){
                this.state.womenLong.push({hair: addwomenLong.value, price:0, img:"", isChecked:false, key: this.state.womenLong.length})
            }
        })
        this.state.list_menShort.forEach(list_menShort => {
            if(list_menShort.isChecked){
                this.state.menShort.push({hair: list_menShort.value, price:0, img:"", isChecked:false, key: this.state.menShort.length})
            }
        })
        this.state.addmenShort.forEach(addmenShort => {
            if(addmenShort.isChecked){
                this.state.menShort.push({hair: addmenShort.value, price:0, img:"", isChecked:false, key: this.state.menShort.length})
            }
        })
        this.state.list_menLong.forEach(list_menLong => {
            if(list_menLong.isChecked){
                this.state.menLong.push({hair: list_menLong.value, price:0, img:"", isChecked:false, key: this.state.menLong.length})
            }
        })
        this.state.addmenLong.forEach(addmenLong => {
            if(addmenLong.isChecked){
                this.state.menLong.push({hair: addmenLong.value, price:0, img:"", isChecked:false, key: this.state.menLong.length})
            }
        })
        
        console.log(this.state)
        if(!this.state.womenShort || !this.state.womenMedium || !this.state.womenLong || !this.state.menShort || !this.state.menLong) { 
            this.props.history.push('/pricelist')
        }
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
                                            id="checkedallshort_women"
                                            onClick={this.womenShortAllChecked}   
                                            onChange={()=>{}}
                                        /> All
                                    </div>
                        
                                    { 
                                        this.state.list_womenShort.map((list_womenShort) => {
                                            return (<WomenShortCheckBox womenShortChecked={this.womenShortChecked}  {...list_womenShort} />)
                                        })
                                    }
                                    { 
                                        this.state.addwomenShort.map((addwomenShort) => {
                                            return (<AddWomenShortCheckBox addwomenShortChecked={this.addwomenShortChecked}  {...addwomenShort} />)
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
                            </ul>

                            <ul className="line_info">
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
                                        this.state.list_womenMedium.map((list_womenMedium) => {
                                            return (<WomenMediumCheckBox womenMediumChecked={this.womenMediumChecked}  {...list_womenMedium} />)
                                        })
                                    }
                                    { 
                                        this.state.addwomenMedium.map((addwomenMedium) => {
                                            return (<AddWomenMediumCheckBox addwomenMediumChecked={this.addwomenMediumChecked}  {...addwomenMedium} />)
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
                            </ul>

                            <ul className="line_info">
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
                                        this.state.list_womenLong.map((list_womenLong) => {
                                            return (<WomenLongCheckBox womenLongChecked={this.womenLongChecked}  {...list_womenLong} />)
                                        })
                                    }
                                    { 
                                        this.state.addwomenLong.map((addwomenLong) => {
                                            return (<AddWomenLongCheckBox addwomenLongChecked={this.addwomenLongChecked}  {...addwomenLong} />)
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
                                            id="checkedallshort_men"
                                            onClick={this.menShortAllChecked}   
                                            onChange={()=>{}}
                                        /> All
                                    </div>
                        
                                    { 
                                        this.state.list_menShort.map((list_menShort) => {
                                            return (<MenShortCheckBox menShortChecked={this.menShortChecked}  {...list_menShort} />)
                                        })
                                    }
                                    { 
                                        this.state.addmenShort.map((addmenShort) => {
                                            return (<AddMenShortCheckBox addmenShortChecked={this.addmenShortChecked}  {...addmenShort} />)
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
                            </ul>

                            <ul className="line_info">
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
                                        this.state.list_menLong.map((list_menLong) => {
                                            return (<MenLongCheckBox menLongChecked={this.menLongChecked}  {...list_menLong} />)
                                        })
                                    }
                                    { 
                                        this.state.addmenLong.map((addmenLong) => {
                                            return (<AddMenLongCheckBox addmenLongChecked={this.addmenLongChecked}  {...addmenLong} />)
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
                            </ul>
                            
                        </div>
                        <div className="container_next_bt">
                            <Link className="link" to="/information">
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