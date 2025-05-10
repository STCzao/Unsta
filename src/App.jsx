import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonios from "./components/Testimonios/Testimonios";
import Contact from "./components/Contact.jsx/Contact";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Nuestro PROGRAMA" title="¿Qué ofrecemos?" />
        <Programs />
        <About />
        <Title subTitle="Galería" title="Fotos del campus" />
        <Campus />
        <Title subTitle="Testimonios" title="¿Qué dicen nuestros estudiantes?"/>
        <Testimonios/>
        <Title subTitle="Contactanos" title="Ponte en contacto"/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
