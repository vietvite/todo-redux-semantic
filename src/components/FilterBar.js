import React from 'react'
import ConnectedFilterButton from '../containers/ConnectedFilterButton'
import { visibilityFilters } from '../redux/actions'
import { Button } from 'semantic-ui-react'

const FilterBar = () => {
  return (
    <Button.Group>
      <ConnectedFilterButton filter={visibilityFilters.SHOW_ALL}>All</ConnectedFilterButton>
      <Button.Or />
      <ConnectedFilterButton filter={visibilityFilters.SHOW_ACTIVE}>Active</ConnectedFilterButton>
      <Button.Or />
      <ConnectedFilterButton filter={visibilityFilters.SHOW_COMPLETED}>Completed</ConnectedFilterButton>
    </Button.Group>
  )
}

export default FilterBar
