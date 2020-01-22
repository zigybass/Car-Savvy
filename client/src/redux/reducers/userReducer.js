import { USER_FIRSTNAME, USER_LOGGED_IN, VERIFY_DATA } from "./types";

const initialUserState = {
    loggedIn: false,
    firstName: "",
    username: "",
    verify: false
};

function userReducer (state = initialUserState, action) {

    console.log(action);

    switch (action.type) {
        case USER_FIRSTNAME:
            return {...state, firstName: action.text}
        case USER_LOGGED_IN:
            return {...state, loggedIn: action.action, firstName: action.text, verify: action.action}
        case VERIFY_DATA:
            return {...state, verify: action.action}
        default:
            return state;
    }
}

export default userReducer;