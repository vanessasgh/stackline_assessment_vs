import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import orderReducer from "./orderReducer";
import chosenColReducer from "./chosenColReducer"

const reducers = combineReducers({
    data: dataReducer,
    order: orderReducer,
    chosenCol: chosenColReducer
})

export default reducers