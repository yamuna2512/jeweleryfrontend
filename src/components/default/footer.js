import React from "react";
import "../../assets/styles/headerfooter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h4>JewelStore</h4>
          <p>Crafting timeless elegance since 1998.</p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Collections</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Customer Support</h4>
          <ul>
            <li>Shipping & Returns</li>
            <li>Order Tracking</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>support@divinejewels.com</p>
          <p>+91 99999 12345</p>
          <p>Karnataka, India</p>

          <div className="social-icons">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 JewelStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
