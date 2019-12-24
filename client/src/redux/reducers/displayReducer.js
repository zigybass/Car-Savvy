import { HEADER_MOVE, HIDE_BTN } from "./types";

const initialDisplayState = {
    headerOpen: false,
    loggedIn: false,
    findCarBtnHidden: true
}

function displayReducer (state = initialDisplayState, action) {
    switch (action.type) {
        case HEADER_MOVE:
            return {...state, headerOpen: action.action}
        case HIDE_BTN:
            return {...state, findCarBtnHidden: false}
        default:
            return state;
    }
}

export default displayReducer;