import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  InputEmail,
  InputPassword,
  Button
} from "components/";

import { useAuth, useAuthUpdate } from "contexts/AuthContext";
// these are called hooks, they are how you grab contexts directly from the Context file

function LoginPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div className="LoginPage">
      <Link to="/welcome">Go back</Link>

      <InputEmail
        value={email}
        handleChange={e => setEmail(e.target.value)}
        />
      <InputPassword
        value={pw}
        handleChange={e => setPw(e.target.value)}
        />

      <Button
        className="primary"
        >
        Log In
      </Button>
    </div>
  );
}

export default LoginPage;
