
export interface Article {
  id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  imageUrl: string;
  featured: boolean;
  publishDate: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  tags: string[];
}

export type GalleryCategory = 'Aulas' | 'Juegos' | 'Materiales' | 'Proyectos';

export interface GalleryImage {
  id: string;
  title: string;
  imageUrl: string;
  category: GalleryCategory;
}

export type ResourceCategory = 'Leyes' | 'Programas' | 'Materiales Pedagógicos';

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: ResourceCategory;
}
