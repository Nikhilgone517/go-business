import React from "react";
import './index.css'
const Footer = () => {
  return (
    <footer className="overview footer">
      <h2 className="go-heading">Go Business</h2>

      <nav aria-label="Footer">
        <a className="nav-items" href="/">About</a>
        <a className="nav-items" href="/">Contact</a>
        <a className="nav-items" href="/">Privacy</a>
        <a className="nav-items" href="/">Terms</a>
      </nav>

      <p>@ 2024 Go Business</p>
    </footer>
  );
};

export default Footer;
