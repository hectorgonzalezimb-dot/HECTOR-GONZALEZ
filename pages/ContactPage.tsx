
import React from 'react';
import PageTitle from '../components/PageTitle';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../components/Icons';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would handle form submission to a backend service.
    alert('¡Gracias por tu mensaje! En una aplicación real, esto se enviaría a nuestro equipo.');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle title="Contacto" subtitle="¿Tenés alguna duda, sugerencia o querés colaborar con nosotras? ¡Escribinos!" colorClass="text-brand-violet" />

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-violet focus:border-brand-violet" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-violet focus:border-brand-violet" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea name="message" id="message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-violet focus:border-brand-violet"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-violet hover:bg-brand-violet/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-violet transition-colors">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        {/* Info & Socials */}
        <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-brand-text">Seguinos en nuestras redes</h3>
            <p className="mt-2 text-gray-600">Enterate de las últimas novedades y participá de la conversación.</p>
            <div className="mt-6 flex space-x-6">
                <a href="#" className="text-brand-violet hover:text-brand-pink transition-colors" aria-label="Instagram">
                    <InstagramIcon className="h-8 w-8" />
                </a>
                <a href="#" className="text-brand-violet hover:text-brand-pink transition-colors" aria-label="Facebook">
                    <FacebookIcon className="h-8 w-8" />
                </a>
                <a href="#" className="text-brand-violet hover:text-brand-pink transition-colors" aria-label="YouTube">
                    <YoutubeIcon className="h-8 w-8" />
                </a>
            </div>
             <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-brand-text">Correo de la revista</h3>
                <p className="mt-1 text-gray-600">
                    <a href="mailto:info@revistaseñoritas.com" className="hover:underline">info@revistaseñoritas.com</a>
                </p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
