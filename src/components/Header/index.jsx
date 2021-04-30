import { Link } from "react-router-dom";
import "./style.scss";
import logo from './../../Assets/images/logo.svg'

function Header() {

  return (
    <header className="header">
      <Link to={`/${window.location.pathname.split("/")[1]}`}>
        <img src={logo} alt="Logo" />
      </Link>
    </header>
  );
}

export default Header;
