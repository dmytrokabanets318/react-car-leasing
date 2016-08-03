// function getResultId(state) {
//   return state.results.reduce((maxId, result) => {
//     return Math.max(result.id, maxId)
//   }, -1) + 1
// }

function monthlyResult(price, dp, year) {
  // monthly formula
  //  PL x ((interest_rate x year) / 100)
  /// (PL) primary loan formula = {price - dp}
  ///
  let result, success, message
  const interest_rate = 5 // 8% interest rate
  const set_price = parseInt(price)
  const set_dp = parseInt(dp)
  const set_year = year/12
  const pl = set_price - set_dp
  const ir_total = (interest_rate*set_year)/100
  const monthly_result = pl*ir_total
  const ir_result = pl+monthly_result
  result = ir_result/year
  if (parseInt(set_dp) >= parseInt(set_price)) {
    return [0, false, 'Down Payment cannot higher than Main Price', interest_rate, pl]
  } else {
    return [Math.round(result), true, 'Calculated', interest_rate, pl]
  }

}

let reducer = function(state, action) {

  switch (action.type) {

    case 'CALCULATE_NOW':

      return {
        results:
          {
            price: action.price,
            dp: action.dp,
            year: action.year,
            monthly: monthlyResult(action.price, action.dp, action.year)[0],
            interest_rate: monthlyResult(action.price, action.dp, action.year)[3],
            primary_loan: monthlyResult(action.price, action.dp, action.year)[4],
            success: monthlyResult(action.price, action.dp, action.year)[1],
            message: monthlyResult(action.price, action.dp, action.year)[2],
            show: true,
            id: 1
          }
          
      }
      // return Object.assign({}, state, {
      //   results:[{
      //     price: action.price,
      //     dp: action.dp,
      //     year: action.year,
      //     monthly: monthlyResult(action.price, action.dp, action.year)[0],
      //     interest_rate: monthlyResult(action.price, action.dp, action.year)[3],
      //     primary_loan: monthlyResult(action.price, action.dp, action.year)[4],
      //     success: monthlyResult(action.price, action.dp, action.year)[1],
      //     message: monthlyResult(action.price, action.dp, action.year)[2],
      //     id: getResultId(state)
      //   }]
      // })


    default:
      return state;
  }

}

export default reducer
