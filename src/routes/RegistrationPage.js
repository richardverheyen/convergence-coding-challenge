import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import {
  InputEmail,
  InputPassword,
  InputPasswordCheck,
  InputDob,
  InputGender,
  Button
} from "components/";

function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const emailInput = useRef(null);
  const pwInput = useRef(null);
  const pwCheckInput = useRef(null);
  const dobDayInput = useRef(null);
  const dobMonthInput = useRef(null);
  const dobYearInput = useRef(null);
  const genderInput = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('validate form', emailInput.current, emailInput.current.checkValidity());

  }

  return (
    <div className="RegistrationPage">
      <Link to="/welcome">Go back</Link>
      <h1>Create a new user</h1>

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
        <InputPasswordCheck
          pattern={pw}
          inputRef={pwCheckInput}
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
