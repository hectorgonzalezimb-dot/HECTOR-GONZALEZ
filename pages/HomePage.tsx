import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articlesApi } from '../data/api';
import { Article } from '../types';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <Link to={`/articulos/${article.id}`} className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
    <img className="h-56 w-full object-cover" src={article.imageUrl} alt={article.title} />
    <div className="p-6">
      <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-violet transition-colors duration-300">{article.title}</h3>
      <p className="text-sm text-gray-500 mt-2">Por {article.author}</p>
      <p className="text-brand-text mt-3 text-base">{article.summary}</p>
    </div>
  </Link>
);


const HomePage: React.FC = () => {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);

  useEffect(() => {
    const allArticles = articlesApi.getAll();
    setFeaturedArticles(allArticles.filter((article) => article.featured));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-brand-violet text-white text-center py-20 md:py-32 px-4 overflow-hidden">
         <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://picsum.photos/seed/portada/1920/1080')"}}></div>
         <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold">Revista Señoritas</h1>
            <p className="mt-4 text-xl md:text-2xl opacity-90">Una mirada sensible sobre la formación docente</p>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-text mb-10">Artículos Destacados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;