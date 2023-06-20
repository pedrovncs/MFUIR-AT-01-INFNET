import './RelTopico.css'

export default function RelTopico({tipo, titulo1, titulo2, titulo3}){
  return(
    <div className='relacionado-card'>
      <img src={`./src/components/shared/assets/${tipo}.svg`} alt={tipo} title={tipo} />
      <a href='#'>{titulo1}</a>
      <a href='#'>{titulo2}</a>
      <a href='#'>{titulo3}</a>
    </div>
  )
}