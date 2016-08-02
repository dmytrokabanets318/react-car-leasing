import React, { Component } from 'react'
import ResultItem from './ResultItem'

class ResultView extends Component {
  render() {
    return (
      <ul className="unordered">
        {
          this.props.results.map((result) => {

                return <ResultItem key={result.id} success={result.success} result={result} actions={this.props.actions}/>

          })
        }
      </ul>
    )
  }
}

export default ResultView
