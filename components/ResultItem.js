import React, { Component } from 'react'

class ResultItem extends Component {

  render() {
    return (
      <li className="list-view">
        <div>Rp. {this.props.result.monthly} perMonths x {(this.props.result.year).toString()}</div>
      </li>
    )
  }
}


export default ResultItem
