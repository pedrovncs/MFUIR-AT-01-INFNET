import './Relacionados.css'
import RelTopico from './reltopico/RelTopico'

export default function Relacionados(){
  return(
    <div className='relacionados'>
      <RelTopico tipo='novo' titulo1='Novo Tópico 1' titulo2='Novo Tópico 2' titulo3='Novo Tópico 3' />
      <RelTopico tipo='curtida' titulo1='Mais Curtido 1' titulo2=' Mais Curtido 2' titulo3=' Mais Curtido 3' />
      <RelTopico tipo='resposta' titulo1='Mais Comentado 1' titulo2='Mais comentado 2' titulo3='Mais comentado 3' />
      <div className='github'>
        <a href='https://github.com/pedrovncs/MFUIR-AT-01-INFNET'>Github @pedrovncs</a>
        <a href='https://github.com/pedrovncs/MFUIR-AT-01-INFNET'>
                <img src='./src/components/relacionados/assets/github.svg' alt='Github' title='pedrovncs'/>
        </a>
      </div>
    </div>
  )
}