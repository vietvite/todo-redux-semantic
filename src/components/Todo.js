import React from 'react'
import Proptype from 'prop-types'
import { Checkbox, List } from 'semantic-ui-react'

function Todo ({ text, completed, onclick }) {
  return (
    <List.Item>
      <Checkbox checked={completed} onDoubleClick={onclick} label={(
        <label style={{ textDecoration: !completed ? 'none' : 'line-through' }}>
          {text}</label>
      )}/>
    </List.Item>
  )
}
Todo.propTypes = {
  text: Proptype.string.isRequired,
  completed: Proptype.bool.isRequired,
  onclick: Proptype.func.isRequired
}
export default Todo
