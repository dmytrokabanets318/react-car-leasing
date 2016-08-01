import React, { Component } from 'react'
import actions from '../redux/actions'

class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const text = this.state.inputText
    this.props.addTodo(text)
    this.props.fetchPosts('jonru')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Car Price (Rp.)"
            value={this.state.inputPrice}
            onChange={this.handleChange.bind(this)}
          />
          <input
            type="text"
            placeholder="Down Payment Total (Rp.)"
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default TodoInput
