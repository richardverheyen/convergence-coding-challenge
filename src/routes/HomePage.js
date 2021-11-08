import {
  Link
} from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <Link to="/welcome">Go back</Link>
      <h1>HomePage</h1>
      <p>You're in the protected route</p>
      <img src="scorpio.gif" alt="scorpio" style={{maxWidth: "100%"}}/>
    </div>
  );
}

export default HomePage;
