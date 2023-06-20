import styles from './Form.module.css';

export default function Form({user}){
  const handleSubmit = (event) =>{
    event.preventDefault();
  }
  
  return(
    <div className={styles.inputForm}>
      <div className={styles.userAutenticado}>
        <img src='./src/components/shared/assets/profile.svg' alt={user} title={user} />
        <h3>{user}</h3>
      </div>
    <form onSubmit={handleSubmit}> 
      <textarea rows='2' cols='40'></textarea>
      <button type='submit'>Enviar</button> 
    </form>
  </div>
  )
}