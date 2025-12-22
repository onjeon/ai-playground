// Test de Heridas de Infancia - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a heridas de infancia?',
    options: [
      { text: 'Has sanado tu infancia', type: 'sanadas' },
      { text: 'Trabajando en sanar', type: 'en_proceso' },
      { text: 'Tu infancia aún te afecta', type: 'activas' },
      { text: 'Tu infancia controla tu vida', type: 'severas' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'sanadas' },
      { text: 'A veces', type: 'en_proceso' },
      { text: 'Frecuentemente', type: 'activas' },
      { text: 'Casi siempre', type: 'severas' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'sanadas' },
      { text: 'Me afecta un poco', type: 'en_proceso' },
      { text: 'Me afecta bastante', type: 'activas' },
      { text: 'Me afecta mucho', type: 'severas' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'sanadas' },
      { text: 'Bien, con algunas dudas', type: 'en_proceso' },
      { text: 'Incómodo/a frecuentemente', type: 'activas' },
      { text: 'Mal, me genera mucho malestar', type: 'severas' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'sanadas' },
      { text: 'Neutral', type: 'en_proceso' },
      { text: 'A veces negativamente', type: 'activas' },
      { text: 'Muy negativamente', type: 'severas' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'sanadas' },
      { text: 'Un poco, cuando puedo', type: 'en_proceso' },
      { text: 'Sí, pero me cuesta', type: 'activas' },
      { text: 'Sí, necesito ayuda', type: 'severas' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'sanadas' },
      { text: 'Más o menos igual', type: 'en_proceso' },
      { text: 'Ha empeorado un poco', type: 'activas' },
      { text: 'Ha empeorado mucho', type: 'severas' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'sanadas' },
      { text: 'Un poco', type: 'en_proceso' },
      { text: 'Bastante', type: 'activas' },
      { text: 'Demasiada', type: 'severas' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'sanadas' },
      { text: 'Normal', type: 'en_proceso' },
      { text: 'Que tengo un problema con esto', type: 'activas' },
      { text: 'Que necesito ayuda urgente', type: 'severas' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'sanadas' },
      { text: 'Rara vez', type: 'en_proceso' },
      { text: 'A veces', type: 'activas' },
      { text: 'Frecuentemente', type: 'severas' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'sanadas' },
      { text: 'Un poco', type: 'en_proceso' },
      { text: 'Bastante', type: 'activas' },
      { text: 'Mucho', type: 'severas' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'sanadas' },
      { text: 'Buena', type: 'en_proceso' },
      { text: 'Regular', type: 'activas' },
      { text: 'Mala', type: 'severas' },
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
  sanadas: {
    type: 'sanadas',
    title: 'Heridas Sanadas',
    emoji: '💚🌱',
    percentage: 'Nivel saludable',
    description: 'Has sanado tu infancia. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  en_proceso: {
    type: 'en_proceso',
    title: 'En Proceso de Sanar',
    emoji: '💛🔄',
    percentage: 'Nivel moderado',
    description: 'Trabajando en sanar. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  activas: {
    type: 'activas',
    title: 'Heridas Activas',
    emoji: '🟠😔',
    percentage: 'Nivel alto - Atención',
    description: 'Tu infancia aún te afecta. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  severas: {
    type: 'severas',
    title: 'Heridas Severas',
    emoji: '🔴😢',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Tu infancia controla tu vida. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { sanadas: 0, en_proceso: 0, activas: 0, severas: 0 };

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
