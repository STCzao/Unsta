import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonios from "./components/Testimonios/Testimonios";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanEstudio from "../src/pages/PlanEstudio.jsx";
import Imagenes from "../src/pages/Imagenes.jsx";

const App = () => {
  const [PlayState, setPlayState] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <div className="container">
                  <Title subTitle="Nuestro PROGRAMA" title="¿Qué ofrecemos?" />
                  <Programs />
                  <About setPlayState={setPlayState} />
                  <Title subTitle="Galería" title="Fotos del campus" />
                  <Campus />
                  <Title
                    subTitle="Testimonios"
                    title="¿Qué dicen nuestros estudiantes?"
                  />
                  <Testimonios />
                  <Title subTitle="Contactanos" title="Ponte en contacto" />
                  <Contact />
                  <Footer />
                </div>
              </>
            }
          />
          <Route path="/planes" element={<PlanEstudio />} />
          <Route path="/imagenes" element={<Imagenes />} />
        </Routes>
        <VideoPlayer PlayState={PlayState} setPlayState={setPlayState} />
      </div>
    </BrowserRouter>
  );
};

export default App;
