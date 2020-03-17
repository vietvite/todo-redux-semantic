import { ADD_TODO, TOGGLE_TODO } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          completed: false,
          text: action.text
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo) => (todo.id === action.id ? {
        ...todo,
        completed: !todo.completed
      } : todo))
    default:
      return state
  }
}
