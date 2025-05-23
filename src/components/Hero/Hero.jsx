import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container" id="Principal">
      <div className="hero-text">
        <h1>Una mejor educación para un mundo mejor</h1>
        <p>Conocé más acerca de nuestro plan de estudios</p>
        <button className="btn">
          Saber más <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
