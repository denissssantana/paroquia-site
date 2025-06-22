import React from 'react';
import './historico.css';

// Importe as imagens que vamos usar.
// Você precisará adicionar as imagens corretas na sua pasta de assets.
import fotoGrupo from '../../assets/historico/foto_grupo.png'; // Imagem principal do carrossel
import peFabio from '../../assets/historico/pe_fabio.png';
import peEudezio from '../../assets/historico/pe_eudezio.png';
import peLuciano from '../../assets/historico/pe_luciano.png';

// Dados dos párocos para facilitar a listagem
const parocosData = [
  {
    nome: 'Pe. Fábio',
    periodo: '10/10/2022 - Atualmente',
    foto: peFabio,
  },
  {
    nome: 'Pe. Eudézio',
    periodo: '10/10/2022 - 10/10/2023', // Exemplo
    foto: peEudezio,
  },
  {
    nome: 'Pe. Luciano',
    periodo: '10/10/2021 - 10/10/2020', // Exemplo
    foto: peLuciano,
  },
];

export default function Historico() {
  return (
    // O 'id' é importante para que o link do menu possa rolar até aqui
    <section id="historico" className="historico-section">
      <div className="container">
        <h2 className="historico-title">Nossa História</h2>

        {/* Para o carrossel, começamos com uma imagem estática. 
            Depois podemos adicionar a funcionalidade de slider. */}
        <div className="historico-carousel">
          <img src={fotoGrupo} alt="Grupo da paróquia" />
          {/* A seta do carrossel pode ser adicionada depois com CSS ou um ícone */}
          <div className="carousel-arrow next">&gt;</div>
        </div>

        <blockquote className="historico-quote">
          <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
          <p>"There is no one w because it is pain..."</p>
        </blockquote>

        <div className="parocos-list">
          {/* Usamos o .map() para criar a lista de párocos dinamicamente */}
          {parocosData.map((paroco, index) => (
            <div className="paroco-item" key={index}>
              <img src={paroco.foto} alt={`Foto do ${paroco.nome}`} className="paroco-img" />
              <div className="paroco-info">
                <p><strong>Pároco:</strong> {paroco.nome}</p>
                <p><strong>Período:</strong> {paroco.periodo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}