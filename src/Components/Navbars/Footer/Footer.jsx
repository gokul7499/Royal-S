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
  const backendURL = "https://website-backend-royal.onrender.com/api"; // Backend API URL

  // Record visitor only once per session
  const recordVisitor = async () => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      try {
        const response = await axios.get(`${backendURL}/record-visitor`);
        setVisitorCount(response.data.totalVisitors || 0);
        localStorage.setItem("hasVisited", "true"); // Mark as visited
      } catch (error) {
        console.error("Error recording visitor:", error);
        // Don't show toast for visitor count errors
      }
    } else {
      // Fetch visitor count without incrementing
      await fetchVisitorCount();
    }
  };

  // Fetch the current visitor count
  const fetchVisitorCount = async () => {
    try {
      const response = await axios.get(`${backendURL}/record-visitor`);
      setVisitorCount(response.data.totalVisitors || 0);
    } catch (error) {
      console.error("Error fetching visitor count:", error);
      // Don't show toast for visitor count errors
    }
  };

  useEffect(() => {
    recordVisitor();
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle subscription form submission
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post(`${backendURL}/subscribe`, { email });
      if (response.status === 200) {
        toast.success('Subscribed successfully!');
        setEmail('');
      }
    } catch (error) {
      console.error('Error subscribing email:', error);
      toast.error(error.response?.data?.message || 'Failed to subscribe. Try again.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img
            src={`${process.env.PUBLIC_URL}/img/final_logo-removebg-preview.png`}
            alt="Royal Shetkari IT Company Logo"
            className="footer-logo"
          />
          <p className="text-light">Your trusted partner in technology.</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: info@royalshetkari.com</li>
            <li>Phone: +91 12345 67890</li>
            <li>Address: Sangamner, Maharashtra, India</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Subscribe to our Newsletter</h4>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-section visitor-count">
          <h4>Visitor Count</h4>
          <p className="text-light">{visitorCount} visitors</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="text-light">&copy; {new Date().getFullYear()} Royal Shetkari IT Company. All rights reserved.</p>
      </div>

      <ToastContainer />
    </footer>
  );
};

export default Footer;