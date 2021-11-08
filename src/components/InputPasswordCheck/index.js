import React, { useRef, useEffect, useCallback } from 'react';
import './style.scss';

function InputPasswordCheck(props) {
  const inputRef = useRef(null);

  const handleCustomValidation = useCallback(e => {
    if (e.target.validity.patternMismatch) {

      if (!new RegExp(`^${props.pattern}$`).test(e.target.value)) {
        e.target.setCustomValidity('Passwords must match.');
      }
    }
  }, [props.pattern])

  const clearCustomValidation = e => {
    e.target.setCustomValidity('');
  }

  useEffect(() => {
    inputRef.current.addEventListener('invalid', handleCustomValidation);
    return inputRef.current.removeEventListener('invalid', handleCustomValidation);
  }, [inputRef, handleCustomValidation]);

  useEffect(() => {
    inputRef.current.addEventListener('change', clearCustomValidation);
    return inputRef.current.removeEventListener('change', clearCustomValidation);
  }, [inputRef, handleCustomValidation])

  return (
    <fieldset className="password-check">
      <label htmlFor="pw-check">Retype Password</label>
      <input
        required
        type="password"
        name="password check"
        id="pw-check"
        ref={inputRef}
        pattern={props.pattern}
        />
    </fieldset>
  )
}

export default InputPasswordCheck;
