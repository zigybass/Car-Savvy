import { SUBMIT_USER } from "./types";

function inputReducer(state = [], action) {
    switch (action.type) {
      case 'USERNAME_TEXT':
        return state.concat([action.text])
      case SUBMIT_USER:
        return state.concat([action.text])
      default:
        return state
    }
  }

  export default inputReducer;