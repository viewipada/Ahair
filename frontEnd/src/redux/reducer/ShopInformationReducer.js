import {SHOPINFORMATION} from "../action/ShopInformationAction";
import {PRICEWOMENSHORT} from "../action/ShopInformationAction";
import {PRICEWOMENMEDIUM} from "../action/ShopInformationAction";
import {PRICEWOMENLONG} from "../action/ShopInformationAction";
import {PRICEMENSHORT} from "../action/ShopInformationAction";
import {PRICEMENLONG} from "../action/ShopInformationAction";
import {PRICEMENSERVICE} from "../action/ShopInformationAction";
import {PRICEWOMENSERVICE} from "../action/ShopInformationAction";
import {SHOPSTOCK} from "../action/ShopInformationAction"
import {HAIRSTYLESWOMENSHORT} from "../action/ShopInformationAction"
import {HAIRSTYLESWOMENMEDIUM} from "../action/ShopInformationAction"
import {HAIRSTYLESWOMENLONG} from "../action/ShopInformationAction"
import {HAIRSTYLESMENSHORT} from "../action/ShopInformationAction"
import {HAIRSTYLESMENLONG} from "../action/ShopInformationAction"
// import {ADDSHOPSTOCK} from "../action/ShopInformationAction"

const initialState = {
    shopinfo : "",
    colorstock: [
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
    ],
    list_womenShort: [
        {id: "ws1", value: "Beehive", key: "1-1", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws2", value: "Bob", key: "1-2", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws3", value: "Braided", key: "1-3", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws4", value: "Bun", key: "1-4", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws5", value: "Cornrows", key: "1-5", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws6", value: "Crew cut", key: "1-6", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws7", value: "Goth", key: "1-7", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws8", value: "Half up / Half down", key: "1-8", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws9", value: "Layers", key: "1-9", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws10", value: "Loose", key: "1-10", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws11", value: "Low bun", key: "1-11", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws12", value: "Mohawk", key: "1-12", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws14", value: "Pixie", key: "1-14", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws15", value: "Shaved", key: "1-15", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws16", value: "Short sides", key: "1-16", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws17", value: "Short slicked", key: "1-17", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws18", value: "Side swept", key: "1-18", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ws19", value: "Tousled", key: "1-19", isChecked: false, price:"0", hairstyleImg:""}
    ],
    list_womenMedium: [
        {id: "wm1", value: "Beehive", key: "2-1", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wm2", value: "Braided", key: "2-2", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wm3", value: "Bun", key: "2-3", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wm4", value: "Cornrows", key: "2-4", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wm5", value: "Goth", key: "2-5", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wm6", value: "Half up / Half down", key: "2-6", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wm7", value: "Layers", key: "2-7", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wm8", value: "Loose", key: "2-8", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wm9", value: "Low bun", key: "2-9", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wm11", value: "Ponytail", key: "2-10", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wm12", value: "Tousled", key: "2-11", isChecked: false, price:"0", hairstyleImg:""}
    
    ],
    list_womenLong: [
        {id: "wl1", value: "Beehive", key: "3-1", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wl2", value: "Braided", key: "3-2", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wl3", value: "Bun", key: "3-3", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wl4", value: "Cornrows", key: "3-4", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wl5", value: "Goth", key: "3-5", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wl6", value: "Half up / Half down", key: "3-6", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wl7", value: "Layers", key: "3-7", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wl8", value: "Loose", key: "3-8", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wl9", value: "Low bun", key: "3-9", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wl11", value: "Ponytail", key: "3-10", isChecked: false, price:"0", hairstyleImg:""},
        {id: "wl12", value: "Tousled", key: "3-11", isChecked: false, price:"0", hairstyleImg:""}

    ],
    list_menShort: [
        {id: "ms7", value: "Afro fade", key: "4-7", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms13", value: "Buzz cut", key: "4-13", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms11", value: "Comb Over", key: "4-11", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms14", value: "Crew cut", key: "4-14", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms15", value: "Faux Hawk", key: "4-15", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms16", value: "Fringe", key: "4-16", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms3", value: "Hight fade", key: "4-3", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms2", value: "Low fade", key: "4-2", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms4", value: "Mid fade", key: "4-4", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms9", value: "Pompadour", key: "4-9", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms10", value: "Quiff", key: "4-10", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms17", value: "Side part", key: "4-17", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms20", value: "Skinhead", key: "4-20", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms6", value: "Skin Fade", key: "4-6", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms12", value: "Slicked back", key: "4-12", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms18", value: "Spiky", key: "4-18", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms1", value: "Taper fade", key: "4-1", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms5", value: "Temple fade", key: "4-5", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms19", value: "Top kont", key: "4-19", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ms8", value: "Undercut", key: "4-8", isChecked: false, price:"0", hairstyleImg:""},
        
    ],
    list_menLong: [
        
        {id: "ml8", value: "Braids", key: "5-8", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ml1", value: "Deadlocks", key: "5-1", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ml7", value: "Half up", key: "5-7", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ml9", value: "Long curls", key: "5-9", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ml10", value: "Long undercut", key: "5-10", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ml5", value: "Man bun", key: "5-5", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ml3", value: "Ponytail", key: "5-3", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ml6", value: "Side part", key: "5-6", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ml2", value: "Slick back", key: "5-2", isChecked: false, price:"0", hairstyleImg:""},
        {id: "ml4", value: "Textured waves", key: "5-4", isChecked: false, price:"0", hairstyleImg:""}    
    ],
    servicesWomen: 
    [
        {value:"Bang trim", price: 0, img:"", isCheck:true, key:0}, 
        {value:"Blow dry", price: 0, img:"", isCheck:true, key:1}, 
        {value:"Color", price: 0, img:"", isCheck:true, key:2}, 
        {value:"Haircut", price: 0, img:"", isCheck:true, key:3},  
        {value:"Highlights", price: 0, img:"", isCheck:true, key:4},
        {value:"Perm", price: 0, img:"", isCheck:true, key:5},
        {value:"Shampoo", price: 0, img:"", isCheck:true, key:6}, 
        {value:"Straightening", price: 0, img:"", isCheck:true, key:7}, 
        {value:"Treatment", price: 0, img:"", isCheck:true, key:8}
    ],
    servicesMen: 
    [
        {value:"Beard trim", price: 0, img:"", isCheck:true, key:0}, 
        {value:"Color", price: 0, img:"", isCheck:true, key:8},
        {value:"Haircut", price: 0, img:"", isCheck:true, key:1}, 
        {value:"Haircut (Children)", price: 0, img:"", isCheck:true, key:2},
        {value:"Highlights", price: 0, img:"", isCheck:true, key:6},
        {value:"Perm", price: 0, img:"", isCheck:true, key:5},  
        {value:"Shampoo", price: 0, img:"", isCheck:true, key:3},  
        {value:"Shave", price: 0, img:"", isCheck:true, key:4},
        {value:"Straightening", price: 0, img:"", isCheck:true, key:7}, 
    ],
}

export const ShopInformationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOPINFORMATION : {
            return{
                ...state,
                shopinfo : Object.assign({},state.shopinfo,action.payload)
            }
        }
        case SHOPSTOCK : {
            for(let i =0 ; i<state.colorstock.length; i++) {
                if(state.colorstock[i].key === action.payload) 
                {
                    return{
                        ...state,
                        colorstock: [
                            ...state.colorstock.slice(0,i),
                            Object.assign({},state.colorstock[i],{isChecked:true}),
                            ...state.colorstock.slice(i+1)
                        ]
                    }
                }
            }
        }
        case HAIRSTYLESWOMENSHORT : {
            for(let i =0 ; i<state.list_womenShort.length; i++) {
                if(state.list_womenShort[i].key === action.payload) 
                {
                    return{
                        ...state,
                        list_womenShort: [
                            ...state.list_womenShort.slice(0,i),
                            Object.assign({},state.list_womenShort[i],{isChecked:true}),
                            ...state.list_womenShort.slice(i+1)
                        ]
                    }
                }
            }
        }
        case HAIRSTYLESWOMENMEDIUM : {
            for(let i =0 ; i<state.list_womenMedium.length; i++) {
                if(state.list_womenMedium[i].key === action.payload) 
                {
                    return{
                        ...state,
                        list_womenMedium: [
                            ...state.list_womenMedium.slice(0,i),
                            Object.assign({},state.list_womenMedium[i],{isChecked:true}),
                            ...state.list_womenMedium.slice(i+1)
                        ]
                    }
                }
            }
        }
        case HAIRSTYLESWOMENLONG : {
            for(let i =0 ; i<state.list_womenLong.length; i++) {
                if(state.list_womenLong[i].key === action.payload) 
                {
                    return{
                        ...state,
                        list_womenLong: [
                            ...state.list_womenLong.slice(0,i),
                            Object.assign({},state.list_womenLong[i],{isChecked:true}),
                            ...state.list_womenLong.slice(i+1)
                        ]
                    }
                }
            }
        }
        case HAIRSTYLESMENSHORT : {
            for(let i =0 ; i<state.list_menShort.length; i++) {
                if(state.list_menShort[i].key === action.payload) 
                {
                    return{
                        ...state,
                        list_menShort: [
                            ...state.list_menShort.slice(0,i),
                            Object.assign({},state.list_menShort[i],{isChecked:true}),
                            ...state.list_menShort.slice(i+1)
                        ]
                    }
                }
            }
        }
        case HAIRSTYLESMENLONG : {
            for(let i =0 ; i<state.list_womenLong.length; i++) {
                if(state.list_womenLong[i].key === action.payload) 
                {
                    return{
                        ...state,
                        list_womenLong: [
                            ...state.list_womenLong.slice(0,i),
                            Object.assign({},state.list_womenLong[i],{isChecked:true}),
                            ...state.list_womenLong.slice(i+1)
                        ]
                    }
                }
            }
        }
        case PRICEWOMENSHORT : {
            for(let i =0 ; i<state.list_womenShort.length; i++) {
                if(state.list_womenShort[i].key === action.payload && state.list_womenShort[i].isChecked) 
                {
                    return{
                        ...state,
                        list_womenShort: [
                            ...state.list_womenShort.slice(0,i),
                            Object.assign({},state.list_womenShort[i],{price: state.list_womenShort[i].price+ action.payload.pice}),
                            ...state.list_womenShort.slice(i+1)
                        ]
                    }
                }
            }
        }
        case PRICEWOMENMEDIUM : {
            for(let i =0 ; i<state.list_womenMedium.length; i++) {
                if(state.list_womenMedium[i].key === action.payload && state.list_womenMedium[i].isChecked) 
                {
                    return{
                        ...state,
                        list_womenMedium: [
                            ...state.list_womenMedium.slice(0,i),
                            Object.assign({},state.list_womenMedium[i],{price: state.list_womenMedium[i].price+ action.payload.pice}),
                            ...state.list_womenMedium.slice(i+1)
                        ]
                    }
                }
            }
        }
        case PRICEWOMENLONG : {
            for(let i =0 ; i<state.list_womenLong.length; i++) {
                if(state.list_womenLong[i].key === action.payload && state.list_womenLong[i].isChecked) 
                {
                    return{
                        ...state,
                        list_womenLong: [
                            ...state.list_womenLong.slice(0,i),
                            Object.assign({},state.list_womenLong[i],{price: state.list_womenLong[i].price+ action.payload.pice}),
                            ...state.list_womenLong.slice(i+1)
                        ]
                    }
                }
            }
        }
        case PRICEMENSHORT : {
            for(let i =0 ; i<state.list_menShort.length; i++) {
                if(state.list_menShort[i].key === action.payload&& state.list_menShort[i].isChecked) 
                {
                    return{
                        ...state,
                        list_menShort: [
                            ...state.list_menShort.slice(0,i),
                            Object.assign({},state.list_menShort[i],{price: state.list_menShort[i].price+ action.payload.pice}),
                            ...state.list_menShort.slice(i+1)
                        ]
                    }
                }
            }
        }
        case PRICEMENLONG : {
            for(let i =0 ; i<state.list_menLong.length; i++) {
                if(state.list_menLong[i].key === action.payload&& state.list_menLong[i].isChecked) 
                {
                    return{
                        ...state,
                        list_menLong: [
                            ...state.list_menLong.slice(0,i),
                            Object.assign({},state.list_menLong[i],{price: state.servicesWomen[i].price+ action.payload.pice}),
                            ...state.list_menLong.slice(i+1)
                        ]
                    }
                }
            }
        }
        case PRICEWOMENSERVICE : {
            for(let i =0 ; i<state.servicesWomen.length; i++) {
                if(state.servicesWomen[i].key === action.payload) 
                {
                    return{
                        ...state,
                        servicesWomen: [
                            ...state.servicesWomen.slice(0,i),
                            Object.assign({},state.servicesWomen[i],{price: state.servicesWomen[i].price+ action.payload.pice}),
                            ...state.servicesWomen.slice(i+1)
                        ]
                    }
                }
            }
        }
        case PRICEMENSERVICE : {
            for(let i =0 ; i<state.servicesMen.length; i++) {
                if(state.servicesMen[i].key === action.payload) 
                {
                    return{
                        ...state,
                        servicesMen: [
                            ...state.servicesMen.slice(0,i),
                            Object.assign({},state.servicesMen[i],{price: state.servicesMen[i].price+ action.payload.pice}),
                            ...state.servicesMen.slice(i+1)
                        ]
                    }
                }
            }
        }
        
        
        default :
            return state
    }
}