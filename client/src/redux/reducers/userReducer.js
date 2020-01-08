import { USER_FIRSTNAME, USER_LOGGED_IN } from "./types";

const initialUserState = {
    loggedIn: false,
    firstName: "",
    username: ""
};

function userReducer (state = initialUserState, action) {

    switch (action.type) {
        case USER_FIRSTNAME:
            return {...state, firstName: action.text}
        case USER_LOGGED_IN:
            return {...state, loggedIn: action.action}
        default:
            return state;
    }
}

export default userReducer;