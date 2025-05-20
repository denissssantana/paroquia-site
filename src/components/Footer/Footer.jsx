// src/components/Footer/Footer.jsx
import React from "react";
import "./footer.css";
import logo from "../../assets/logoBranco.png";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-coluna footer-logo">
          <img src={logo} alt="Logo Paróquia" className="footer-logo-img" />
          <h2>Paróquia<br />N. Sra. do Perpétuo Socorro</h2>
        </div>

        <div className="footer-coluna footer-contato">
          <span><FaMapMarkerAlt /> Rua Exemplo, 123 - Bairro</span>
          <span><FaPhone /> (11) 99999-9999</span>
          <span><FaEnvelope /> paroquia@email.com</span>
        </div>

        <div className="footer-coluna footer-redes">
          <div className="redes-sociais">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        © 2025 Paróquia N. Sra. do Perpétuo Socorro. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
