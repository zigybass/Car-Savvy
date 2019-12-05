import { createStore } from 'redux'; 

// Reducer function. 1st argument is state, 2nd argument is what changes that state. 
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    case 'ADD_THISDO':
      return state.concat([action.text])
    default:
      return state
  }
}

// Store
const store = createStore(todos, ['Use Redux'])

// Dispatching Actions to Store
store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
});

store.dispatch({
  type: 'ADD_THISDO',
  text: 'Hello from store'
});

console.log(store.getState())

export default store;