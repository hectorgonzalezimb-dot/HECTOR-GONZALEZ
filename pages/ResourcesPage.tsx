import React, { useState, useEffect } from 'react';
import { resourcesApi } from '../data/api';
import PageTitle from '../components/PageTitle';
import { Resource, ResourceCategory } from '../types';

const ResourcesPage: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    setResources(resourcesApi.getAll());
  }, []);

  const categoryColors: Record<ResourceCategory, string> = {
    'Leyes': 'border-brand-pink',
    'Programas': 'border-brand-orange',
    'Materiales Pedagógicos': 'border-brand-green'
  };
  const categoryTextColors: Record<ResourceCategory, string> = {
    'Leyes': 'text-brand-pink',
    'Programas': 'text-brand-orange',
    'Materiales Pedagógicos': 'text-brand-green'
  };


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle title="Recursos" subtitle="Enlaces a leyes, programas y materiales pedagógicos de interés para la formación y la práctica docente." colorClass="text-brand-green" />
      
      <div className="max-w-4xl mx-auto space-y-6">
        {resources.map((resource) => (
          <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:border-l-4 transition-all duration-300 ${categoryColors[resource.category]}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-brand-text">{resource.title}</h3>
                <p className="text-gray-600 mt-2">{resource.description}</p>
              </div>
              <div className="ml-4 flex-shrink-0">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[resource.category]} ${categoryTextColors[resource.category]}`}>
                  {resource.category}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;