// Test de Integración de la Sombra - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a integración de la sombra?',
    options: [
      { text: 'Aceptas tus partes oscuras', type: 'integrada' },
      { text: 'Trabajando en aceptarlas', type: 'en_proceso' },
      { text: 'Niegas tus defectos', type: 'negada' },
      { text: 'Ves en otros lo que no aceptas de ti', type: 'proyectada' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'integrada' },
      { text: 'A veces', type: 'en_proceso' },
      { text: 'Frecuentemente', type: 'negada' },
      { text: 'Casi siempre', type: 'proyectada' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'integrada' },
      { text: 'Me afecta un poco', type: 'en_proceso' },
      { text: 'Me afecta bastante', type: 'negada' },
      { text: 'Me afecta mucho', type: 'proyectada' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'integrada' },
      { text: 'Bien, con algunas dudas', type: 'en_proceso' },
      { text: 'Incómodo/a frecuentemente', type: 'negada' },
      { text: 'Mal, me genera mucho malestar', type: 'proyectada' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'integrada' },
      { text: 'Neutral', type: 'en_proceso' },
      { text: 'A veces negativamente', type: 'negada' },
      { text: 'Muy negativamente', type: 'proyectada' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'integrada' },
      { text: 'Un poco, cuando puedo', type: 'en_proceso' },
      { text: 'Sí, pero me cuesta', type: 'negada' },
      { text: 'Sí, necesito ayuda', type: 'proyectada' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'integrada' },
      { text: 'Más o menos igual', type: 'en_proceso' },
      { text: 'Ha empeorado un poco', type: 'negada' },
      { text: 'Ha empeorado mucho', type: 'proyectada' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'integrada' },
      { text: 'Un poco', type: 'en_proceso' },
      { text: 'Bastante', type: 'negada' },
      { text: 'Demasiada', type: 'proyectada' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'integrada' },
      { text: 'Normal', type: 'en_proceso' },
      { text: 'Que tengo un problema con esto', type: 'negada' },
      { text: 'Que necesito ayuda urgente', type: 'proyectada' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'integrada' },
      { text: 'Rara vez', type: 'en_proceso' },
      { text: 'A veces', type: 'negada' },
      { text: 'Frecuentemente', type: 'proyectada' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'integrada' },
      { text: 'Un poco', type: 'en_proceso' },
      { text: 'Bastante', type: 'negada' },
      { text: 'Mucho', type: 'proyectada' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'integrada' },
      { text: 'Buena', type: 'en_proceso' },
      { text: 'Regular', type: 'negada' },
      { text: 'Mala', type: 'proyectada' },
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
  integrada: {
    type: 'integrada',
    title: 'Sombra Integrada',
    emoji: '☯️🌟',
    percentage: 'Nivel saludable',
    description: 'Aceptas tus partes oscuras. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  en_proceso: {
    type: 'en_proceso',
    title: 'En Proceso',
    emoji: '💛🔄',
    percentage: 'Nivel moderado',
    description: 'Trabajando en aceptarlas. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  negada: {
    type: 'negada',
    title: 'Sombra Negada',
    emoji: '🟠🙈',
    percentage: 'Nivel alto - Atención',
    description: 'Niegas tus defectos. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  proyectada: {
    type: 'proyectada',
    title: 'Sombra Proyectada',
    emoji: '🔴👉',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Ves en otros lo que no aceptas de ti. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { integrada: 0, en_proceso: 0, negada: 0, proyectada: 0 };

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
