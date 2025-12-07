
import React from "react";
import bannerImg from "../assets/img/Banner.webp"; 

const Banner = () => {
  return (
    <div className="banner-wrap">
      <img className="banner-image" src={bannerImg} alt="Divine Jewels Banner" />
      <div className="banner-text">Discover the Sparkle in You</div>
    </div>
  );
};

export default Banner;
