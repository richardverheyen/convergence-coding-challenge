function InputPasswordCheck(props) {
  return (
    <fieldset>
      <label htmlFor="pw-check">Retype Password</label>
      <input
        required
        type="password"
        name="password retype"
        minLength="6"
        maxLength="12"
        id="pw-check"
        pattern={props.pattern}
        />
    </fieldset>
  )
}

export default InputPasswordCheck;
