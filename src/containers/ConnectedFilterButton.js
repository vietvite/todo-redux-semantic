import { connect } from 'react-redux'
import FilterButton from '../components/FilterButton'
import { setVisibility } from '../redux/actions'

function mapStateToProp (state, ownState) {
  return {
    active: state.visibilityFilter === ownState.filter
  }
}
function mapDisPatchToProp (dispatch, { filter }) {
  return {
    onclick: () => dispatch(setVisibility(filter))
  }
}

export default connect(mapStateToProp, mapDisPatchToProp)(FilterButton)
