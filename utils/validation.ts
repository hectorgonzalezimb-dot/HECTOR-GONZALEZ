import { Article, Video } from "../types";

type ArticleValues = Omit<Article, 'id'>;
type VideoValues = Omit<Video, 'id'>;

export const validateArticle = (values: ArticleValues): Record<keyof ArticleValues, string> => {
  const errors: Record<string, string> = {};

  if (!values.title.trim()) {
    errors.title = 'El título es obligatorio.';
  }
  if (!values.author.trim()) {
    errors.author = 'El autor es obligatorio.';
  }
  if (!values.summary.trim()) {
    errors.summary = 'El resumen es obligatorio.';
  }
  if (values.summary.length > 200) {
    errors.summary = 'El resumen no debe exceder los 200 caracteres.';
  }
  if (!values.content.trim()) {
    errors.content = 'El contenido es obligatorio.';
  }
  if (!values.imageUrl) {
    errors.imageUrl = 'Se requiere una imagen.';
  }

  return errors;
};


export const validateVideo = (values: VideoValues): Record<keyof VideoValues, string> => {
    const errors: Record<string, string> = {};
  
    if (!values.title.trim()) {
      errors.title = 'El título es obligatorio.';
    }
    if (!values.description.trim()) {
      errors.description = 'La descripción es obligatoria.';
    }
    if (!values.embedUrl) {
      errors.embedUrl = 'La URL del video es obligatoria.';
    } else if (!/^(https?:\/\/)?(www\.)?(youtube\.com\/embed\/|youtu\.be\/)[\w-]{11}/i.test(values.embedUrl)) {
      errors.embedUrl = 'Por favor, ingresa una URL de YouTube para embeber válida (ej: https://www.youtube.com/embed/VIDEO_ID).';
    }
  
    return errors;
  };