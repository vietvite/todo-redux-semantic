import React from 'react'
import ConnectedFilterButton from '../containers/ConnectedFilterButton'
import { visibilityFilters } from '../redux/actions'
import { connect } from 'react-redux'
import { countRemainTodo } from '../commons'

const remainText = number =>
  number > 1 ? `${number} items left` : `${number} item left`

const FilterBar = ({ remainTodo }) => {
  return (
    <div>
      <span>{remainText(remainTodo)}</span>
      <ConnectedFilterButton filter={visibilityFilters.SHOW_ALL}>All</ConnectedFilterButton>
      <ConnectedFilterButton filter={visibilityFilters.SHOW_ACTIVE}>Active</ConnectedFilterButton>
      <ConnectedFilterButton filter={visibilityFilters.SHOW_COMPLETED}>Completed</ConnectedFilterButton>
    </div>
  )
}

const mapStateToProps = state => ({
  remainTodo: countRemainTodo(state.todos)
})

export default connect(mapStateToProps)(FilterBar)
