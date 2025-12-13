import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getUser } from "../../reducks/users/selectors";
import { signOutAction } from "../../reducks/users/actions";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Hooks inside the component
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const token = user ? user.token : null;

  const handleSignOut = () => {
    dispatch(signOutAction());
    localStorage.removeItem("");
    history.push("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Divine Jewels</Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/wishlist" className="wishlist-btn">❤️ Wishlist</Link>

        {token ? (
          <button onClick={handleSignOut} className="signin-btn">
            Sign Out
          </button>
        ) : (
          <Link to="/signin" className="signin-btn">Sign In / Sign Up</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
