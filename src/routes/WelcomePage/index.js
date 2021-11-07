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

        <Link to="/registration">
          <Button className="secondary large">
            New User
          </Button>
        </Link>

        <Link to="/login">
          <Button className="secondary large">
            Existing User
          </Button>
        </Link>

    </div>
  );
}

export default WelcomePage;
