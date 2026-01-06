// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { FaHeart, FaShoppingCart } from "react-icons/fa";
// import { isUserSignedIn, getUserName } from "../../reducks/users/selectors";

// import "../../assets/styles/headerfooter.css";
// import { fetchWishlist } from "../../reducks/wishlist/operations";
// import { getWishlistCount } from "../../reducks/wishlist/selectors";

// const Header = () => {
//   const dispatch = useDispatch();
//   const wishlistCount = useSelector(getWishlistCount);
//   const isSignedIn = useSelector(isUserSignedIn);
//   const userEmail = useSelector(getUserName);

//   useEffect(() => {
//     dispatch(fetchWishlist());
//   }, [dispatch]);

//   return (
//     <header className="header">
//       <div className="header-container">

//         {/* Logo */}
//         <div className="logo">
//           <Link to="/">Divine Jewels</Link>
//         </div>

//         {/* Navigation */}
//         <nav className="nav-links">
          
//           <Link to="/">Home</Link>
//           <Link to="/collections">Collections</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
          
//         </nav>

//         {/* Icons */}
//         <div className="header-icons">
//           {/* Wishlist */}
//           <Link to="/wishlist" className="wishlist-link">
//             <FaHeart className={`heart-icon ${wishlistCount > 0 ? "active" : ""}`} />
//             {wishlistCount > 0 && <span className="wishlist-count">{wishlistCount}</span>}
//           </Link>

//           {/* Cart */}
//           <Link to="/cart">
//             <FaShoppingCart />
//           </Link>

//           {/* Auth Links */}
           
//           <Link to="/sign-in">Signin</Link>
//           <Link to="/sign-up">Signup</Link>
          
//         </div>

//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import "../../assets/styles/headerfooter.css";

import { fetchWishlist } from "../../reducks/wishlist/operations";
import { getWishlistCount } from "../../reducks/wishlist/selectors";
import { isUserSignedIn, getUserFirstName } from "../../reducks/users/selectors";
import { signOut } from "../../reducks/users/operations";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory(); //  INSIDE component

  const wishlistCount = useSelector(getWishlistCount);
  const isSignedIn = useSelector(isUserSignedIn);
 const firstName = useSelector(getUserFirstName);

  useEffect(() => {
    if (isSignedIn) {
      dispatch(fetchWishlist());
    }
  }, [dispatch, isSignedIn]);

  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/sign-in"); //  redirect after logout
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">Divine Jewels</Link>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="header-icons">

          {/* Wishlist */}
          <Link to="/wishlist" className="wishlist-link">
            <FaHeart className={wishlistCount > 0 ? "active" : ""} />
            {wishlistCount > 0 && (
              <span className="wishlist-count">{wishlistCount}</span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart">
            <FaShoppingCart />
          </Link>

          {/* Auth */}
          {isSignedIn ? (
            <>
              <span className="user-name">
                Hello,  {firstName}
              </span>
              <button className="logout-btn" onClick={handleSignOut}>
                Signout
              </button>
            </>
          ) : (
            <>
              <Link to="/sign-in">Signin</Link>
              <Link to="/sign-up">Signup</Link>
            </>
          )}

        </div>
      </div>
    </header>
  );
};

export default Header;
