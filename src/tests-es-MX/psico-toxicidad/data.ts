// Test de Relaciones Tóxicas - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a relaciones tóxicas?',
    options: [
      { text: 'Evitas relaciones tóxicas', type: 'evitas' },
      { text: 'Las identificas pero te cuesta salir', type: 'reconoces' },
      { text: 'Atraes relaciones tóxicas', type: 'atraes' },
      { text: 'Estás en relaciones tóxicas', type: 'atrapado' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'evitas' },
      { text: 'A veces', type: 'reconoces' },
      { text: 'Frecuentemente', type: 'atraes' },
      { text: 'Casi siempre', type: 'atrapado' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'evitas' },
      { text: 'Me afecta un poco', type: 'reconoces' },
      { text: 'Me afecta bastante', type: 'atraes' },
      { text: 'Me afecta mucho', type: 'atrapado' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'evitas' },
      { text: 'Bien, con algunas dudas', type: 'reconoces' },
      { text: 'Incómodo/a frecuentemente', type: 'atraes' },
      { text: 'Mal, me genera mucho malestar', type: 'atrapado' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'evitas' },
      { text: 'Neutral', type: 'reconoces' },
      { text: 'A veces negativamente', type: 'atraes' },
      { text: 'Muy negativamente', type: 'atrapado' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'evitas' },
      { text: 'Un poco, cuando puedo', type: 'reconoces' },
      { text: 'Sí, pero me cuesta', type: 'atraes' },
      { text: 'Sí, necesito ayuda', type: 'atrapado' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'evitas' },
      { text: 'Más o menos igual', type: 'reconoces' },
      { text: 'Ha empeorado un poco', type: 'atraes' },
      { text: 'Ha empeorado mucho', type: 'atrapado' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'evitas' },
      { text: 'Un poco', type: 'reconoces' },
      { text: 'Bastante', type: 'atraes' },
      { text: 'Demasiada', type: 'atrapado' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'evitas' },
      { text: 'Normal', type: 'reconoces' },
      { text: 'Que tengo un problema con esto', type: 'atraes' },
      { text: 'Que necesito ayuda urgente', type: 'atrapado' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'evitas' },
      { text: 'Rara vez', type: 'reconoces' },
      { text: 'A veces', type: 'atraes' },
      { text: 'Frecuentemente', type: 'atrapado' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'evitas' },
      { text: 'Un poco', type: 'reconoces' },
      { text: 'Bastante', type: 'atraes' },
      { text: 'Mucho', type: 'atrapado' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'evitas' },
      { text: 'Buena', type: 'reconoces' },
      { text: 'Regular', type: 'atraes' },
      { text: 'Mala', type: 'atrapado' },
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
  evitas: {
    type: 'evitas',
    title: 'Evitas Toxicidad',
    emoji: '💚🛡️',
    percentage: 'Nivel saludable',
    description: 'Evitas relaciones tóxicas. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  reconoces: {
    type: 'reconoces',
    title: 'Reconoces Toxicidad',
    emoji: '💛👀',
    percentage: 'Nivel moderado',
    description: 'Las identificas pero te cuesta salir. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  atraes: {
    type: 'atraes',
    title: 'Atraes Toxicidad',
    emoji: '🟠🧲',
    percentage: 'Nivel alto - Atención',
    description: 'Atraes relaciones tóxicas. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  atrapado: {
    type: 'atrapado',
    title: 'Atrapado/a en Toxicidad',
    emoji: '🔴⛓️',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Estás en relaciones tóxicas. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { evitas: 0, reconoces: 0, atraes: 0, atrapado: 0 };

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
