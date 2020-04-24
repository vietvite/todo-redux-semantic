import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
import FilterBar from './FilterBar'
import { Container, Header, Segment } from 'semantic-ui-react'

const HeaderTodo = () => (
  <Header as='h1'>TODO</Header>
)

function App() {
  return (
    <Container>
      <Segment>
        <HeaderTodo />
        <AddTodo />
        <VisibleTodoList />
        <FilterBar />
      </Segment>
    </Container>
  )
}

export default App
