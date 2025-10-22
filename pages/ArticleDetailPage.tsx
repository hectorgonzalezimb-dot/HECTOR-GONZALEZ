import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articlesApi } from '../data/api';
import NotFoundPage from './NotFoundPage';
import { Article } from '../types';

const ArticleDetailPage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [article, setArticle] = useState<Article | undefined>(undefined);

  useEffect(() => {
    if (articleId) {
      const foundArticle = articlesApi.getById(articleId);
      setArticle(foundArticle);
    }
  }, [articleId]);

  if (!article) {
    // You might want a loading state here
    if (!articleId) return <NotFoundPage />; // Handle case where id is missing
    return <NotFoundPage />; // Or a specific loading component
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12">
        <div className="mb-8">
            <Link to="/articulos" className="text-brand-violet hover:underline">&larr; Volver a Artículos</Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">{article.title}</h1>
        <p className="text-gray-500 mb-6">
          Por <span className="font-semibold">{article.author}</span> &bull; Publicado el {new Date(article.publishDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <img className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8" src={article.imageUrl} alt={article.title} />

        <div className="prose prose-lg max-w-none text-brand-text space-y-4">
            {article.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;