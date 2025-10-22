import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import VideosPage from './pages/VideosPage';
import GalleryPage from './pages/GalleryPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import AdminArticleForm from './pages/AdminArticleForm';
import AdminVideoForm from './pages/AdminVideoForm';

// Note on the "auto-administrable" requirement:
// This is a complete frontend application built with React. It uses static, hardcoded data
// from 'data/mockData.ts' to simulate content that would come from a CMS.
// A true "auto-administrable" site would require a separate backend application (the admin panel)
// and a database. Building a full MERN stack (MongoDB, Express, React, Node.js) or a
// WordPress-like system is beyond the scope of this frontend-only generation. This project
// perfectly represents the user-facing part of such a system.

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="articulos" element={<ArticlesPage />} />
          <Route path="articulos/:articleId" element={<ArticleDetailPage />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="galeria" element={<GalleryPage />} />
          <Route path="recursos" element={<ResourcesPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          
          {/* Admin Routes */}
          <Route path="admin" element={<AdminPage />} />
          <Route path="/admin/articulos/nuevo" element={<AdminArticleForm />} />
          <Route path="/admin/articulos/editar/:articleId" element={<AdminArticleForm />} />
          <Route path="/admin/videos/nuevo" element={<AdminVideoForm />} />
          <Route path="/admin/videos/editar/:videoId" element={<AdminVideoForm />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;