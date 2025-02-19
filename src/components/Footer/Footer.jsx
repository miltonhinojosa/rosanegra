import React from 'react'




const Footer = () => {
  return (
    <footer className="bg-purple-950 text-white text-center py-6 mt-0">
      <div className="container mx-auto px-4">
        <p className="footer-text mb-3">
          Este Proyecto Fue Realizado por los Estudiantes Milton Hinojosa Loayza y Hector Macario Soto Ayali de la U.A.T.F el Año 2025.
        </p>
        <ul className="list-none flex justify-center gap-3 mt-2">
          <li>
            <a href="/privacidad" className="footer-link text-white hover:underline">Política de Privacidad</a>
          </li>
          <li>|</li>
          <li>
            <a href="/terminos" className="footer-link text-white hover:underline">Términos y Condiciones</a>
          </li>
          <li>|</li>
          <li>
            <a href="/contacto" className="footer-link text-white hover:underline">Contáctanos</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;



