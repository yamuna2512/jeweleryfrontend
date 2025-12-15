
import React from "react";
import banner from "../../assets/images/banner.webp";
import "../../assets/styles/homepage.css";

const BannerSlide = () => {
  return (
    <div className="banner-slide">
      <img src={banner} alt="Divine Jewels Banner" />
      <div className="banner-text">
        <h2>Discover the Sparkle in You</h2>
      </div>
    </div>
  );
};

export default BannerSlide;

