import './Resposta.css';
import Marcador from '../shared/marcador/Marcador';

export default function Resposta({ infoResp }) {
  return (
    <div className='resposta'>
      <div className='usuarioResposta'>
        <img src='./src/components/shared/assets/profile.svg' alt={infoResp.nomeUser} title={infoResp.nomeUser} />
        <h3>{infoResp.nomeUser}</h3>
        <p>{infoResp.data}</p>
      </div>
      <div className='resposta-content'>
        <p>{infoResp.mensagem}</p>
        <Marcador tipo='curtida' qtd={infoResp.qtdLikes} />
      </div>
    </div>
  )
}