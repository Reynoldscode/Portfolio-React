import { useState, useEffect } from "react" 
import { Link } from "react-router-dom"

const styles = {
  header: {
    backgroundColor: "#193589",
    borderBottom: "1px solid white",
    height: "6rem",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3rem",
    color: "white"
  },

  h1: {
    fontSize: "2rem",
    fontStyle: "italic",
    color: "white"
  },

  nav: {
    width: ":100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "3rem",
    marginTop: "18px"
  },

  ul: {
    listStyleType: "none",
    color: "white"
  }
}

export default function Header(){

  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>Reynolds Addy</h1>

      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li className="d-flex">
            <a href="/" className="d-block px-2 text-light text-decoration-none">AboutMe</a>
            <a href="/portfolio" className="d-block px-2 text-light text-decoration-none">Portfolio</a>
            <a href="/resume" className="d-block px-2 text-light text-decoration-none">Resume</a>
            <a href="/contact" className="d-block px-2 text-light text-decoration-none">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}