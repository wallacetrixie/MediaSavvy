// src/components/HowItWorks.jsx
import React, { useEffect } from "react";
import "./styles/steps.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLink, FaDownload, FaMusic, FaFolderOpen } from "react-icons/fa";

const steps = [
  {
    title: "Paste the Link",
    description: "Enter any YouTube or SoundCloud link to get started.",
    icon: <FaLink />,
  },
  {
    title: "Choose Format",
    description: "Select MP3, MP4, and your preferred resolution.",
    icon: <FaMusic />,
  },
  {
    title: "Click Download",
    description: "We'll process and let you download it instantly.",
    icon: <FaDownload />,
  },
  {
    title: "Enjoy Offline Access",
    description: "Your media is saved and ready to go anytime, anywhere.",
    icon: <FaFolderOpen />,
  },
];

const Steps = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="how-it-works" id="how-it-works">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div
            className="step-card"
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="icon-wrapper">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
