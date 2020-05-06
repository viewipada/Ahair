import {ADMIN} from "../action/AdminAction";

const initialState = {
    admin : ""
}

export const AdminReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADMIN : {
            return{
                ...state,
                admin : Object.assign({},state.admin,action.payload)
            }
        }
        default :
            return state
    }
}