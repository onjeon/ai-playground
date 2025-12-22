// Test de Inteligencia Matemática
export const questions = [
  {
    id: 1,
    text: '¿Cuál es el resultado de 15 × 8 ÷ 4 + 6?',
    options: [
      { text: '36', type: 'correct' },
      { text: '42', type: 'wrong' },
      { text: '30', type: 'wrong' },
      { text: '24', type: 'wrong' },
    ],
  },
  {
    id: 2,
    text: 'Si 3 obreros construyen una barda en 6 días, ¿cuántos días tardarán 6 obreros?',
    options: [
      { text: '12 días', type: 'wrong' },
      { text: '3 días', type: 'correct' },
      { text: '9 días', type: 'wrong' },
      { text: '2 días', type: 'wrong' },
    ],
  },
  {
    id: 3,
    text: '¿Cuál es el siguiente número en la secuencia: 2, 6, 12, 20, 30, ...?',
    options: [
      { text: '40', type: 'wrong' },
      { text: '42', type: 'correct' },
      { text: '44', type: 'wrong' },
      { text: '36', type: 'wrong' },
    ],
  },
  {
    id: 4,
    text: 'Un producto cuesta $800 con 25% de descuento. ¿Cuál era el precio original?',
    options: [
      { text: '$1,000', type: 'wrong' },
      { text: '$1,066.67', type: 'correct' },
      { text: '$960', type: 'wrong' },
      { text: '$1,200', type: 'wrong' },
    ],
  },
  {
    id: 5,
    text: '¿Cuánto es 2³ + 3² × 2?',
    options: [
      { text: '26', type: 'correct' },
      { text: '34', type: 'wrong' },
      { text: '22', type: 'wrong' },
      { text: '50', type: 'wrong' },
    ],
  },
  {
    id: 6,
    text: 'Si el perímetro de un cuadrado es 48 cm, ¿cuál es su área?',
    options: [
      { text: '144 cm²', type: 'correct' },
      { text: '96 cm²', type: 'wrong' },
      { text: '192 cm²', type: 'wrong' },
      { text: '64 cm²', type: 'wrong' },
    ],
  },
  {
    id: 7,
    text: 'Un tren viaja a 120 km/h. ¿Cuánto tarda en recorrer 450 km?',
    options: [
      { text: '3 horas 30 minutos', type: 'wrong' },
      { text: '3 horas 45 minutos', type: 'correct' },
      { text: '4 horas', type: 'wrong' },
      { text: '3 horas 15 minutos', type: 'wrong' },
    ],
  },
  {
    id: 8,
    text: '¿Cuál es el valor de x en: 3x + 7 = 22?',
    options: [
      { text: '5', type: 'correct' },
      { text: '7', type: 'wrong' },
      { text: '4', type: 'wrong' },
      { text: '6', type: 'wrong' },
    ],
  },
  {
    id: 9,
    text: 'María tiene el triple de edad que tenía hace 10 años. ¿Cuántos años tiene?',
    options: [
      { text: '15 años', type: 'correct' },
      { text: '20 años', type: 'wrong' },
      { text: '12 años', type: 'wrong' },
      { text: '18 años', type: 'wrong' },
    ],
  },
  {
    id: 10,
    text: '¿Cuánto es 0.125 expresado como fracción simplificada?',
    options: [
      { text: '1/8', type: 'correct' },
      { text: '1/4', type: 'wrong' },
      { text: '1/6', type: 'wrong' },
      { text: '1/10', type: 'wrong' },
    ],
  },
  {
    id: 11,
    text: 'Si inviertes $10,000 al 8% anual simple, ¿cuánto tendrás después de 2 años?',
    options: [
      { text: '$11,664', type: 'wrong' },
      { text: '$11,600', type: 'correct' },
      { text: '$11,800', type: 'wrong' },
      { text: '$12,000', type: 'wrong' },
    ],
  },
  {
    id: 12,
    text: '¿Cuál es el mínimo común múltiplo de 12 y 18?',
    options: [
      { text: '36', type: 'correct' },
      { text: '24', type: 'wrong' },
      { text: '72', type: 'wrong' },
      { text: '54', type: 'wrong' },
    ],
  },
  {
    id: 13,
    text: 'Un tanque se llena con 3 llaves en 4 horas. ¿Cuánto tarda con 2 llaves?',
    options: [
      { text: '6 horas', type: 'correct' },
      { text: '5 horas', type: 'wrong' },
      { text: '8 horas', type: 'wrong' },
      { text: '5.5 horas', type: 'wrong' },
    ],
  },
  {
    id: 14,
    text: '¿Cuál es la raíz cuadrada de 1,764?',
    options: [
      { text: '42', type: 'correct' },
      { text: '44', type: 'wrong' },
      { text: '38', type: 'wrong' },
      { text: '46', type: 'wrong' },
    ],
  },
  {
    id: 15,
    text: 'Si un número aumenta un 20% y luego disminuye un 20%, ¿qué porcentaje del original queda?',
    options: [
      { text: '100%', type: 'wrong' },
      { text: '96%', type: 'correct' },
      { text: '98%', type: 'wrong' },
      { text: '104%', type: 'wrong' },
    ],
  },
];

export const results = {
  high: {
    title: '🔢 Genio Matemático',
    minScore: 12,
    description: '¡Extraordinario! Tu mente matemática es brillante. Los números son tu lenguaje natural y resuelves cálculos con facilidad asombrosa.',
    traits: ['Preciso', 'Calculador', 'Sistemático', 'Brillante'],
    advice: 'Considera estudiar ingeniería, física, economía o cualquier carrera que requiera análisis numérico.',
  },
  medium: {
    title: '📊 Calculador Hábil',
    minScore: 8,
    description: '¡Muy bien! Tienes buenas habilidades matemáticas. Puedes resolver la mayoría de problemas numéricos con algo de concentración.',
    traits: ['Práctico', 'Ordenado', 'Lógico', 'Aplicado'],
    advice: 'Practica ejercicios mentales y problemas matemáticos diarios para fortalecer tus habilidades.',
  },
  low: {
    title: '🌱 Aprendiz Numérico',
    minScore: 0,
    description: 'Los números no son tu fuerte ahora, pero con práctica puedes mejorar significativamente tus habilidades matemáticas.',
    traits: ['Creativo', 'Verbal', 'Artístico', 'Intuitivo'],
    advice: 'Comienza con matemáticas básicas y avanza gradualmente. Usa apps de práctica y no te rindas.',
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
