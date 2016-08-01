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
  return ['monthly', 'success', 'message']
}

let reducer = function(state, action) {

  switch (action.type) {

    case 'CALCULATE_NOW':
      return Object.assign({}, state, {
        results:[{
          price: action.price,
          dp: action.dp,
          year: action.year,
          monthly: monthlyResult(action.price, action.dp, action.year)[0],
          success: monthlyResult(action.price, action.dp, action.year)[1],
          message: monthlyResult(action.price, action.dp, action.year)[2],
          id: getResultId(state)
        }]
      })


    default:
      return state;
  }

}

export default reducer
