import React from 'react';
import './styles/About.css';
import img from './assets/img1.jpg';

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <div className="about-us-image">
          <img src={img} alt="About Us" />
        </div>
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Lobortis elementum nibh tellus molestie nunc non. Aliquet bibendum.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
      <div className="about-us-sections">
        <div className="section">
          <h3>01</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="section">
          <h3>02</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="section">
          <h3>03</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
