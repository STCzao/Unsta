import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo-unsta-nav.png";

const Navbar = () => {

  const [sticky, setsticky] = useState(false);



  return (
    <nav className="container ">
      <img className="size-logo" src={Logo} alt="" />
      <ul>
        <li>Principal</li>
        <li>Programa</li>
        <li>Acerca de</li>
        <li>Campus</li>
        <li>Testimonios</li>
        <li>
          <button className="btn">Contacto</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
