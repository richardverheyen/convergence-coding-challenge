import React, { Component } from 'react';
import './style.scss';

class InputDob extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valueDay: "",
      valueMonth: "",
      valueYear: "",
    }

    this.combineValues = this.combineValues.bind(this);
  }

  combineValues() {
    const {
      valueDay,
      valueMonth,
      valueYear
    } = this.state;

    const dateObject = new Date(`${valueYear}/${valueMonth}/${valueDay}`);

    function isValidDate(date) {
      return isNaN(Date.parse(date)) === false;
    }

    if (isValidDate(dateObject)) {
      console.log({dateObject})
      this.props.handleChange(dateObject.toString());
    }
  }

  render() {
    return (
      <fieldset className="dob">
        <label htmlFor="dob-year">Date of birth</label>
        <input
          required
          type="string"
          placeholder="YYYY"
          name="dob-year"
          pattern="^(19|20)\d{2}$"
          id="dob-year"
          autocomplete="off"
          value={this.state.valueYear}
          onChange={e => {
            this.setState(
              {
                valueYear: e.target.value
              },
              this.combineValues
            );
          }}/>

        <input
          required
          type="string"
          placeholder="DD"
          name="dob-day"
          pattern="^(0[1-9]|[12]\d|3[01])$"
          id="dob-day"
          autocomplete="off"
          value={this.state.valueDay}
          onChange={e => {
            this.setState(
              {
                valueDay: e.target.value
              },
              this.combineValues
            );
          }}/>

        <input
          required
          type="string"
          placeholder="MM"
          pattern="^(0[1-9]|1[012])$"
          name="dob-month"
          id="dob-month"
          autocomplete="off"
          value={this.state.valueMonth}
          onChange={e => {
            this.setState(
              {
                valueMonth: e.target.value
              },
              this.combineValues
            );
          }}/>
      </fieldset>
    )
  }
}

export default InputDob;
