import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, DELETE_ALL_COMPLETED_TODO } from '../constants'
import { isDuplidateTodo } from '../../commons'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return isDuplidateTodo(state, action.text)
        ? ([
          {
            id: action.id,
            completed: false,
            text: action.text
          },
          ...state
        ])
        : state
    case TOGGLE_TODO:
      return state.map((todo) => (todo.id === action.id ? {
        ...todo,
        completed: !todo.completed
      } : todo))
    case EDIT_TODO:
      return state.map((todo) => (todo.id === action.id ? {
        ...todo,
        text: action.text
      } : todo))
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case DELETE_ALL_COMPLETED_TODO:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
