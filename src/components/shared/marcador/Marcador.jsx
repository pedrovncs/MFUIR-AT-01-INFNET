import styles from './Marcador.module.css';

export default function Marcador({tipo, qtd}) {
  return(
    <div className={styles["marcador-flex"]}>
          <img src={`./src/components/shared/assets/${tipo}.svg`} alt={tipo} title={tipo} />
          <p>{qtd}</p>
    </div>
  )
}