// Test de Sentido de Propósito - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a sentido de propósito?',
    options: [
      { text: 'Sabes para qué vives', type: 'claro' },
      { text: 'Explorando tu propósito', type: 'en_busqueda' },
      { text: 'No tienes claridad', type: 'difuso' },
      { text: 'No ves sentido en la vida', type: 'ausente' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'claro' },
      { text: 'A veces', type: 'en_busqueda' },
      { text: 'Frecuentemente', type: 'difuso' },
      { text: 'Casi siempre', type: 'ausente' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'claro' },
      { text: 'Me afecta un poco', type: 'en_busqueda' },
      { text: 'Me afecta bastante', type: 'difuso' },
      { text: 'Me afecta mucho', type: 'ausente' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'claro' },
      { text: 'Bien, con algunas dudas', type: 'en_busqueda' },
      { text: 'Incómodo/a frecuentemente', type: 'difuso' },
      { text: 'Mal, me genera mucho malestar', type: 'ausente' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'claro' },
      { text: 'Neutral', type: 'en_busqueda' },
      { text: 'A veces negativamente', type: 'difuso' },
      { text: 'Muy negativamente', type: 'ausente' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'claro' },
      { text: 'Un poco, cuando puedo', type: 'en_busqueda' },
      { text: 'Sí, pero me cuesta', type: 'difuso' },
      { text: 'Sí, necesito ayuda', type: 'ausente' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'claro' },
      { text: 'Más o menos igual', type: 'en_busqueda' },
      { text: 'Ha empeorado un poco', type: 'difuso' },
      { text: 'Ha empeorado mucho', type: 'ausente' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'claro' },
      { text: 'Un poco', type: 'en_busqueda' },
      { text: 'Bastante', type: 'difuso' },
      { text: 'Demasiada', type: 'ausente' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'claro' },
      { text: 'Normal', type: 'en_busqueda' },
      { text: 'Que tengo un problema con esto', type: 'difuso' },
      { text: 'Que necesito ayuda urgente', type: 'ausente' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'claro' },
      { text: 'Rara vez', type: 'en_busqueda' },
      { text: 'A veces', type: 'difuso' },
      { text: 'Frecuentemente', type: 'ausente' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'claro' },
      { text: 'Un poco', type: 'en_busqueda' },
      { text: 'Bastante', type: 'difuso' },
      { text: 'Mucho', type: 'ausente' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'claro' },
      { text: 'Buena', type: 'en_busqueda' },
      { text: 'Regular', type: 'difuso' },
      { text: 'Mala', type: 'ausente' },
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
  claro: {
    type: 'claro',
    title: 'Propósito Claro',
    emoji: '🎯🌟',
    percentage: 'Nivel saludable',
    description: 'Sabes para qué vives. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  en_busqueda: {
    type: 'en_busqueda',
    title: 'Buscando Propósito',
    emoji: '🔍💛',
    percentage: 'Nivel moderado',
    description: 'Explorando tu propósito. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  difuso: {
    type: 'difuso',
    title: 'Propósito Difuso',
    emoji: '❓🟠',
    percentage: 'Nivel alto - Atención',
    description: 'No tienes claridad. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  ausente: {
    type: 'ausente',
    title: 'Sin Propósito',
    emoji: '😔🔴',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'No ves sentido en la vida. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { claro: 0, en_busqueda: 0, difuso: 0, ausente: 0 };

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
