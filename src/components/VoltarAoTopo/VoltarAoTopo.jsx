import React, { useEffect, useState } from 'react';
import './voltaraotopo.css';
import { FaArrowUp } from 'react-icons/fa';

export default function VoltarAoTopo() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = () => {
      setVisivel(window.scrollY > 100);
    };
    window.addEventListener('scroll', aoRolar);
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  const subir = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      className={`voltar-ao-topo ${visivel ? 'ativo' : ''}`}
      onClick={subir}
    >
      <FaArrowUp />
      <span>Topo</span>
    </button>
  );
}
