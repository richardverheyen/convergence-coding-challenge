import {
  Link
} from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      HomePage

      <p>You must be authenticated!</p>

      <Link to="/welcome">Go back</Link>
    </div>
  );
}

export default HomePage;
