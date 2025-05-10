import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about" id="Sobre-nosotros">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>SOBRE LA UNIVERSIDAD</h3>
        <h2>Cultivando a los líderes del mañana</h2>
        <p>
          Embárcate en un viaje educativo transformador con el programa integral
          de nuestra universidad para empoderar a los estudiantes con el
          conocimiento, las habilidades y las experiencias necesarias para
          sobresalir en el dinámico campo de la educación.
        </p>
        <p>
          Con un enfoque en la innovación, el aprendizaje práctico y la tutoría
          personalizada, nuestros programas preparan a los aspirantes a
          educadores para tener un impacto significativo en las aulas, las
          escuelas y las comunidades.
        </p>
        <p>
          Ya sea que aspire a convertirse en maestro, administrador, consejero o
          líder educativo, nuestra diversa gama de programas ofrece el camino
          perfecto para lograr sus objetivos y liberar todo su potencial para
          dar forma al futuro de la educación.
        </p>
      </div>
    </div>
  );
};

export default About;
