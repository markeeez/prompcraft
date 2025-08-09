import { Link, useLocation } from "react-router-dom";
import '../styles/header.css';

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isEjemplosPage = location.pathname === "/ejemplos";
  const isGeneradorPage = location.pathname === "/generador";

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">PromptCraft</Link>
        </div>

        <div className="header-center">
          <img
            src="/logo.png"
            alt="Logo PromptCraft"
            className="header-logo"
          />
        </div>

        <nav className="nav">
          {isHomePage && (
            <a href="#features" className="nav-link">
              Acerca de nosotros
            </a>
          )}

          <Link
            to="/ejemplos"
            className={`nav-link ${isEjemplosPage ? "active-link" : ""}`}
            aria-current={isEjemplosPage ? "page" : undefined}
          >
            Templates
          </Link>

          {isHomePage && (
            <Link
              to="/generador"
              className={`nav-link ${isGeneradorPage ? "active-link" : ""}`}
              aria-current={isGeneradorPage ? "page" : undefined}
            >
              <button className="home-button">Probar Ahora</button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;




          /* boton login
          <button 
            className="home-button" 
            onClick={() => navigate('/login')}
          >
            Acceder
          </button>
          */