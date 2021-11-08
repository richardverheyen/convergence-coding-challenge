import { Navigate, useLocation } from "react-router-dom";
import { useAuthenticated } from "./contexts/AuthenticatedContext";

function AuthenticatedRoute({children}) {
  let authenticated = useAuthenticated();
  let location = useLocation();

  if (!authenticated) {
    return <Navigate to="/welcome" state={{ from: location }} />;
  }

  return children;
}

export default AuthenticatedRoute;
