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
      // TODO: is this throw error necessary? && For what?
      throw new Error(`Unknow filter ${filter}`)
  }
}

const mapStateToProp = state => ({
  todos: visibleTodoList(state.todos, state.visibilityFilter)
})
const mapDisPatchToProp = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
export default connect(mapStateToProp, mapDisPatchToProp)(TodoList)
