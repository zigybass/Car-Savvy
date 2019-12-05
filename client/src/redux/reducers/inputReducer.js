import { SUBMIT_USER, USER_TEXT, PASS_TEXT } from "./types";

function inputReducer(state = [], action) {
    switch (action.type) {
      case USER_TEXT:
        return state.concat([action.text])
      case PASS_TEXT:
        return state.concat([action.text])
      case SUBMIT_USER:
        return state.concat([action.text])
      default:
        return state
    }
  }

  export default inputReducer;