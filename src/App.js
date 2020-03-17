import React from 'react'
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodo from './containers/AddTodo'
import FilterBar from './components/FilterBar'

function App () {
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
      <FilterBar />
    </>
  )
}

export default App
