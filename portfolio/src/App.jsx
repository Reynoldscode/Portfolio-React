import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components"; // Import Footer component

import AboutMe from "./pages/AboutMe";
import PortfolioPage from "./pages/Portfolio";
import ResumePage from "./pages/Resume";
import ContactPage from "./pages/ContactPage"; // Assuming you have a ContactPage component

import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="viewport">
      <Header />

      <div className="px-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer /> 
    </div>
  );
}