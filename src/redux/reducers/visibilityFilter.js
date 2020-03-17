import { SET_VISIBILITY } from '../constants'
import { visibilityFilters } from '../actions'

export default (state = visibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY:
      return action.filter
    default:
      return state
  }
}
