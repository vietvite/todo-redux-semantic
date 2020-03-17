import { combineReducers } from 'redux'
import todos from './reducers/todo'
import visibilityFilter from './reducers/visibilityFilter'

export default combineReducers({
  todos, // TODO: This is not a combine that combine 2 func, it a store schema-like
  visibilityFilter
})
