import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [visitorCount, setVisitorCount] = useState(0);

  // ✔️ Your backend URL
  const backendURL = "https://website-backend-royal.onrender.com/api";

  // -----------------------------------------------------
  // ✔️ VISITOR COUNT HANDLING (increase only once)
  // -----------------------------------------------------
  const recordVisitor = async () => {
    const visited = localStorage.getItem("visited");

    try {
      const response = await axios.get(`${backendURL}/record-visitor`, {
        params: { increase: visited ? "false" : "true" }
      });

      setVisitorCount(response.data.totalVisitors || 0);

      if (!visited) {
        localStorage.setItem("visited", "true");
      }
    } catch (err) {
      console.log("Visitor count error:", err);
    }
  };

  useEffect(() => {
    recordVisitor();
  }, []);

  // -----------------------------------------------------
  // ✔️ EMAIL VALIDATION
  // -----------------------------------------------------
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
  };

  // -----------------------------------------------------
  // ✔️ SUBSCRIBE HANDLER
  // -----------------------------------------------------
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) return toast.error("Please enter email");
    if (!validateEmail(email)) return toast.error("Invalid email");

    try {
      const res = await axios.post(`${backendURL}/subscribe`, { email });

      if (res.status === 200) {
        toast.success("Subscribed successfully!");
        setEmail("");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Subscription failed");
    }
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-section logo-section">
          <img
            src="/img/final_logo-removebg-preview.png"
            alt="Logo"
            className="footer-logo"
          />
          <p className="text-light">Your trusted partner in technology.</p>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: info@royalshetkari.com</li>
            <li>Phone: +91 12345 67890</li>
            <li>Address: Sangamner, Maharashtra, India</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* SUBSCRIBE */}
        <div className="footer-section">
          <h4>Subscribe to our Newsletter</h4>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* VISITOR COUNT */}
        <div className="footer-section visitor-count">
          <h4>Visitor Count</h4>
          <p className="text-light">{visitorCount} visitors</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="text-light">
          © {new Date().getFullYear()} Royal Shetkari IT Company. All rights reserved.
        </p>
      </div>

      <ToastContainer />
    </footer>
  );
};

export default Footer;
