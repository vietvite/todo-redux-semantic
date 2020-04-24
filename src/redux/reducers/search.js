import { SEARCH_TODO } from '../constants'

export default (state = '', action) => {
  if (action.type === SEARCH_TODO) {
    return action.keyword
  }
  /**
   * Why this log fire three times
   * (combineReducers have three reducer obj now)
   * How could we reduce this
   */
  // console.log({ stateFromSearch: state })
  return state
}
