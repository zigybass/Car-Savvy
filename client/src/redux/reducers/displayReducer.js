import { HEADER_MOVE } from "./types";

const initialState = {
    headerOpen: false
}

function displayReducer (state = initialState, action) {
    switch (action.type) {
        case HEADER_MOVE:
            return JSON.parse(JSON.stringify(Object.assign(state, {headerOpen: true})))
        default:
            return state;
    }
}

export default displayReducer;