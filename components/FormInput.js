import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../redux/actions'
import CurrencyInput from 'react-currency-input'
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
    const price = this.refs.price.value
    const dp = this.refs.price.value
    this.setState({
      inputPrice: price,
      inputDownPayment: dp
    })
  }

  selectChange(val) {
    this.setState({
      inputSelectYear: val.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const input_price = this.refs.price
    const value_price = input_price.value
    const input_dp = this.refs.dp
    const value_dp = input_dp.value
    const value_year = this.state.inputSelectYear

    // this.props.addTodo(text)
    this.props.calculateNow(value_price, value_dp, value_year)
  }

  render() {

    const options = [
      { value: '12', label: '1 Year Loan' },
      { value: '24', label: '2 Year Loan' },
      { value: '36', label: '3 Year Loan' },
      { value: '48', label: '4 Year Loan' },
      { value: '60', label: '5 Year Loan' },
      { value: '72', label: '6 Year Loan' }
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
