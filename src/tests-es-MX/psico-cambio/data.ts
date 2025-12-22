// Test de Adaptación al Cambio - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a adaptación al cambio?',
    options: [
      { text: 'Disfrutas los cambios', type: 'muy_alta' },
      { text: 'Te adaptas bien', type: 'alta' },
      { text: 'Te cuesta adaptarte', type: 'baja' },
      { text: 'Los cambios te paralizan', type: 'muy_baja' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'muy_alta' },
      { text: 'A veces', type: 'alta' },
      { text: 'Frecuentemente', type: 'baja' },
      { text: 'Casi siempre', type: 'muy_baja' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'muy_alta' },
      { text: 'Me afecta un poco', type: 'alta' },
      { text: 'Me afecta bastante', type: 'baja' },
      { text: 'Me afecta mucho', type: 'muy_baja' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'muy_alta' },
      { text: 'Bien, con algunas dudas', type: 'alta' },
      { text: 'Incómodo/a frecuentemente', type: 'baja' },
      { text: 'Mal, me genera mucho malestar', type: 'muy_baja' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'muy_alta' },
      { text: 'Neutral', type: 'alta' },
      { text: 'A veces negativamente', type: 'baja' },
      { text: 'Muy negativamente', type: 'muy_baja' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'muy_alta' },
      { text: 'Un poco, cuando puedo', type: 'alta' },
      { text: 'Sí, pero me cuesta', type: 'baja' },
      { text: 'Sí, necesito ayuda', type: 'muy_baja' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'muy_alta' },
      { text: 'Más o menos igual', type: 'alta' },
      { text: 'Ha empeorado un poco', type: 'baja' },
      { text: 'Ha empeorado mucho', type: 'muy_baja' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'muy_alta' },
      { text: 'Un poco', type: 'alta' },
      { text: 'Bastante', type: 'baja' },
      { text: 'Demasiada', type: 'muy_baja' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'muy_alta' },
      { text: 'Normal', type: 'alta' },
      { text: 'Que tengo un problema con esto', type: 'baja' },
      { text: 'Que necesito ayuda urgente', type: 'muy_baja' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'muy_alta' },
      { text: 'Rara vez', type: 'alta' },
      { text: 'A veces', type: 'baja' },
      { text: 'Frecuentemente', type: 'muy_baja' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'muy_alta' },
      { text: 'Un poco', type: 'alta' },
      { text: 'Bastante', type: 'baja' },
      { text: 'Mucho', type: 'muy_baja' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'muy_alta' },
      { text: 'Buena', type: 'alta' },
      { text: 'Regular', type: 'baja' },
      { text: 'Mala', type: 'muy_baja' },
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
    title: 'Ama el Cambio',
    emoji: '🦋🌟',
    percentage: 'Nivel saludable',
    description: 'Disfrutas los cambios. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  alta: {
    type: 'alta',
    title: 'Se Adapta Bien',
    emoji: '💚🔄',
    percentage: 'Nivel moderado',
    description: 'Te adaptas bien. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  baja: {
    type: 'baja',
    title: 'Resiste el Cambio',
    emoji: '🟠😰',
    percentage: 'Nivel alto - Atención',
    description: 'Te cuesta adaptarte. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  muy_baja: {
    type: 'muy_baja',
    title: 'Teme el Cambio',
    emoji: '🔴😱',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Los cambios te paralizan. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { muy_alta: 0, alta: 0, baja: 0, muy_baja: 0 };

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
