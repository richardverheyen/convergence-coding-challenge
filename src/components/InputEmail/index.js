import './style.scss';

function InputEmail(props) {
  return (
    <fieldset className="email">
      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        name="email"
        id="email"
        ref={props.inputRef}
        value={props.value}
        onChange={props.handleChange}/>
    </fieldset>
  )
}

export default InputEmail;
