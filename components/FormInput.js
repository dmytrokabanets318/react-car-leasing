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


  handlePriceChange(event, maskedvalue, floatvalue) {
    // console.log(floatvalue);
    const price = floatvalue
    this.setState({
      inputPrice: price
    })
  }

  handleDpChange(event, maskedvalue, floatvalue) {
    const dp = floatvalue
    this.setState({
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
    const value_price = this.state.inputPrice
    const value_dp = this.state.inputDownPayment
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

          <div>
            <div className="miniLabel">Car Price</div>
            <CurrencyInput 
              type="text"
              placeholder="Set Car Price (Rp.)"
              ref="priceinput" 
              precision="0"
              className="inputText"
              onChangeEvent={this.handlePriceChange.bind(this)}
              value={this.state.inputPrice}
            />
          </div>

          <div>
            <div className="miniLabel">Down Payment</div>
            <CurrencyInput
              type="text"
              placeholder="Down Payment (Rp.)"
              ref="dpinput" 
              precision="0"
              className="inputText"
              onChangeEvent={this.handleDpChange.bind(this)}
              value={this.state.inputDownPayment}
            />
          </div>

          <div>
            <Select
              name="form-field-name"
              value={this.state.inputSelectYear}
              className="inputSelect"
              options={options}
              onChange={this.selectChange.bind(this)}
            />
          </div>

          <div className="divButton">
            <input className="mainButton" type="submit" value="Calculate Now"/>
          </div>

        </form>
      </div>
    )
  }
}

export default FormInput
