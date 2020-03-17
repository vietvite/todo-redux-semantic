import { SET_VISIBILITY } from '../constants'
import { visibilityFilters } from '../actions'

export default (state = visibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY:
      return action.filter
    default:
      // TODO: why return state instead of action? Hmm maybe I'm fooled now.
      // Answer: You know what... This is a func that set a state for what visible todos
      return state
  }
}
