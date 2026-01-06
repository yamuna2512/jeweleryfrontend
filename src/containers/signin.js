import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { signIn } from "../reducks/users/operations";
import SignInLink from "../components/default/signinlink";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
dispatch(signIn(email, password, () => {
  history.push("/");
}));
  };

  return (
    <SignInLink
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleSubmit}
    />
  );
};

export default SignIn;
