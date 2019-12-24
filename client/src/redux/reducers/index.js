import inputReducer from "./inputReducer";
import displayReducer from "./displayReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    input: inputReducer,
    display: displayReducer,
    user: userReducer
})

export default rootReducer;