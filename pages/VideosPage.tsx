import React, { useState, useEffect } from 'react';
import { videosApi } from '../data/api';
import PageTitle from '../components/PageTitle';
import { Video } from '../types';

const VideosPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    setVideos(videosApi.getAll());
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle title="Videoteca" subtitle="Recursos audiovisuales, conferencias y experiencias para enriquecer la práctica docente." colorClass="text-brand-orange" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={video.embedUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-text">{video.title}</h3>
              <p className="text-brand-text mt-2">{video.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {video.tags.map((tag) => (
                  <span key={tag} className="bg-brand-orange/20 text-brand-orange text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;