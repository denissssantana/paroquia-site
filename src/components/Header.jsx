import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Paróquia N. Sra. do Perpétuo Socorro</h1>
        <nav>
          <ul className="menu">
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Horários</a></li>
            <li><a href="#">Eventos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
