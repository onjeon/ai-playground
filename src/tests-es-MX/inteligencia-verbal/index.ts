// Test de Inteligencia Verbal
export const questions = [
  {
    id: 1,
    text: '¿Cuál es el sinónimo de "perspicaz"?',
    options: [
      { text: 'Astuto', type: 'correct' },
      { text: 'Lento', type: 'wrong' },
      { text: 'Amable', type: 'wrong' },
      { text: 'Terco', type: 'wrong' },
    ],
  },
  {
    id: 2,
    text: '¿Cuál es el antónimo de "efímero"?',
    options: [
      { text: 'Fugaz', type: 'wrong' },
      { text: 'Eterno', type: 'correct' },
      { text: 'Breve', type: 'wrong' },
      { text: 'Temporal', type: 'wrong' },
    ],
  },
  {
    id: 3,
    text: 'Completa la analogía: Libro es a leer como canción es a...',
    options: [
      { text: 'Bailar', type: 'wrong' },
      { text: 'Escuchar', type: 'correct' },
      { text: 'Escribir', type: 'wrong' },
      { text: 'Cantar', type: 'wrong' },
    ],
  },
  {
    id: 4,
    text: '¿Qué significa la palabra "circunspecto"?',
    options: [
      { text: 'Prudente y cauteloso', type: 'correct' },
      { text: 'Circular y grande', type: 'wrong' },
      { text: 'Alegre y festivo', type: 'wrong' },
      { text: 'Confuso y desordenado', type: 'wrong' },
    ],
  },
  {
    id: 5,
    text: '¿Cuál palabra NO pertenece al grupo: mesa, silla, lámpara, perro, sofá?',
    options: [
      { text: 'Mesa', type: 'wrong' },
      { text: 'Silla', type: 'wrong' },
      { text: 'Perro', type: 'correct' },
      { text: 'Sofá', type: 'wrong' },
    ],
  },
  {
    id: 6,
    text: '¿Qué figura retórica hay en "sus ojos eran dos soles"?',
    options: [
      { text: 'Hipérbole', type: 'wrong' },
      { text: 'Metáfora', type: 'correct' },
      { text: 'Símil', type: 'wrong' },
      { text: 'Ironía', type: 'wrong' },
    ],
  },
  {
    id: 7,
    text: '¿Cuál es el plural correcto de "hipótesis"?',
    options: [
      { text: 'Hipótesis', type: 'correct' },
      { text: 'Hipóteses', type: 'wrong' },
      { text: 'Hipótesises', type: 'wrong' },
      { text: 'Hipotésies', type: 'wrong' },
    ],
  },
  {
    id: 8,
    text: 'Completa: "Más vale pájaro en mano que..."',
    options: [
      { text: 'Ciento volando', type: 'correct' },
      { text: 'Dos en el árbol', type: 'wrong' },
      { text: 'Uno en el cielo', type: 'wrong' },
      { text: 'Diez en la jaula', type: 'wrong' },
    ],
  },
  {
    id: 9,
    text: '¿Cuál oración está correctamente escrita?',
    options: [
      { text: 'Haber si vienes mañana', type: 'wrong' },
      { text: 'A ver si vienes mañana', type: 'correct' },
      { text: 'Haver si vienes mañana', type: 'wrong' },
      { text: 'Ha ver si vienes mañana', type: 'wrong' },
    ],
  },
  {
    id: 10,
    text: '¿Qué significa "lacónico"?',
    options: [
      { text: 'Extenso y detallado', type: 'wrong' },
      { text: 'Breve y conciso', type: 'correct' },
      { text: 'Triste y melancólico', type: 'wrong' },
      { text: 'Alegre y expresivo', type: 'wrong' },
    ],
  },
  {
    id: 11,
    text: 'Completa la analogía: Médico es a hospital como maestro es a...',
    options: [
      { text: 'Consultorio', type: 'wrong' },
      { text: 'Escuela', type: 'correct' },
      { text: 'Oficina', type: 'wrong' },
      { text: 'Biblioteca', type: 'wrong' },
    ],
  },
  {
    id: 12,
    text: '¿Cuál es el significado de "ubérrimo"?',
    options: [
      { text: 'Muy abundante y fértil', type: 'correct' },
      { text: 'Extremadamente alto', type: 'wrong' },
      { text: 'Muy oscuro', type: 'wrong' },
      { text: 'Demasiado caro', type: 'wrong' },
    ],
  },
  {
    id: 13,
    text: '¿Cuál es la forma correcta del verbo "satisfacer" en pasado (él)?',
    options: [
      { text: 'Satisfació', type: 'wrong' },
      { text: 'Satisfizo', type: 'correct' },
      { text: 'Satisficó', type: 'wrong' },
      { text: 'Satisfacío', type: 'wrong' },
    ],
  },
  {
    id: 14,
    text: '¿Qué palabra es un palíndromo?',
    options: [
      { text: 'Palabra', type: 'wrong' },
      { text: 'Reconocer', type: 'correct' },
      { text: 'Gramática', type: 'wrong' },
      { text: 'Lenguaje', type: 'wrong' },
    ],
  },
  {
    id: 15,
    text: '¿Cuál es el gentilicio de una persona de Guadalajara, México?',
    options: [
      { text: 'Guadalajarense', type: 'wrong' },
      { text: 'Tapatío', type: 'correct' },
      { text: 'Guadalajareño', type: 'wrong' },
      { text: 'Jalisquillo', type: 'wrong' },
    ],
  },
];

export const results = {
  high: {
    title: '📚 Maestro de las Palabras',
    minScore: 12,
    description: '¡Impresionante! Tu dominio del lenguaje es excepcional. Tienes un vocabulario rico y comprendes las sutilezas del idioma español.',
    traits: ['Elocuente', 'Culto', 'Expresivo', 'Lingüístico'],
    advice: 'Tu habilidad verbal es un gran don. Considera carreras en literatura, comunicación, derecho o periodismo.',
  },
  medium: {
    title: '✍️ Comunicador Competente',
    minScore: 8,
    description: '¡Muy bien! Tienes buenas habilidades verbales y te expresas con claridad. Tu vocabulario es sólido.',
    traits: ['Claro', 'Articulado', 'Comunicativo', 'Leído'],
    advice: 'Lee más libros y practica la escritura. Expande tu vocabulario aprendiendo una palabra nueva cada día.',
  },
  low: {
    title: '🌱 Aprendiz de Letras',
    minScore: 0,
    description: 'El lenguaje tiene muchos secretos por descubrirte. Con lectura y práctica puedes mejorar significativamente.',
    traits: ['Visual', 'Práctico', 'Kinestésico', 'Técnico'],
    advice: 'Lee todos los días, aunque sea un poco. Busca palabras nuevas y úsalas en conversaciones.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  let score = 0;
  Object.values(answers).forEach(answer => {
    if (answer === 'correct') score++;
  });
  if (score >= 12) return 'high';
  if (score >= 8) return 'medium';
  return 'low';
}
