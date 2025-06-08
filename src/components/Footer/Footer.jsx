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
          <div className="contato-item"> {/* Novo container para o item de endereço */}
            <FaMapMarkerAlt /> <span>Rua Paratibe, 370 – Jardim São Paulo / PIRACICABA
            50790-260 – Recife – PE</span>
          </div>
          <div className="contato-item"> {/* Novo container para o item de telefone */}
            <FaPhone /> <span>(81) 3048-1154</span>
          </div>
          <div className="contato-item"> {/* Novo container para o item de e-mail */}
            <FaEnvelope /> <span>paroquiaperpetuosocorrojsp@gmail.com</span>
          </div>
        </div>

        <div className="footer-coluna footer-redes">
          <div className="redes-sociais">
            <a href="https://www.instagram.com/perpetuosocorrojsp/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://web.facebook.com/nsrperpetuo.socorro.7/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.youtube.com/user/ParoquiaPSocorroJSP" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
          <h3>Nossas redes sociais</h3>
        </div>
      </div>

      <div className="footer-copy">
        © 2025 Paróquia N. Sra. do Perpétuo Socorro. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
