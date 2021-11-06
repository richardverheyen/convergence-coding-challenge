import React, { Component } from 'react';

function InputEmail(props) {
  return (
    <fieldset>
      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        name="email"
        id="email"
        value={props.value}
        onChange={props.handleChange}/>
    </fieldset>
  )
}

export default InputEmail;
