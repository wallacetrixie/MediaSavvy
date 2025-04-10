import React from 'react';
import './styles/About.css';
import img from './assets/group.jpg';

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
            At MediaSavvy, we are passionate about leveraging technology to create innovative solutions. With a focus on excellence and creativity, we aim to deliver impactful applications that inspire and empower users.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
      <div className="about-us-sections">
        <div className="section">
          <h3>01</h3>
          <p>
            Our mission is to bridge the gap between technology and user needs by developing intuitive and efficient software solutions.
          </p>
        </div>
        <div className="section">
          <h3>02</h3>
          <p>
            We believe in continuous learning and innovation, staying ahead of trends to deliver cutting-edge applications.
          </p>
        </div>
        <div className="section">
          <h3>03</h3>
          <p>
            Collaboration and dedication drive our success, ensuring every project meets the highest standards of quality and functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
