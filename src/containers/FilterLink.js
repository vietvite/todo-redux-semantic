import { connect } from 'react-redux'
import Link from '../components/Link'
import { setVisibility } from '../redux/actions'

function mapStateToProp (state, ownState) {
  return {
    active: state.visibilityFilter === ownState.visibilityFilter
  }
}
function mapDisPatchToProp (dispatch, { filter }) {
  return {
    onclick: () => dispatch(setVisibility(filter))
  }
}

export default connect(mapStateToProp, mapDisPatchToProp)(Link)
