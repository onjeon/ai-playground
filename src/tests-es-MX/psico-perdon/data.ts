// Test de Capacidad de Perdón - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a capacidad de perdón?',
    options: [
      { text: 'Perdonas fácilmente', type: 'alto' },
      { text: 'Necesitas tiempo pero perdonas', type: 'moderado' },
      { text: 'Te cuesta soltar el enojo', type: 'bajo' },
      { text: 'Guardas rencores mucho tiempo', type: 'muy_bajo' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'alto' },
      { text: 'A veces', type: 'moderado' },
      { text: 'Frecuentemente', type: 'bajo' },
      { text: 'Casi siempre', type: 'muy_bajo' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'alto' },
      { text: 'Me afecta un poco', type: 'moderado' },
      { text: 'Me afecta bastante', type: 'bajo' },
      { text: 'Me afecta mucho', type: 'muy_bajo' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'alto' },
      { text: 'Bien, con algunas dudas', type: 'moderado' },
      { text: 'Incómodo/a frecuentemente', type: 'bajo' },
      { text: 'Mal, me genera mucho malestar', type: 'muy_bajo' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'alto' },
      { text: 'Neutral', type: 'moderado' },
      { text: 'A veces negativamente', type: 'bajo' },
      { text: 'Muy negativamente', type: 'muy_bajo' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'alto' },
      { text: 'Un poco, cuando puedo', type: 'moderado' },
      { text: 'Sí, pero me cuesta', type: 'bajo' },
      { text: 'Sí, necesito ayuda', type: 'muy_bajo' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'alto' },
      { text: 'Más o menos igual', type: 'moderado' },
      { text: 'Ha empeorado un poco', type: 'bajo' },
      { text: 'Ha empeorado mucho', type: 'muy_bajo' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'alto' },
      { text: 'Un poco', type: 'moderado' },
      { text: 'Bastante', type: 'bajo' },
      { text: 'Demasiada', type: 'muy_bajo' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'alto' },
      { text: 'Normal', type: 'moderado' },
      { text: 'Que tengo un problema con esto', type: 'bajo' },
      { text: 'Que necesito ayuda urgente', type: 'muy_bajo' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'alto' },
      { text: 'Rara vez', type: 'moderado' },
      { text: 'A veces', type: 'bajo' },
      { text: 'Frecuentemente', type: 'muy_bajo' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'alto' },
      { text: 'Un poco', type: 'moderado' },
      { text: 'Bastante', type: 'bajo' },
      { text: 'Mucho', type: 'muy_bajo' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'alto' },
      { text: 'Buena', type: 'moderado' },
      { text: 'Regular', type: 'bajo' },
      { text: 'Mala', type: 'muy_bajo' },
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
  alto: {
    type: 'alto',
    title: 'Gran Perdonador/a',
    emoji: '💚🕊️',
    percentage: 'Nivel saludable',
    description: 'Perdonas fácilmente. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  moderado: {
    type: 'moderado',
    title: 'Perdona con Tiempo',
    emoji: '💛⏰',
    percentage: 'Nivel moderado',
    description: 'Necesitas tiempo pero perdonas. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  bajo: {
    type: 'bajo',
    title: 'Le Cuesta Perdonar',
    emoji: '🟠😤',
    percentage: 'Nivel alto - Atención',
    description: 'Te cuesta soltar el enojo. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  muy_bajo: {
    type: 'muy_bajo',
    title: 'Guarda Rencores',
    emoji: '🔴💔',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Guardas rencores mucho tiempo. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { alto: 0, moderado: 0, bajo: 0, muy_bajo: 0 };

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
