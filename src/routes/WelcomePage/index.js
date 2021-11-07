import {
  Link
} from "react-router-dom";
import {
  Button
} from "components/";

import "./style.scss";

function WelcomePage() {
  return (
    <div className="WelcomePage">
      WelcomePage

        <Link to="/login">
          <Button className="secondary">
            Login
          </Button>
        </Link>

        <Link to="/registration">
          <Button className="secondary">
            Register
          </Button>
        </Link>

    </div>
  );
}

export default WelcomePage;
