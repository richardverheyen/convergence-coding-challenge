import React, { useEffect } from 'react';
import './style.scss';

function InputPassword(props) {

  const pwConditionA = ".{6,12}"; //contain min of 6 char. max 12
  const pwConditionB = "(?=.*[a-zA-Z].*[a-zA-Z].*)"; //contain min 2 alphabetic characters.
  const pwConditionC = "(?!.*[^a-zA-Z0-9])"; // It should not have special characters. (non a-zA-Z0-9)

  // Condition A needs to be at the end of the regex string, because condition B and C are both lookaheads and need to be at the start.
  const patternRegexString = `^${pwConditionB}${pwConditionC}${pwConditionA}$`;

  // full string ^(?=.*[a-zA-Z].*[a-zA-Z].*)(?!.*[^a-zA-Z0-9]).{6,12}$

  const handleCustomValidation = event => {
    if (event.target.validity.patternMismatch) {
      // native pattern validation can't tell which validation rule to show
      // we show them in order: A, B, C

      if (!new RegExp(`^${pwConditionA}$`).test(event.target.value)) {
        event.target.setCustomValidity('Passwords must contain between 6 and 12 characters.');
        return;
      }

      if (!new RegExp(`^${pwConditionB}.*$`).test(event.target.value)) {
        event.target.setCustomValidity('Passwords must contain 2 alphabetic characters.');
        return;
      }

      if (!new RegExp(`^${pwConditionC}.*$`).test(event.target.value)) {
        event.target.setCustomValidity('Passwords must not contain special characters.');
        return;
      }
    }
  }

  const clearCustomValidation = e => {
    // custom validation messages need to be cleared, we clean them here on the change event
    e.target.setCustomValidity('');
  }

  useEffect(() => {
    props.inputRef.current.addEventListener('invalid', handleCustomValidation);
  }, [props.inputRef]);

  useEffect(() => {
    props.inputRef.current.addEventListener('change', clearCustomValidation);
  }, [props.inputRef])

  return (
    <fieldset className="password">
      <label htmlFor="pw">Password</label>
      <input
        required
        type="password"
        name="password"
        onCopy={(e)=>{
          e.preventDefault()
          return false;
        }}
        onCut={(e)=>{
          e.preventDefault()
          return false;
        }}
        onDrag={(e)=>{
          e.preventDefault()
          return false;
        }}
        id="pw"
        ref={props.inputRef}
        pattern={patternRegexString}
        value={props.value}
        onChange={props.handleChange}/>
    </fieldset>
  )
}

export default InputPassword;
