import React, { useState, useEffect } from "react"; // Importe useEffect
import "./header.css";
import logo from "../../assets/header/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const closeMenu = () => {
    setMenuAtivo(false);
  };

  // NOVO: useEffect para fechar o menu ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      // Se o menu estiver ativo (aberto), feche-o
      if (menuAtivo) {
        closeMenu();
      }
    };

    // Adiciona o ouvinte de evento de scroll na janela
    window.addEventListener("scroll", handleScroll);

    // Função de limpeza: remove o ouvinte de evento quando o componente é desmontado
    // Isso é crucial para evitar vazamentos de memória e comportamentos indesejados
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuAtivo]); // O efeito é re-executado se 'menuAtivo' mudar.

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

      <nav className={`nav ${menuAtivo ? "ativo" : ""}`}>
        <Link to="historico" smooth={true} duration={500} onClick={closeMenu}>
          Histórico
        </Link>
        <Link to="capelas" smooth={true} duration={500} onClick={closeMenu}>
          Capelas
        </Link>
        <Link to="informacoes" smooth={true} duration={500} onClick={closeMenu}>
          Informações
        </Link>
        <Link to="contatos" smooth={true} duration={500} onClick={closeMenu}>
          Contatos
        </Link>
      </nav>

      <div className="menu-hamburguer" onClick={toggleMenu}>
        <FaBars />
      </div>
    </header>
  );
}