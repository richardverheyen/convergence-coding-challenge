import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import './style.scss';

import {
  InputEmail,
  InputPassword,
  Button
} from "components/";

import { useAuth, useAuthUpdate } from "contexts/AuthContext";
// these are called hooks, they are how you grab contexts directly from the Context file

function LoginPage() {

  const emailInput = useRef(null);
  const pwInput = useRef(null);


  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div className="LoginPage">
      <Link to="/welcome">Go back</Link>
      <h1>Log In</h1>

      <form>
        <InputEmail
          value={email}
          inputRef={emailInput}
          handleChange={e => setEmail(e.target.value)}
          />
        <InputPassword
          value={pw}
          inputRef={pwInput}
          handleChange={e => setPw(e.target.value)}
          />

        <Button
          className="primary"
          >
          Log In
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
