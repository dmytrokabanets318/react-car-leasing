import React, { Component } from 'react'

class ResultItem extends Component {

  render() {
    return (
      <li>
        <div>{this.props.result.monthly} - {this.props.result.id} - {(this.props.result.year).toString()}</div>
      </li>
    )
  }
}


export default ResultItem
