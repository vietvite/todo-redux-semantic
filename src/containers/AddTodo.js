/* eslint-disable no-extra-boolean-cast */
import React from 'react'
import { addTodo } from '../redux/actions'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'

// Refactor AddTodo to seperate component file
const AddTodo = ({ dispatch }) => {
  let input
  return (
    <Form onSubmit={e => {
      e.preventDefault()
      const text = input.value.trim()
      !!text && dispatch(addTodo(text))
      input.value = ''
    }}>
      <Form.Group>
        <Form.Field>
          <input type="text" placeholder="Add todo" ref={node => (input = node)} />
        </Form.Field>
        <Button type="submit" content='Add' />
      </Form.Group>
    </Form>
  )
}
export default connect()(AddTodo)
