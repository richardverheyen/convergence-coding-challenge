import {
  Link
} from "react-router-dom";

import { useAuth, useAuthUpdate } from "../contexts/AuthContext";
// these are called hooks, they are how you grab contexts directly from the Context file

function LoginPage() {
  const authenticated = useAuth();
  const toggleAuthenticated = useAuthUpdate();

  return (
    <div className="LoginPage">
      <h1>LoginPage</h1>

      <Link to="/welcome">Go back</Link>
      {/*<Link to="/">Login</Link>*/}

      <p>{`${authenticated ? "" : "NOT"} logged in`}</p>

      <button onClick={toggleAuthenticated}>Log In</button>
    </div>
  );
}

export default LoginPage;
