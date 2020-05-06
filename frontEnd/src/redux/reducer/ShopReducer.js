import {SHOP} from "../action/ShopAction";

const initialState = {
    shop : ""
}

export const ShopReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOP : {
            return{
                ...state,
                shop : Object.assign({},state.shop,action.payload)
            }
        }
        default :
            return state
    }
}