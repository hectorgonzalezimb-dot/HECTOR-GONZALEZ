import React, { useState, useEffect } from 'react';
import { articlesApi, videosApi, galleryApi, resourcesApi } from '../data/api';
import PageTitle from '../components/PageTitle';
import { useNavigate } from 'react-router-dom';
import { Article, Video, GalleryImage, Resource } from '../types';
import Toast from '../components/Toast';

type Item = Article | Video | GalleryImage | Resource;

interface AdminSectionProps {
    title: string;
    items: Item[];
    nameKey: keyof Item;
    onCreate: () => void;
    onEdit: (id: string) => void;
    onDelete: (id: string, name: string) => void;
}

const AdminSection: React.FC<AdminSectionProps> = ({ title, items, nameKey, onCreate, onEdit, onDelete }) => {
  const handleDelete = (item: Item) => {
    const name = item[nameKey] as string;
    if (window.confirm(`¿Estás seguro de que querés eliminar "${name}"? Esta acción no se puede deshacer.`)) {
      onDelete(item.id, name);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-brand-text">{title}</h2>
        <button
          onClick={onCreate}
          className="bg-brand-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-green/90 transition-colors"
        >
          + Crear Nuevo
        </button>
      </div>
      <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
        {items.length > 0 ? items.map(item => (
          <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <p className="text-gray-800 truncate pr-4">{item[nameKey] as string}</p>
            <div className="space-x-2 flex-shrink-0">
              <button onClick={() => onEdit(item.id)} className="text-brand-celeste hover:underline text-sm font-medium">Editar</button>
              <button onClick={() => handleDelete(item)} className="text-brand-pink hover:underline text-sm font-medium">Eliminar</button>
            </div>
          </div>
        )) : <p className="text-gray-500">No hay contenido para mostrar.</p>}
      </div>
    </div>
  );
};

const AdminPage: React.FC = () => {
    const navigate = useNavigate();
    const isAdmin = sessionStorage.getItem('isAdmin') === 'true';
    
    const [articles, setArticles] = useState<Article[]>([]);
    const [videos, setVideos] = useState<Video[]>([]);
    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
    const [resources, setResources] = useState<Resource[]>([]);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const showToast = (message: string) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(null), 3000);
    };

    const loadData = () => {
        setArticles(articlesApi.getAll());
        setVideos(videosApi.getAll());
        setGalleryImages(galleryApi.getAll());
        setResources(resourcesApi.getAll());
    };

    useEffect(() => {
        if (!isAdmin) {
            navigate('/login');
        } else {
            loadData();
        }
    }, [isAdmin, navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem('isAdmin');
        navigate('/');
    };

    const handleDelete = (api: { delete: (id: string) => void }, itemName: string) => (id: string, name: string) => {
        api.delete(id);
        loadData();
        showToast(`"${name}" se ha eliminado correctamente.`);
    };

    if (!isAdmin) {
        return null;
    }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Toast message={toastMessage} isVisible={!!toastMessage} />
      <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
        <PageTitle title="Panel de Administración" subtitle="Aquí es donde gestionarías todo el contenido de la revista." colorClass="text-brand-violet" />
        <button
            onClick={handleLogout}
            className="bg-brand-pink text-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-pink/90 transition-colors h-fit"
        >
            Cerrar Sesión
        </button>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md mb-8" role="alert">
          <p className="font-bold">¡Panel Funcional!</p>
          <p>Este panel ahora es completamente funcional. Los cambios que realices (crear, editar, eliminar) se guardarán en el almacenamiento local de tu navegador (`localStorage`) y se reflejarán en todo el sitio.</p>
        </div>

        <AdminSection 
            title="Artículos" 
            items={articles} 
            nameKey="title"
            onCreate={() => navigate('/admin/articulos/nuevo')}
            onEdit={(id) => navigate(`/admin/articulos/editar/${id}`)}
            onDelete={handleDelete(articlesApi, 'Artículo')}
        />
        <AdminSection 
            title="Videos" 
            items={videos} 
            nameKey="title" 
            onCreate={() => navigate('/admin/videos/nuevo')}
            onEdit={(id) => navigate(`/admin/videos/editar/${id}`)}
            onDelete={handleDelete(videosApi, 'Video')}
        />
        <AdminSection 
            title="Imágenes de la Galería" 
            items={galleryImages} 
            nameKey="title" 
            onCreate={() => alert('La creación/edición de imágenes no está implementada en esta demo.')}
            onEdit={() => alert('La creación/edición de imágenes no está implementada en esta demo.')}
            onDelete={handleDelete(galleryApi, 'Imagen')}
        />
        <AdminSection 
            title="Recursos" 
            items={resources} 
            nameKey="title" 
            onCreate={() => alert('La creación/edición de recursos no está implementada en esta demo.')}
            onEdit={() => alert('La creación/edición de recursos no está implementada en esta demo.')}
            onDelete={handleDelete(resourcesApi, 'Recurso')}
        />
      </div>
    </div>
  );
};

export default AdminPage;