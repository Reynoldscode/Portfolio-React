import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/footer/Footer"
import Header from "./component/header/Header"

import AboutMe from "./component/pages/about/AboutPage";
import PortfolioPage from "./component/pages/portfolio/Portfolio";
import ResumePage from "./component/pages/resume/Resume";
import ContactPage from "./component/pages/resume/Resume"; 


export default function App() {
  return (
    <div className="viewport">

      <div className="px-5">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}