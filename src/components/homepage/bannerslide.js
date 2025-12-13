
import React from "react";
import "../../assets/styles/homepage.css";

const BannerSlide = () => {
  return (
    <div className="banner-container">
      <img
        src="/assets/images/banner1.jpg"
        alt="Jewellery Banner"
        className="banner-image"
      />

      <div className="banner-text">
        <h2>Discover the Sparkle</h2>
        <p>in You</p>
      </div>
    </div>
  );
};

export default BannerSlide;
