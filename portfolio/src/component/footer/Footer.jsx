import React from "react";
import "./Footer.css"; 

export default function Footer() {
  const linkedInUrl = "www.linkedin.com/in/reynolds-addy";
  const githubUrl = "https://github.com/Reynoldscode?tab=repositories";
  const devUrl = "https://dev.to/reynoldscode";

  return (
    <footer className="footer">
      <a href={linkedInUrl} target="_blank" rel="Linkdin Link">
        <img src="/linkedin-logo.png" alt="LinkedIn" className="icon" />
      </a>

      <a href={githubUrl} target="_blank" rel="Gitlink">
        <img src="/github-logo.png" alt="GitHub" className="icon" />
      </a>

      <a href={devUrl} target="_blank" rel="Dev Link">
        <img src="/instagram-logo.png" alt="Dev" className="icon" />
      </a>

      <p>© {new Date().getFullYear()} Reynolds Addy. All rights reserved.</p>
    </footer>
  );
}