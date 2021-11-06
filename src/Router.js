import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";

import AuthenticatedRoute from "./AuthenticatedRoute";
import { AuthProvider } from "./contexts/AuthContext";

import {
  HomePage,
  WelcomePage,
  LoginPage,
  RegistrationPage
} from "./routes";

function Router() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <AuthenticatedRoute>
              <HomePage />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/welcome"
          element={
            <WelcomePage />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage />
          }
        />
        <Route
          path="/registration"
          element={
            <RegistrationPage />
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default Router;
