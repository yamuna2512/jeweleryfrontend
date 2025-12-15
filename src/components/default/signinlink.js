import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/signin.css";

const SignInLink = ({
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
}) => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign In</h2>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>
        </form>

        <div className="auth-footer">
          <p>
            Don’t have an account?{" "}
            <Link to="/sign-up">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInLink;
