import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { videosApi } from '../data/api';
import { Video } from '../types';
import PageTitle from '../components/PageTitle';
import { useForm } from '../hooks/useForm';
import { validateVideo } from '../utils/validation';
import FormInput from '../components/FormInput';
import Toast from '../components/Toast';

const AdminVideoForm: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(videoId);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { values, setValues, errors, handleChange, handleSubmit, isSubmitting } = useForm<Omit<Video, 'id'>>({
    initialValues: {
      title: '',
      description: '',
      embedUrl: '',
      tags: [],
    },
    onSubmit: (formValues) => {
      const finalValues = {
        ...formValues,
        tags: typeof formValues.tags === 'string' 
          ? (formValues.tags as string).split(',').map(tag => tag.trim()).filter(Boolean) 
          : [],
      };

      if (isEditing) {
        videosApi.update({ ...finalValues, id: videoId });
      } else {
        videosApi.create(finalValues);
      }
      setToastMessage('¡Video guardado con éxito!');
      setTimeout(() => navigate('/admin'), 1500);
    },
    validate: validateVideo,
  });

  useEffect(() => {
    if (isEditing) {
      const existingVideo = videosApi.getById(videoId);
      if (existingVideo) {
        setValues({
          ...existingVideo,
          tags: existingVideo.tags.join(', '), // Convert array to string for editing
        });
      } else {
        alert('Video no encontrado');
        navigate('/admin');
      }
    }
  }, [videoId, isEditing, navigate, setValues]);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Toast message={toastMessage} isVisible={!!toastMessage} />
      <PageTitle title={isEditing ? 'Editar Video' : 'Crear Video'} colorClass="text-brand-orange" />
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          
          <FormInput
            label="Título del Video"
            name="title"
            value={values.title}
            onChange={handleChange}
            error={errors.title}
            required
          />
          
          <FormInput
            label="Descripción"
            name="description"
            type="textarea"
            value={values.description}
            onChange={handleChange}
            error={errors.description}
            required
          />

          <FormInput
            label="URL para embeber de YouTube"
            name="embedUrl"
            type="url"
            value={values.embedUrl}
            onChange={handleChange}
            error={errors.embedUrl}
            required
            helpText="Ej: https://www.youtube.com/embed/código_del_video"
          />
          
          <FormInput
            label="Etiquetas (separadas por comas)"
            name="tags"
            value={values.tags as any}
            onChange={handleChange}
            error={errors.tags}
            helpText="Ej: Juego, Pedagogía, Creatividad"
          />

          <div className="flex items-center gap-4 pt-4">
             <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-orange hover:bg-brand-orange/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
              {isSubmitting ? 'Guardando...' : 'Guardar Video'}
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

export default AdminVideoForm;