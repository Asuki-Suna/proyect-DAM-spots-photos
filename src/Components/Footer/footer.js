import "./footer.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {

  return (
    <div>
      <p>© 2023 Canary Photos Todos los derechos reservados Política de Privacidad y Cookies | Condiciones de Venta</p>
      <div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Email de contacto: joelMH500@gmail.com</p>
        </div>
        <div className="github">
          <FontAwesomeIcon icon={faGithub} />
          <li><a href="https://github.com/Asuki-Suna">github</a></li>
        </div>
      </div>
    </div>
  );
}

export default Footer