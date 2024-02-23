// Footer.js

import React from 'react';
import './footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 UniCode. All rights reserved.</p>
        <div className="additional-content">
          {/* Add your additional content here */}
          <p>&copy; privacy policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
