// Test de Tendencia Adictiva - Test Psicológico México
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes respecto a tendencia adictiva?',
    options: [
      { text: 'Bajo riesgo de adicciones', type: 'baja' },
      { text: 'Cierta tendencia', type: 'moderada' },
      { text: 'Alta tendencia adictiva', type: 'alta' },
      { text: 'Posibles problemas de adicción', type: 'severa' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas esto?',
    options: [
      { text: 'Casi nunca', type: 'baja' },
      { text: 'A veces', type: 'moderada' },
      { text: 'Frecuentemente', type: 'alta' },
      { text: 'Casi siempre', type: 'severa' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo afecta esto tu vida diaria?',
    options: [
      { text: 'No me afecta', type: 'baja' },
      { text: 'Me afecta un poco', type: 'moderada' },
      { text: 'Me afecta bastante', type: 'alta' },
      { text: 'Me afecta mucho', type: 'severa' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes al respecto?',
    options: [
      { text: 'Muy bien, en paz', type: 'baja' },
      { text: 'Bien, con algunas dudas', type: 'moderada' },
      { text: 'Incómodo/a frecuentemente', type: 'alta' },
      { text: 'Mal, me genera mucho malestar', type: 'severa' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo impacta tus relaciones?',
    options: [
      { text: 'Positivamente', type: 'baja' },
      { text: 'Neutral', type: 'moderada' },
      { text: 'A veces negativamente', type: 'alta' },
      { text: 'Muy negativamente', type: 'severa' },
    ],
  },
  {
    id: 6,
    text: '¿Has intentado trabajar en esto?',
    options: [
      { text: 'No es necesario, estoy bien', type: 'baja' },
      { text: 'Un poco, cuando puedo', type: 'moderada' },
      { text: 'Sí, pero me cuesta', type: 'alta' },
      { text: 'Sí, necesito ayuda', type: 'severa' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo se compara con hace un año?',
    options: [
      { text: 'Igual de bien o mejor', type: 'baja' },
      { text: 'Más o menos igual', type: 'moderada' },
      { text: 'Ha empeorado un poco', type: 'alta' },
      { text: 'Ha empeorado mucho', type: 'severa' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánta energía te consume?',
    options: [
      { text: 'Nada', type: 'baja' },
      { text: 'Un poco', type: 'moderada' },
      { text: 'Bastante', type: 'alta' },
      { text: 'Demasiada', type: 'severa' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describirían otros al respecto?',
    options: [
      { text: 'Muy bien equilibrado/a', type: 'baja' },
      { text: 'Normal', type: 'moderada' },
      { text: 'Que tengo un problema con esto', type: 'alta' },
      { text: 'Que necesito ayuda urgente', type: 'severa' },
    ],
  },
  {
    id: 10,
    text: '¿Interfiere con tu trabajo o estudios?',
    options: [
      { text: 'No, nunca', type: 'baja' },
      { text: 'Rara vez', type: 'moderada' },
      { text: 'A veces', type: 'alta' },
      { text: 'Frecuentemente', type: 'severa' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera ansiedad o estrés?',
    options: [
      { text: 'No', type: 'baja' },
      { text: 'Un poco', type: 'moderada' },
      { text: 'Bastante', type: 'alta' },
      { text: 'Mucho', type: 'severa' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo calificarías tu situación general?',
    options: [
      { text: 'Excelente', type: 'baja' },
      { text: 'Buena', type: 'moderada' },
      { text: 'Regular', type: 'alta' },
      { text: 'Mala', type: 'severa' },
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
  baja: {
    type: 'baja',
    title: 'Bajo Riesgo',
    emoji: '💚🛡️',
    percentage: 'Nivel saludable',
    description: 'Bajo riesgo de adicciones. Tu manejo de este aspecto es muy saludable.',
    characteristics: ['Equilibrado/a', 'Funcional', 'Saludable', 'Resiliente', 'Estable'],
    advice: 'Sigue así. Tu manejo de este aspecto de tu vida es admirable.',
  },
  moderada: {
    type: 'moderada',
    title: 'Riesgo Moderado',
    emoji: '💛⚠️',
    percentage: 'Nivel moderado',
    description: 'Cierta tendencia. Tienes espacio para mejorar pero estás bien.',
    characteristics: ['En general bien', 'Algunos desafíos', 'Funcional', 'Consciente', 'En proceso'],
    advice: 'Vas bien. Considera trabajar un poco más en este aspecto para mejorar tu bienestar.',
  },
  alta: {
    type: 'alta',
    title: 'Riesgo Alto',
    emoji: '🟠🚨',
    percentage: 'Nivel alto - Atención',
    description: 'Alta tendencia adictiva. Esto puede estar afectando tu calidad de vida.',
    characteristics: ['Necesita atención', 'Afecta bienestar', 'Patrones problemáticos', 'Espacio para crecer', 'Requiere trabajo'],
    advice: 'Es importante que trabajes en este aspecto. Considera buscar apoyo profesional.',
  },
  severa: {
    type: 'severa',
    title: 'Tendencia Severa',
    emoji: '🔴🆘',
    percentage: 'Nivel severo - Busca ayuda',
    description: 'Posibles problemas de adicción. Este nivel puede estar causando sufrimiento significativo.',
    characteristics: ['Necesita ayuda', 'Afecta seriamente', 'Urgente atención', 'Impacto severo', 'Requiere apoyo'],
    advice: 'Te recomendamos buscar ayuda profesional. No tienes que enfrentar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { baja: 0, moderada: 0, alta: 0, severa: 0 };

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
