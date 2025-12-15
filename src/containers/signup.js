


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { signUp } from "../reducks/users/operations";
import SignupLink from "../components/default/signuplink";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      signUp(
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        },
        () => {
          history.push("/"); // redirect after signup
        }
      )
    );
  };

  return (
    <SignupLink
      firstName={firstName}
      lastName={lastName}
      email={email}
      password={password}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleSubmit}
    />
  );
};

export default SignUp;
