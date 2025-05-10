import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/header/logo.png'

export default function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false)

  const toggleMenu = () => {
    setMenuAtivo(!menuAtivo)
  }

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo da Paróquia" className="logo-img" />
        <h1 className="titulo-paroquia">
          N. Sra do<br />Perpétuo Socorro
        </h1>
      </div>

      <div className="menu-hamburguer" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`nav ${menuAtivo ? 'ativo' : ''}`}>
        <a href="#historico" onClick={toggleMenu}>Histórico</a>
        <a href="#capelas" onClick={toggleMenu}>Capelas</a>
        <a href="#informacoes" onClick={toggleMenu}>Informações</a>
      </nav>
    </header>
  )
}
