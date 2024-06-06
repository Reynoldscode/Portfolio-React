import React from 'react';
import './Portfolio.css';
import Header from "../../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import projectimg1 from "./images/p1.png"
import projectimg2 from "./images/p2.png"
import projectimg3 from "./images/p3.png"
import projectimg4 from "./images/p4.png"
import projectimg5 from "./images/p5.png"
import projectimg6 from "./images/p6.png"

export default function Portfolio() {
  
  const Card = ({ image, title, link }) => {

    const handleCardClick = () => {
      window.open(link, '_blank');
    };

    return (
      <div className="col-md-4"> 
        <a href={link} target="_blank" rel="projects" className="cardAnchor" onClick={handleCardClick}>
          <div className="card">
            <img src={ image } alt={ title } className="cardImage" />
            <div className="cardBody">
              <h5 className="cardTitle">{ title }</h5>
              <p className="card-link">Go to Project</p>
            </div>
          </div>
        </a>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <p className='text22'>Below are my recent projects, feel free to click the cards to link to the project</p>
      
      <div className="card-container row">
        <Card image= {projectimg1} title="Creating A portfolio Website" link="https://reynoldscode.github.io/my_portfolio/" />

        <Card image= {projectimg2} title="Note Taker" link="https://note-taker-wezz.onrender.com/" />


        <Card image= {projectimg3} title="Personal Blog" link="https://reynoldscode.github.io/personal_blog/" />

        <Card image= {projectimg4} title="A group Project Project" link="https://tywalter.github.io/brew-bound/" />

        <Card image= {projectimg5} title="A social media website (group Project)" link="https://tektok.onrender.com/" />

        <Card image= {projectimg6} title="PWA Editor Web App" link="https://rey-note-taker-01d57d47cbf6.herokuapp.com/" />
      </div>
    </div>
  );
}