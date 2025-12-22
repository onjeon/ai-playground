// Test de Manejo de Conflictos - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a manejo de conflictos?',
    options: [
      { text: 'Buscas soluciones ganar-ganar', type: 'colaborador' },
      { text: 'Evitas los conflictos', type: 'evitador' },
      { text: 'Quieres ganar a toda costa', type: 'competidor' },
      { text: 'Cedes para evitar problemas', type: 'complaciente' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'colaborador' },
      { text: 'A veces', type: 'evitador' },
      { text: 'Frecuentemente', type: 'competidor' },
      { text: 'Casi siempre', type: 'complaciente' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'colaborador' },
      { text: 'Me afecta un poco', type: 'evitador' },
      { text: 'Me afecta bastante', type: 'competidor' },
      { text: 'Me afecta mucho', type: 'complaciente' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'colaborador' },
      { text: 'Bien, con algunas dudas', type: 'evitador' },
      { text: 'Incómodo/a frecuentemente', type: 'competidor' },
      { text: 'Mal, me genera mucho malestar', type: 'complaciente' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'colaborador' },
      { text: 'Neutral', type: 'evitador' },
      { text: 'A veces negativamente', type: 'competidor' },
      { text: 'Muy negativamente', type: 'complaciente' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'colaborador' },
      { text: 'Un poco, cuando puedo', type: 'evitador' },
      { text: 'Sí, pero me cuesta', type: 'competidor' },
      { text: 'Sí, necesito ayuda', type: 'complaciente' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'colaborador' },
      { text: 'Más o menos igual', type: 'evitador' },
      { text: 'Ha empeorado un poco', type: 'competidor' },
      { text: 'Ha empeorado mucho', type: 'complaciente' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'colaborador' },
      { text: 'Un poco', type: 'evitador' },
      { text: 'Bastante', type: 'competidor' },
      { text: 'Demasiada', type: 'complaciente' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'colaborador' },
      { text: 'Normal', type: 'evitador' },
      { text: 'Que tengo un problema con esto', type: 'competidor' },
      { text: 'Que necesito ayuda urgente', type: 'complaciente' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'colaborador' },
      { text: 'Rara vez', type: 'evitador' },
      { text: 'A veces', type: 'competidor' },
      { text: 'Frecuentemente', type: 'complaciente' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'colaborador' },
      { text: 'Un poco', type: 'evitador' },
      { text: 'Bastante', type: 'competidor' },
      { text: 'Mucho', type: 'complaciente' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'colaborador' },
      { text: 'Buena', type: 'evitador' },
      { text: 'Regular', type: 'competidor' },
      { text: 'Mala', type: 'complaciente' },
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
  colaborador: {
    type: 'colaborador',
    title: 'Colaborador/a',
    emoji: '💚🤝',
    percentage: 'Nivel saludable',
    description: 'Buscas soluciones ganar-ganar. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  evitador: {
    type: 'evitador',
    title: 'Evitador/a',
    emoji: '🔵🏃',
    percentage: 'Nivel moderado',
    description: 'Evitas los conflictos. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  competidor: {
    type: 'competidor',
    title: 'Competidor/a',
    emoji: '🔴⚔️',
    percentage: 'Nivel alto - Atención',
    description: 'Quieres ganar a toda costa. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  complaciente: {
    type: 'complaciente',
    title: 'Complaciente',
    emoji: '💛😊',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Cedes para evitar problemas. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { colaborador: 0, evitador: 0, competidor: 0, complaciente: 0 };

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
