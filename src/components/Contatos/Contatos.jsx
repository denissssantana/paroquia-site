import React from 'react';
import './contatos.css';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import logo from "../../assets/logoBranco.png";
; // ajuste o caminho conforme necessário

function Contatos() {
  return (
    <section id="contatos" className="contatos-container">
      <h2 className="titulo-contatos">Contatos</h2>

      <div className="conteudo-contatos">
        <div className="lado-esquerdo">
          <img src={logo} alt="Logo Paróquia" className="logo-contatos" />
          <div className="redes-sociais">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

        <div className="lado-direito">
          <p><FaPhoneAlt /> (11) 1234-5678</p>
          <p><FaWhatsapp /> (11) 91234-5678</p>
          <p><FaEnvelope /> paroquia@email.com</p>
          <p><FaMapMarkerAlt /> Rua da Igreja, 123 - Bairro - Cidade/UF</p>
          <p>Secretaria: Segunda a Sexta - 8h às 17h</p>
        </div>
      </div>
    </section>
  );
}

export default Contatos;
