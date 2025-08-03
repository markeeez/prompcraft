// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // puedes poner 'auto' si prefieres que no se vea la animación
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
