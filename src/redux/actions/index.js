import { generate as genId } from 'shortid'

import {
  ADD_TODO, TOGGLE_TODO, SET_VISIBILITY, SHOW_ACTIVE, SHOW_COMPLETED, SHOW_ALL, SEARCH_TODO
} from '../constants'

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: genId(),
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

export const searchTodo = (keyword) => ({
  type: SEARCH_TODO,
  keyword
})
