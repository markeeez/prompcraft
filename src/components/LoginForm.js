import React, { useState } from 'react';
import '../styles/login.css';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      onLoginSuccess && onLoginSuccess();
    }
  };

  return (
    <div className="promptcraft-form-container">
      <h3 className="form-title">Continúa tu viaje creativo</h3>
      <p className="form-subtitle">Accede para desbloquear todo el potencial de IA</p>

      <form className="ia-form" onSubmit={handleSubmit}>
        <div className="ia-input-group">
          <label htmlFor="email" className="ia-input-label">Email</label>
          <input
            type="email"
            id="email"
            className="ia-input"
            placeholder="tu@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="ia-input-group">
          <label htmlFor="password" className="ia-input-label">Contraseña</label>
          <input
            type="password"
            id="password"
            className="ia-input"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="ia-primary-button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;