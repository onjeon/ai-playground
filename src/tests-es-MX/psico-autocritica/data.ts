// Test de Nivel de Autocrítica - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a nivel de autocrítica?',
    options: [
      { text: 'Te evalúas con compasión', type: 'sana' },
      { text: 'A veces eres duro/a contigo', type: 'moderada' },
      { text: 'Muy crítico/a contigo', type: 'alta' },
      { text: 'Te destruyes con tu crítica', type: 'destructiva' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'sana' },
      { text: 'A veces', type: 'moderada' },
      { text: 'Frecuentemente', type: 'alta' },
      { text: 'Casi siempre', type: 'destructiva' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'sana' },
      { text: 'Me afecta un poco', type: 'moderada' },
      { text: 'Me afecta bastante', type: 'alta' },
      { text: 'Me afecta mucho', type: 'destructiva' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'sana' },
      { text: 'Bien, con algunas dudas', type: 'moderada' },
      { text: 'Incómodo/a frecuentemente', type: 'alta' },
      { text: 'Mal, me genera mucho malestar', type: 'destructiva' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'sana' },
      { text: 'Neutral', type: 'moderada' },
      { text: 'A veces negativamente', type: 'alta' },
      { text: 'Muy negativamente', type: 'destructiva' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'sana' },
      { text: 'Un poco, cuando puedo', type: 'moderada' },
      { text: 'Sí, pero me cuesta', type: 'alta' },
      { text: 'Sí, necesito ayuda', type: 'destructiva' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'sana' },
      { text: 'Más o menos igual', type: 'moderada' },
      { text: 'Ha empeorado un poco', type: 'alta' },
      { text: 'Ha empeorado mucho', type: 'destructiva' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'sana' },
      { text: 'Un poco', type: 'moderada' },
      { text: 'Bastante', type: 'alta' },
      { text: 'Demasiada', type: 'destructiva' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'sana' },
      { text: 'Normal', type: 'moderada' },
      { text: 'Que tengo un problema con esto', type: 'alta' },
      { text: 'Que necesito ayuda urgente', type: 'destructiva' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'sana' },
      { text: 'Rara vez', type: 'moderada' },
      { text: 'A veces', type: 'alta' },
      { text: 'Frecuentemente', type: 'destructiva' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'sana' },
      { text: 'Un poco', type: 'moderada' },
      { text: 'Bastante', type: 'alta' },
      { text: 'Mucho', type: 'destructiva' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'sana' },
      { text: 'Buena', type: 'moderada' },
      { text: 'Regular', type: 'alta' },
      { text: 'Mala', type: 'destructiva' },
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
  sana: {
    type: 'sana',
    title: 'Autocrítica Sana',
    emoji: '💚✨',
    percentage: 'Nivel saludable',
    description: 'Te evalúas con compasión. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  moderada: {
    type: 'moderada',
    title: 'Autocrítica Moderada',
    emoji: '💛🔍',
    percentage: 'Nivel moderado',
    description: 'A veces eres duro/a contigo. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  alta: {
    type: 'alta',
    title: 'Autocrítica Alta',
    emoji: '🟠😔',
    percentage: 'Nivel alto - Atención',
    description: 'Muy crítico/a contigo. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  destructiva: {
    type: 'destructiva',
    title: 'Autocrítica Destructiva',
    emoji: '🔴💔',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Te destruyes con tu crítica. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { sana: 0, moderada: 0, alta: 0, destructiva: 0 };

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
