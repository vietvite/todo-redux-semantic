import React, { Component } from 'react'
import AddTodo from '../../containers/AddTodo/AddTodo'
import styles from './header.module.scss'

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>Todos</h1>
        <AddTodo />
      </div>
    )
  }
}
