import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { visibilityFilters, toggleTodo } from '../redux/actions'

function visibleTodoList (todos, filter) {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    default:
      // TODO: is this throw error necessary? && For what case?
      throw new Error(`Unknow filter ${filter}`)
  }
}

const mapStateToProp = state => {
  const todos = visibleTodoList(state.todos, state.visibilityFilter)
  return {
    todos: matchSearch(todos, state.searchKeyword)
  }
}
const mapDisPatchToProp = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

function matchSearch (todos, keyword) {
  return todos.filter(
    sentence => sentence.text.toLowerCase().match(keyword.toLowerCase())
  )
}

export default connect(mapStateToProp, mapDisPatchToProp)(TodoList)
