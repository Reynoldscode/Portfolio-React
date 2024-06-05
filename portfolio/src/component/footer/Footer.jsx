import React from "react";

const styles = {
  footer: {
    backgroundColor: "#193589",
    borderTop: "1px solid white",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
  },
  icon: {
    width: "24px", 
    height: "24px", 
    margin: "0 5px" 
  }
};

export default function Footer() {
  const linkedInUrl = "www.linkedin.com/in/reynolds-addy";
  const githubUrl = "https://github.com/Reynoldscode";
  const devUrl = "https://dev.to/?signin=true";

  return (
    <footer style={styles.footer}>
      {/* LinkedIn */}
      <a href={linkedInUrl} target="_blank" rel="Linkdin Link">
        <img src="/linkedin-logo.png" alt="LinkedIn" style={styles.icon} />
      </a>

      {/* GitHub */}
      <a href={githubUrl} target="_blank" rel="Gitlink">
        <img src="/github-logo.png" alt="GitHub" style={styles.icon} />
      </a>

      {/* Dev */}
      <a href={devUrl} target="_blank" rel="Dev Link">
        <img src="/instagram-logo.png" alt="Dev" style={styles.icon} />
      </a>

      <p>© {new Date().getFullYear()} Reynolds Addy. All rights reserved.</p>
    </footer>
  );
}