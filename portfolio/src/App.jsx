import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import AboutMe from "./pages/AboutMe"
import PortfolioPage from "./pages/Portfolio"
import ResumePage from "./pages/Resume"

import { Header } from "./components"

import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ContactPage } from "./pages"
import AboutMepage from "./pages/HomePage"

export default function App(){

  return (
    <div className="viewport">
      <Header />

      <div className="px-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AboutMepage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            
          </Routes>
        </BrowserRouter>
      </div>

      <footer>

      </footer>
    </div>
  )
}