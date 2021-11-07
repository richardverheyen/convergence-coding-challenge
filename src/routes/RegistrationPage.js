import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "contexts/AuthContext";
import {
  InputEmail,
  InputPassword,
  InputPasswordCheck,
  InputDob,
  InputGender,
  Button
} from "components/";

function RegistrationPage() {

  const {user, setUser} = AuthContext;

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log('validate form');

    setEmail(email);
    // useAuthUpdate({
    //   email,
    //   pw,
    //   dob,
    //   gender
    // })

    // auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      // navigate(from, { replace: true });
    // });
  }

  return (
    <div className="RegistrationPage">
      <Link to="/welcome">Go back</Link>
      <h1>Create a new user</h1>

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
        handleChange={string => setDob(string)}
        />
      <InputGender
        value={gender}
        handleChange={e => setGender(e.target.value)}
        />

      <Button
        className="primary"
        disabled={Boolean(!email || !pw || !dob || !gender)}
        onClick={handleSubmit}>
        Create User
      </Button>

    </div>
  );
}

export default RegistrationPage;
