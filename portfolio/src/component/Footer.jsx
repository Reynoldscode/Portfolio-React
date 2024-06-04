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
  }
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Reynolds Addy. All rights reserved.</p>
    </footer>
  );
}

