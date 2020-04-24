import React from 'react'
import Todo from '../Todo/Todo'
import Proptype from 'prop-types'
import { listStyle } from './TodoList.module.scss'

function TodoList({ todos, toggleTodo, editTodo, deleteTodo }) {
  return (
    <ul className={listStyle}>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          editTodo={editTodo}
          toggleTodo={() => toggleTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        ></Todo>
      ))}
    </ul>
  )
}
TodoList.propTypes = {
  todos: Proptype.array.isRequired,
  toggleTodo: Proptype.func.isRequired
}
export default TodoList
