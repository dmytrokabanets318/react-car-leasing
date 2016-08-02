import fetch from 'isomorphic-fetch'

let actions = {
  calculateNow: function(price, dp, year) {
    return {
      type: 'CALCULATE_NOW',
      price: price,
      dp: dp,
      year: year
    }
  }

}

export default actions
