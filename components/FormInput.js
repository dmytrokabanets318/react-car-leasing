import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../redux/actions'
import Select from 'react-select'

class FormInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputPrice: '',
      inputDownPayment: '',
      inputSelectYear: ''
    }
  }

  handleChange(event) {
    const price = ReactDOM.findDOMNode(this.refs.price).value.trim();
    const dp = ReactDOM.findDOMNode(this.refs.dp).value.trim();
    console.log(price);
    console.log(dp);
    this.setState({
      inputPrice: price,
      inputDownPayment: dp
    })
  }

  selectChange(val) {
    console.log("Selected: " + val.value);
    this.setState({
      inputSelectYear: val.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const text = this.state.inputText
    this.props.addTodo(text)
  }

  render() {
    const options = [
      { value: '12', label: '1 Year' },
      { value: '24', label: '2 Year' },
      { value: '36', label: '3 Year' },
      { value: '48', label: '4 Year' }
    ];
    return (
      <div>
        <form className="mainForm" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Set Car Price (Rp.)"
            ref="price"
            value={this.state.inputPrice}
            className="inputText"
            onChange={this.handleChange.bind(this)}
          />
          <input
            type="text"
            placeholder="Down Payment (Rp.)"
            ref="dp"
            value={this.state.inputText}
            className="inputText"
            onChange={this.handleChange.bind(this)}
          />
          <Select
            name="form-field-name"
            value="24"
            className="inputSelect"
            options={options}
            onChange={this.selectChange.bind(this)}
          />
          <div className="divButton">
            <input className="mainButton" type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}

export default FormInput
