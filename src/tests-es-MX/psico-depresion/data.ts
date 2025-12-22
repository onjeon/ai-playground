// Test de Indicadores de Depresión - 우울 지표 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo ha estado tu ánimo en las últimas semanas?',
    options: [
      { text: 'Bien, me siento feliz la mayor parte del tiempo', type: 'bien' },
      { text: 'Normal, con algunos días difíciles', type: 'moderado' },
      { text: 'Bajo, frecuentemente me siento triste', type: 'bajo' },
      { text: 'Muy bajo, casi siempre estoy triste', type: 'muy_bajo' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tanto disfrutas las actividades que antes te gustaban?',
    options: [
      { text: 'Las disfruto igual que siempre', type: 'bien' },
      { text: 'Algo menos, pero aún las disfruto', type: 'moderado' },
      { text: 'Ya no las disfruto mucho', type: 'bajo' },
      { text: 'No me interesa nada ya', type: 'muy_bajo' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo está tu energía durante el día?',
    options: [
      { text: 'Buena, tengo energía para mis actividades', type: 'bien' },
      { text: 'Regular, a veces me siento cansado/a', type: 'moderado' },
      { text: 'Baja, me cuesta hacer las cosas', type: 'bajo' },
      { text: 'Muy baja, todo me agota', type: 'muy_bajo' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo está tu sueño últimamente?',
    options: [
      { text: 'Bien, duermo y descanso bien', type: 'bien' },
      { text: 'Regular, algunas noches difíciles', type: 'moderado' },
      { text: 'Mal, duermo mucho o muy poco', type: 'bajo' },
      { text: 'Muy mal, serios problemas de sueño', type: 'muy_bajo' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan valiosa sientes que es tu vida?',
    options: [
      { text: 'Muy valiosa, mi vida tiene sentido', type: 'bien' },
      { text: 'Bastante, aunque a veces lo dudo', type: 'moderado' },
      { text: 'Poco, siento que no importo', type: 'bajo' },
      { text: 'Nada, siento que no vale la pena', type: 'muy_bajo' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo está tu concentración?',
    options: [
      { text: 'Buena, me puedo concentrar bien', type: 'bien' },
      { text: 'Regular, a veces me cuesta', type: 'moderado' },
      { text: 'Mala, me cuesta mucho concentrarme', type: 'bajo' },
      { text: 'Muy mala, no puedo enfocarme en nada', type: 'muy_bajo' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo está tu apetito?',
    options: [
      { text: 'Normal, como bien', type: 'bien' },
      { text: 'Un poco alterado', type: 'moderado' },
      { text: 'Muy alterado, como mucho o muy poco', type: 'bajo' },
      { text: 'Severamente alterado', type: 'muy_bajo' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan frecuentemente te sientes culpable o inútil?',
    options: [
      { text: 'Casi nunca', type: 'bien' },
      { text: 'De vez en cuando', type: 'moderado' },
      { text: 'Frecuentemente', type: 'bajo' },
      { text: 'Constantemente', type: 'muy_bajo' },
    ],
  },
  {
    id: 9,
    text: '¿Tienes ganas de ver gente y socializar?',
    options: [
      { text: 'Sí, me gusta estar con otros', type: 'bien' },
      { text: 'A veces, depende del día', type: 'moderado' },
      { text: 'Poco, prefiero estar solo/a', type: 'bajo' },
      { text: 'Nada, me aíslo de todos', type: 'muy_bajo' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo ves tu futuro?',
    options: [
      { text: 'Con esperanza y planes', type: 'bien' },
      { text: 'Con algo de incertidumbre pero positivo', type: 'moderado' },
      { text: 'Oscuro, sin mucha esperanza', type: 'bajo' },
      { text: 'No veo futuro', type: 'muy_bajo' },
    ],
  },
  {
    id: 11,
    text: '¿Qué tan frecuentemente lloras o tienes ganas de llorar?',
    options: [
      { text: 'Solo cuando es apropiado', type: 'bien' },
      { text: 'Un poco más de lo normal', type: 'moderado' },
      { text: 'Frecuentemente, sin razón aparente', type: 'bajo' },
      { text: 'Constantemente o no puedo llorar aunque quiera', type: 'muy_bajo' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu estado emocional general?',
    options: [
      { text: 'Estable y positivo', type: 'bien' },
      { text: 'Algo inestable pero funcional', type: 'moderado' },
      { text: 'Frecuentemente triste o vacío', type: 'bajo' },
      { text: 'Constantemente deprimido/a', type: 'muy_bajo' },
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
  bien: {
    type: 'bien',
    title: 'Estado Emocional Saludable',
    emoji: '🌟😊',
    percentage: 'Bienestar: 90%',
    description: 'Tu estado emocional es saludable. Tienes una perspectiva positiva de la vida, disfrutas tus actividades y mantienes buenas conexiones sociales.',
    characteristics: ['Ánimo estable', 'Disfruta actividades', 'Buena energía', 'Perspectiva positiva', 'Conexiones sociales'],
    advice: 'Sigue cuidando tu bienestar emocional. Mantén tus hábitos saludables y tus conexiones.',
  },
  moderado: {
    type: 'moderado',
    title: 'Algunos Indicadores de Atención',
    emoji: '💛⚠️',
    percentage: 'Bienestar: 60%',
    description: 'Tienes algunos indicadores que merecen atención. Aunque funcionas bien, hay señales de que podrías estar pasando por un momento difícil.',
    characteristics: ['Altibajos normales', 'Algunos días difíciles', 'Funcional pero cansado/a', 'Merece atención', 'Espacio para mejorar'],
    advice: 'Presta atención a tu bienestar. Habla con alguien de confianza y considera buscar apoyo si persiste.',
  },
  bajo: {
    type: 'bajo',
    title: 'Indicadores de Depresión',
    emoji: '🌧️😔',
    percentage: 'Bienestar: 30%',
    description: 'Presentas varios indicadores asociados con depresión. Esto no es tu culpa y no tienes que seguir sintiéndote así. La depresión es tratable.',
    characteristics: ['Ánimo bajo frecuente', 'Pérdida de interés', 'Fatiga', 'Aislamiento', 'Necesita atención'],
    advice: 'Es importante que busques ayuda profesional. La depresión es una condición médica que tiene tratamiento efectivo.',
  },
  muy_bajo: {
    type: 'muy_bajo',
    title: 'Indicadores Severos - Busca Ayuda',
    emoji: '🆘❤️',
    percentage: 'Bienestar: 10%',
    description: 'Presentas indicadores severos de depresión. Esto es serio pero hay ayuda disponible. No tienes que enfrentar esto solo/a.',
    characteristics: ['Tristeza constante', 'Sin energía ni interés', 'Pensamientos negativos', 'Aislamiento severo', 'Necesita ayuda urgente'],
    advice: 'Por favor busca ayuda profesional de inmediato. Si tienes pensamientos de hacerte daño, llama a la Línea de la Vida: 800-911-2000.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { bien: 0, moderado: 0, bajo: 0, muy_bajo: 0 };

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
