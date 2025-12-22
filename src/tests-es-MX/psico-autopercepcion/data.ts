// Test de Autopercepción - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a autopercepción?',
    options: [
      { text: 'Te ves muy positivamente', type: 'positiva' },
      { text: 'Te ves de forma realista', type: 'realista' },
      { text: 'Te ves negativamente', type: 'negativa' },
      { text: 'Tu imagen de ti está distorsionada', type: 'distorsionada' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'positiva' },
      { text: 'A veces', type: 'realista' },
      { text: 'Frecuentemente', type: 'negativa' },
      { text: 'Casi siempre', type: 'distorsionada' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'positiva' },
      { text: 'Me afecta un poco', type: 'realista' },
      { text: 'Me afecta bastante', type: 'negativa' },
      { text: 'Me afecta mucho', type: 'distorsionada' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'positiva' },
      { text: 'Bien, con algunas dudas', type: 'realista' },
      { text: 'Incómodo/a frecuentemente', type: 'negativa' },
      { text: 'Mal, me genera mucho malestar', type: 'distorsionada' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'positiva' },
      { text: 'Neutral', type: 'realista' },
      { text: 'A veces negativamente', type: 'negativa' },
      { text: 'Muy negativamente', type: 'distorsionada' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'positiva' },
      { text: 'Un poco, cuando puedo', type: 'realista' },
      { text: 'Sí, pero me cuesta', type: 'negativa' },
      { text: 'Sí, necesito ayuda', type: 'distorsionada' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'positiva' },
      { text: 'Más o menos igual', type: 'realista' },
      { text: 'Ha empeorado un poco', type: 'negativa' },
      { text: 'Ha empeorado mucho', type: 'distorsionada' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'positiva' },
      { text: 'Un poco', type: 'realista' },
      { text: 'Bastante', type: 'negativa' },
      { text: 'Demasiada', type: 'distorsionada' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'positiva' },
      { text: 'Normal', type: 'realista' },
      { text: 'Que tengo un problema con esto', type: 'negativa' },
      { text: 'Que necesito ayuda urgente', type: 'distorsionada' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'positiva' },
      { text: 'Rara vez', type: 'realista' },
      { text: 'A veces', type: 'negativa' },
      { text: 'Frecuentemente', type: 'distorsionada' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'positiva' },
      { text: 'Un poco', type: 'realista' },
      { text: 'Bastante', type: 'negativa' },
      { text: 'Mucho', type: 'distorsionada' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'positiva' },
      { text: 'Buena', type: 'realista' },
      { text: 'Regular', type: 'negativa' },
      { text: 'Mala', type: 'distorsionada' },
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
  positiva: {
    type: 'positiva',
    title: 'Autopercepción Positiva',
    emoji: '🌟😊',
    percentage: 'Nivel saludable',
    description: 'Te ves muy positivamente. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  realista: {
    type: 'realista',
    title: 'Autopercepción Realista',
    emoji: '💚⚖️',
    percentage: 'Nivel moderado',
    description: 'Te ves de forma realista. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  negativa: {
    type: 'negativa',
    title: 'Autopercepción Negativa',
    emoji: '🌧️😔',
    percentage: 'Nivel alto - Atención',
    description: 'Te ves negativamente. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  distorsionada: {
    type: 'distorsionada',
    title: 'Autopercepción Distorsionada',
    emoji: '🌀😵',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Tu imagen de ti está distorsionada. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { positiva: 0, realista: 0, negativa: 0, distorsionada: 0 };

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
