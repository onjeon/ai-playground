// Test de Nivel de Optimismo - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a nivel de optimismo?',
    options: [
      { text: 'Ves todo positivo', type: 'muy_alto' },
      { text: 'Generalmente positivo/a', type: 'alto' },
      { text: 'Balance entre positivo y negativo', type: 'moderado' },
      { text: 'Tiendes a ver lo negativo', type: 'bajo' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'muy_alto' },
      { text: 'A veces', type: 'alto' },
      { text: 'Frecuentemente', type: 'moderado' },
      { text: 'Casi siempre', type: 'bajo' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'muy_alto' },
      { text: 'Me afecta un poco', type: 'alto' },
      { text: 'Me afecta bastante', type: 'moderado' },
      { text: 'Me afecta mucho', type: 'bajo' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'muy_alto' },
      { text: 'Bien, con algunas dudas', type: 'alto' },
      { text: 'Incómodo/a frecuentemente', type: 'moderado' },
      { text: 'Mal, me genera mucho malestar', type: 'bajo' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'muy_alto' },
      { text: 'Neutral', type: 'alto' },
      { text: 'A veces negativamente', type: 'moderado' },
      { text: 'Muy negativamente', type: 'bajo' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'muy_alto' },
      { text: 'Un poco, cuando puedo', type: 'alto' },
      { text: 'Sí, pero me cuesta', type: 'moderado' },
      { text: 'Sí, necesito ayuda', type: 'bajo' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'muy_alto' },
      { text: 'Más o menos igual', type: 'alto' },
      { text: 'Ha empeorado un poco', type: 'moderado' },
      { text: 'Ha empeorado mucho', type: 'bajo' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'muy_alto' },
      { text: 'Un poco', type: 'alto' },
      { text: 'Bastante', type: 'moderado' },
      { text: 'Demasiada', type: 'bajo' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'muy_alto' },
      { text: 'Normal', type: 'alto' },
      { text: 'Que tengo un problema con esto', type: 'moderado' },
      { text: 'Que necesito ayuda urgente', type: 'bajo' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'muy_alto' },
      { text: 'Rara vez', type: 'alto' },
      { text: 'A veces', type: 'moderado' },
      { text: 'Frecuentemente', type: 'bajo' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'muy_alto' },
      { text: 'Un poco', type: 'alto' },
      { text: 'Bastante', type: 'moderado' },
      { text: 'Mucho', type: 'bajo' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'muy_alto' },
      { text: 'Buena', type: 'alto' },
      { text: 'Regular', type: 'moderado' },
      { text: 'Mala', type: 'bajo' },
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
  muy_alto: {
    type: 'muy_alto',
    title: 'Súper Optimista',
    emoji: '🌟😄',
    percentage: 'Nivel saludable',
    description: 'Ves todo positivo. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  alto: {
    type: 'alto',
    title: 'Optimista',
    emoji: '💚🌈',
    percentage: 'Nivel moderado',
    description: 'Generalmente positivo/a. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  moderado: {
    type: 'moderado',
    title: 'Realista',
    emoji: '💛⚖️',
    percentage: 'Nivel alto - Atención',
    description: 'Balance entre positivo y negativo. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  bajo: {
    type: 'bajo',
    title: 'Pesimista',
    emoji: '🌧️😔',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Tiendes a ver lo negativo. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { muy_alto: 0, alto: 0, moderado: 0, bajo: 0 };

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
