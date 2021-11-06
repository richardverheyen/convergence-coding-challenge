import {
  Link
} from "react-router-dom";

function WelcomePage() {
  return (
    <div className="WelcomePage">
      WelcomePage

      <Link to="/login">Login</Link>
      <Link to="/registration">Register</Link>
    </div>
  );
}

export default WelcomePage;
