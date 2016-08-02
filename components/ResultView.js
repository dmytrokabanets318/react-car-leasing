import React, { Component } from 'react'
import ResultItem from './ResultItem'

class ResultView extends Component {
  render() {
    const result = this.props.results
    // console.log(result)
    if (result.show == true) {
      return (
          <ul className="unordered">
            <ResultItem key={result.id} success={result.success} result={result} actions={this.props.actions}/>
          </ul>
      )
    } else {
      return <div></div>
    }

  }

  }

export default ResultView
