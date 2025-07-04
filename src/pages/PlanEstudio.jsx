import React from "react";
import { Link } from "react-router-dom";
import "../pages/PlanEstudio.css";
import CardsPages from "../components/CardsPages/CardsPages";
import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";

const PlanEstudio = () => {
  return (
      <div className="pe-container">
        <div>
          <Title
            subTitle={
              "SC - Sede Central | YB - Sede Yerba Buena | CUC - Sede Concepción | CEOP - Sede Buenos Aires | CCC - Ciclo de Complementación Curricular"
            }
            title={"Oferta acádemica"}
          />
        </div>
        <div>
          <button className="btn dark-btn">
            <Link to="/">Volver a la página principal</Link>
          </button>
        </div>
        <div className="pe-cards">
          <CardsPages />
        </div>
        <div className="pe-footer">
          <Footer/>
        </div>
      </div>
      
    
  );
};

export default PlanEstudio;
