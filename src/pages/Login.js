import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/');
  };

  return (
    <div className="ia-login-page">
      <header className="ia-login-header">
        <h1>PromptCraft</h1>
        <h2>Domina el arte de los prompts con IA</h2>
      </header>

      <div className="ia-login-content">
        <div className="ia-login-box">
          <LoginForm onLoginSuccess={handleLoginSuccess} />
          
          <div className="ia-login-links">
            <Link to="/forgot-password" className="ia-link">¿Olvidaste tu contraseña?</Link>
            <p>¿No tienes cuenta? <Link to="/register" className="ia-link ia-link-bold">Regístrate ahora</Link></p>
          </div>
        </div>
      </div>

      <div className="ia-login-footer">
        <p>Potencia tu creatividad con IA</p>
        <p className="ia-footer-subtext">Diseñado para que cualquiera pueda crear prompts profesionales</p>
      </div>
    </div>
  );
}

export default Login;