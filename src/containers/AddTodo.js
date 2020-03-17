/* eslint-disable no-extra-boolean-cast */
import React from 'react'
import { addTodo } from '../redux/actions'
import { connect } from 'react-redux'

// Refactor AddTodo to seperate component file
const AddTodo = ({ dispatch }) => {
  let input
  return (
    <form onSubmit={e => {
      e.preventDefault()
      const text = input.value.trim()
      !!text && dispatch(addTodo(text))
      input.value = ''
    }}>
      <input type="text" ref={node => (input = node)} />
    </form>
  )
}
export default connect()(AddTodo)
