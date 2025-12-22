// Test de Proceso de Duelo - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a proceso de duelo?',
    options: [
      { text: 'Has sanado tus pérdidas', type: 'procesado' },
      { text: 'Procesando activamente', type: 'en_proceso' },
      { text: 'Estancado en el dolor', type: 'estancado' },
      { text: 'Necesitas ayuda profesional', type: 'complicado' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'procesado' },
      { text: 'A veces', type: 'en_proceso' },
      { text: 'Frecuentemente', type: 'estancado' },
      { text: 'Casi siempre', type: 'complicado' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'procesado' },
      { text: 'Me afecta un poco', type: 'en_proceso' },
      { text: 'Me afecta bastante', type: 'estancado' },
      { text: 'Me afecta mucho', type: 'complicado' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'procesado' },
      { text: 'Bien, con algunas dudas', type: 'en_proceso' },
      { text: 'Incómodo/a frecuentemente', type: 'estancado' },
      { text: 'Mal, me genera mucho malestar', type: 'complicado' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'procesado' },
      { text: 'Neutral', type: 'en_proceso' },
      { text: 'A veces negativamente', type: 'estancado' },
      { text: 'Muy negativamente', type: 'complicado' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'procesado' },
      { text: 'Un poco, cuando puedo', type: 'en_proceso' },
      { text: 'Sí, pero me cuesta', type: 'estancado' },
      { text: 'Sí, necesito ayuda', type: 'complicado' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'procesado' },
      { text: 'Más o menos igual', type: 'en_proceso' },
      { text: 'Ha empeorado un poco', type: 'estancado' },
      { text: 'Ha empeorado mucho', type: 'complicado' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'procesado' },
      { text: 'Un poco', type: 'en_proceso' },
      { text: 'Bastante', type: 'estancado' },
      { text: 'Demasiada', type: 'complicado' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'procesado' },
      { text: 'Normal', type: 'en_proceso' },
      { text: 'Que tengo un problema con esto', type: 'estancado' },
      { text: 'Que necesito ayuda urgente', type: 'complicado' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'procesado' },
      { text: 'Rara vez', type: 'en_proceso' },
      { text: 'A veces', type: 'estancado' },
      { text: 'Frecuentemente', type: 'complicado' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'procesado' },
      { text: 'Un poco', type: 'en_proceso' },
      { text: 'Bastante', type: 'estancado' },
      { text: 'Mucho', type: 'complicado' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'procesado' },
      { text: 'Buena', type: 'en_proceso' },
      { text: 'Regular', type: 'estancado' },
      { text: 'Mala', type: 'complicado' },
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
  procesado: {
    type: 'procesado',
    title: 'Duelo Procesado',
    emoji: '💚🌱',
    percentage: 'Nivel saludable',
    description: 'Has sanado tus pérdidas. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  en_proceso: {
    type: 'en_proceso',
    title: 'En Proceso de Duelo',
    emoji: '💛🔄',
    percentage: 'Nivel moderado',
    description: 'Procesando activamente. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  estancado: {
    type: 'estancado',
    title: 'Duelo Estancado',
    emoji: '🟠😔',
    percentage: 'Nivel alto - Atención',
    description: 'Estancado en el dolor. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  complicado: {
    type: 'complicado',
    title: 'Duelo Complicado',
    emoji: '🔴😢',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Necesitas ayuda profesional. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { procesado: 0, en_proceso: 0, estancado: 0, complicado: 0 };

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
