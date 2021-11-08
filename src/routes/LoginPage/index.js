import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './style.scss';

import {
  InputEmail,
  InputPassword,
  Button
} from "components/";

import { useSignIn } from "contexts/AuthenticatedContext";
// these are called hooks, they are how you grab contexts directly from the Context file

function LoginPage() {
  const navigate = useNavigate();
  const signIn = useSignIn();

  const emailInput = useRef(null);
  const pwInput = useRef(null);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading]= useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      await signIn({email, pw});
      navigate("/");

    } catch (e) {
      setLoading(false);
      setEmail("");
      setPw("");
    }
  }

  return (
    <div className="LoginPage">
      <Link to="/welcome">Go back</Link>
      <h1>Log In</h1>

      <form onSubmit={handleSubmit}>
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
          disabled={loading}
          loading={loading}
          >
          Log In
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
