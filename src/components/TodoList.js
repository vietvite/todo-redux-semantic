import React from 'react'
import Todo from './Todo'
import Proptype from 'prop-types'

function TodoList ({ todos, toggleTodo }) {
  return (
    <ul>
      { todos.map(todo => (
        // TODO: check whether `onclick={toggleTodo(id)}` is work, if it works so why it pass a callback
        <Todo key={todo.id} {...todo} onclick={() => toggleTodo(todo.id)}></Todo>
      ))}
    </ul>
  )
}
TodoList.propTypes = {
  todos: Proptype.array.isRequired,
  toggleTodo: Proptype.func.isRequired
}
export default TodoList
