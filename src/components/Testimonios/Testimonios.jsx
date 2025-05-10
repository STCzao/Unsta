import React, { useRef } from "react";
import "./Testimonios.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonios = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  //Mientras el valor de tx sea menor que 50, tx se trasladara -=25px a la derecha

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  //Mientras el valor de tx sea mayor que 0, tx se trasladara +=25px a la izquierda

  return (
    <div className="testimonios" id="Testimonios">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Benjamin Zelaya</h3>
                  <span>UNSTA, Argentina</span>
                </div>
              </div>
              <p>
                Decidir estudiar en la UNSTA fue una de las mejores decisiones
                que he tomado. La comunidad solidaria, las instalaciones de
                vanguardia y el compromiso con la excelencia académica han
                superado con creces mis expectativas.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Lautaro Leal del Petre</h3>
                  <span>UNSTA, Argentina</span>
                </div>
              </div>
              <p>
                Decidir estudiar en la UNSTA fue una de las mejores decisiones
                que he tomado. La comunidad solidaria, las instalaciones de
                vanguardia y el compromiso con la excelencia académica han
                superado con creces mis expectativas.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Gonzalo Martinez</h3>
                  <span>UNSTA, Argentina</span>
                </div>
              </div>
              <p>
                Decidir estudiar en la UNSTA fue una de las mejores decisiones
                que he tomado. La comunidad solidaria, las instalaciones de
                vanguardia y el compromiso con la excelencia académica han
                superado con creces mis expectativas.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Golosina Gonzalez Lobo</h3>
                  <span>UNSTA, Argentina</span>
                </div>
              </div>
              <p>
                Decidir estudiar en la UNSTA fue una de las mejores decisiones
                que he tomado. La comunidad solidaria, las instalaciones de
                vanguardia y el compromiso con la excelencia académica han
                superado con creces mis expectativas.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonios;
