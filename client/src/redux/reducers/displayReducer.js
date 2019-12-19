import { HEADER_MOVE } from "./types";

function displayReducer (state = [], action) {
    switch (action.type) {
        case HEADER_MOVE:
            return {...state, headerOpen: false}
        default:
            return state;
    }
}

export default displayReducer;