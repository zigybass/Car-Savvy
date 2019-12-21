import { 
  SUBMIT_USER, 
  USER_TEXT, 
  PASS_TEXT, 
  FIRST_TEXT, 
  PASS_CONFIRM,
  CLEAR_TEXT
   } from "./types";

const initialInputState = {
  username: "",
  password: "",
  passConfirm: "",
  firstName: ""
}

function inputReducer(state = initialInputState, action) {
  console.log(action)
    switch (action.type) {
      case USER_TEXT:
        return {...state, username: action.text}
      case PASS_TEXT:
        return {...state, password: action.text}
      case SUBMIT_USER:
        return state.user = action.user
      case FIRST_TEXT:
          return {...state, firstName: action.text}
      case PASS_CONFIRM:
        return {...state, passConfirm: action.text}
      case CLEAR_TEXT:
        return {
          ...state, 
          username: "",
          password: "",
          passConfirm: "",
          firstName: ""
        }
      default:
        return state
    }
  }

  export default inputReducer;    