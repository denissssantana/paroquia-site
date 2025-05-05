import React from 'react'
import './voltaraotopo.css'

export default function VoltarAoTopo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button className="back-to-top" onClick={scrollToTop}>
      <span>↑</span> Voltar ao topo
    </button>
  )
}
