import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import addTaskReducer from "./addTaskReducer"
import {combineReducers} from "redux";


const allReducers = combineReducers({
    counterReducer,
    loggedReducer,
    addTaskReducer
})

export default allReducers;

