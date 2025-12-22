// Test de Madurez Emocional - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a madurez emocional?',
    options: [
      { text: 'Gran madurez emocional', type: 'alta' },
      { text: 'Madurez adecuada', type: 'moderada' },
      { text: 'Áreas por madurar', type: 'baja' },
      { text: 'Inmadurez emocional', type: 'inmadura' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'alta' },
      { text: 'A veces', type: 'moderada' },
      { text: 'Frecuentemente', type: 'baja' },
      { text: 'Casi siempre', type: 'inmadura' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'alta' },
      { text: 'Me afecta un poco', type: 'moderada' },
      { text: 'Me afecta bastante', type: 'baja' },
      { text: 'Me afecta mucho', type: 'inmadura' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'alta' },
      { text: 'Bien, con algunas dudas', type: 'moderada' },
      { text: 'Incómodo/a frecuentemente', type: 'baja' },
      { text: 'Mal, me genera mucho malestar', type: 'inmadura' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'alta' },
      { text: 'Neutral', type: 'moderada' },
      { text: 'A veces negativamente', type: 'baja' },
      { text: 'Muy negativamente', type: 'inmadura' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'alta' },
      { text: 'Un poco, cuando puedo', type: 'moderada' },
      { text: 'Sí, pero me cuesta', type: 'baja' },
      { text: 'Sí, necesito ayuda', type: 'inmadura' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'alta' },
      { text: 'Más o menos igual', type: 'moderada' },
      { text: 'Ha empeorado un poco', type: 'baja' },
      { text: 'Ha empeorado mucho', type: 'inmadura' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'alta' },
      { text: 'Un poco', type: 'moderada' },
      { text: 'Bastante', type: 'baja' },
      { text: 'Demasiada', type: 'inmadura' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'alta' },
      { text: 'Normal', type: 'moderada' },
      { text: 'Que tengo un problema con esto', type: 'baja' },
      { text: 'Que necesito ayuda urgente', type: 'inmadura' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'alta' },
      { text: 'Rara vez', type: 'moderada' },
      { text: 'A veces', type: 'baja' },
      { text: 'Frecuentemente', type: 'inmadura' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'alta' },
      { text: 'Un poco', type: 'moderada' },
      { text: 'Bastante', type: 'baja' },
      { text: 'Mucho', type: 'inmadura' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'alta' },
      { text: 'Buena', type: 'moderada' },
      { text: 'Regular', type: 'baja' },
      { text: 'Mala', type: 'inmadura' },
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
  alta: {
    type: 'alta',
    title: 'Muy Maduro/a',
    emoji: '🌳💚',
    percentage: 'Nivel saludable',
    description: 'Gran madurez emocional. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  moderada: {
    type: 'moderada',
    title: 'Maduro/a',
    emoji: '🌱💛',
    percentage: 'Nivel moderado',
    description: 'Madurez adecuada. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  baja: {
    type: 'baja',
    title: 'En Desarrollo',
    emoji: '🌿🟠',
    percentage: 'Nivel alto - Atención',
    description: 'Áreas por madurar. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  inmadura: {
    type: 'inmadura',
    title: 'Inmaduro/a',
    emoji: '🍃🔴',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Inmadurez emocional. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { alta: 0, moderada: 0, baja: 0, inmadura: 0 };

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
