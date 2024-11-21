import "../assets/style/Header.scss";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#presentation">Présentation</a>
          </li>
          <li>
            <a href="#skills">Compétences</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </nav>
      <h1>Victor Marelle - Étudiant en Développement Web</h1>
    </header>
  );
}

export default Header;
