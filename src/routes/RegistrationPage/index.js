import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";

import {
  InputEmail,
  InputPassword,
  InputPasswordCheck,
  InputDob,
  InputGender,
  Button
} from "components/";

function RegistrationPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const emailInput = useRef(null);
  const pwInput = useRef(null);
  const dobDayInput = useRef(null);
  const dobMonthInput = useRef(null);
  const dobYearInput = useRef(null);
  const genderInput = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      email,
      pw,
      dob,
      gender
    };

    // I would have moved this to a Context but it was faster to keep it here + we don't retrieve user data in a way to justify it.
    const storedUsers = JSON.parse(localStorage.getItem('users') || "[]");
    localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));

    window.alert('success');

    navigate("/login");
  }

  return (
    <div className="RegistrationPage">
      <Link to="/welcome">Go back</Link>
      <h1>Create a new user</h1>

      <form
        onSubmit={handleSubmit}>
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
        <InputPasswordCheck
          pattern={pw}
          />
        <InputDob
          value={dob}
          inputDayRef={dobDayInput}
          inputMonthRef={dobMonthInput}
          inputYearRef={dobYearInput}
          handleChange={string => setDob(string)}
          />
        <InputGender
          value={gender}
          inputRef={genderInput}
          handleChange={e => setGender(e.target.value)}
          />

        <Button
          className="primary"
          disabled={Boolean(!email || !pw || !dob || !gender)}>
          Create User
        </Button>

      </form>

    </div>
  );
}

export default RegistrationPage;
