// Test de Efectos de tu Crianza - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a efectos de tu crianza?',
    options: [
      { text: 'Tu crianza fue sana', type: 'positivos' },
      { text: 'Tuvo aspectos buenos y malos', type: 'mixtos' },
      { text: 'Tu crianza dejó heridas', type: 'negativos' },
      { text: 'Tu crianza fue traumática', type: 'traumaticos' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'positivos' },
      { text: 'A veces', type: 'mixtos' },
      { text: 'Frecuentemente', type: 'negativos' },
      { text: 'Casi siempre', type: 'traumaticos' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'positivos' },
      { text: 'Me afecta un poco', type: 'mixtos' },
      { text: 'Me afecta bastante', type: 'negativos' },
      { text: 'Me afecta mucho', type: 'traumaticos' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'positivos' },
      { text: 'Bien, con algunas dudas', type: 'mixtos' },
      { text: 'Incómodo/a frecuentemente', type: 'negativos' },
      { text: 'Mal, me genera mucho malestar', type: 'traumaticos' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'positivos' },
      { text: 'Neutral', type: 'mixtos' },
      { text: 'A veces negativamente', type: 'negativos' },
      { text: 'Muy negativamente', type: 'traumaticos' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'positivos' },
      { text: 'Un poco, cuando puedo', type: 'mixtos' },
      { text: 'Sí, pero me cuesta', type: 'negativos' },
      { text: 'Sí, necesito ayuda', type: 'traumaticos' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'positivos' },
      { text: 'Más o menos igual', type: 'mixtos' },
      { text: 'Ha empeorado un poco', type: 'negativos' },
      { text: 'Ha empeorado mucho', type: 'traumaticos' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'positivos' },
      { text: 'Un poco', type: 'mixtos' },
      { text: 'Bastante', type: 'negativos' },
      { text: 'Demasiada', type: 'traumaticos' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'positivos' },
      { text: 'Normal', type: 'mixtos' },
      { text: 'Que tengo un problema con esto', type: 'negativos' },
      { text: 'Que necesito ayuda urgente', type: 'traumaticos' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'positivos' },
      { text: 'Rara vez', type: 'mixtos' },
      { text: 'A veces', type: 'negativos' },
      { text: 'Frecuentemente', type: 'traumaticos' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'positivos' },
      { text: 'Un poco', type: 'mixtos' },
      { text: 'Bastante', type: 'negativos' },
      { text: 'Mucho', type: 'traumaticos' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'positivos' },
      { text: 'Buena', type: 'mixtos' },
      { text: 'Regular', type: 'negativos' },
      { text: 'Mala', type: 'traumaticos' },
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
  positivos: {
    type: 'positivos',
    title: 'Crianza Positiva',
    emoji: '💚👨‍👩‍👧',
    percentage: 'Nivel saludable',
    description: 'Tu crianza fue sana. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  mixtos: {
    type: 'mixtos',
    title: 'Crianza Mixta',
    emoji: '💛🔄',
    percentage: 'Nivel moderado',
    description: 'Tuvo aspectos buenos y malos. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  negativos: {
    type: 'negativos',
    title: 'Crianza Negativa',
    emoji: '🟠😔',
    percentage: 'Nivel alto - Atención',
    description: 'Tu crianza dejó heridas. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  traumaticos: {
    type: 'traumaticos',
    title: 'Crianza Traumática',
    emoji: '🔴💔',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Tu crianza fue traumática. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { positivos: 0, mixtos: 0, negativos: 0, traumaticos: 0 };

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
