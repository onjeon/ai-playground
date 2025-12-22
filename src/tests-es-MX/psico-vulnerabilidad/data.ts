// Test de Manejo de Vulnerabilidad - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a manejo de vulnerabilidad?',
    options: [
      { text: 'Te muestras vulnerable sanamente', type: 'sano' },
      { text: 'Selectivo/a con tu vulnerabilidad', type: 'cauteloso' },
      { text: 'Evitas mostrarte vulnerable', type: 'evitador' },
      { text: 'Nunca muestras vulnerabilidad', type: 'cerrado' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'sano' },
      { text: 'A veces', type: 'cauteloso' },
      { text: 'Frecuentemente', type: 'evitador' },
      { text: 'Casi siempre', type: 'cerrado' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'sano' },
      { text: 'Me afecta un poco', type: 'cauteloso' },
      { text: 'Me afecta bastante', type: 'evitador' },
      { text: 'Me afecta mucho', type: 'cerrado' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'sano' },
      { text: 'Bien, con algunas dudas', type: 'cauteloso' },
      { text: 'Incómodo/a frecuentemente', type: 'evitador' },
      { text: 'Mal, me genera mucho malestar', type: 'cerrado' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'sano' },
      { text: 'Neutral', type: 'cauteloso' },
      { text: 'A veces negativamente', type: 'evitador' },
      { text: 'Muy negativamente', type: 'cerrado' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'sano' },
      { text: 'Un poco, cuando puedo', type: 'cauteloso' },
      { text: 'Sí, pero me cuesta', type: 'evitador' },
      { text: 'Sí, necesito ayuda', type: 'cerrado' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'sano' },
      { text: 'Más o menos igual', type: 'cauteloso' },
      { text: 'Ha empeorado un poco', type: 'evitador' },
      { text: 'Ha empeorado mucho', type: 'cerrado' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'sano' },
      { text: 'Un poco', type: 'cauteloso' },
      { text: 'Bastante', type: 'evitador' },
      { text: 'Demasiada', type: 'cerrado' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'sano' },
      { text: 'Normal', type: 'cauteloso' },
      { text: 'Que tengo un problema con esto', type: 'evitador' },
      { text: 'Que necesito ayuda urgente', type: 'cerrado' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'sano' },
      { text: 'Rara vez', type: 'cauteloso' },
      { text: 'A veces', type: 'evitador' },
      { text: 'Frecuentemente', type: 'cerrado' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'sano' },
      { text: 'Un poco', type: 'cauteloso' },
      { text: 'Bastante', type: 'evitador' },
      { text: 'Mucho', type: 'cerrado' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'sano' },
      { text: 'Buena', type: 'cauteloso' },
      { text: 'Regular', type: 'evitador' },
      { text: 'Mala', type: 'cerrado' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  percentage: string;
  description: string;
  characteristics: string[];
  advice: string;
}> = {
  sano: {
    type: 'sano',
    title: 'Vulnerabilidad Sana',
    emoji: '💚❤️',
    percentage: 'Nivel saludable',
    description: 'Te muestras vulnerable sanamente. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  cauteloso: {
    type: 'cauteloso',
    title: 'Cauteloso/a',
    emoji: '💛🛡️',
    percentage: 'Nivel moderado',
    description: 'Selectivo/a con tu vulnerabilidad. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  evitador: {
    type: 'evitador',
    title: 'Evita Vulnerabilidad',
    emoji: '🟠🔒',
    percentage: 'Nivel alto - Atención',
    description: 'Evitas mostrarte vulnerable. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  cerrado: {
    type: 'cerrado',
    title: 'Completamente Cerrado/a',
    emoji: '🔴🧱',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Nunca muestras vulnerabilidad. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { sano: 0, cauteloso: 0, evitador: 0, cerrado: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      scores[type]++;
    }
  });

  const resultType = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  return results[resultType];
}
