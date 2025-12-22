// Test de Nivel de Impulsividad - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a nivel de impulsividad?',
    options: [
      { text: 'Piensas antes de actuar', type: 'bajo' },
      { text: 'Balance entre pensar y actuar', type: 'moderado' },
      { text: 'Actúas sin pensar frecuentemente', type: 'alto' },
      { text: 'Altamente impulsivo/a', type: 'muy_alto' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'bajo' },
      { text: 'A veces', type: 'moderado' },
      { text: 'Frecuentemente', type: 'alto' },
      { text: 'Casi siempre', type: 'muy_alto' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'bajo' },
      { text: 'Me afecta un poco', type: 'moderado' },
      { text: 'Me afecta bastante', type: 'alto' },
      { text: 'Me afecta mucho', type: 'muy_alto' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'bajo' },
      { text: 'Bien, con algunas dudas', type: 'moderado' },
      { text: 'Incómodo/a frecuentemente', type: 'alto' },
      { text: 'Mal, me genera mucho malestar', type: 'muy_alto' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'bajo' },
      { text: 'Neutral', type: 'moderado' },
      { text: 'A veces negativamente', type: 'alto' },
      { text: 'Muy negativamente', type: 'muy_alto' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'bajo' },
      { text: 'Un poco, cuando puedo', type: 'moderado' },
      { text: 'Sí, pero me cuesta', type: 'alto' },
      { text: 'Sí, necesito ayuda', type: 'muy_alto' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'bajo' },
      { text: 'Más o menos igual', type: 'moderado' },
      { text: 'Ha empeorado un poco', type: 'alto' },
      { text: 'Ha empeorado mucho', type: 'muy_alto' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'bajo' },
      { text: 'Un poco', type: 'moderado' },
      { text: 'Bastante', type: 'alto' },
      { text: 'Demasiada', type: 'muy_alto' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'bajo' },
      { text: 'Normal', type: 'moderado' },
      { text: 'Que tengo un problema con esto', type: 'alto' },
      { text: 'Que necesito ayuda urgente', type: 'muy_alto' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'bajo' },
      { text: 'Rara vez', type: 'moderado' },
      { text: 'A veces', type: 'alto' },
      { text: 'Frecuentemente', type: 'muy_alto' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'bajo' },
      { text: 'Un poco', type: 'moderado' },
      { text: 'Bastante', type: 'alto' },
      { text: 'Mucho', type: 'muy_alto' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'bajo' },
      { text: 'Buena', type: 'moderado' },
      { text: 'Regular', type: 'alto' },
      { text: 'Mala', type: 'muy_alto' },
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
    title: 'Muy Reflexivo/a',
    emoji: '🧠💚',
    percentage: 'Nivel saludable',
    description: 'Piensas antes de actuar. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  moderado: {
    type: 'moderado',
    title: 'Equilibrado/a',
    emoji: '⚖️💛',
    percentage: 'Nivel moderado',
    description: 'Balance entre pensar y actuar. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  alto: {
    type: 'alto',
    title: 'Impulsivo/a',
    emoji: '⚡🟠',
    percentage: 'Nivel alto - Atención',
    description: 'Actúas sin pensar frecuentemente. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  muy_alto: {
    type: 'muy_alto',
    title: 'Muy Impulsivo/a',
    emoji: '🌋🔴',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Altamente impulsivo/a. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { bajo: 0, moderado: 0, alto: 0, muy_alto: 0 };

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
