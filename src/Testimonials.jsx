import React, { useEffect, useRef } from "react";
import "./styles/Tests.css";

const testimonials = [
  {
    name: "Jane M.",
    quote: "This platform has completely changed how I enjoy music. It's intuitive and super fast!",
    role: "Music Enthusiast",
  },
  {
    name: "Carlos D.",
    quote: "Creating playlists and downloading my favorite videos has never been this seamless.",
    role: "DJ & Content Curator",
  },
  {
    name: "Amara K.",
    quote: "I love how responsive the site is. Works like magic on both mobile and desktop.",
    role: "Student & Artist",
  },
  {
    name: "Brian O.",
    quote: "The design, the performance, everything is just on point. Keep up the great work!",
    role: "Full-time Streamer",
  },
];

const Testimonials = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("testimonial-reveal");
          }
        });
      },
      { threshold: 0.2 }
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

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What People Are Saying</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            className="testimonial-card"
            key={index}
            ref={el => (cardRefs.current[index] = el)}
          >
            <p className="quote">“{testimonial.quote}”</p>
            <h4 className="name">{testimonial.name}</h4>
            <span className="role">{testimonial.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
