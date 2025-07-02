import React, { use, useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const [capturarNombre, setCapturarNombre] = useState("");
  const [capturarTelefono, setCapturarTelefono] = useState("");
  const [capturarMensaje, setCapturarMensaje] = useState("");

  const [errors, setErrors] = useState({});

  const onSubmit = async (event) => {
    event.preventDefault();

    let newErrors = {};
    let isValid = true;

    if (capturarNombre.trim() === "") {
      newErrors.nombre = "El nombre es obligatorio.";
      isValid = false;
    }

    if (capturarTelefono.trim() === "") {
      newErrors.telefono = "El teléfono es obligatorio.";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(capturarTelefono)) {
      newErrors.telefono = "Ingresa un número de teléfono válido.";
      isValid = false;
    }

    if (capturarMensaje.trim() === "") {
      newErrors.mensaje = "El mensaje es obligatorio.";
      isValid = false;
    } else if (capturarMensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      setResult("Por favor, completa todos los campos");
      return;
    }

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
      setCapturarNombre("");
      setCapturarTelefono("");
      setCapturarMensaje("");
      setErrors({});
    } else {
      console.log("Error", data);
      setResult(
        "Ocurrió un errror al enviar el formulario. Por favor, intenta de nuevo."
      );
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
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            value={capturarNombre}
            onChange={(e) => setCapturarNombre(e.target.value)}
          />
          {errors.nombre && (
            <span className="error-message">{errors.nombre}</span>
          )}

          <label>Teléfono</label>
          <input
            type="tel"
            name="phone"
            placeholder="Ingresa tu número de teléfono"
            value={capturarTelefono}
            onChange={(e) => setCapturarTelefono(e.target.value)}
          />
          {errors.telefono && (
            <span className="error-message">{errors.telefono}</span>
          )}
          <label>Mensaje</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Ingresa tu mensaje"
            value={capturarMensaje}
            onChange={(e) => setCapturarMensaje(e.target.value)}
          ></textarea>
          {errors.mensaje && (
            <span className="error-message">{errors.mensaje}</span>
          )}
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
