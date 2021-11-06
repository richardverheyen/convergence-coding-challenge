import React, { Component } from 'react';

class InputDob extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valueDay: "",
      valueMonth: "",
      valueYear: ""
    }

    this.combineValues = this.combineValues.bind(this);
  }

  combineValues() {
    const {
      valueDay,
      valueMonth,
      valueYear
    } = this.state;

    let string = valueDay;
    if (valueMonth) {
      string = string + "/" + valueMonth;
    }
    if (valueYear) {
      string = string + "/" + valueYear;
    }

    this.props.handleChange(string);
  }

  render() {
    return (
      <fieldset>
        <label htmlFor="dob-year">Year</label>
        <input
          required
          type="number"
          placeholder="YYYY"
          name="dob-year"
          max="2021"
          id="dob-year"
          value={this.state.valueYear}
          onChange={e => {
            this.setState({valueYear: e.target.value});
            this.combineValues();
          }}/>

        <label htmlFor="dob-day">Day</label>
        <input
          required
          type="number"
          placeholder="DD"
          name="dob-day"
          max="31"
          id="dob-day"
          value={this.state.valueDay}
          onChange={e => {
            this.setState({valueDay: e.target.value});
            this.combineValues();
          }}/>

        <label htmlFor="dob-month">Month</label>
        <input
          required
          type="number"
          placeholder="MM"
          max="12"
          name="dob-month"
          id="dob-month"
          value={this.state.valueMonth}
          onChange={e => {
            this.setState({valueMonth: e.target.value});
            this.combineValues();
          }}/>
      </fieldset>
    )
  }
}

export default InputDob;
