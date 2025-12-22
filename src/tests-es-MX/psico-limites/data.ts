// Test de Límites Personales - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a límites personales?',
    options: [
      { text: 'Estableces límites claros', type: 'sanos' },
      { text: 'A veces te cuesta decir no', type: 'moderados' },
      { text: 'Frecuentemente cedes', type: 'debiles' },
      { text: 'No sabes poner límites', type: 'inexistentes' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'sanos' },
      { text: 'A veces', type: 'moderados' },
      { text: 'Frecuentemente', type: 'debiles' },
      { text: 'Casi siempre', type: 'inexistentes' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'sanos' },
      { text: 'Me afecta un poco', type: 'moderados' },
      { text: 'Me afecta bastante', type: 'debiles' },
      { text: 'Me afecta mucho', type: 'inexistentes' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'sanos' },
      { text: 'Bien, con algunas dudas', type: 'moderados' },
      { text: 'Incómodo/a frecuentemente', type: 'debiles' },
      { text: 'Mal, me genera mucho malestar', type: 'inexistentes' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'sanos' },
      { text: 'Neutral', type: 'moderados' },
      { text: 'A veces negativamente', type: 'debiles' },
      { text: 'Muy negativamente', type: 'inexistentes' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'sanos' },
      { text: 'Un poco, cuando puedo', type: 'moderados' },
      { text: 'Sí, pero me cuesta', type: 'debiles' },
      { text: 'Sí, necesito ayuda', type: 'inexistentes' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'sanos' },
      { text: 'Más o menos igual', type: 'moderados' },
      { text: 'Ha empeorado un poco', type: 'debiles' },
      { text: 'Ha empeorado mucho', type: 'inexistentes' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'sanos' },
      { text: 'Un poco', type: 'moderados' },
      { text: 'Bastante', type: 'debiles' },
      { text: 'Demasiada', type: 'inexistentes' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'sanos' },
      { text: 'Normal', type: 'moderados' },
      { text: 'Que tengo un problema con esto', type: 'debiles' },
      { text: 'Que necesito ayuda urgente', type: 'inexistentes' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'sanos' },
      { text: 'Rara vez', type: 'moderados' },
      { text: 'A veces', type: 'debiles' },
      { text: 'Frecuentemente', type: 'inexistentes' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'sanos' },
      { text: 'Un poco', type: 'moderados' },
      { text: 'Bastante', type: 'debiles' },
      { text: 'Mucho', type: 'inexistentes' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'sanos' },
      { text: 'Buena', type: 'moderados' },
      { text: 'Regular', type: 'debiles' },
      { text: 'Mala', type: 'inexistentes' },
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
  sanos: {
    type: 'sanos',
    title: 'Límites Saludables',
    emoji: '🛡️💚',
    percentage: 'Nivel saludable',
    description: 'Estableces límites claros. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  moderados: {
    type: 'moderados',
    title: 'Límites Moderados',
    emoji: '💛🔄',
    percentage: 'Nivel moderado',
    description: 'A veces te cuesta decir no. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  debiles: {
    type: 'debiles',
    title: 'Límites Débiles',
    emoji: '🟠😔',
    percentage: 'Nivel alto - Atención',
    description: 'Frecuentemente cedes. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  inexistentes: {
    type: 'inexistentes',
    title: 'Sin Límites',
    emoji: '🔴😰',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'No sabes poner límites. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { sanos: 0, moderados: 0, debiles: 0, inexistentes: 0 };

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
