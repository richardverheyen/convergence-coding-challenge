import {
  Routes,
  Route,
} from "react-router-dom";

// import AuthenticatedRoute from "./AuthenticatedRoute";
// import { AuthProvider } from "./contexts/AuthContext";

import {
  HomePage,
  WelcomePage,
  LoginPage,
  RegistrationPage
} from "./routes";

function Router() {
  return (
      <Routes>
        <Route
          path="/"
          element={
              <HomePage />
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
  );
}

export default Router;
