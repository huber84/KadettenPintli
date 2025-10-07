import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <img src={logo} alt="Kadetten-Pintli Logo" className="logo" />
        <nav>
          <Link to="/" className={pathname === "/" ? "active" : ""}>Start</Link>
          <Link to="/preise" className={pathname === "/preise" ? "active" : ""}>Preisliste</Link>
          <Link to="/kontakt" className={pathname === "/kontakt" ? "active" : ""}>Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}
