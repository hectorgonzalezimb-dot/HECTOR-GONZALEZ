
import React from 'react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-violet text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div>
            <h3 className="font-bold text-lg">Contacto</h3>
            <p className="text-sm opacity-90">info@revistaseñoritas.com</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
              <YoutubeIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm opacity-80">
          <p>Revista Señoritas — Comunicación y formación docente</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
