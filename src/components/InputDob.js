import React, { Component } from 'react';

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

    // Allows bad dates to make it back to the parent element
    this.props.handleChange(dateObject.toString());
  }

  render() {
    return (
      <fieldset>
        <label htmlFor="dob-year">Year</label>
        <input
          required
          type="string"
          placeholder="YYYY"
          name="dob-year"
          pattern="^(19|20)\d{2}$"
          id="dob-year"
          value={this.state.valueYear}
          onChange={e => {
            this.setState(
              {
                valueYear: e.target.value
              },
              this.combineValues
            );
          }}/>

        <label htmlFor="dob-day">Day</label>
        <input
          required
          type="string"
          placeholder="DD"
          name="dob-day"
          pattern="^(0[1-9]|[12]\d|3[01])$"
          id="dob-day"
          value={this.state.valueDay}
          onChange={e => {
            this.setState(
              {
                valueDay: e.target.value
              },
              this.combineValues
            );
          }}/>

        <label htmlFor="dob-month">Month</label>
        <input
          required
          type="string"
          placeholder="MM"
          pattern="^(0[1-9]|1[012])$"
          name="dob-month"
          id="dob-month"
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
