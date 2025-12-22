// Test de Nivel de Fobias - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a nivel de fobias?',
    options: [
      { text: 'No tienes fobias', type: 'ninguna' },
      { text: 'Miedos comunes manejables', type: 'comunes' },
      { text: 'Varios miedos intensos', type: 'multiples' },
      { text: 'Fobias que limitan tu vida', type: 'severas' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'ninguna' },
      { text: 'A veces', type: 'comunes' },
      { text: 'Frecuentemente', type: 'multiples' },
      { text: 'Casi siempre', type: 'severas' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'ninguna' },
      { text: 'Me afecta un poco', type: 'comunes' },
      { text: 'Me afecta bastante', type: 'multiples' },
      { text: 'Me afecta mucho', type: 'severas' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'ninguna' },
      { text: 'Bien, con algunas dudas', type: 'comunes' },
      { text: 'Incómodo/a frecuentemente', type: 'multiples' },
      { text: 'Mal, me genera mucho malestar', type: 'severas' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'ninguna' },
      { text: 'Neutral', type: 'comunes' },
      { text: 'A veces negativamente', type: 'multiples' },
      { text: 'Muy negativamente', type: 'severas' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'ninguna' },
      { text: 'Un poco, cuando puedo', type: 'comunes' },
      { text: 'Sí, pero me cuesta', type: 'multiples' },
      { text: 'Sí, necesito ayuda', type: 'severas' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'ninguna' },
      { text: 'Más o menos igual', type: 'comunes' },
      { text: 'Ha empeorado un poco', type: 'multiples' },
      { text: 'Ha empeorado mucho', type: 'severas' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'ninguna' },
      { text: 'Un poco', type: 'comunes' },
      { text: 'Bastante', type: 'multiples' },
      { text: 'Demasiada', type: 'severas' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'ninguna' },
      { text: 'Normal', type: 'comunes' },
      { text: 'Que tengo un problema con esto', type: 'multiples' },
      { text: 'Que necesito ayuda urgente', type: 'severas' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'ninguna' },
      { text: 'Rara vez', type: 'comunes' },
      { text: 'A veces', type: 'multiples' },
      { text: 'Frecuentemente', type: 'severas' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'ninguna' },
      { text: 'Un poco', type: 'comunes' },
      { text: 'Bastante', type: 'multiples' },
      { text: 'Mucho', type: 'severas' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'ninguna' },
      { text: 'Buena', type: 'comunes' },
      { text: 'Regular', type: 'multiples' },
      { text: 'Mala', type: 'severas' },
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
  ninguna: {
    type: 'ninguna',
    title: 'Sin Fobias',
    emoji: '💚✨',
    percentage: 'Nivel saludable',
    description: 'No tienes fobias. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  comunes: {
    type: 'comunes',
    title: 'Fobias Comunes',
    emoji: '💛😨',
    percentage: 'Nivel moderado',
    description: 'Miedos comunes manejables. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  multiples: {
    type: 'multiples',
    title: 'Múltiples Fobias',
    emoji: '🟠😰',
    percentage: 'Nivel alto - Atención',
    description: 'Varios miedos intensos. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  severas: {
    type: 'severas',
    title: 'Fobias Severas',
    emoji: '🔴😱',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Fobias que limitan tu vida. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { ninguna: 0, comunes: 0, multiples: 0, severas: 0 };

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
