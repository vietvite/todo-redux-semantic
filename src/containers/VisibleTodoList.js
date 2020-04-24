import { connect } from 'react-redux'
import TodoList from '../components/TodoList/TodoList'
import { visibilityFilters, toggleTodo, editTodo, deleteTodo } from '../redux/actions'

function visibleTodoList(todos, filter) {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    default:
      throw new Error(`Unknow filter ${filter}`)
  }
}

const mapStateToProp = state => ({
  todos: visibleTodoList(state.todos, state.visibilityFilter)
})

const mapDisPatchToProp = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  editTodo: (id, text) => dispatch(editTodo(id, text)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProp, mapDisPatchToProp)(TodoList)
