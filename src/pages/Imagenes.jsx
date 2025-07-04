import React from 'react'
import { Link } from 'react-router-dom';

const Imagenes = () => {
  return (
    <div>
          <h2>Página de Imagenes del campus</h2>
          <p>Aquí va el contenido detallado de las imagenes del campus.</p>
          <button>
            <Link to="/">Volver al Inicio</Link>
          </button>
        </div>
  )
}

export default Imagenes;