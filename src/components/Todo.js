import React from 'react'
import Proptype from 'prop-types'

function Todo ({ text, completed, onclick }) {
  return (
    <li onClick={onclick}
    // TODO: can we write style={ !completed && () => ({textDecoration: 'none'}) } =))
      style={{ textDecoration: !completed ? 'none' : 'line-through' }}>{text}</li>
  )
}
Todo.propTypes = {
  text: Proptype.string.isRequired,
  completed: Proptype.bool.isRequired,
  onclick: Proptype.func.isRequired
}
export default Todo
