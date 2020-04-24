import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker'

import Root from './components/Root'
import configurateStore from './configureStore'

console.time('render')

const store = configurateStore()
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)

console.timeEnd('render')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
