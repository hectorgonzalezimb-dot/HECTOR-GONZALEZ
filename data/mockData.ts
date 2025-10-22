import { Article, Video, GalleryImage, Resource } from '../types';

// MOCK DATA
// In a real-world, auto-administrable application, this data would not be hardcoded.
// It would be fetched from a backend API connected to a Content Management System (CMS)
// or a database (like MongoDB or MySQL). The admin panel would allow users to
// create, update, and delete this content dynamically.
// For this frontend-only demonstration, we are using this static data to seed localStorage.

export const articles: Article[] = [
  {
    id: '1',
    title: 'El Juego como Herramienta Pedagógica Fundamental',
    author: 'Ana Pérez',
    summary: 'Exploramos cómo el juego no es solo un pasatiempo, sino el motor principal del aprendizaje en la primera infancia.',
    content: `El juego es el lenguaje universal de la niñez. A través de él, los niños y niñas exploran el mundo, construyen significados, desarrollan habilidades sociales y emocionales, y sientan las bases del pensamiento lógico-matemático.\nEn el aula de Educación Inicial, el juego no es una pausa en el aprendizaje, sino el aprendizaje mismo. Proponer escenarios lúdicos, rincones de juego simbólico o desafíos motrices son estrategias que potencian el desarrollo integral. El rol docente es clave: observar, acompañar, proponer materiales y enriquecer las experiencias sin dirigirlas por completo, permitiendo que la creatividad y la iniciativa infantil florezcan.\nDebemos reivindicar el derecho al juego como un pilar de la educación. Una pedagogía que valora el juego es una pedagogía que respeta los procesos y tiempos de la infancia, formando seres más creativos, autónomos y felices.`,
    imageUrl: 'https://picsum.photos/seed/juego/800/600',
    featured: true,
    publishDate: '2024-07-15',
  },
  {
    id: '2',
    title: 'La Importancia de los Vínculos Afectivos en el Jardín',
    author: 'Mariela González',
    summary: 'Un análisis sobre cómo la seguridad emocional y los vínculos de confianza son la base para que los niños se atrevan a explorar y aprender.',
    content: `El ingreso al jardín maternal o de infantes es, para muchos niños, la primera gran experiencia de socialización fuera del núcleo familiar. Es un momento de grandes desafíos y oportunidades. La construcción de vínculos afectivos sólidos y seguros con las y los docentes es la condición indispensable para que el aprendizaje sea posible.\nUn niño que se siente seguro, mirado, escuchado y valorado, es un niño que se atreve a explorar, a preguntar, a equivocarse y a intentar de nuevo. La ternura, la paciencia y la empatía no son "extras" en nuestra profesión, son el cimiento sobre el cual se edifica todo lo demás.\nCada abrazo, cada palabra de aliento, cada momento de escucha atenta, está tejiendo una red de contención emocional que acompañará al niño o niña durante toda su trayectoria escolar y su vida.`,
    imageUrl: 'https://picsum.photos/seed/vinculos/800/600',
    featured: true,
    publishDate: '2024-07-10',
  },
  {
    id: '3',
    title: 'Arte y Creatividad: Más Allá de la Manualidad',
    author: 'Sofía Ramirez',
    summary: 'Repensar las propuestas de arte en el nivel inicial para fomentar la expresión genuina y el pensamiento divergente.',
    content: `Cuando pensamos en arte en el jardín, a menudo la imagen que aparece es la de manualidades guiadas, donde todos los resultados son iguales. Sin embargo, el verdadero potencial del arte en la primera infancia reside en la exploración libre de materiales, en el proceso creativo y no solo en el producto final.\nOfrecer diversidad de soportes (no solo papel), herramientas (pinceles, esponjas, espátulas, los propios dedos) y materiales (témperas, arcilla, elementos de la naturaleza) abre un universo de posibilidades expresivas. El objetivo no es que "quede lindo", sino que el niño o niña pueda plasmar su mundo interior, experimentar con texturas y colores, y tomar sus propias decisiones estéticas.\nEl arte es un lenguaje más. Fomentarlo es darles a los niños una poderosa herramienta para comunicar ideas, emociones y percepciones que quizás aún no pueden poner en palabras.`,
    imageUrl: 'https://picsum.photos/seed/arte/800/600',
    featured: true,
    publishDate: '2024-07-05',
  },
   {
    id: '4',
    title: 'Documentación Pedagógica: Hacer Visible lo Invisible',
    author: 'Carla Rodriguez',
    summary: 'La documentación como práctica reflexiva que nos permite comprender y valorar los procesos de aprendizaje de los niños.',
    content: `Fotografías, videos, transcripciones de diálogos, producciones infantiles... La documentación pedagógica es mucho más que un simple registro. Es una práctica que nos invita a observar con nuevos ojos, a interpretar lo que sucede en el aula y a hacer visibles los complejos procesos de pensamiento y aprendizaje de los niños y niñas.\nDocumentar nos permite compartir con las familias la riqueza de la vida en el jardín, mostrando no solo qué hacen, sino cómo piensan, qué hipótesis se plantean, cómo resuelven problemas. También es una herramienta invaluable para la reflexión docente, individual y en equipo, que nos ayuda a evaluar nuestras propuestas y a planificar los próximos pasos con mayor pertinencia.`,
    imageUrl: 'https://picsum.photos/seed/documentacion/800/600',
    featured: false,
    publishDate: '2024-06-28',
  },
];

