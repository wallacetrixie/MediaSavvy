import React, { useState, useEffect } from "react";
import "./styles/Banner.css";
import { Link } from "react-router-dom";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const Banner = () => {
  const bannerContent = [
    {
      title: "Download Your Favorite Music & Videos",
      description: "Access, save, and enjoy media on-the-go!",
      image: img1,
    },
    {
      title: "Seamless Experience Across Devices",
      description: "No matter the platform, enjoy high-quality media downloads.",
      image: img2,
    },
    {
      title: "Unlimited Access to Media",
      description: "Get the best media content in various formats.",
      image: img3,
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % bannerContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      {bannerContent.map((item, index) => (
        <div
          key={index}
          className={`banner-image ${index === currentBanner ? "active" : ""}`}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      ))}

      <div className="content">
        <h1>{bannerContent[currentBanner].title}</h1>
        <p>{bannerContent[currentBanner].description}</p>
        <Link to="/search">
          <button className="cta-button">Search for Music</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
