import {
  Link
} from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <h1>HomePage</h1>
      <p>You're in the protected route</p>

      <Link to="/welcome">Go back</Link>
    </div>
  );
}

export default HomePage;