export const videos: Video[] = [
  {
    id: '1',
    title: 'El juego en el Nivel Inicial - Conferencia de Francesco Tonucci',
    description: 'Una charla inspiradora sobre la importancia del juego y la autonomía infantil.',
    embedUrl: 'https://www.youtube.com/embed/g6-3k6g3_tA',
    tags: ['Juego', 'Pedagogía', 'Tonucci'],
  },
  {
    id: '2',
    title: 'La importancia del apego en la infancia',
    description: 'Un video explicativo sobre la teoría del apego y su impacto en el desarrollo.',
    embedUrl: 'https://www.youtube.com/embed/PXzId3e-z2w',
    tags: ['Vínculos', 'Apego', 'Desarrollo Emocional'],
  },
  {
    id: '3',
    title: 'Proyecto de Arte en un Jardín de Infantes',
    description: 'Un ejemplo práctico de cómo llevar adelante un proyecto de arte que fomenta la creatividad.',
    embedUrl: 'https://www.youtube.com/embed/N5aD_A9gK6s',
    tags: ['Arte', 'Proyectos', 'Creatividad'],
  },
];

export const galleryImages: GalleryImage[] = [
  { id: '1', title: 'Rincón de construcción', imageUrl: 'https://picsum.photos/seed/aula1/600/400', category: 'Aulas' },
  { id: '2', title: 'Juego con masas', imageUrl: 'https://picsum.photos/seed/juego1/600/400', category: 'Juegos' },
  { id: '3', title: 'Mesa de luz y exploración', imageUrl: 'https://picsum.photos/seed/materiales1/600/400', category: 'Materiales' },
  { id: '4', title: 'Proyecto de huerta', imageUrl: 'https://picsum.photos/seed/proyectos1/600/400', category: 'Proyectos' },
  { id: '5', title: 'Sala de lactantes', imageUrl: 'https://picsum.photos/seed/aula2/600/400', category: 'Aulas' },
  { id: '6', title: 'Juegos de agua en el patio', imageUrl: 'https://picsum.photos/seed/juego2/600/400', category: 'Juegos' },
  { id: '7', title: 'Materiales no estructurados', imageUrl: 'https://picsum.photos/seed/materiales2/600/400', category: 'Materiales' },
  { id: '8', title: 'Muestra de arte anual', imageUrl: 'https://picsum.photos/seed/proyectos2/600/400', category: 'Proyectos' },
  { id: '9', title: 'Biblioteca de sala', imageUrl: 'https://picsum.photos/seed/aula3/600/400', category: 'Aulas' },
  { id: '10', title: 'Juego simbólico: la casita', imageUrl: 'https://picsum.photos/seed/juego3/600/400', category: 'Juegos' },
  { id: '11', title: 'Cajas de experimentación', imageUrl: 'https://picsum.photos/seed/materiales3/600/400', category: 'Materiales' },
  { id: '12', title: 'Proyecto sobre dinosaurios', imageUrl: 'https://picsum.photos/seed/proyectos3/600/400', category: 'Proyectos' },
];

export const resources: Resource[] = [
  { id: '1', title: 'Ley de Educación Nacional N° 26.206', description: 'Marco normativo de la educación en Argentina, donde se establece la obligatoriedad de la sala de 5 y se define al Nivel Inicial.', url: '#', category: 'Leyes' },
  { id: '2', title: 'Diseño Curricular para la Educación Inicial', description: 'Documento oficial con los lineamientos pedagógicos y contenidos para el nivel en la jurisdicción correspondiente.', url: '#', category: 'Programas' },
  { id: '3', title: 'Portal Educ.ar - Nivel Inicial', description: 'Recursos, secuencias didácticas y materiales multimedia para docentes, provistos por el Ministerio de Educación.', url: '#', category: 'Materiales Pedagógicos' },
  { id: '4', title: 'Fundación Kaleidos', description: 'Organización que ofrece recursos y capacitaciones sobre desarrollo emocional y crianza respetuosa.', url: '#', category: 'Materiales Pedagógicos' },
];