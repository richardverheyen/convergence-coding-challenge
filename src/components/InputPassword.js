function InputPassword(props) {
  // condition a: min of 6 char. max 12
  // condition b: contain min 2 alphabets.
  // condition c: It should not have special characters.

  const pwConditionAC = "(?=.*[a-zA-Z0-9]).{6,12}"; // between 6 and 12 number/letter characters
  const pwConditionB = "(?=(.*[a-zA-Z]){2,})"; //contain min 2 alphabetic characters.
  const patternRegexString = `^${pwConditionB}${pwConditionAC}$`;

  // full string ^(?=(.*[a-zA-Z]){2,})(?=.*[a-zA-Z0-9]).{6,12}$

  return (
    <fieldset>
      <label htmlFor="pw">Password</label>
      <input
        required
        type="password"
        name="password"
        minLength="6"
        maxLength="12"
        id="pw"
        pattern={patternRegexString}
        value={props.value}
        onChange={props.handleChange}/>
    </fieldset>
  )
}

export default InputPassword;
