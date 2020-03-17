import React from 'react'
import FilterLink from '../containers/FilterLink'
import { visibilityFilters } from '../redux/actions'
import { Button } from 'semantic-ui-react'

const FilterBar = () => {
  return (
    <Button.Group>
      <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
      <Button.Or />
      <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <Button.Or />
      <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </Button.Group>
  )
}

export default FilterBar
