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

function monthlyResult(price, dp, year) {
  return 'wak kaji sunari'
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


    default:
      return state;
  }

}

export default reducer
