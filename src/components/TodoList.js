import React from 'react'
import Todo from './Todo'
import Proptype from 'prop-types'
import { List } from 'semantic-ui-react'

function TodoList ({ todos, toggleTodo }) {
  return (
    <List>
      { todos.map(todo => (
        <Todo key={todo.id} {...todo} onclick={() => toggleTodo(todo.id)}></Todo>
      ))}
    </List>
  )
}
TodoList.propTypes = {
  todos: Proptype.array.isRequired,
  toggleTodo: Proptype.func.isRequired
}
export default TodoList
