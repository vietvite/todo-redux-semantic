import {
  ADD_TODO, TOGGLE_TODO, SET_VISIBILITY, SHOW_ACTIVE, SHOW_COMPLETED, SHOW_ALL
} from '../constants'

let nextTodoId = 0
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})

export const setVisibility = (filter) => ({
  type: SET_VISIBILITY,
  filter
})

export const visibilityFilters = {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
}
