import React from "react";
import profileImage from "./reyimage.png";
import "./About.css"



export default function AboutMepage() {

  return (
    <div className="d-flex flex-column align-items-center">

      <img src={ profileImage } alt="Profile" className="profile-image" /> 
      <main className="w-75 px-5 text-center">
        <h1 className="rey">You Are Welcome!</h1>
        <p>I am Reynolds! For the past 7 years, I've been deeply immersed in the world of traditional graphic design, crafting visuals that communicate messages effectively. But my curiosity extends beyond static designs. I have always wondered about the magic behind websites and apps - how they are brought to life!</p>
        <p>That curiosity led me to dive into backend development using JavaScript. I am fascinated by the power of coding to create functional and meaningful digital experiences. Recently, I even took a Google course in UI/UX design, and the idea of combining design thinking with coding skills to build products blew my mind.</p>
        <p>Now, I am eager to merge my years of design expertise with my newfound tech skills. I am excited about the prospect of collaborating with others and using my unique blend of experience to create innovative solutions that make a real difference in people's lives. Let's work together and make some magic happen!</p>
      </main>
    </div>
  );
}