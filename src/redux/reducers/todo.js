import { ADD_TODO, TOGGLE_TODO } from '../constants'

const initTodos = [
  {
    id: 0,
    text: 'You did it',
    completed: true
  }
]

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
      console.log('Enter toggle')
      console.log(state)

      return state.map((todo) => (todo.id === action.id ? {
        ...todo,
        completed: !todo.completed
      } : todo))
    default:
      return state
  }
}
