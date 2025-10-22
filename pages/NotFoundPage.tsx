
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-6xl font-bold text-brand-violet">404</h1>
      <h2 className="text-3xl font-semibold text-brand-text mt-4">Página no encontrada</h2>
      <p className="text-gray-600 mt-2 max-w-md">
        Lo sentimos, la página que estás buscando no existe o fue movida.
      </p>
      <Link 
        to="/"
        className="mt-8 inline-block bg-brand-pink text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-pink/90 transition-colors"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
