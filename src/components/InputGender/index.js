import './style.scss';

function InputGender(props) {
  return (
    <fieldset className="gender">
      <label htmlFor="gender">Gender</label>

      <select
        required
        id="gender"
        name="gender"
        ref={props.inputRef}
        value={props.value}
        onChange={props.handleChange}>
        <option value="" disabled hidden>Choose here</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </fieldset>
  )
}

export default InputGender;
