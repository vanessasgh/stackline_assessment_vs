import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducers from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)