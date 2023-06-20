import Marcador from '../shared/marcador/Marcador'
import './Topico.css'

export default function Topico({ infoTopico }) {
  return (
    <div className='topico-principal'>
      <div className='autor'>
        <div>
          <img src='./src/components/shared/assets/profile.svg' alt={infoTopico.nomeAutor} title={infoTopico.nomeAutor} />
          <h3>{infoTopico.nomeAutor}</h3>
        </div>
        <p>{infoTopico.data}</p>
      </div>
      <div className='topico-content'>
        <h1>{infoTopico.titulo}</h1>
        <h3>{infoTopico.subtitulo}</h3>
        <p>{infoTopico.mensagem}</p>
      </div>
      <div className='marcadores'>
        <Marcador tipo='resposta' qtd='5' />
        <Marcador tipo='curtida' qtd='345' />
      </div>
    </div>
  )
}