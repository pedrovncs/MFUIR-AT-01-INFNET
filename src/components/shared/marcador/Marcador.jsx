import './Marcador.css';

export default function Marcador({tipo, qtd}) {
  return(
    <div className= {`marcador-${tipo} flex`}>
          <img src={`./src/components/shared/assets/${tipo}.svg`} alt={tipo} title={tipo} />
          <p>{qtd}</p>
    </div>
  )
}