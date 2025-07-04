import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero container" id="Principal">
      <div className="hero-text">
        <h1>Educamos para un mundo mejor</h1>
        <p>Conocé más acerca de nuestra oferta acádemica</p>
        <button
          className="btn"
          onClick={() => {
            navigate("/planes");
          }}
        >
          Saber más <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
