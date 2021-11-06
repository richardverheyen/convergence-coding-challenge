import React, { Component } from "react";
import { Link } from "react-router-dom";

import { useAuthUpdate } from "../contexts/AuthContext";
import {
  InputEmail,
  InputPassword,
  InputPasswordCheck,
  InputDob,
  InputGender
} from "../components/";

class RegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pw: "",
      dob: "",
      gender: ""
    }
  }

  handleSubmit(e) {
    console.log('submit');
  }

  render() {
    const { state } = this;

    return (
      <div className="RegistrationPage">
        <Link to="/welcome">Go back</Link>
        <h1>Create a new user</h1>

        <form>
          <InputEmail
            value={state.email}
            handleChange={e => this.setState({ email: e.target.value })}
            />
          <InputPassword
            value={state.pw}
            handleChange={e => this.setState({ pw: e.target.value })}
            />
          <InputPasswordCheck
            pattern={state.pw}
            />
          <InputDob
            value={state.dob}
            handleChange={value => this.setState({ dob: value })}
            />
          <InputGender
            value={state.gender}
            handleChange={e => this.setState({ gender: e.target.value })}
            />

          <button
            type="button"
            disabled={Boolean(!state.email || !state.pw || !state.dob || !state.gender)}
            onClick={this.handleSubmit}
            >
            Create User
          </button>


          {/*<button onClick={useAuthUpdate({
              email: "foo@bar.com",
              pw: "password123",
              dob: "12/12/1233",
              gender: "Female"
            })
          }>Submit User Data</button>*/}
        </form>

      </div>
    );
  }
}

export default RegistrationPage;
