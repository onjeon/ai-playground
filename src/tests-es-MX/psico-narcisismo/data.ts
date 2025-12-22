// Test de Rasgos Narcisistas - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a rasgos narcisistas?',
    options: [
      { text: 'Muy humilde', type: 'bajo' },
      { text: 'Autoestima sana', type: 'normal' },
      { text: 'Algo egocéntrico/a', type: 'elevado' },
      { text: 'Rasgos narcisistas marcados', type: 'alto' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'bajo' },
      { text: 'A veces', type: 'normal' },
      { text: 'Frecuentemente', type: 'elevado' },
      { text: 'Casi siempre', type: 'alto' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'bajo' },
      { text: 'Me afecta un poco', type: 'normal' },
      { text: 'Me afecta bastante', type: 'elevado' },
      { text: 'Me afecta mucho', type: 'alto' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'bajo' },
      { text: 'Bien, con algunas dudas', type: 'normal' },
      { text: 'Incómodo/a frecuentemente', type: 'elevado' },
      { text: 'Mal, me genera mucho malestar', type: 'alto' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'bajo' },
      { text: 'Neutral', type: 'normal' },
      { text: 'A veces negativamente', type: 'elevado' },
      { text: 'Muy negativamente', type: 'alto' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'bajo' },
      { text: 'Un poco, cuando puedo', type: 'normal' },
      { text: 'Sí, pero me cuesta', type: 'elevado' },
      { text: 'Sí, necesito ayuda', type: 'alto' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'bajo' },
      { text: 'Más o menos igual', type: 'normal' },
      { text: 'Ha empeorado un poco', type: 'elevado' },
      { text: 'Ha empeorado mucho', type: 'alto' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'bajo' },
      { text: 'Un poco', type: 'normal' },
      { text: 'Bastante', type: 'elevado' },
      { text: 'Demasiada', type: 'alto' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'bajo' },
      { text: 'Normal', type: 'normal' },
      { text: 'Que tengo un problema con esto', type: 'elevado' },
      { text: 'Que necesito ayuda urgente', type: 'alto' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'bajo' },
      { text: 'Rara vez', type: 'normal' },
      { text: 'A veces', type: 'elevado' },
      { text: 'Frecuentemente', type: 'alto' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'bajo' },
      { text: 'Un poco', type: 'normal' },
      { text: 'Bastante', type: 'elevado' },
      { text: 'Mucho', type: 'alto' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'bajo' },
      { text: 'Buena', type: 'normal' },
      { text: 'Regular', type: 'elevado' },
      { text: 'Mala', type: 'alto' },
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
  bajo: {
    type: 'bajo',
    title: 'Bajo Narcisismo',
    emoji: '💚🙏',
    percentage: 'Nivel saludable',
    description: 'Muy humilde. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  normal: {
    type: 'normal',
    title: 'Narcisismo Normal',
    emoji: '💛⚖️',
    percentage: 'Nivel moderado',
    description: 'Autoestima sana. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  elevado: {
    type: 'elevado',
    title: 'Narcisismo Elevado',
    emoji: '🟠👑',
    percentage: 'Nivel alto - Atención',
    description: 'Algo egocéntrico/a. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  alto: {
    type: 'alto',
    title: 'Alto Narcisismo',
    emoji: '🔴🪞',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Rasgos narcisistas marcados. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { bajo: 0, normal: 0, elevado: 0, alto: 0 };

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
