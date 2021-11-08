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
  }, [handleCustomValidation]);

  useEffect(() => {
    inputRef.current.addEventListener('change', clearCustomValidation);
  }, [handleCustomValidation])

  return (
    <fieldset className="password-check">
      <label htmlFor="pw-check">Retype Password</label>
      <input
        required
        type="password"
        name="password check"
        id="pw-check"
        onCopy={e => e.preventDefault()}
        onCut={e => e.preventDefault()}
        onDrag={e => e.preventDefault()}
        onPaste={e => e.preventDefault()}
        ref={inputRef}
        pattern={props.pattern}
        />
    </fieldset>
  )
}

export default InputPasswordCheck;
