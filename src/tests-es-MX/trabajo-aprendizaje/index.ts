// Test de Estilo de Aprendizaje Profesional - ¿Cómo aprendes mejor?
export const questions = [
  {
    id: 1,
    text: '¿Cómo prefieres aprender una nueva habilidad?',
    options: [
      { text: 'Leyendo documentación y teoría primero', type: 'A' },
      { text: 'Viendo videos o demostraciones', type: 'B' },
      { text: 'Practicando directamente', type: 'C' },
      { text: 'Aprendiendo de un mentor o compañero', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tipo de capacitación disfrutas más?',
    options: [
      { text: 'Cursos estructurados con lecturas', type: 'A' },
      { text: 'Webinars y videos explicativos', type: 'B' },
      { text: 'Talleres prácticos y hands-on', type: 'C' },
      { text: 'Mentorías y conversaciones', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo retienes mejor la información?',
    options: [
      { text: 'Tomando notas y repasando', type: 'A' },
      { text: 'Viendo diagramas y gráficas', type: 'B' },
      { text: 'Haciendo ejercicios prácticos', type: 'C' },
      { text: 'Discutiéndolo con otros', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Cuando enfrentas algo nuevo desconocido...',
    options: [
      { text: 'Leo todo lo que encuentro al respecto', type: 'A' },
      { text: 'Busco tutoriales en video', type: 'B' },
      { text: 'Empiezo a experimentar directamente', type: 'C' },
      { text: 'Pregunto a alguien que sepa', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué te frustra más al aprender?',
    options: [
      { text: 'Información incompleta o desorganizada', type: 'A' },
      { text: 'Explicaciones solo textuales', type: 'B' },
      { text: 'Demasiada teoría sin práctica', type: 'C' },
      { text: 'Aprender completamente solo', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo prefieres resolver un problema nuevo?',
    options: [
      { text: 'Investigando y analizando antes de actuar', type: 'A' },
      { text: 'Visualizando diferentes escenarios', type: 'B' },
      { text: 'Probando soluciones hasta que funcione', type: 'C' },
      { text: 'Consultando con expertos', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tan autodidacta te consideras?',
    options: [
      { text: 'Mucho, aprendo solo con material escrito', type: 'A' },
      { text: 'Bastante, con recursos visuales', type: 'B' },
      { text: 'Algo, necesito práctica dirigida', type: 'C' },
      { text: 'Prefiero aprender de personas', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo te preparas para una certificación o examen?',
    options: [
      { text: 'Estudiando manuales y guías', type: 'A' },
      { text: 'Con cursos en video', type: 'B' },
      { text: 'Practicando con ejercicios y simuladores', type: 'C' },
      { text: 'En grupos de estudio', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿En qué ambiente aprendes mejor?',
    options: [
      { text: 'Solo, en silencio', type: 'A' },
      { text: 'Con recursos multimedia', type: 'B' },
      { text: 'Haciendo proyectos reales', type: 'C' },
      { text: 'En equipo o con compañeros', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué recurso usas más para aprender?',
    options: [
      { text: 'Libros, artículos, documentación', type: 'A' },
      { text: 'YouTube, Udemy, cursos en video', type: 'B' },
      { text: 'Proyectos personales, labs, práctica', type: 'C' },
      { text: 'Mentores, comunidades, networking', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cuánto tiempo necesitas para aprender algo nuevo?',
    options: [
      { text: 'Depende de la profundidad del material', type: 'A' },
      { text: 'Lo visual me acelera mucho', type: 'B' },
      { text: 'Rápido si puedo practicar', type: 'C' },
      { text: 'Depende de quién me enseñe', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo compartes conocimiento con otros?',
    options: [
      { text: 'Escribiendo guías o documentos', type: 'A' },
      { text: 'Con presentaciones visuales', type: 'B' },
      { text: 'Mostrando cómo se hace', type: 'C' },
      { text: 'En conversaciones y mentorías', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '📚 Aprendiz Teórico',
    description: 'Aprendes mejor leyendo, investigando y entendiendo la teoría antes de actuar. Necesitas información estructurada y completa.',
    traits: ['Analítico', 'Lector', 'Estructurado', 'Investigador'],
    advice: 'Aprovecha libros, documentación y cursos escritos. Pero no te quedes solo en teoría, practica lo aprendido.',
  },
  B: {
    title: '🎬 Aprendiz Visual',
    description: 'Aprendes mejor con recursos visuales: videos, diagramas, presentaciones. Lo que ves se te queda más que lo que lees.',
    traits: ['Visual', 'Observador', 'Multimedia', 'Gráfico'],
    advice: 'YouTube, Udemy y recursos visuales son tus aliados. Crea tus propios mapas mentales y diagramas.',
  },
  C: {
    title: '🛠️ Aprendiz Práctico',
    description: 'Aprendes haciendo. La teoría te aburre, prefieres meter las manos y aprender del ensayo y error.',
    traits: ['Kinestésico', 'Práctico', 'Experimental', 'Hands-on'],
    advice: 'Busca proyectos, labs y ejercicios prácticos. La mejor forma de aprender para ti es haciendo.',
  },
  D: {
    title: '🤝 Aprendiz Social',
    description: 'Aprendes mejor de otros: mentores, compañeros, comunidades. Las conversaciones y la guía personal te funcionan mejor.',
    traits: ['Social', 'Colaborativo', 'Interpersonal', 'Conversacional'],
    advice: 'Busca mentores, únete a comunidades y grupos de estudio. Tu aprendizaje se multiplica con otros.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
