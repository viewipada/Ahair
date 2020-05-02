import {SIGNUPSHOP} from "../action/SignUpForShopAction";

const initialState = {
    shopsignup : ""
}

export const SignUpForShopReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGNUPSHOP : {
            return{
                ...state,
                shopsignup : Object.assign({},state.shopsignup,action.payload)
            }
        }
        default :
            return state
    }
}