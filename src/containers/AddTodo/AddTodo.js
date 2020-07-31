import React from 'react'
import { addTodo } from '../../redux/actions'
import { connect } from 'react-redux'
import { form } from './AddTodo.module.scss'

class AddTodo extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.textChangeHandler = this.textChangeHandler.bind(this)
  }

  textChangeHandler({ target: { value } }) {
    this.setState({
      text: value
    })
  }

  submitHandler(e) {
    e.preventDefault()
    const JUST_TEXT_REGEX = /^[a-zA-Z ]*$/

    const text = this.state.text.trim()
    // if (!JUST_TEXT_REGEX.test(text)) {
    //   return
    // }
    text && this.props.addTodo(text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className={form}>
        <input type="text" placeholder="What needs to be done?" value={this.state.text} onChange={this.textChangeHandler} />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: (text) => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(AddTodo)
