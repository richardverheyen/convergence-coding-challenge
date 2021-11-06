import React, { Component } from 'react';

function InputGender(props) {
  return (
    <fieldset>
      <label htmlFor="gender">Gender</label>

      <select
        required
        id="gender"
        name="gender"
        value={props.value}
        onChange={props.handleChange}>
        <option value="" selected disabled hidden>Choose here</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </fieldset>
  )
}

export default InputGender;
