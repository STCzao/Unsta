import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "86626c66-8b4c-49f2-84fe-3c88e5a7c8d6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Formulario enviado correctamente");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  //Esta logica pertenece a Web3forms; nos permite recibir la informacion del formulario a nuestro email mediante una peticion https

  return (
    <div className="contact" id="Contacto">
      <div className="contact-col">
        <h3>
          Envianos un mensaje <img src={msg_icon} alt="" />
        </h3>
        <p>
          No dude en contactarnos a través del formulario de contacto o
          consultar nuestra información de contacto a continuación. Sus
          comentarios, preguntas y sugerencias son importantes para nosotros, ya
          que nos esforzamos por brindar un servicio excepcional a nuestra
          comunidad universitaria.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Santycoronel04@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +54 3816754618
          </li>
          <li>
            <img src={location_icon} alt="" />
            1139 Amadeo Jacques, Tucumán <br /> T4000, Argentina
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Tu nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            required
          />
          <label>Número telefónico</label>
          <input
            type="tel"
            name="phone"
            placeholder="Ingresa tu número de teléfono"
            required
          />
          <label>Escribe tu mensaje aquí</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Ingresa tu mensaje"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Enviar ahora
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
