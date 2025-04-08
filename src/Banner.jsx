import React, { useState, useEffect } from "react";
import "./styles/Banner.css";


const Banner = () => {

  const bannerContent = [
    {
      title: "Download Your Favorite Music & Videos",
      description: "Access, save, and enjoy media on-the-go!",
      backgroundImage: "url('/assets/img1.jpg')",
    },
    {
      title: "Seamless Experience Across Devices",
      description: "No matter the platform, enjoy high-quality media downloads.",
      backgroundImage: "url('/assets/img2.jpg')",
    },
    {
      title: "Unlimited Access to Media",
      description: "Get the best media content in various formats.",
      backgroundImage: "url('/assets/img3.jpg')",
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  // Rotate banner content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % bannerContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      {/* Background Image */}
      <div
        className="banner-image"
        style={{ backgroundImage: bannerContent[currentBanner].backgroundImage }}
      ></div>

      {/* Banner Content */}
      <div className="content">
        <h1>{bannerContent[currentBanner].title}</h1>
        <p>{bannerContent[currentBanner].description}</p>
        <button className="cta-button">Search for Music</button>
      </div>
    </div>
  );
};

export default Banner;
