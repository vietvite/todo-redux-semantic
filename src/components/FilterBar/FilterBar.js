import React from 'react'
import ConnectedFilterButton from '../../containers/ConnectedFilterButton'
import { visibilityFilters, deleteAllCompletedTodo } from '../../redux/actions'
import { connect } from 'react-redux'
import { countRemainTodo } from '../../commons'
import styles from './FilterBar.module.scss'

const remainText = number =>
  number > 1 ? `${number} items left` : `${number} item left`

const FilterBar = ({ remainTodo, clearAllCompleted }) => {
  return (
    <div className={styles.filterBar}>
      <span>{remainText(remainTodo)}</span>
      <div>
        <ConnectedFilterButton filter={visibilityFilters.SHOW_ALL}>All</ConnectedFilterButton>
        <ConnectedFilterButton filter={visibilityFilters.SHOW_ACTIVE}>Active</ConnectedFilterButton>
        <ConnectedFilterButton filter={visibilityFilters.SHOW_COMPLETED}>Completed</ConnectedFilterButton>
      </div>
      <button onClick={clearAllCompleted}>Clear all completed</button>
    </div>
  )
}

const mapStateToProps = state => ({
  remainTodo: countRemainTodo(state.todos)
})

const mapDispatchToProps = dispatch => ({
  clearAllCompleted: () => dispatch(deleteAllCompletedTodo())
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)
