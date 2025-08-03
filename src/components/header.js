import { Link, useLocation } from "react-router-dom";
import '../styles/header.css';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isEjemplosPage = location.pathname === "/ejemplos";

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
          {isHomePage && <a href="#features">Acerca de nosotros</a>}

          <Link 
            to="/ejemplos" 
            className={isEjemplosPage ? "active-link" : ""}
          >
            Templates
          </Link>

          {isHomePage && (
            <Link to="/generador">
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