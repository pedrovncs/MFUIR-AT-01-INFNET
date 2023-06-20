import './App.css'
import topico from '../public/data/topico.json'
import resp from '../public/data/resposta.json'

import Navbar from './components/navbar/Navbar'
import Topico from './components/topico/Topico'
import Form from './components/form/Form'
import Resposta from './components/resposta/Resposta'
import Footer from './components/footer/Footer'
import Relacionados from './components/relacionados/Relacionados'


export default function App() {
  const random = () => Math.floor(Math.random()*resp.length);
  return (
    <main>
      <Navbar />
      <div className='main-content'>
        <Topico infoTopico={topico}/>
        <Form user='Pedro' />
        <Resposta infoResp={resp[random()]} />
        <Resposta infoResp={resp[random()]} />
        <Resposta infoResp={resp[random()]} />
      </div>
      <Relacionados />
      <Footer />
    </main>
  )
}
