import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./index";
import logger from "redux-logger";
import jwtDecode from 'jwt-decode';


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger))
);

export default store;