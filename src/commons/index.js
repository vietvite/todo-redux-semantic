export const isDuplidateTodo = (state = [], text) => {
  let ok = true
  state.forEach(todo => {
    if (todo.text.toLowerCase() === text.toLowerCase())
      ok = false
  })
  return ok
}

export const countRemainTodo = (state = []) =>
  state.reduce((count, todo) =>
    count + (todo.completed ? 0 : 1),
    0)