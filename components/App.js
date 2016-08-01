import React, { Component } from 'react'
import FormInput from './FormInput'
import ResultView from './ResultView'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

class App extends Component {
  render() {
    return <div>
      <h1 className="thin">Provide Information Here</h1>
      <FormInput calculateNow={this.props.actions.calculateNow}/>
      <ResultView actions={this.props.actions} results={this.props.results} />
    </div>
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
