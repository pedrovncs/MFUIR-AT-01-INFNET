import './Navbar.css';

export default function Navbar() {
  function toggleMenu() {
    const qS = (selector) => document.querySelector(selector);
    const qSA = (selector) => document.querySelectorAll(selector);
    const navItem = qS('.navItem');
    const logo = qS('.logo');
    const toggleButton = qS('.toggle');

    if (navItem.classList.contains('flag')) {
      toggleButton.src = './src/components/navbar/assets/menu.svg';
      logo.classList.remove('flag');
      qSA('.navItem').forEach((li) => li.classList.remove('flag'));
    } else {
      logo.classList.add('flag');
      qSA('.navItem').forEach((li) => li.classList.add('flag'));
      toggleButton.src = './src/components/navbar/assets/close.svg';
    }
  }

  return (
    <nav>
      <ul className="navbar">
        <li className="logo">
          <a href="#"><h1>Fórum</h1></a>
        </li>
        <li className="navItem">
          <img src='./src/components/navbar/assets/home.svg' alt='Home' title='Home' />
          <a href="#">Home</a>
        </li>
        <li className="navItem">
          <img src='./src/components/shared/assets/profile.svg' alt='Conta' title='Conta' />
          <a href="#">Minha Conta</a>
        </li>
        <li className="navItem">
           <img src='./src/components/navbar/assets/mail.svg' alt='Mensagem' title='Mensagem' />
          <a href="#">Mensagem</a>
        </li>
        <li className="navItem">
          <img  src='./src/components/navbar/assets/settings.svg' alt='Configurações' title='Configurações' />
          <a href="#">Configurações</a>
        </li>
        <li onClick={toggleMenu}>
          <img className="toggle"  src='./src/components/navbar/assets/menu.svg' alt='Menu' title='Menu' />
        </li>
      </ul>
    </nav>
  );
}
