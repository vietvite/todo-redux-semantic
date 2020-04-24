import { combineReducers } from 'redux'
import todos from './reducers/todo'
import visibilityFilter from './reducers/visibilityFilter'
import searchKeyword from './reducers/search'

export default combineReducers({
  todos,
  visibilityFilter,
  searchKeyword
})
