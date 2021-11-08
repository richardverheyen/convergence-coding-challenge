import {
  Routes,
  Route,
} from "react-router-dom";

import AuthenticatedRoute from "AuthenticatedRoute";
import { AuthenticatedProvider } from "contexts/AuthenticatedContext";

import {
  HomePage,
  WelcomePage,
  LoginPage,
  RegistrationPage
} from "./routes";

function Router() {
  return (
    <AuthenticatedProvider>
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
    </AuthenticatedProvider>
  );
}

export default Router;
