import React from "react";
import "./styles/footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <input type="email" placeholder="Enter email address" />
        <button>SUBSCRIBE</button>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h3>MediaSavvy</h3>
          <p>
          A modern and fast music/video streaming platform that allows users to listen to their favorite songs and watch videos online.
          </p>
          <a href="#">read more →</a>
        </div>

        <div className="footer-column">
          <h4>Discover</h4>
          <ul>
            <li><a href="#">Buy & Sell</a></li>
            <li><a href="#">Merchant</a></li>
            <li><a href="#">Giving back</a></li>
            <li><a href="#">Help & Support</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li><a href="#">Staff</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Security</a></li>
            <li><a href="#">Global</a></li>
            <li><a href="#">Charts</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Social</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Googleplus</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-partners">
        <span>Collaborators:</span>
        <span>
          ⓒ Wallaceⓒ Wambulwa ⓒ Trixie ⓒ Keila ⓒ Austin ⓒ Mark
        </span>
        <a href="#">See All →</a>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright ©2025 All rights reserved | made with ♥ by{" "}
          <a href="#">https://github.com/wallacetrixie</a>
        </p>
        <div className="links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Compliances</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
