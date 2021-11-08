import './style.scss';

function InputPasswordCheck(props) {
  return (
    <fieldset className="password-check">
      <label htmlFor="pw-check">Retype Password</label>
      <input
        required
        type="password"
        name="password retype"
        minLength="6"
        maxLength="12"
        id="pw-check"
        ref={props.inputRef}
        pattern={props.pattern}
        />
    </fieldset>
  )
}

export default InputPasswordCheck;
