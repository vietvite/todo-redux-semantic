import React from 'react'
import FilterLink from '../containers/FilterLink'
import { visibilityFilters } from '../redux/actions'

const FilterBar = () => {
  return (
    <div>
      <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
  )
}

export default FilterBar
