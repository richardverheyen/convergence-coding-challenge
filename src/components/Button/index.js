import './style.scss';

function Button(props) {
  return (
    <button
      className={`button ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
      name={props.name}>
      {props.children}
    </button>
  )
}

export default Button;
