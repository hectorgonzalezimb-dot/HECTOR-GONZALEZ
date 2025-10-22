
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd validate credentials against a backend.
    // For this demo, we'll just simulate a successful login.
    sessionStorage.setItem('isAdmin', 'true');
    navigate('/admin');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle title="Acceso Administrador" colorClass="text-brand-violet" />
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
        <p className="text-center text-gray-600 mb-6">
          Esta es una simulación de acceso. En una aplicación real, necesitarías credenciales válidas. Puedes presionar "Ingresar" para continuar.
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Usuario</label>
            <input type="text" name="username" id="username" defaultValue="admin" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-violet focus:border-brand-violet" />
          </div>
          <div>
            <label htmlFor="password"className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input type="password" name="password" id="password" defaultValue="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-violet focus:border-brand-violet" />
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-violet hover:bg-brand-violet/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-violet transition-colors">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;