import React from "react";
import "./styles/Banner.css";
import bannerImage from "./assets/img2.jpg"; // Use only one image

const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "65vh",
        position: "relative",
        color: "#fff",
      }}
    >
      <div className="banner-content">
        <h1>Download Your Favorite Music & Videos</h1>
        <p>Access, save, and enjoy media on-the-go!</p>
        <button className="cta-button">Search for Music</button>
      </div>
    </div>
  );
};

export default Banner;
