import React from 'react'
import PropTypes from 'prop-types'

function Link (props) {
  // TODO: Where children from???
  const { active, onclick, children } = props
  // console.log({ props })

  return active
    ? (<span>{'asd' + children}</span>)
    : (<button
      onClick={e => {
        e.preventDefault()
        onclick()
      }}
    >{children}</button>)
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
