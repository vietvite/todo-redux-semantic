import rootReducers from './redux'
import { createStore } from 'redux'
import { loadState, saveState } from './services/localStorage'

export default () => {
  const persistedState = loadState()
  const store = createStore(rootReducers, persistedState)

  store.subscribe(() => {
    saveState({ todos: store.getState().todos })
  })
  return store
}
