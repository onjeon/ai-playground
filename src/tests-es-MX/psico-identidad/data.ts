// Test de Solidez de Identidad - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a solidez de identidad?',
    options: [
      { text: 'Sabes quién eres', type: 'solida' },
      { text: 'Generalmente seguro/a de ti', type: 'estable' },
      { text: 'Dudas sobre tu identidad', type: 'difusa' },
      { text: 'No sabes quién eres', type: 'fragmentada' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'solida' },
      { text: 'A veces', type: 'estable' },
      { text: 'Frecuentemente', type: 'difusa' },
      { text: 'Casi siempre', type: 'fragmentada' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'solida' },
      { text: 'Me afecta un poco', type: 'estable' },
      { text: 'Me afecta bastante', type: 'difusa' },
      { text: 'Me afecta mucho', type: 'fragmentada' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'solida' },
      { text: 'Bien, con algunas dudas', type: 'estable' },
      { text: 'Incómodo/a frecuentemente', type: 'difusa' },
      { text: 'Mal, me genera mucho malestar', type: 'fragmentada' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'solida' },
      { text: 'Neutral', type: 'estable' },
      { text: 'A veces negativamente', type: 'difusa' },
      { text: 'Muy negativamente', type: 'fragmentada' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'solida' },
      { text: 'Un poco, cuando puedo', type: 'estable' },
      { text: 'Sí, pero me cuesta', type: 'difusa' },
      { text: 'Sí, necesito ayuda', type: 'fragmentada' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'solida' },
      { text: 'Más o menos igual', type: 'estable' },
      { text: 'Ha empeorado un poco', type: 'difusa' },
      { text: 'Ha empeorado mucho', type: 'fragmentada' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'solida' },
      { text: 'Un poco', type: 'estable' },
      { text: 'Bastante', type: 'difusa' },
      { text: 'Demasiada', type: 'fragmentada' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'solida' },
      { text: 'Normal', type: 'estable' },
      { text: 'Que tengo un problema con esto', type: 'difusa' },
      { text: 'Que necesito ayuda urgente', type: 'fragmentada' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'solida' },
      { text: 'Rara vez', type: 'estable' },
      { text: 'A veces', type: 'difusa' },
      { text: 'Frecuentemente', type: 'fragmentada' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'solida' },
      { text: 'Un poco', type: 'estable' },
      { text: 'Bastante', type: 'difusa' },
      { text: 'Mucho', type: 'fragmentada' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'solida' },
      { text: 'Buena', type: 'estable' },
      { text: 'Regular', type: 'difusa' },
      { text: 'Mala', type: 'fragmentada' },
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
  solida: {
    type: 'solida',
    title: 'Identidad Sólida',
    emoji: '💎🌟',
    percentage: 'Nivel saludable',
    description: 'Sabes quién eres. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  estable: {
    type: 'estable',
    title: 'Identidad Estable',
    emoji: '💚✨',
    percentage: 'Nivel moderado',
    description: 'Generalmente seguro/a de ti. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  difusa: {
    type: 'difusa',
    title: 'Identidad Difusa',
    emoji: '💛❓',
    percentage: 'Nivel alto - Atención',
    description: 'Dudas sobre tu identidad. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  fragmentada: {
    type: 'fragmentada',
    title: 'Identidad Fragmentada',
    emoji: '🌀😵',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'No sabes quién eres. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { solida: 0, estable: 0, difusa: 0, fragmentada: 0 };

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
