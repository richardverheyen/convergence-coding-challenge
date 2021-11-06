import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function AuthenticatedRoute({children}) {
  let authenticated = useAuth();
  let location = useLocation();
  
  if (!authenticated) {
    return <Navigate to="/welcome" state={{ from: location }} />;
  }

  return children;
}

export default AuthenticatedRoute;
