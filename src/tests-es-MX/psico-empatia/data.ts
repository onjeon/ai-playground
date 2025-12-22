// Test de Nivel de Empatía - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a nivel de empatía?',
    options: [
      { text: 'Sientes todo lo que otros sienten', type: 'muy_alta' },
      { text: 'Muy sensible a emociones ajenas', type: 'alta' },
      { text: 'Empatía normal', type: 'moderada' },
      { text: 'Te cuesta conectar emocionalmente', type: 'baja' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'muy_alta' },
      { text: 'A veces', type: 'alta' },
      { text: 'Frecuentemente', type: 'moderada' },
      { text: 'Casi siempre', type: 'baja' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'muy_alta' },
      { text: 'Me afecta un poco', type: 'alta' },
      { text: 'Me afecta bastante', type: 'moderada' },
      { text: 'Me afecta mucho', type: 'baja' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'muy_alta' },
      { text: 'Bien, con algunas dudas', type: 'alta' },
      { text: 'Incómodo/a frecuentemente', type: 'moderada' },
      { text: 'Mal, me genera mucho malestar', type: 'baja' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'muy_alta' },
      { text: 'Neutral', type: 'alta' },
      { text: 'A veces negativamente', type: 'moderada' },
      { text: 'Muy negativamente', type: 'baja' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'muy_alta' },
      { text: 'Un poco, cuando puedo', type: 'alta' },
      { text: 'Sí, pero me cuesta', type: 'moderada' },
      { text: 'Sí, necesito ayuda', type: 'baja' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'muy_alta' },
      { text: 'Más o menos igual', type: 'alta' },
      { text: 'Ha empeorado un poco', type: 'moderada' },
      { text: 'Ha empeorado mucho', type: 'baja' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'muy_alta' },
      { text: 'Un poco', type: 'alta' },
      { text: 'Bastante', type: 'moderada' },
      { text: 'Demasiada', type: 'baja' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'muy_alta' },
      { text: 'Normal', type: 'alta' },
      { text: 'Que tengo un problema con esto', type: 'moderada' },
      { text: 'Que necesito ayuda urgente', type: 'baja' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'muy_alta' },
      { text: 'Rara vez', type: 'alta' },
      { text: 'A veces', type: 'moderada' },
      { text: 'Frecuentemente', type: 'baja' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'muy_alta' },
      { text: 'Un poco', type: 'alta' },
      { text: 'Bastante', type: 'moderada' },
      { text: 'Mucho', type: 'baja' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'muy_alta' },
      { text: 'Buena', type: 'alta' },
      { text: 'Regular', type: 'moderada' },
      { text: 'Mala', type: 'baja' },
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
  muy_alta: {
    type: 'muy_alta',
    title: 'Híper Empático/a',
    emoji: '💗💫',
    percentage: 'Nivel saludable',
    description: 'Sientes todo lo que otros sienten. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  alta: {
    type: 'alta',
    title: 'Muy Empático/a',
    emoji: '💚❤️',
    percentage: 'Nivel moderado',
    description: 'Muy sensible a emociones ajenas. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  moderada: {
    type: 'moderada',
    title: 'Empatía Moderada',
    emoji: '💛🔄',
    percentage: 'Nivel alto - Atención',
    description: 'Empatía normal. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  baja: {
    type: 'baja',
    title: 'Baja Empatía',
    emoji: '🌧️😐',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Te cuesta conectar emocionalmente. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { muy_alta: 0, alta: 0, moderada: 0, baja: 0 };

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
