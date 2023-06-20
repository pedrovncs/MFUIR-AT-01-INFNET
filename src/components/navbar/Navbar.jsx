import styles from './Navbar.module.css';

export default function Navbar() {
  function toggleMenu() {
    const qS = _ => document.querySelector(_);
    const qSA = _ => document.querySelectorAll(_);

    const navItem = qS(`.${styles.navItem}`);
    const logo = qS(`.${styles.logo}`);
    const toggleButton = qS(`.${styles.toggle}`);

    if (navItem.classList.contains(styles.flag)) {
      toggleButton.src = './src/components/navbar/assets/menu.svg';
      logo.classList.remove(styles.flag);
      qSA(`.${styles.navItem}`).forEach((li) => li.classList.remove(styles.flag));
    } else {
      logo.classList.add(styles.flag);
      qSA(`.${styles.navItem}`).forEach((li) => li.classList.add(styles.flag));
      toggleButton.src = './src/components/navbar/assets/close.svg';
    }
  }

  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles.logo}>
          <a href="#"><h1>Fórum</h1></a>
        </li>
        <li className={styles.navItem}>
          <img src='./src/components/navbar/assets/home.svg' alt='Home' title='Home' />
          <a href="#">Home</a>
        </li>
        <li className={styles.navItem}>
          <img src='./src/components/shared/assets/profile.svg' alt='Conta' title='Conta' />
          <a href="#">Minha Conta</a>
        </li>
        <li className={styles.navItem}>
          <img src='./src/components/navbar/assets/mail.svg' alt='Mensagem' title='Mensagem' />
          <a href="#">Mensagem</a>
        </li>
        <li className={styles.navItem}>
          <img  src='./src/components/navbar/assets/settings.svg' alt='Configurações' title='Configurações' />
          <a href="#">Configurações</a>
        </li>
        <li onClick={toggleMenu}>
          <img className={styles.toggle}  src='./src/components/navbar/assets/menu.svg' alt='Menu' title='Menu' />
        </li>
      </ul>
    </nav>
  );
}
