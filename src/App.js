import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import CookiePopup from './components/cookiesPopup';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';
import './styles/main.css';
import { lazy, Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import { Analytics } from '@vercel/analytics/react';

// Lazy load de páginas
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Ejemplos = lazy(() => import('./pages/Ejemplos'));
const Generador = lazy(() => import('./pages/Generador'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Privacidad = lazy(() => import('./pages/Privacidad'));
const AvisoLegal = lazy(() => import('./pages/AvisoLegal'));

const AppContent = () => {
  const location = useLocation(); 
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Rutas donde no mostrar el header
  const noHeaderPaths = ['/login']; 

  // Rutas donde no mostrar el popup de cookies
  const noCookiePaths = ['/login']; 

  const shouldShowHeader = !noHeaderPaths.includes(location.pathname);
  const shouldShowCookie = isMounted && !noCookiePaths.includes(location.pathname);

    return (
      <div className="app">
        {shouldShowHeader && <Header />}

        <div className="layout-container">
           <ScrollToTop />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/ejemplos" element={<Ejemplos />} />
              <Route path="/generador" element={<Generador />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/privacidad" element={<Privacidad />} />
              <Route path="/avisoLegal" element={<AvisoLegal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>

        {shouldShowCookie && <CookiePopup />}
      </div>
    );
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <AppContent /> 
      </Suspense>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
