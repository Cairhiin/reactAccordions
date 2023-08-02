import "./index.css";

const Nav: () => JSX.Element = () => (
  <nav className="nav" aria-labelledby="mainmenulabel">
    <h1 className="nav__title" id="mainmenulabel">
      {".name {"} <span>Frank van de Voorde</span> {"}"}
    </h1>
    <ul className="nav__menu">
      <li>
        <a href="#accordion-1">Accordion 1</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
