import React, { useState, useMemo, useEffect } from 'react';
import { galleryApi } from '../data/api';
import PageTitle from '../components/PageTitle';
import { GalleryCategory, GalleryImage } from '../types';

const categories: GalleryCategory[] = ['Aulas', 'Juegos', 'Materiales', 'Proyectos'];

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'Todos'>('Todos');
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    setImages(galleryApi.getAll());
  }, []);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'Todos') {
      return images;
    }
    return images.filter(image => image.category === activeCategory);
  }, [activeCategory, images]);
  
  const categoryColors: Record<GalleryCategory, string> = {
    Aulas: 'bg-brand-pink',
    Juegos: 'bg-brand-orange',
    Materiales: 'bg-brand-celeste',
    Proyectos: 'bg-brand-green',
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle title="Galería de Imágenes" subtitle="Un recorrido visual por los espacios, materiales y momentos que dan vida a la Educación Inicial." colorClass="text-brand-celeste" />

      <div className="flex justify-center flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory('Todos')}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
            activeCategory === 'Todos' ? 'bg-brand-violet text-white' : 'bg-white text-brand-text hover:bg-gray-200'
          }`}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
              activeCategory === category ? `${categoryColors[category]} text-white` : 'bg-white text-brand-text hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div key={image.id} className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md">
            <img src={image.imageUrl} alt={image.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end p-4">
              <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-4 group-hover:translate-y-0">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;