let nextTodoId = 0
export const addEvent = payload => ({
  type: 'ADD_EVENT',
  id: nextTodoId++,
  payload
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
export const editEvent = payload =>({
    type: 'EDIT_EVENT',
    payload
  })
export const sortMaxToMin = () => ({
    type: 'SORT_EVENTS_MAX_TO_MIN',
  })
export const sortMinToMax = () => ({
    type: 'SORT_EVENTS_MIN_TO_MAX',
})
export const addToFavorites = payload => ({
  type: 'ADD_TO_FAVORITES',
  payload
})

export const toggleFavorites = payload => ({
  type: 'TOGGLE_FAVORITES',
  payload
})