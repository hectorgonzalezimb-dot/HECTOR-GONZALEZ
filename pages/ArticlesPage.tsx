import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articlesApi } from '../data/api';
import PageTitle from '../components/PageTitle';
import { Article } from '../types';

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(articlesApi.getAll());
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle title="Artículos" subtitle="Explorá nuestras publicaciones sobre pedagogía, juego y la vida en el Nivel Inicial." colorClass="text-brand-pink" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link to={`/articulos/${article.id}`} key={article.id} className="group flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img className="h-56 w-full object-cover" src={article.imageUrl} alt={article.title} />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-violet transition-colors">{article.title}</h3>
              <p className="text-sm text-gray-500 mt-2">Por {article.author} &bull; {new Date(article.publishDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="text-brand-text mt-3 text-base flex-grow">{article.summary}</p>
              <span className="mt-4 text-brand-violet font-semibold self-start group-hover:underline">Leer más...</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;