import React from 'react'

import styles from './Todo.module.scss'

class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      isEdit: false,
      text: ''
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.textChangeHandler = this.textChangeHandler.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
  }

  componentDidMount() {
    this.setState({
      text: this.props.text
    })
  }

  toggleEdit() {
    this.setState({
      isEdit: !this.state.isEdit,
    })
  }

  textChangeHandler({ target: { value } }) {
    this.setState({
      text: value
    })
  }

  submitEdit(e) {
    e.preventDefault()
    // Validate
    const JUST_TEXT_REGEX = /^[a-zA-Z ]*$/

    const text = this.state.text.trim()
    if (!JUST_TEXT_REGEX.test(text)) {
      return
    }

    this.props.editTodo(this.state.text)
    this.setState({
      isEdit: false
    })
  }

  render() {
    const { completed, toggleTodo, deleteTodo } = this.props
    return (
      <li className={styles.todo}>
        <input type="checkbox" checked={completed} onClick={toggleTodo} />
        {this.state.isEdit ? (
          <form onSubmit={this.submitEdit}>
            <input
              type='text'
              value={this.state.text}
              onChange={this.textChangeHandler}
            />
          </form>
        ) : (
            <label
              onDoubleClick={this.toggleEdit}
              onClick={toggleTodo}
              style={{ textDecoration: !completed ? 'none' : 'line-through' }}>
              {this.state.text}
            </label>
          )}
        <span onClick={deleteTodo}>X</span>
      </li>
    )
  }
}

export default Todo
