import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {PriceWomenShort,PriceWomenMedium,PriceWomenLong,PriceMenShort,PriceMenLong,PriceMenService,PriceWomenService} from '../redux/index'
import NavBarShop from './NavBarShop';
import axios from 'axios'

class InputListServices extends React.Component {
    servicesChange(event) {
        this.props.onChange(event.target.name, event.target.value)
      }

    render() { 
      return (
        <div className = "line_price">
            {this.props.services.map((services) => 
                <div className = "line_price" key = {services.value} style={{marginLeft:"50px"}}>
                    <div className="name_hair">
                        {services.value}
                    </div>
                    <div className = "price" style={{placeholder:"gray"}}>
                        <input  
                            type ="number" 
                            className= "input_price" 
                            min="0"
                            name={services.value}
                            value = {services.price}
                            // placeholder = "0"
                            onChange={this.servicesChange.bind(this,)} 
                            style={{placeholder:"black"}}
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
    hairstyleChange = event => {
      this.props.onChange(event.target.name,event.target.value)
    }

    imghairstyleChange = event => {
        this.props.imgChange(event.target.name, URL.createObjectURL(event.target.files[0]))
      }
    
    render() { 
      return (
        <div className = "line_price">
            {this.props.hairstyle.filter(e => e.isChecked === true).map((hairstyle) => 
                <div className = "line_price" key = {hairstyle.value} style={{marginLeft:"50px"}}>
                    <div className="name_hair">
                        {hairstyle.value}
                    </div>
                    <div className = "price">
                        <input  
                            type ="number" 
                            className= "input_price" 
                            min="0"
                            name={hairstyle.value}
                            value={hairstyle.price}
                            // placeholder = "0"
                            onChange={this.hairstyleChange.bind(this)} 
                            style={{placeholder:"gray"}}
                        />
                    </div>
                    <div className = "baht">Baht</div>
                    <div className = "hairstype_img">
                        <input 
                            className = "hairstype_img_input"
                            type = "file"
                            id = "image_file"
                            name={hairstyle.value}
                            value={hairstyle.hairstyleImg}
                            onChange = {this.imghairstyleChange.bind(this)}
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
            servicesWomen: this.props.womenServiceStore,
            servicesMen: this.props.menServiceStore,
            list_womenShort: this.props.womenShortStore,
            list_womenMedium: this.props.womenMediumStore,
            list_womenLong: this.props.womenLongStore,
            list_menShort: this.props.menShortStore,
            list_menLong: this.props.menLongStore 
        }
        this.servicesWomenChange = this.servicesWomenChange.bind(this)
        this.servicesMenChange = this.servicesMenChange.bind(this)
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
    servicesWomenChange(value, price) {
        // console.log(value,price)
        this.props.womenServiceStore.forEach(e => {
            if (e.value === value)
                price > 0? e.price =  price : e.price = 0
            })
        this.setState({servicesWomen: this.props.womenServiceStore})
    }
    servicesMenChange(value, price) {
        // console.log(value,price)
        this.props.menServiceStore.forEach(e => {
            if (e.value === value)
                price > 0? e.price =  price : e.price = 0
            })
        this.setState({servicesMen: this.props.menServiceStore})
    }
    hairstyleWomenShortChange(value, price) {
        this.props.womenShortStore.forEach(e => {
            if (e.value === value)
                price > 0? e.price =  price : e.price = 0
            })
        this.setState({list_womenShort: this.props.womenShortStore})
    }

    hairstyleWomenMediumChange(value, price) {
        this.props.womenMediumStore.forEach(e => {
            if (e.value === value)
                price > 0? e.price =  price : e.price = 0
            })
        this.setState({list_womenMedium: this.props.womenMediumStore})
    }

    hairstyleWomenLongChange(value, price) {
        this.props.womenLongStore.forEach(e => {
            if (e.value === value)
                price > 0? e.price =  price : e.price = 0
            })
        this.setState({list_womenLong: this.props.womenLongStore})
    }

    hairstyleMenShortChange(value, price) {
        this.props.menShortStore.forEach(e => {
            if (e.value === value)
                price > 0? e.price =  price : e.price = 0
            })
        this.setState({list_menShort: this.props.menShortStore})
    }

    hairstyleMenLongChange(value, price) {
        this.props.menLongStore.forEach(e => {
            if (e.value === value)
                price > 0? e.price =  price : e.price = 0
            })
        this.setState({list_menLong: this.props.menLongStore})
    }
    
    imghairstyleWomenShortChange(value, img) {
        this.props.womenShortStore.forEach(e => {
            if (e.value === value)
                e.hairstyleImg =  img
            })
        this.setState({list_womenShort: this.props.womenShortStore})
    }

    imghairstyleWomenMediumChange(value, img) {
        this.props.womenMediumStore.forEach(e => {
            if (e.value === value)
                e.hairstyleImg =  img
            })
        this.setState({list_womenMedium: this.props.womenMediumStore})
    }

    imghairstyleWomenLongChange(value, img) {
        this.props.womenLongStore.forEach(e => {
            if (e.value === value)
                e.hairstyleImg =  img
            })
        this.setState({list_womenLong: this.props.womenLongStore})
    }

    imghairstyleMenShortChange(value, img) {
        this.props.menShortStore.forEach(e => {
            if (e.value === value)
                e.hairstyleImg =  img
            })
        this.setState({list_menShort: this.props.menShortStore})
    }

    imghairstyleMenLongChange(value, img) {
        this.props.menLongStore.forEach(e => {
            if (e.value === value)
                e.hairstyleImg =  img
            })
        this.setState({list_menLong: this.props.menLongStore})
    }
    
    handleSubmit = event => {
        event.preventDefault();
        // let isValid = this.validate();
        //   console.log(this.state);
          this.setState(this.state);
          this.props.priceWomenShort(this.state.list_womenShort)
          this.props.priceWomenMedium(this.state.list_womenMedium)
          this.props.priceWomenLong(this.state.list_womenLong)
          this.props.priceMenShort(this.state.list_menShort)
          this.props.priceMenLong(this.state.list_menLong)
          this.props.priceMenService(this.state.servicesMen)
          this.props.priceWomenService(this.state.servicesWomen)

        this.props.womenServiceStore.forEach(element => {
            const newHairstyle = {
                hairName : element.value,
                price : parseInt(element.price, 10)
                // hairstyleImg: element.hairstyleImg
            }
            axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/shop',newHairstyle ,{headers: {'Authorization':'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjVlOWVlOTdjODQwZjk3ZTAyNTM2ODhhM2I3ZTk0NDczZTUyOGE3YjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZzEwYWhhaXIiLCJhdWQiOiJnMTBhaGFpciIsImF1dGhfdGltZSI6MTU4ODA5NTYyOCwidXNlcl9pZCI6ImxZaDJ6djJ0M1dYQUdiWVVkN2syeXRreDllWTIiLCJzdWIiOiJsWWgyenYydDNXWEFHYllVZDdrMnl0a3g5ZVkyIiwiaWF0IjoxNTg4MDk1NjI4LCJleHAiOjE1ODgwOTkyMjgsImVtYWlsIjoibmV3MkBlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmV3MkBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HmF4xbkd8X8LczNbVfKJgWOFYpvJGmvmkmQ2-79Mm-a5bTKOmHqWzg2Ofo4ChIV5gsY7IKKsTRtRtePjC5Z-fJOoXkdc7iLEXELGuNn0LTs1-hLdMUYeqyavNsKOCZ_w-6M3KXY0VeYIusDMlXUDZAhGMZstmJgE7_bAo9e7C7eeCZRQzba0C-BShzcoNhT627PXC0C-MYl3fsU05NJ0djHuV7mPiZfTi0zh_7VzHa8bT4AGavgDJfPcRn6cd__KT65EVQ4nvYXsl-lqDGeaFKaUnGUOHcQQe17ExYHGZ5-lPOqVkRxPosK8KatLXCOkv7yCvE5gMcEtbyrxjK6wCA'}})
                .then(function(response){
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                }
            )
        })
        this.props.menServiceStore.forEach(element => {
            const newHairstyle = {
                hairName : element.value,
                price : parseInt(element.price, 10)
                // hairstyleImg: element.hairstyleImg
            }
            axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/shop',newHairstyle ,{headers: {'Authorization':'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjVlOWVlOTdjODQwZjk3ZTAyNTM2ODhhM2I3ZTk0NDczZTUyOGE3YjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZzEwYWhhaXIiLCJhdWQiOiJnMTBhaGFpciIsImF1dGhfdGltZSI6MTU4ODA5NTYyOCwidXNlcl9pZCI6ImxZaDJ6djJ0M1dYQUdiWVVkN2syeXRreDllWTIiLCJzdWIiOiJsWWgyenYydDNXWEFHYllVZDdrMnl0a3g5ZVkyIiwiaWF0IjoxNTg4MDk1NjI4LCJleHAiOjE1ODgwOTkyMjgsImVtYWlsIjoibmV3MkBlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmV3MkBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HmF4xbkd8X8LczNbVfKJgWOFYpvJGmvmkmQ2-79Mm-a5bTKOmHqWzg2Ofo4ChIV5gsY7IKKsTRtRtePjC5Z-fJOoXkdc7iLEXELGuNn0LTs1-hLdMUYeqyavNsKOCZ_w-6M3KXY0VeYIusDMlXUDZAhGMZstmJgE7_bAo9e7C7eeCZRQzba0C-BShzcoNhT627PXC0C-MYl3fsU05NJ0djHuV7mPiZfTi0zh_7VzHa8bT4AGavgDJfPcRn6cd__KT65EVQ4nvYXsl-lqDGeaFKaUnGUOHcQQe17ExYHGZ5-lPOqVkRxPosK8KatLXCOkv7yCvE5gMcEtbyrxjK6wCA'}})
                .then(function(response){
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                }
            )
        })
        this.props.womenShortStore.forEach(element => {
            const newHairstyle = {
                hairName : element.value,
                price : parseInt(element.price, 10)
                // hairstyleImg: element.hairstyleImg
            }
            axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/shop',newHairstyle ,{headers: {'Authorization':'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjVlOWVlOTdjODQwZjk3ZTAyNTM2ODhhM2I3ZTk0NDczZTUyOGE3YjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZzEwYWhhaXIiLCJhdWQiOiJnMTBhaGFpciIsImF1dGhfdGltZSI6MTU4ODA5NTYyOCwidXNlcl9pZCI6ImxZaDJ6djJ0M1dYQUdiWVVkN2syeXRreDllWTIiLCJzdWIiOiJsWWgyenYydDNXWEFHYllVZDdrMnl0a3g5ZVkyIiwiaWF0IjoxNTg4MDk1NjI4LCJleHAiOjE1ODgwOTkyMjgsImVtYWlsIjoibmV3MkBlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmV3MkBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HmF4xbkd8X8LczNbVfKJgWOFYpvJGmvmkmQ2-79Mm-a5bTKOmHqWzg2Ofo4ChIV5gsY7IKKsTRtRtePjC5Z-fJOoXkdc7iLEXELGuNn0LTs1-hLdMUYeqyavNsKOCZ_w-6M3KXY0VeYIusDMlXUDZAhGMZstmJgE7_bAo9e7C7eeCZRQzba0C-BShzcoNhT627PXC0C-MYl3fsU05NJ0djHuV7mPiZfTi0zh_7VzHa8bT4AGavgDJfPcRn6cd__KT65EVQ4nvYXsl-lqDGeaFKaUnGUOHcQQe17ExYHGZ5-lPOqVkRxPosK8KatLXCOkv7yCvE5gMcEtbyrxjK6wCA'}})
                .then(function(response){
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                }
            )
        })
        this.props.womenMediumStore.forEach(element => {
            const newHairstyle = {
                hairName : element.value,
                price : parseInt(element.price, 10)
                // hairstyleImg: element.hairstyleImg
            }
            axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/shop',newHairstyle ,{headers: {'Authorization':'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjVlOWVlOTdjODQwZjk3ZTAyNTM2ODhhM2I3ZTk0NDczZTUyOGE3YjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZzEwYWhhaXIiLCJhdWQiOiJnMTBhaGFpciIsImF1dGhfdGltZSI6MTU4ODA5NTYyOCwidXNlcl9pZCI6ImxZaDJ6djJ0M1dYQUdiWVVkN2syeXRreDllWTIiLCJzdWIiOiJsWWgyenYydDNXWEFHYllVZDdrMnl0a3g5ZVkyIiwiaWF0IjoxNTg4MDk1NjI4LCJleHAiOjE1ODgwOTkyMjgsImVtYWlsIjoibmV3MkBlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmV3MkBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HmF4xbkd8X8LczNbVfKJgWOFYpvJGmvmkmQ2-79Mm-a5bTKOmHqWzg2Ofo4ChIV5gsY7IKKsTRtRtePjC5Z-fJOoXkdc7iLEXELGuNn0LTs1-hLdMUYeqyavNsKOCZ_w-6M3KXY0VeYIusDMlXUDZAhGMZstmJgE7_bAo9e7C7eeCZRQzba0C-BShzcoNhT627PXC0C-MYl3fsU05NJ0djHuV7mPiZfTi0zh_7VzHa8bT4AGavgDJfPcRn6cd__KT65EVQ4nvYXsl-lqDGeaFKaUnGUOHcQQe17ExYHGZ5-lPOqVkRxPosK8KatLXCOkv7yCvE5gMcEtbyrxjK6wCA'}})
                .then(function(response){
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                }
            )
        })
        this.props.womenLongStore.forEach(element => {
            const newHairstyle = {
                hairName : element.value,
                price : parseInt(element.price, 10)
                // hairstyleImg: element.hairstyleImg
            }
            axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/shop',newHairstyle ,{headers: {'Authorization':'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjVlOWVlOTdjODQwZjk3ZTAyNTM2ODhhM2I3ZTk0NDczZTUyOGE3YjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZzEwYWhhaXIiLCJhdWQiOiJnMTBhaGFpciIsImF1dGhfdGltZSI6MTU4ODA5NTYyOCwidXNlcl9pZCI6ImxZaDJ6djJ0M1dYQUdiWVVkN2syeXRreDllWTIiLCJzdWIiOiJsWWgyenYydDNXWEFHYllVZDdrMnl0a3g5ZVkyIiwiaWF0IjoxNTg4MDk1NjI4LCJleHAiOjE1ODgwOTkyMjgsImVtYWlsIjoibmV3MkBlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmV3MkBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HmF4xbkd8X8LczNbVfKJgWOFYpvJGmvmkmQ2-79Mm-a5bTKOmHqWzg2Ofo4ChIV5gsY7IKKsTRtRtePjC5Z-fJOoXkdc7iLEXELGuNn0LTs1-hLdMUYeqyavNsKOCZ_w-6M3KXY0VeYIusDMlXUDZAhGMZstmJgE7_bAo9e7C7eeCZRQzba0C-BShzcoNhT627PXC0C-MYl3fsU05NJ0djHuV7mPiZfTi0zh_7VzHa8bT4AGavgDJfPcRn6cd__KT65EVQ4nvYXsl-lqDGeaFKaUnGUOHcQQe17ExYHGZ5-lPOqVkRxPosK8KatLXCOkv7yCvE5gMcEtbyrxjK6wCA'}})
                .then(function(response){
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                }
            )
        })
        this.props.menShortStore.forEach(element => {
            const newHairstyle = {
                hairName : element.value,
                price : parseInt(element.price, 10)
                // hairstyleImg: element.hairstyleImg
            }
            axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/shop',newHairstyle ,{headers: {'Authorization':'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjVlOWVlOTdjODQwZjk3ZTAyNTM2ODhhM2I3ZTk0NDczZTUyOGE3YjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZzEwYWhhaXIiLCJhdWQiOiJnMTBhaGFpciIsImF1dGhfdGltZSI6MTU4ODA5NTYyOCwidXNlcl9pZCI6ImxZaDJ6djJ0M1dYQUdiWVVkN2syeXRreDllWTIiLCJzdWIiOiJsWWgyenYydDNXWEFHYllVZDdrMnl0a3g5ZVkyIiwiaWF0IjoxNTg4MDk1NjI4LCJleHAiOjE1ODgwOTkyMjgsImVtYWlsIjoibmV3MkBlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmV3MkBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HmF4xbkd8X8LczNbVfKJgWOFYpvJGmvmkmQ2-79Mm-a5bTKOmHqWzg2Ofo4ChIV5gsY7IKKsTRtRtePjC5Z-fJOoXkdc7iLEXELGuNn0LTs1-hLdMUYeqyavNsKOCZ_w-6M3KXY0VeYIusDMlXUDZAhGMZstmJgE7_bAo9e7C7eeCZRQzba0C-BShzcoNhT627PXC0C-MYl3fsU05NJ0djHuV7mPiZfTi0zh_7VzHa8bT4AGavgDJfPcRn6cd__KT65EVQ4nvYXsl-lqDGeaFKaUnGUOHcQQe17ExYHGZ5-lPOqVkRxPosK8KatLXCOkv7yCvE5gMcEtbyrxjK6wCA'}})
                .then(function(response){
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                }
            )
        })
        this.props.menLongStore.forEach(element => {
            const newHairstyle = {
                hairName : element.value,
                price : parseInt(element.price, 10)
                // hairstyleImg: element.hairstyleImg
            }
            axios.post('https://us-central1-g10ahair.cloudfunctions.net/api/shop',newHairstyle ,{headers: {'Authorization':'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjVlOWVlOTdjODQwZjk3ZTAyNTM2ODhhM2I3ZTk0NDczZTUyOGE3YjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZzEwYWhhaXIiLCJhdWQiOiJnMTBhaGFpciIsImF1dGhfdGltZSI6MTU4ODA5NTYyOCwidXNlcl9pZCI6ImxZaDJ6djJ0M1dYQUdiWVVkN2syeXRreDllWTIiLCJzdWIiOiJsWWgyenYydDNXWEFHYllVZDdrMnl0a3g5ZVkyIiwiaWF0IjoxNTg4MDk1NjI4LCJleHAiOjE1ODgwOTkyMjgsImVtYWlsIjoibmV3MkBlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmV3MkBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HmF4xbkd8X8LczNbVfKJgWOFYpvJGmvmkmQ2-79Mm-a5bTKOmHqWzg2Ofo4ChIV5gsY7IKKsTRtRtePjC5Z-fJOoXkdc7iLEXELGuNn0LTs1-hLdMUYeqyavNsKOCZ_w-6M3KXY0VeYIusDMlXUDZAhGMZstmJgE7_bAo9e7C7eeCZRQzba0C-BShzcoNhT627PXC0C-MYl3fsU05NJ0djHuV7mPiZfTi0zh_7VzHa8bT4AGavgDJfPcRn6cd__KT65EVQ4nvYXsl-lqDGeaFKaUnGUOHcQQe17ExYHGZ5-lPOqVkRxPosK8KatLXCOkv7yCvE5gMcEtbyrxjK6wCA'}})
                .then(function(response){
                    console.log(response)
                })
                .catch(function(error) {
                    console.log(error)
                }
            )
        })

        this.props.history.push('/hairbarber')
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
                        <InputListServices services={this.props.womenServiceStore} onChange={this.servicesWomenChange} />
                    
                        <div className = "line_info">
                            <div style={{width:"200px", marginBottom:"20px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Services for men</p>
                            </div>
                        </div>
                        <InputListServices services={this.props.menServiceStore} onChange={this.servicesMenChange} />
                    
                        <div className = "line_info">
                            <div style={{width:"200px", marginBottom:"20px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Women hairstyles</p>
                            </div>
                        </div>
                        <InputListHairstyle hairstyle={this.props.womenShortStore} onChange={this.hairstyleWomenShortChange} imgChange={this.imghairstyleWomenShortChange}/>
                    
                        <div className = "line_info">
                            <div style={{width:"200px",  marginBottom:"20px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Women hairstyles</p>
                            </div>
                        </div>
                        <InputListHairstyle hairstyle={this.props.womenMediumStore} onChange={this.hairstyleWomenMediumChange} imgChange={this.imghairstyleWomenMediumChange}/>
                    
                        <div className = "line_info">
                            <div style={{width:"200px", marginBottom:"20px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Women hairstyles</p>
                            </div>
                        </div>
                        <InputListHairstyle hairstyle={this.props.womenLongStore} onChange={this.hairstyleWomenLongChange} imgChange={this.imghairstyleWomenLongChange}/>
                    
                        <div className = "line_info">
                            <div style={{width:"200px", marginBottom:"20px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Men hairstyle</p>
                            </div>
                        </div>
                        <InputListHairstyle hairstyle={this.props.menShortStore} onChange={this.hairstyleMenShortChange} imgChange={this.imghairstyleMenShortChange}/>
                    
                        <div className = "line_info">
                            <div style={{width:"200px", marginBottom:"20px"}}>
                                <p style={{color:"#14A098", marginRight:"20px"}}>Men hairstyle</p>
                            </div>
                        </div>
                        <InputListHairstyle hairstyle={this.props.menLongStore} onChange={this.hairstyleMenLongChange} imgChange={this.imghairstyleMenLongChange}/>
                    
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
        womenShortStore: state.ShopInformationReducer.list_womenShort,
        womenMediumStore: state.ShopInformationReducer.list_womenMedium,
        womenLongStore: state.ShopInformationReducer.list_womenLong,
        menShortStore: state.ShopInformationReducer.list_menShort,
        menLongStore: state.ShopInformationReducer.list_menLong,
        womenServiceStore: state.ShopInformationReducer.servicesWomen,
        menServiceStore: state.ShopInformationReducer.servicesMen
    }       
}
const mapDispatchToProps =(dispatch) => {
    return {
        priceWomenShort: (data) => dispatch(PriceWomenShort(data)),
        priceWomenMedium: (data) => dispatch(PriceWomenMedium(data)),
        priceWomenLong: (data) => dispatch(PriceWomenLong(data)),
        priceMenShort: (data) => dispatch(PriceMenShort(data)),
        priceMenLong: (data) => dispatch(PriceMenLong(data)),
        priceMenService: (data) => dispatch(PriceMenService(data)),
        priceWomenService: (data) => dispatch(PriceWomenService(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PriceList);