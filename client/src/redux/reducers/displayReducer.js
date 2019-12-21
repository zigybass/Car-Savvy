import { HEADER_MOVE, USER_LOGGED_IN } from "./types";

const initialDisplayState = {
    headerOpen: false,
    loggedIn: false
}

function displayReducer (state = initialDisplayState, action) {
    switch (action.type) {
        case HEADER_MOVE:
            return {...state, headerOpen: action.action}
        case USER_LOGGED_IN:
            return {...state, loggedIn: true}
        default:
            return state;
    }
}

export default displayReducer;