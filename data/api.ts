import { Article, Video, GalleryImage, Resource } from '../types';
import * as mockData from './mockData';

const KEYS = {
  ARTICLES: 'revista_articles',
  VIDEOS: 'revista_videos',
  GALLERY: 'revista_gallery',
  RESOURCES: 'revista_resources',
};

// --- Generic Functions ---

function initializeData<T>(key: string, data: T[]) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

function getAll<T>(key: string): T[] {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function getById<T extends { id: string }>(key: string, id: string): T | undefined {
  const items = getAll<T>(key);
  return items.find(item => item.id === id);
}

function create<T extends { id: string }>(key: string, item: Omit<T, 'id'>): T {
  const items = getAll<T>(key);
  const newItem = { ...item, id: new Date().getTime().toString() } as T;
  items.unshift(newItem); // Add to the beginning
  localStorage.setItem(key, JSON.stringify(items));
  return newItem;
}

function update<T extends { id: string }>(key: string, updatedItem: T): T {
  let items = getAll<T>(key);
  items = items.map(item => (item.id === updatedItem.id ? updatedItem : item));
  localStorage.setItem(key, JSON.stringify(items));
  return updatedItem;
}

function remove<T extends { id: string }>(key: string, id: string): void {
  let items = getAll<T>(key);
  items = items.filter(item => item.id !== id);
  localStorage.setItem(key, JSON.stringify(items));
}

// --- Initialization ---
export function seedInitialData() {
    initializeData(KEYS.ARTICLES, mockData.articles);
    initializeData(KEYS.VIDEOS, mockData.videos);
    initializeData(KEYS.GALLERY, mockData.galleryImages);
    initializeData(KEYS.RESOURCES, mockData.resources);
}

// --- Articles API ---
export const articlesApi = {
  getAll: () => getAll<Article>(KEYS.ARTICLES),
  getById: (id: string) => getById<Article>(KEYS.ARTICLES, id),
  create: (article: Omit<Article, 'id'>) => create<Article>(KEYS.ARTICLES, article),
  update: (article: Article) => update<Article>(KEYS.ARTICLES, article),
  delete: (id: string) => remove<Article>(KEYS.ARTICLES, id),
};

// --- Videos API ---
export const videosApi = {
  getAll: () => getAll<Video>(KEYS.VIDEOS),
  getById: (id: string) => getById<Video>(KEYS.VIDEOS, id),
  create: (video: Omit<Video, 'id'>) => create<Video>(KEYS.VIDEOS, video),
  update: (video: Video) => update<Video>(KEYS.VIDEOS, video),
  delete: (id: string) => remove<Video>(KEYS.VIDEOS, id),
};

// --- Gallery API ---
export const galleryApi = {
  getAll: () => getAll<GalleryImage>(KEYS.GALLERY),
  getById: (id: string) => getById<GalleryImage>(KEYS.GALLERY, id),
  create: (image: Omit<GalleryImage, 'id'>) => create<GalleryImage>(KEYS.GALLERY, image),
  update: (image: GalleryImage) => update<GalleryImage>(KEYS.GALLERY, image),
  delete: (id: string) => remove<GalleryImage>(KEYS.GALLERY, id),
};

// --- Resources API ---
export const resourcesApi = {
  getAll: () => getAll<Resource>(KEYS.RESOURCES),
  getById: (id: string) => getById<Resource>(KEYS.RESOURCES, id),
  create: (resource: Omit<Resource, 'id'>) => create<Resource>(KEYS.RESOURCES, resource),
  update: (resource: Resource) => update<Resource>(KEYS.RESOURCES, resource),
  delete: (id: string) => remove<Resource>(KEYS.RESOURCES, id),
};