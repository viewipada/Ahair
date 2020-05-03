import React from 'react';
import { Link } from 'react-router-dom';
import addIcon from './pic/add_icon.png';
import InputBarber from './InputBarber';
import NavBarShop from './NavBarShop';
import axios from 'axios'

export const AddBarber = props => {
    return(
        <div style={{pointerEvents: props.edit}} >
            <InputBarber 
                getBarber={props.getBarber} 
            /> 
        </div>
    )
}

class HairBarBer extends React.Component {
    constructor()
    {
        super();
        this.state = {    
            name:"",
            imageUrl: "",
            phone:"",
            hair:"",
            time:[],
            numOfbarber:[{id:0,edit:"visible"}],
            barber: [],
            isSignin: null
        }
        this.getBarber = this.getBarber.bind(this);
    }
    componentDidMount() {
        const token = localStorage.getItem('token')
        if (!token) this.setState({isSignin:false})
        else this.setState({isSignin:true})
    }

    getBarber(name, img, phone, hair) {
        this.setState({
            name:name, imageUrl:img, phone: phone, hair:hair
        })
    }

    newBarber = event => {
        event.preventDefault()
        if(this.state.name) {
            this.state.numOfbarber[this.state.numOfbarber.length -1].edit = "none"
            this.state.numOfbarber.push({id: this.state.numOfbarber.length, edit: "visible"})
            this.setState({numOfbarber: this.state.numOfbarber})
            this.state.barber.push({baberName: this.state.name, img_barber: this.state.imageUrl,phoneNum: this.state.phone, hairAble: this.state.hair})    
        }
        this.setState({
            name:"", imageUrl:"", hair:[], time:[],phone:""
        })
        // console.log(this.state)
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.name) {
            this.state.barber.push({baberName: this.state.name, img_barber: this.state.imageUrl,phoneNum: this.state.phone, hairAble: this.state.hair})
            console.log(this.state.barber[0].hairAble);
            this.setState(this.state);
            // const newBarber = {
            //     barberName : element.value,
            //     phoneNum : parseInt(element.price, 10),
            //     hairstyleId : element.value,
            //     time:parseInt(element.price, 10),
            //     barberImg: element.hairstyleImg
            // }
            // axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/barber',newBarber ,{headers: {'Authorization':'Bearer ' + localStorage.getItem('token')}})
            //     .then(function(response){
            //         console.log(response)
            //     })
            //     .catch(function(error) {
            //         console.log(error)
            //     })
            this.props.history.push('/shop') 
        }
        // console.log(this.state);
    };

    render(){
        return(
            <div className="big_container">
                {/* <div className="container_signup"> */}
                <NavBarShop />
                    <div className="wrap_info">

                        <div className = "title">
                            <h1 style={{color:"#CB2D6F",fontSize:"30px"}}>
                                Barber
                            </h1>
                        </div>
                        
                        <div className="signup_form">

                            <div className = "bigcontainer_info">
                                {/* <div className = "line_info"> */}
                                    {/* <div  > */}
                                    { 
                                        this.state.numOfbarber.map((numOfbarber) => {
                                            return (<AddBarber getBarber={this.getBarber} {...numOfbarber} key={numOfbarber.id} /> )
                                            // console.log(numOfbarber.length)
                                        })
                                    }
                                    {/* </div> */}
                                    <div className="container_right_bt"  style={{marginBottom:"40px"}}>
                                        <button className="login_button" type="submit" onClick={this.newBarber}>
                                            <img src={addIcon} width="30px" style={{marginRight:"10px"}} />
                                            New barber
                                        </button>
                                    </div>
                                {/* </div> */}
                                
                            </div>
                            
                            <div className="container_next_bt">
                                <Link className="link" to="/pricelist">
                                    <div>
                                        <button className="login_button" type="reset">
                                            Back
                                        </button>
                                    </div>
                                </Link>
                                <form onSubmit={this.handleSubmit} >
                                    <button className="login_button" type="submit" onClick={this.handleSubmit}>
                                        Submit
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                {/* </div> */}
            </div>
        );
    }
}
export default HairBarBer;