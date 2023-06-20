import styles from './Resposta.module.css';
import Marcador from '../shared/marcador/Marcador';

export default function Resposta({ infoResp }) {
  return (
    <div className={styles.resposta}>
      <div className={styles.usuarioResposta}>
        <img src='./src/components/shared/assets/profile.svg' alt={infoResp.nomeUser} title={infoResp.nomeUser} />
        <h3>{infoResp.nomeUser}</h3>
        <p>{infoResp.data}</p>
      </div>
      <div className={styles["resposta-content"]}>
        <p>{infoResp.mensagem}</p>
        <Marcador tipo='curtida' qtd={infoResp.qtdLikes} />
      </div>
    </div>
  )
}