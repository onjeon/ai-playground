// Test de Estilo de Comunicación - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a estilo de comunicación?',
    options: [
      { text: 'Te expresas clara y respetuosamente', type: 'asertivo' },
      { text: 'Te cuesta expresarte', type: 'pasivo' },
      { text: 'Te expresas de forma agresiva', type: 'agresivo' },
      { text: 'Expresas enojo indirectamente', type: 'pasivoagresivo' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'asertivo' },
      { text: 'A veces', type: 'pasivo' },
      { text: 'Frecuentemente', type: 'agresivo' },
      { text: 'Casi siempre', type: 'pasivoagresivo' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'asertivo' },
      { text: 'Me afecta un poco', type: 'pasivo' },
      { text: 'Me afecta bastante', type: 'agresivo' },
      { text: 'Me afecta mucho', type: 'pasivoagresivo' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'asertivo' },
      { text: 'Bien, con algunas dudas', type: 'pasivo' },
      { text: 'Incómodo/a frecuentemente', type: 'agresivo' },
      { text: 'Mal, me genera mucho malestar', type: 'pasivoagresivo' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'asertivo' },
      { text: 'Neutral', type: 'pasivo' },
      { text: 'A veces negativamente', type: 'agresivo' },
      { text: 'Muy negativamente', type: 'pasivoagresivo' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'asertivo' },
      { text: 'Un poco, cuando puedo', type: 'pasivo' },
      { text: 'Sí, pero me cuesta', type: 'agresivo' },
      { text: 'Sí, necesito ayuda', type: 'pasivoagresivo' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'asertivo' },
      { text: 'Más o menos igual', type: 'pasivo' },
      { text: 'Ha empeorado un poco', type: 'agresivo' },
      { text: 'Ha empeorado mucho', type: 'pasivoagresivo' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'asertivo' },
      { text: 'Un poco', type: 'pasivo' },
      { text: 'Bastante', type: 'agresivo' },
      { text: 'Demasiada', type: 'pasivoagresivo' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'asertivo' },
      { text: 'Normal', type: 'pasivo' },
      { text: 'Que tengo un problema con esto', type: 'agresivo' },
      { text: 'Que necesito ayuda urgente', type: 'pasivoagresivo' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'asertivo' },
      { text: 'Rara vez', type: 'pasivo' },
      { text: 'A veces', type: 'agresivo' },
      { text: 'Frecuentemente', type: 'pasivoagresivo' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'asertivo' },
      { text: 'Un poco', type: 'pasivo' },
      { text: 'Bastante', type: 'agresivo' },
      { text: 'Mucho', type: 'pasivoagresivo' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'asertivo' },
      { text: 'Buena', type: 'pasivo' },
      { text: 'Regular', type: 'agresivo' },
      { text: 'Mala', type: 'pasivoagresivo' },
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
  asertivo: {
    type: 'asertivo',
    title: 'Comunicador/a Asertivo/a',
    emoji: '💚💬',
    percentage: 'Nivel saludable',
    description: 'Te expresas clara y respetuosamente. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  pasivo: {
    type: 'pasivo',
    title: 'Comunicador/a Pasivo/a',
    emoji: '🔵😶',
    percentage: 'Nivel moderado',
    description: 'Te cuesta expresarte. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  agresivo: {
    type: 'agresivo',
    title: 'Comunicador/a Agresivo/a',
    emoji: '🔴😤',
    percentage: 'Nivel alto - Atención',
    description: 'Te expresas de forma agresiva. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  pasivoagresivo: {
    type: 'pasivoagresivo',
    title: 'Pasivo-Agresivo/a',
    emoji: '🟡😏',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Expresas enojo indirectamente. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { asertivo: 0, pasivo: 0, agresivo: 0, pasivoagresivo: 0 };

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
