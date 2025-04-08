import React, { useEffect, useRef } from "react";
import "./styles/Services.css";
import { FaMusic, FaList, FaDownload, FaCloud } from "react-icons/fa";

const Services = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      icon: <FaMusic />,
      title: "Browse & Listen",
      description: "Explore and stream your favorite songs in HD.",
    },
    {
      icon: <FaList />,
      title: "Create Playlists",
      description: "Curate custom playlists and organize your vibe.",
    },
    {
      icon: <FaDownload />,
      title: "Download Media",
      description: "Download music or videos in various formats.",
    },
    {
      icon: <FaCloud />,
      title: "Save & Access",
      description: "Save your favorite content to access anytime.",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">What You Can Do</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            ref={el => (cardRefs.current[index] = el)}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
