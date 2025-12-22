// Test de Dinámica Familiar - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a dinámica familiar?',
    options: [
      { text: 'Dinámica familiar muy sana', type: 'sana' },
      { text: 'Funciona con algunos problemas', type: 'funcional' },
      { text: 'Problemas familiares frecuentes', type: 'disfuncional' },
      { text: 'Relaciones familiares dañinas', type: 'toxica' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'sana' },
      { text: 'A veces', type: 'funcional' },
      { text: 'Frecuentemente', type: 'disfuncional' },
      { text: 'Casi siempre', type: 'toxica' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'sana' },
      { text: 'Me afecta un poco', type: 'funcional' },
      { text: 'Me afecta bastante', type: 'disfuncional' },
      { text: 'Me afecta mucho', type: 'toxica' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'sana' },
      { text: 'Bien, con algunas dudas', type: 'funcional' },
      { text: 'Incómodo/a frecuentemente', type: 'disfuncional' },
      { text: 'Mal, me genera mucho malestar', type: 'toxica' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'sana' },
      { text: 'Neutral', type: 'funcional' },
      { text: 'A veces negativamente', type: 'disfuncional' },
      { text: 'Muy negativamente', type: 'toxica' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'sana' },
      { text: 'Un poco, cuando puedo', type: 'funcional' },
      { text: 'Sí, pero me cuesta', type: 'disfuncional' },
      { text: 'Sí, necesito ayuda', type: 'toxica' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'sana' },
      { text: 'Más o menos igual', type: 'funcional' },
      { text: 'Ha empeorado un poco', type: 'disfuncional' },
      { text: 'Ha empeorado mucho', type: 'toxica' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'sana' },
      { text: 'Un poco', type: 'funcional' },
      { text: 'Bastante', type: 'disfuncional' },
      { text: 'Demasiada', type: 'toxica' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'sana' },
      { text: 'Normal', type: 'funcional' },
      { text: 'Que tengo un problema con esto', type: 'disfuncional' },
      { text: 'Que necesito ayuda urgente', type: 'toxica' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'sana' },
      { text: 'Rara vez', type: 'funcional' },
      { text: 'A veces', type: 'disfuncional' },
      { text: 'Frecuentemente', type: 'toxica' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'sana' },
      { text: 'Un poco', type: 'funcional' },
      { text: 'Bastante', type: 'disfuncional' },
      { text: 'Mucho', type: 'toxica' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'sana' },
      { text: 'Buena', type: 'funcional' },
      { text: 'Regular', type: 'disfuncional' },
      { text: 'Mala', type: 'toxica' },
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
  sana: {
    type: 'sana',
    title: 'Familia Sana',
    emoji: '💚👨‍👩‍👧‍👦',
    percentage: 'Nivel saludable',
    description: 'Dinámica familiar muy sana. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  funcional: {
    type: 'funcional',
    title: 'Familia Funcional',
    emoji: '💛🏠',
    percentage: 'Nivel moderado',
    description: 'Funciona con algunos problemas. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  disfuncional: {
    type: 'disfuncional',
    title: 'Familia Disfuncional',
    emoji: '🟠😔',
    percentage: 'Nivel alto - Atención',
    description: 'Problemas familiares frecuentes. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  toxica: {
    type: 'toxica',
    title: 'Familia Tóxica',
    emoji: '🔴☠️',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Relaciones familiares dañinas. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { sana: 0, funcional: 0, disfuncional: 0, toxica: 0 };

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
