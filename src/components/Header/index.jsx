import { Link } from "react-router-dom";
import "./style.scss";
import logo from './../../Assets/images/logo.svg'
//prova

function Header() {
  return (
    <header className="header">
      <Link to="/:lang">
        <img src={logo} alt="Logo" />
      </Link>
    </header>
  );
}

export default Header;
