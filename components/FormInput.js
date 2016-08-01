import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../redux/actions'
import Select from 'react-select'

class FormInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputPrice: 10000000,
      inputDownPayment: 50000000,
      inputSelectYear: 24
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
    const price = this.state.inputPrice
    const dp = this.state.inputDownPayment
    const year = 36

    // this.props.addTodo(text)
    this.props.calculateNow(price, dp, year)
  }

  render() {
    const options = [
      { value: '12', label: '1 Year' },
      { value: '24', label: '2 Year' },
      { value: '36', label: '3 Year' },
      { value: '48', label: '4 Year' },
      { value: '60', label: '5 Year' },
      { value: '72', label: '6 Year' }
    ];
    return (
      <div>
        <form className="mainForm" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Set Car Price (Rp.)"
            ref="price"
            defaultValue={this.state.inputPrice}
            className="inputText"
          />
          <input
            type="text"
            placeholder="Down Payment (Rp.)"
            ref="dp"
            defaultValue={this.state.inputDownPayment}
            className="inputText"

          />
          <Select
            name="form-field-name"
            value={this.state.inputSelectYear}
            className="inputSelect"
            options={options}
            onChange={this.selectChange.bind(this)}
          />
          <div className="divButton">
            <input className="mainButton" type="submit" value="Calculate Now"/>
          </div>
        </form>
      </div>
    )
  }
}

export default FormInput
