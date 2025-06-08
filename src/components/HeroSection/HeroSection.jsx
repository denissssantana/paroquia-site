// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import './heroSection.css';
import igrejaImg from '../../assets/hero/igreja.jpg'; // Você precisará colocar sua imagem aqui

export default function HeroSection() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${igrejaImg})` }}>
      <div className="hero-overlay">
        <p className="hero-subtitle">Seja bem vindo ao site da Paróquia</p>
        <h1 className="hero-title">NOSSA SENHORA DO PERPÉTUO SOCORRO</h1>
        <p className="hero-description">Um canal de comunicação e Evangelização</p>
      </div>
    </section>
  );
}