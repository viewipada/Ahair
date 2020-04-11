import React from "react";
import { Link } from 'react-router-dom';

export const AddColorCheckBox = props => {
    return (
        <div className = "checkbox_info">
            <input 
                key = {props.id}  
                onClick = {props.addcolorChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> 
            <div style={{backgroundColor:props.value, width:"90%", textAlign:"center", padding:"20px 0px 20px 0px", marginLeft:"5px", borderColor:"white", borderWidth:"1px", borderStyle:"solid"}}>
                {props.value}
            </div>
        </div>
    )
}

export const ColorCheckBox = props => {
    return (
        <div className = "checkbox_info" style={{display:"inline-flex",flexWrap:"wrap"}}>
            <input 
                key = {props.id} 
                onClick = {props.colorChecked} 
                type = "checkbox" 
                checked = {props.isChecked} 
                value = {props.value} 
                onChange={()=>{}}
            /> 
            <div style={{backgroundColor:props.value, width:"90%", textAlign:"center", padding:"20px 0px 20px 0px", marginLeft:"5px", borderColor:"white", borderWidth:"1px", borderStyle:"solid"}}>
                {props.value}
            </div>
        </div>
    )
}

class Colors extends React.Component {
    constructor() {
        super()
        this.state = {
            color: [], 
            add: "",
            addcolor: [],
            
            list_color: [
                {id: 1, value: "Black", key: 1, isChecked: false},
                {id: 2, value: "Darkslategray", key: 2, isChecked: false},
                {id: 3, value: "Slategray", key: 3, isChecked: false},
                {id: 4, value: "Dimgray", key: 4, isChecked: false},
                {id: 5, value: "Gray", key: 5, isChecked: false},
                {id: 6, value: "Darkgray", key: 6, isChecked: false},
                {id: 7, value: "Lightgray", key: 7, isChecked: false},
                {id: 59, value: "Whitesmoke", key: 59, isChecked: false},
                {id: 56, value: "Burlywood", key: 56, isChecked: false},
                {id: 9, value: "Rosybrown", key: 9, isChecked: false},
                {id: 10, value: "Sandybrown", key: 10, isChecked: false},
                {id: 11, value: "Goldenrod", key: 11, isChecked: false},
                {id: 12, value: "Peru", key: 12, isChecked: false},
                {id: 13, value: "Chocolate", key: 13, isChecked: false},
                {id: 14, value: "Saddlebrown", key: 14, isChecked: false},
                {id: 15, value: "Sienna", key: 15, isChecked: false},
                {id: 8, value: "Brown", key: 8, isChecked: false},
                {id: 16, value: "Maroon", key: 16, isChecked: false},
                {id: 17, value: "Indianred", key: 17, isChecked: false},
                {id: 18, value: "Crimson", key: 18, isChecked: false},
                {id: 20, value: "Red", key: 20, isChecked: false},
                {id: 19, value: "Firebrick", key: 19, isChecked: false},
                {id: 21, value: "Darkred", key: 21, isChecked: false},
                {id: 22, value: "Coral", key: 22, isChecked: false},
                {id: 23, value: "Tomato", key: 23, isChecked: false},
                {id: 24, value: "Orangered", key: 24, isChecked: false},
                {id: 25, value: "Gold", key: 25, isChecked: false},
                {id: 26, value: "Orange", key: 26, isChecked: false},
                {id: 27, value: "Darkkhaki", key: 27, isChecked: false},
                {id: 28, value: "Greenyellow", key: 28, isChecked: false},
                {id: 29, value: "Yellowgreen", key: 29, isChecked: false},
                {id: 30, value: "Lightgreen", key: 30, isChecked: false},
                {id: 31, value: "Darkseagreen", key: 31, isChecked: false},
                {id: 32, value: "Mediumseagreen", key: 32, isChecked: false},
                {id: 33, value: "Seagreen", key: 33, isChecked: false},
                {id: 34, value: "Olive", key: 34, isChecked: false},
                {id: 35, value: "Darkolivegreen", key: 35, isChecked: false},
                {id: 36, value: "Olivedrab", key: 36, isChecked: false},
                {id: 37, value: "Mediumaquamarine", key: 37, isChecked: false},
                {id: 38, value: "Turquoise", key: 38, isChecked: false},
                {id: 39, value: "Cadetblue", key: 39, isChecked: false},
                {id: 40, value: "Teal", key: 40, isChecked: false},
                {id: 41, value: "Lightblue", key: 41, isChecked: false},
                {id: 42, value: "Steelblue", key: 42, isChecked: false},
                {id: 43, value: "Midnightblue", key: 43, isChecked: false},
                {id: 44, value: "Slateblue", key: 44, isChecked: false},
                {id: 45, value: "Darkslateblue", key: 45, isChecked: false},
                {id: 57, value: "Indigo", key: 57, isChecked: false},
                {id: 46, value: "Purple", key: 46, isChecked: false},
                {id: 47, value: "Blueviolet", key: 47, isChecked: false},
                {id: 48, value: "Mediumpurple", key: 48, isChecked: false},
                {id: 49, value: "Mediumorchid", key: 49, isChecked: false},
                {id: 50, value: "Orchid", key: 50, isChecked: false},
                {id: 60, value: "Plum", key: 60, isChecked: false},
                {id: 51, value: "Thistle", key: 51, isChecked: false},
                {id: 52, value: "Pink", key: 52, isChecked: false},
                {id: 53, value: "Hotpink", key: 53, isChecked: false},
                {id: 55, value: "Palevioletred", key: 55, isChecked: false},
                {id: 54, value: "Deeppink", key: 54, isChecked: false},
                {id: 58, value: "Salmon", key: 58, isChecked: false},
            ]
        }
    }
    
    colorChecked = event => {
        this.state.list_color.forEach(list_color => {
        if (list_color.value === event.target.value)
            list_color.isChecked =  event.target.checked
        })
        this.setState({list_color: this.state.list_color})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.state.list_color.forEach(list_color => {
            if(list_color.isChecked){
                this.state.color.push({hair: list_color.value, price:0, img:"", isChecked:false, key: this.state.color.length})
            }
        })
        this.state.addcolor.forEach(addcolor => {
            if(addcolor.isChecked){
                this.state.color.push({hair: addcolor.value, price:0, img:"", isChecked:false, key: this.state.color.length})
            }
        })
        
        console.log(this.state)
        this.props.history.push('/pricelist')
    }

    typeAddcolor = event => {
        this.setState({[event.target.id]: event.target.value});
        this.setState({add: event.target.value})
    };
    addlist_color = () => {
        this.state.addcolor.push({id: this.state.addcolor.length, value: this.state.add, key: this.state.addcolor.length, isChecked: true})
        this.setState({add:""})
    }

    addcolorChecked = event => {
        this.state.addcolor.forEach(addcolor => {
        if (addcolor.value === event.target.value)
            addcolor.isChecked =  event.target.checked
        })
        this.setState({addcolor: this.state.addcolor})
    }

    render() {
        return (
            <div className="big_container">
                <div className="wrap_info">

                    <div className = "title">
                        <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                            Colors
                        </h1>
                    </div>
                    
                    <div className="signup_form">

                        <div className = "bigcontainer_info">
                            <div className="line_info">
                                <div className = "wrap_checkbox">
                                    
                                    <div className = "wrap_input_add">
                                        <input
                                            className = "input_add" 
                                            type ="text"
                                            value = {this.state.add}
                                            placeholder = "Type what you want..."
                                            onChange = {this.typeAddcolor}
                                        />
                                        <button type="reset" className="login_button" onClick={this.addlist_color}>
                                            Add
                                        </button>
                                    </div>
                                    { 
                                        this.state.list_color.map((list_color) => {
                                            return (<ColorCheckBox colorChecked={this.colorChecked}  {...list_color} />)
                                        })
                                    }
                                    { 
                                        this.state.addcolor.map((addcolor) => {
                                            return (<AddColorCheckBox addcolorChecked={this.addcolorChecked}  {...addcolor} />)
                                        })
                                    }

                                </div>
                            </div>
      
                        </div>
                        <div className="container_next_bt">
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
        );
    }
}
export default Colors;