// Test de Reconocimiento de Patrones
export const questions = [
  {
    id: 1,
    text: '¿Cuál es el siguiente número en la secuencia: 2, 4, 8, 16, ...?',
    options: [
      { text: '24', type: 'wrong' },
      { text: '32', type: 'correct' },
      { text: '30', type: 'wrong' },
      { text: '20', type: 'wrong' },
    ],
  },
  {
    id: 2,
    text: 'Completa la secuencia: A, C, E, G, ...?',
    options: [
      { text: 'H', type: 'wrong' },
      { text: 'I', type: 'correct' },
      { text: 'J', type: 'wrong' },
      { text: 'K', type: 'wrong' },
    ],
  },
  {
    id: 3,
    text: '¿Cuál sigue: 1, 1, 2, 3, 5, 8, ...?',
    options: [
      { text: '11', type: 'wrong' },
      { text: '12', type: 'wrong' },
      { text: '13', type: 'correct' },
      { text: '10', type: 'wrong' },
    ],
  },
  {
    id: 4,
    text: 'La secuencia es: ○●○○●○○○●... ¿Cuántos ○ siguen después del último ●?',
    options: [
      { text: '3', type: 'wrong' },
      { text: '4', type: 'correct' },
      { text: '5', type: 'wrong' },
      { text: '2', type: 'wrong' },
    ],
  },
  {
    id: 5,
    text: '¿Cuál es el siguiente: 3, 6, 11, 18, 27, ...?',
    options: [
      { text: '36', type: 'wrong' },
      { text: '38', type: 'correct' },
      { text: '35', type: 'wrong' },
      { text: '40', type: 'wrong' },
    ],
  },
  {
    id: 6,
    text: 'Completa: ZYWV, UXTS, RQPO, ...?',
    options: [
      { text: 'LKJI', type: 'wrong' },
      { text: 'NMLK', type: 'correct' },
      { text: 'ONML', type: 'wrong' },
      { text: 'MLKJ', type: 'wrong' },
    ],
  },
  {
    id: 7,
    text: '¿Cuál número no pertenece: 2, 3, 5, 7, 9, 11, 13?',
    options: [
      { text: '3', type: 'wrong' },
      { text: '7', type: 'wrong' },
      { text: '9', type: 'correct' },
      { text: '11', type: 'wrong' },
    ],
  },
  {
    id: 8,
    text: 'Secuencia: 1, 4, 9, 16, 25, ...?',
    options: [
      { text: '30', type: 'wrong' },
      { text: '36', type: 'correct' },
      { text: '35', type: 'wrong' },
      { text: '49', type: 'wrong' },
    ],
  },
  {
    id: 9,
    text: '¿Cuál sigue: AB, CD, EF, GH, ...?',
    options: [
      { text: 'HI', type: 'wrong' },
      { text: 'IJ', type: 'correct' },
      { text: 'JK', type: 'wrong' },
      { text: 'IK', type: 'wrong' },
    ],
  },
  {
    id: 10,
    text: 'Patrón: 100, 95, 85, 70, 50, ...?',
    options: [
      { text: '30', type: 'wrong' },
      { text: '25', type: 'correct' },
      { text: '35', type: 'wrong' },
      { text: '20', type: 'wrong' },
    ],
  },
  {
    id: 11,
    text: '¿Cuál completa: 2, 6, 12, 20, 30, 42, ...?',
    options: [
      { text: '54', type: 'wrong' },
      { text: '56', type: 'correct' },
      { text: '52', type: 'wrong' },
      { text: '58', type: 'wrong' },
    ],
  },
  {
    id: 12,
    text: 'Secuencia: J, F, M, A, M, J, J, ...?',
    options: [
      { text: 'A', type: 'correct' },
      { text: 'S', type: 'wrong' },
      { text: 'O', type: 'wrong' },
      { text: 'N', type: 'wrong' },
    ],
  },
  {
    id: 13,
    text: '¿Cuál sigue: 1, 3, 6, 10, 15, 21, ...?',
    options: [
      { text: '27', type: 'wrong' },
      { text: '28', type: 'correct' },
      { text: '26', type: 'wrong' },
      { text: '30', type: 'wrong' },
    ],
  },
  {
    id: 14,
    text: 'Patrón: AAB, BBC, CCD, DDE, ...?',
    options: [
      { text: 'EEF', type: 'correct' },
      { text: 'EFG', type: 'wrong' },
      { text: 'EFF', type: 'wrong' },
      { text: 'FFG', type: 'wrong' },
    ],
  },
  {
    id: 15,
    text: '¿Cuál es el siguiente: 1, 8, 27, 64, 125, ...?',
    options: [
      { text: '196', type: 'wrong' },
      { text: '216', type: 'correct' },
      { text: '225', type: 'wrong' },
      { text: '200', type: 'wrong' },
    ],
  },
];

export const results = {
  high: {
    title: '🔍 Detector de Patrones',
    minScore: 12,
    description: '¡Brillante! Tu mente identifica patrones ocultos con facilidad extraordinaria. Ves conexiones donde otros ven caos.',
    traits: ['Analítico', 'Sistemático', 'Observador', 'Intuitivo'],
    advice: 'Tu habilidad para ver patrones es valiosa en ciencia de datos, investigación, programación y música.',
  },
  medium: {
    title: '🧩 Buen Reconocedor',
    minScore: 8,
    description: '¡Muy bien! Puedes identificar la mayoría de patrones con algo de análisis. Tu mente busca orden naturalmente.',
    traits: ['Ordenado', 'Metódico', 'Curioso', 'Lógico'],
    advice: 'Practica con sudokus, secuencias numéricas y acertijos para afinar aún más tu percepción.',
  },
  low: {
    title: '🌱 Patrón en Desarrollo',
    minScore: 0,
    description: 'El reconocimiento de patrones mejora con práctica. Tu mente puede entrenarse para ver estas conexiones.',
    traits: ['Espontáneo', 'Creativo', 'Libre', 'Original'],
    advice: 'Comienza con patrones simples y ve aumentando la dificultad. Los juegos de lógica te ayudarán mucho.',
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
