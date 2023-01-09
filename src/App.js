import React, { useState } from 'react';
import './styles.css';

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);


  const [currentSlide, setCurrentSlide] = React.useState(0);
  const nextSlide = () => setCurrentSlide((currentSlide + 1) % 5);
  const prevSlide = () =>
    setCurrentSlide((currentSlide + 4) % 5);

  const captions = [
    "Iron Man",
    "Captain America",
    "Black Widow",
    "Thor",
    "Hulk"
  ];

  const [typingIndex, setTypingIndex] = React.useState(0);
  const typingText = "Large Language Models are the End Game.";
  const typingInterval = 300;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTypingIndex((typingIndex + 1) % (typingText.length + 1));
    }, typingInterval);
    return () => clearInterval(interval);
  }, [typingIndex, currentSlide]);




  return (
    <div className="App">
      <header>
        <h1>This is the End Game</h1>
      </header>
<nav style={{ textAlign: "right" }}>
<button style={{ float: "right", fontSize: "16px", color: "#333", fontFamily: "sans-serif" }} className={menuOpen ? "menu-open" : ""} onClick={toggleMenu}>Menu</button>
{menuOpen && (
    <ul style={{ display: "inline-block" }}>
<li style={{ marginLeft: "10px", fontSize: "16px", color: "#333", fontFamily: "sans-serif" }}>
  <a href="#">About</a>
</li>
<li style={{ marginLeft: "10px", fontSize: "16px", color: "#333", fontFamily: "sans-serif" }}>
  <a href="#">GitHub</a>
      </li>
    </ul>
  )}
</nav>

      <main>

        <div className="posts">
          <div className="post">
          <p>
          	  <h2 style={{color: "red"}}>Iron Man</h2>
              Tony Stark was a genius inventor and businessman who became Iron
              Man to fight crime and protect the world. With his advanced
              technology and suit of armor, he became a founding member of the
              Avengers and an iconic superhero.
            </p>
          </div>
          <div className="post">
            <h2 style={{color: "blue"}}>Captain America</h2>
            <p>
              Steve Rogers was a frail man transformed into the super-soldier
              Captain America after taking a dose of a "Super-Soldier serum".
              He fought for the United States during World War II and became
              one of the greatest symbols of American patriotism.
            </p>
          </div>
          <div className="post">
            <h2>Black Widow</h2>
            <p>
              Natasha Romanoff, also known as Black Widow, is a skilled
              assassin and spy who joined the Avengers. Trained in the art of
              espionage and gifted with exceptional martial arts skills, Black
              Widow is a formidable member of the team.
            </p>
          </div>
          <div className="post">
            <h2>Thor</h2>
            <p>
              Thor is a powerful Asgardian prince and god of thunder who wields the magical hammer Mjolnir. 
              He is a member of the Avengers and a strong ally of Earth.
            </p>
          </div>
          <div className="post">
            <h2  style={{color: "green"}}>Hulk</h2>
            <p>
              Dr. Bruce Banner is a brilliant scientist who, after being exposed to gamma radiation, transforms into the giant green-skinned monster known as the Hulk. 
              He is a powerful member of the Avengers, but struggles with controlling his rage.
            </p>
          </div>
        </div>
	   </main>

      <footer className="pixelated-footer">
        {typingText.slice(0, typingIndex)}
      </footer>

	</div>
	);
}

export default App;
