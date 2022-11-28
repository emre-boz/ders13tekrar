import {Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Ana Ekran</Link>
          <Link to="/ekran1">Ekran 1</Link>
          <Link to="/ekran2">Ekran 2</Link>
          <Link to="/kategori/kadin">Kadin</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
