import React from "react";
import "./Header.css"; 

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Reynolds Addy</h1>

      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <a href="/" className="header-link">AboutMe</a>
            <a href="/portfolio" className="header-link">Portfolio</a>
            <a href="/resume" className="header-link">Resume</a>
            <a href="/contact" className="header-link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}