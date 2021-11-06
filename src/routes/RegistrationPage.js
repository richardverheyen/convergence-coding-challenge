import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAuthUpdate } from "../contexts/AuthContext";
import {
  InputEmail,
  InputPassword,
  InputPasswordCheck,
  InputDob,
  InputGender
} from "../components/";

function RegistrationPage() {

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div className="RegistrationPage">
      <Link to="/welcome">Go back</Link>
      <h1>Create a new user</h1>

      <form>
        <InputEmail
          value={email}
          handleChange={e => setEmail(e.target.value)}
          />
        <InputPassword
          value={pw}
          handleChange={e => setPw(e.target.value)}
          />
        <InputPasswordCheck
          pattern={pw}
          />
        <InputDob
          value={dob}
          handleChange={e => setDob(e.target.value)}
          />
        <InputGender
          value={gender}
          handleChange={e => setGender(e.target.value)}
          />

        <button
          type="button"
          disabled={Boolean(!email || !pw || !dob || !gender)}
          onClick={useAuthUpdate({
            email,
            pw,
            dob,
            gender
          })}
          >
          Create User
        </button>

      </form>

    </div>
  );
}

export default RegistrationPage;
