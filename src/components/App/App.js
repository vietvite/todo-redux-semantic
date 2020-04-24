import React from 'react'
import Header from '../Header/Header'
import VisibleTodoList from '../../containers/VisibleTodoList'
import FilterBar from '../FilterBar'
import { app } from './App.module.scss'

class App extends React.Component {
  render() {
    return (
      <div className={app}>
        <Header />
        <VisibleTodoList />
        <FilterBar />
      </div>
    )
  }
}

export default App
