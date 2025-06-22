import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/header/logo.png";
import { FaBars } from "react-icons/fa";

// REMOVEMOS a importação do 'Link' de 'react-scroll'

export default function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const closeMenu = () => {
    setMenuAtivo(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (menuAtivo) {
        closeMenu();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuAtivo]);

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

      {/* AGORA USAMOS UMA TAG <nav> PADRÃO COM LINKS <a> */}
      <nav className={`nav ${menuAtivo ? "ativo" : ""}`}>
        {/* O href aponta para o 'id' da seção que você quer rolar */}
        <a href="#historico" onClick={closeMenu}>
          Histórico
        </a>
        <a href="#capelas" onClick={closeMenu}>
          Capelas
        </a>
        <a href="#informacoes" onClick={closeMenu}>
          Informações
        </a>
        <a href="#contatos" onClick={closeMenu}>
          Contatos
        </a>
      </nav>

      <div className="menu-hamburguer" onClick={toggleMenu}>
        <FaBars />
      </div>
    </header>
  );
}