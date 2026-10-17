import React from 'react'
import "./Hero.css";
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
  <div>
      {/* <!--HERO SECTION--> */}
      <div className="hero-section">
        <div className="overlay">
        <div className="text">
            <h1>WELCONE TO SAMWELL UNIVERSITY</h1>
            <p>WHERE LEARNING STARTS, DIGITAL LEARNING. learn fullstack development, UI/UX, gaphics...</p>
            <div>
            <Link to="/Login">
                <button>GET STARTED</button>
              </Link>
          </div>
          </div>
      </div>
    </div>
</div>
  )
}

export default Hero
