// Test de Tendencia a Manipular - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a tendencia a manipular?',
    options: [
      { text: 'Eres transparente', type: 'nula' },
      { text: 'A veces recurres a ello', type: 'ocasional' },
      { text: 'Manipulas frecuentemente', type: 'frecuente' },
      { text: 'La manipulación es tu patrón', type: 'habitual' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'nula' },
      { text: 'A veces', type: 'ocasional' },
      { text: 'Frecuentemente', type: 'frecuente' },
      { text: 'Casi siempre', type: 'habitual' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'nula' },
      { text: 'Me afecta un poco', type: 'ocasional' },
      { text: 'Me afecta bastante', type: 'frecuente' },
      { text: 'Me afecta mucho', type: 'habitual' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'nula' },
      { text: 'Bien, con algunas dudas', type: 'ocasional' },
      { text: 'Incómodo/a frecuentemente', type: 'frecuente' },
      { text: 'Mal, me genera mucho malestar', type: 'habitual' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'nula' },
      { text: 'Neutral', type: 'ocasional' },
      { text: 'A veces negativamente', type: 'frecuente' },
      { text: 'Muy negativamente', type: 'habitual' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'nula' },
      { text: 'Un poco, cuando puedo', type: 'ocasional' },
      { text: 'Sí, pero me cuesta', type: 'frecuente' },
      { text: 'Sí, necesito ayuda', type: 'habitual' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'nula' },
      { text: 'Más o menos igual', type: 'ocasional' },
      { text: 'Ha empeorado un poco', type: 'frecuente' },
      { text: 'Ha empeorado mucho', type: 'habitual' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'nula' },
      { text: 'Un poco', type: 'ocasional' },
      { text: 'Bastante', type: 'frecuente' },
      { text: 'Demasiada', type: 'habitual' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'nula' },
      { text: 'Normal', type: 'ocasional' },
      { text: 'Que tengo un problema con esto', type: 'frecuente' },
      { text: 'Que necesito ayuda urgente', type: 'habitual' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'nula' },
      { text: 'Rara vez', type: 'ocasional' },
      { text: 'A veces', type: 'frecuente' },
      { text: 'Frecuentemente', type: 'habitual' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'nula' },
      { text: 'Un poco', type: 'ocasional' },
      { text: 'Bastante', type: 'frecuente' },
      { text: 'Mucho', type: 'habitual' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'nula' },
      { text: 'Buena', type: 'ocasional' },
      { text: 'Regular', type: 'frecuente' },
      { text: 'Mala', type: 'habitual' },
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
  nula: {
    type: 'nula',
    title: 'No Manipulador/a',
    emoji: '💚✨',
    percentage: 'Nivel saludable',
    description: 'Eres transparente. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  ocasional: {
    type: 'ocasional',
    title: 'Ocasionalmente',
    emoji: '💛❓',
    percentage: 'Nivel moderado',
    description: 'A veces recurres a ello. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  frecuente: {
    type: 'frecuente',
    title: 'Frecuentemente',
    emoji: '🟠🎭',
    percentage: 'Nivel alto - Atención',
    description: 'Manipulas frecuentemente. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  habitual: {
    type: 'habitual',
    title: 'Manipulador/a Habitual',
    emoji: '🔴⚠️',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'La manipulación es tu patrón. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { nula: 0, ocasional: 0, frecuente: 0, habitual: 0 };

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
