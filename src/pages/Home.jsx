import React from 'react'
import Capelas from '../components/Capelas/Capelas'
import Historico from '../components/Historico/Historico'
import Informacoes from '../components/Informacoes/Informacoes'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Contatos from '../components/Contatos/Contatos'

export default function Home() {
  return (
    <>
      <Header />
      <Historico />
      <Capelas />
      <Informacoes />
      <Contatos />
      <Footer />
    </>
  )
}
