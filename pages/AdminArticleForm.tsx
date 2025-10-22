import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { articlesApi } from '../data/api';
import { Article } from '../types';
import PageTitle from '../components/PageTitle';
import { useForm } from '../hooks/useForm';
import { validateArticle } from '../utils/validation';
import FormInput from '../components/FormInput';
import Toast from '../components/Toast';
import ImageUpload from '../components/ImageUpload';

const AdminArticleForm: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(articleId);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { values, setValues, errors, handleChange, handleSubmit, isSubmitting, setFieldValue } = useForm<Omit<Article, 'id'>>({
    initialValues: {
      title: '',
      author: '',
      summary: '',
      content: '',
      imageUrl: '',
      featured: false,
      publishDate: new Date().toISOString().split('T')[0],
    },
    onSubmit: (formValues) => {
      if (isEditing) {
        articlesApi.update({ ...formValues, id: articleId });
      } else {
        articlesApi.create(formValues);
      }
      setToastMessage('¡Artículo guardado con éxito!');
      setTimeout(() => navigate('/admin'), 1500);
    },
    validate: validateArticle,
  });

  useEffect(() => {
    if (isEditing) {
      const existingArticle = articlesApi.getById(articleId);
      if (existingArticle) {
        setValues(existingArticle);
      } else {
        alert('Artículo no encontrado');
        navigate('/admin');
      }
    }
  }, [articleId, isEditing, navigate, setValues]);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Toast message={toastMessage} isVisible={!!toastMessage} />
      <PageTitle title={isEditing ? 'Editar Artículo' : 'Crear Artículo'} colorClass="text-brand-violet" />
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          
          <FormInput
            label="Título"
            name="title"
            value={values.title}
            onChange={handleChange}
            error={errors.title}
            required
          />
          
          <FormInput
            label="Autor/a"
            name="author"
            value={values.author}
            onChange={handleChange}
            error={errors.author}
            required
          />

          <FormInput
            label="Resumen (aparece en las tarjetas)"
            name="summary"
            type="textarea"
            value={values.summary}
            onChange={handleChange}
            error={errors.summary}
            required
          />

          <FormInput
            label="Contenido Completo"
            name="content"
            type="textarea"
            rows={10}
            value={values.content}
            onChange={handleChange}
            error={errors.content}
            required
          />
          
          <ImageUpload
            label="Imagen del Artículo"
            name="imageUrl"
            value={values.imageUrl}
            onChange={(name, value) => setFieldValue(name, value)}
            error={errors.imageUrl}
            required
            helpText='Se recomienda una imagen de 800x600px.'
          />

          <div className="flex items-center">
            <input 
              type="checkbox" 
              name="featured" 
              id="featured" 
              checked={values.featured} 
              onChange={handleChange} 
              className="h-4 w-4 text-brand-violet focus:ring-brand-violet border-gray-300 rounded" 
            />
            <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">¿Es un artículo destacado?</label>
          </div>

          <div className="flex items-center gap-4 pt-4">
             <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-violet hover:bg-brand-violet/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-violet transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
              {isSubmitting ? 'Guardando...' : 'Guardar Artículo'}
            </button>
             <Link to="/admin" className="w-full text-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50">
                Cancelar
             </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminArticleForm;