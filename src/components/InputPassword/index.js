import React, { useEffect } from 'react';
import './style.scss';

function InputPassword(props) {
  const pwConditionA = ".{6,12}"; //contain min of 6 char. max 12
  const pwConditionB = "(?=.*[a-zA-Z]{2,})"; //contain min 2 alphabetic characters.
  const pwConditionC = "(?!.*[^a-zA-Z0-9])"; // It should not have special characters. (non a-zA-Z0-9)
  const patternRegexString = `^${pwConditionB}${pwConditionC}${pwConditionA}$`;

  // full string ^(?=.*[a-zA-Z]{2,})(?!.*[^a-zA-Z0-9]).{6,12}$

  useEffect(() => {
    function handleInvalid(event) {
      if (event.target.validity.patternMismatch) {

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

    props.inputRef.current.addEventListener('invalid', handleInvalid);
    props.inputRef.current.addEventListener('change', e => e.target.setCustomValidity(''));

    return () => {
      props.inputRef.current.removeEventListener('invalid', handleInvalid);
    };
  }, []);

  return (
    <fieldset className="password">
      <label htmlFor="pw">Password</label>
      <input
        required
        type="password"
        name="password"
        id="pw"
        ref={props.inputRef}
        pattern={patternRegexString}
        value={props.value}
        onChange={props.handleChange}/>
    </fieldset>
  )
}

export default InputPassword;
