import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

function Link (props) {
  // TODO: Where children from???
  const { active, onclick, children } = props

  return active
    ? (<Button positive>{children}</Button>)
    : (<Button
      onClick={e => {
        e.preventDefault()
        onclick()
      }}
    >{children}</Button>)
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
