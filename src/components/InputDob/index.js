import React, { useState, useEffect } from 'react';
import './style.scss';

function InputDob(props) {

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const dateObject = new Date(`${year}/${month}/${day}`);

    function isValidDate(date) {
      return isNaN(Date.parse(date)) === false;
    }

    if (isValidDate(dateObject)) {
      // console.log({dateObject})
      props.handleChange(dateObject.toString());
    }
  })

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
        ref={props.inputYearRef}
        autoComplete="off"
        value={year}
        onChange={e => setYear(e.target.value)}/>

      <input
        required
        type="string"
        placeholder="DD"
        name="dob-day"
        pattern="^(0[1-9]|[12]\d|3[01])$"
        id="dob-day"
        ref={props.inputDayRef}
        autoComplete="off"
        value={day}
        onChange={e => setDay(e.target.value)}/>

      <input
        required
        type="string"
        placeholder="MM"
        pattern="^(0[1-9]|1[012])$"
        name="dob-month"
        id="dob-month"
        autoComplete="off"
        ref={props.inputMonthRef}
        value={month}
        onChange={e => setMonth(e.target.value)}/>
    </fieldset>
  )
}

export default InputDob;
