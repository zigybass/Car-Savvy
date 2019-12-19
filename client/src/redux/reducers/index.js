import inputReducer from "./inputReducer";
import displayReducer from "./displayReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    input: inputReducer,
    display: displayReducer
})

export default rootReducer;