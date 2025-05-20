import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/header/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  return (
    <header className="header">
      <div className="logo-nome">
        <img src={logo} alt="Logo Paróquia" className="logo-img" />
        <div className="nome-container">
          <h1 className="titulo-paroquia">
            Paróquia
            <br />
            N. Sra. do
            <br />
            Perpétuo Socorro
          </h1>
        </div>
      </div>

      {/* Aqui segue o menu normalmente */}
      <nav className={`nav ${menuAtivo ? "ativo" : ""}`}>
        <Link to="historico" smooth={true} duration={500}>
          Histórico
        </Link>
        <Link to="capelas" smooth={true} duration={500}>
          Capelas
        </Link>
        <Link to="informacoes" smooth={true} duration={500}>
          Informações
        </Link>
        <Link to="contatos" smooth={true} duration={500}>
          Contatos
        </Link>
      </nav>

      <div className="menu-hamburguer" onClick={toggleMenu}>
        <FaBars />
      </div>
    </header>
  );
}
