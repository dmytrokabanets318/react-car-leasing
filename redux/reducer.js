function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

function getResultId(state) {
  return state.results.reduce((maxId, result) => {
    return Math.max(result.id, maxId)
  }, -1) + 1
}

function bambang() {
  return Math.ceil(Math.random()*100)
}

let reducer = function(state, action) {

  switch (action.type) {

    case 'CALCULATE_NOW':
      return Object.assign({}, state, {
        results:[{
          price: action.price,
          dp: action.dp,
          year: action.year,
          id: getResultId(state)
        }]
      })

    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [{
          text: action.text,
          completed: true,
          id: bambang()
        }, ...state.todos]
      })

    case 'COMPLETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return todo.id === action.id ?
            Object.assign({}, todo, {completed: !todo.completed}) : todo
        })
      })

    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.id
        })
      })

    default:
      return state;
  }

}

export default reducer
