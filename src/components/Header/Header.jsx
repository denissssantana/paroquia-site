import React, { useState } from 'react'
import './header.css'

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  const alternarMenu = () => {
    setMenuAberto(!menuAberto)
  }

  const fecharMenu = () => {
    setMenuAberto(false)
  }

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo da paróquia" />
        <h1>N. Sra do Perpétuo Socorro</h1>
      </div>

      {/* Ícone hamburguer (mobile) */}
      <div className="menu-hamburguer" onClick={alternarMenu}>
        ☰
      </div>

      {/* Navegação */}
      <nav className={`nav ${menuAberto ? 'ativo' : ''}`}>
        <a href="#historico" onClick={fecharMenu}>Histórico</a>
        <a href="#capelas" onClick={fecharMenu}>Capelas</a>
        <a href="#informacoes" onClick={fecharMenu}>Informações</a>
      </nav>
    </header>
  )
}
