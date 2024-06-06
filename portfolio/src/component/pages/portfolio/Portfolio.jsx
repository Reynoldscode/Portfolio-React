import React from 'react';
import './Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

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
      <p>Below are my recent projects, feel free to click the cards to link to the project</p>
      
      <div className="card-container row">
        <Card image="./p1.png" title="Creating A portfolio Website" link="https://reynoldscode.github.io/my_portfolio/" />

        <Card image="./p2.png" title="Note Taker" link="https://note-taker-wezz.onrender.com/" />


        <Card image="./p3.png" title="Personal Blog" link="https://reynoldscode.github.io/personal_blog/" />

        <Card image="./p4.png" title="A group Project Project" link="https://tywalter.github.io/brew-bound/" />

        <Card image="./p5.png" title="A social media website (group Project)" link="https://tektok.onrender.com/" />

        <Card image="./p6.png" title="PWA Editor Web App" link="https://rey-note-taker-01d57d47cbf6.herokuapp.com/" />
      </div>
    </div>
  );
}