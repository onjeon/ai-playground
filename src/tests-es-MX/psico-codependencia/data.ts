// Test de Codependencia - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a codependencia?',
    options: [
      { text: 'Eres emocionalmente independiente', type: 'ausente' },
      { text: 'Algunas tendencias', type: 'leve' },
      { text: 'Patrones codependientes claros', type: 'moderada' },
      { text: 'Codependencia severa', type: 'severa' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'ausente' },
      { text: 'A veces', type: 'leve' },
      { text: 'Frecuentemente', type: 'moderada' },
      { text: 'Casi siempre', type: 'severa' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'ausente' },
      { text: 'Me afecta un poco', type: 'leve' },
      { text: 'Me afecta bastante', type: 'moderada' },
      { text: 'Me afecta mucho', type: 'severa' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'ausente' },
      { text: 'Bien, con algunas dudas', type: 'leve' },
      { text: 'Incómodo/a frecuentemente', type: 'moderada' },
      { text: 'Mal, me genera mucho malestar', type: 'severa' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'ausente' },
      { text: 'Neutral', type: 'leve' },
      { text: 'A veces negativamente', type: 'moderada' },
      { text: 'Muy negativamente', type: 'severa' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'ausente' },
      { text: 'Un poco, cuando puedo', type: 'leve' },
      { text: 'Sí, pero me cuesta', type: 'moderada' },
      { text: 'Sí, necesito ayuda', type: 'severa' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'ausente' },
      { text: 'Más o menos igual', type: 'leve' },
      { text: 'Ha empeorado un poco', type: 'moderada' },
      { text: 'Ha empeorado mucho', type: 'severa' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'ausente' },
      { text: 'Un poco', type: 'leve' },
      { text: 'Bastante', type: 'moderada' },
      { text: 'Demasiada', type: 'severa' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'ausente' },
      { text: 'Normal', type: 'leve' },
      { text: 'Que tengo un problema con esto', type: 'moderada' },
      { text: 'Que necesito ayuda urgente', type: 'severa' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'ausente' },
      { text: 'Rara vez', type: 'leve' },
      { text: 'A veces', type: 'moderada' },
      { text: 'Frecuentemente', type: 'severa' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'ausente' },
      { text: 'Un poco', type: 'leve' },
      { text: 'Bastante', type: 'moderada' },
      { text: 'Mucho', type: 'severa' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'ausente' },
      { text: 'Buena', type: 'leve' },
      { text: 'Regular', type: 'moderada' },
      { text: 'Mala', type: 'severa' },
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
  ausente: {
    type: 'ausente',
    title: 'No Codependiente',
    emoji: '💚💪',
    percentage: 'Nivel saludable',
    description: 'Eres emocionalmente independiente. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  leve: {
    type: 'leve',
    title: 'Codependencia Leve',
    emoji: '💛🔗',
    percentage: 'Nivel moderado',
    description: 'Algunas tendencias. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  moderada: {
    type: 'moderada',
    title: 'Codependencia Moderada',
    emoji: '🟠😰',
    percentage: 'Nivel alto - Atención',
    description: 'Patrones codependientes claros. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  severa: {
    type: 'severa',
    title: 'Codependencia Severa',
    emoji: '🔴🆘',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Codependencia severa. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { ausente: 0, leve: 0, moderada: 0, severa: 0 };

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
