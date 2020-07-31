import React from 'react'
import AddTodo from '../../containers/AddTodo/AddTodo'
import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Todos</h1>
      <AddTodo />
    </div>
  )
}

export default Header