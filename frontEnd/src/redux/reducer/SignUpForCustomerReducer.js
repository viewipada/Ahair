import {SIGNUPCUSTOMER} from "../action/SignUpForCustomerAction";

const initialState = {
    customersignup : ""
}

export const SignUpForCustomerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGNUPCUSTOMER : {
            return{
                ...state,
                customersignup : Object.assign({},state.customersignup,action.payload)
            }
        }
        default :
            return state
    }
}