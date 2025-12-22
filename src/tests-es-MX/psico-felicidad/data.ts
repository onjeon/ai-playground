// Test de Índice de Felicidad - 행복 지수 테스트
export const questions = [
  {
    id: 1,
    text: '¿Qué tan satisfecho/a estás con tu vida en general?',
    options: [
      { text: 'Muy satisfecho/a, me encanta mi vida', type: 'muy_feliz' },
      { text: 'Bastante satisfecho/a', type: 'feliz' },
      { text: 'Más o menos, podría ser mejor', type: 'neutral' },
      { text: 'Insatisfecho/a con mi vida', type: 'triste' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia experimentas alegría durante el día?',
    options: [
      { text: 'Varias veces al día', type: 'muy_feliz' },
      { text: 'Al menos una vez al día', type: 'feliz' },
      { text: 'Algunas veces por semana', type: 'neutral' },
      { text: 'Rara vez o nunca', type: 'triste' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te sientes cuando despiertas por las mañanas?',
    options: [
      { text: 'Emocionado/a por el nuevo día', type: 'muy_feliz' },
      { text: 'Bien, listo/a para empezar', type: 'feliz' },
      { text: 'Normal, ni bien ni mal', type: 'neutral' },
      { text: 'Sin ganas de levantarme', type: 'triste' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tanto disfrutas las pequeñas cosas de la vida?',
    options: [
      { text: 'Mucho, encuentro alegría en todo', type: 'muy_feliz' },
      { text: 'Bastante, aprecio lo que tengo', type: 'feliz' },
      { text: 'A veces, depende del día', type: 'neutral' },
      { text: 'Poco, me cuesta disfrutar', type: 'triste' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo describirías tu energía vital?',
    options: [
      { text: 'Muy alta, me siento lleno/a de vida', type: 'muy_feliz' },
      { text: 'Buena, tengo energía suficiente', type: 'feliz' },
      { text: 'Regular, a veces me falta', type: 'neutral' },
      { text: 'Baja, me siento agotado/a', type: 'triste' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan optimista eres sobre tu futuro?',
    options: [
      { text: 'Muy optimista, el futuro será genial', type: 'muy_feliz' },
      { text: 'Positivo/a, tengo esperanzas', type: 'feliz' },
      { text: 'Incierto, no sé qué esperar', type: 'neutral' },
      { text: 'Pesimista, no veo un buen futuro', type: 'triste' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tan a gusto estás con tus relaciones personales?',
    options: [
      { text: 'Muy a gusto, me siento querido/a', type: 'muy_feliz' },
      { text: 'Bien, tengo buenas relaciones', type: 'feliz' },
      { text: 'Regular, podrían ser mejores', type: 'neutral' },
      { text: 'Mal, me siento solo/a', type: 'triste' },
    ],
  },
  {
    id: 8,
    text: '¿Sientes que tu vida tiene propósito y significado?',
    options: [
      { text: 'Sí, tengo un propósito claro', type: 'muy_feliz' },
      { text: 'Creo que sí, la mayoría del tiempo', type: 'feliz' },
      { text: 'A veces lo dudo', type: 'neutral' },
      { text: 'Siento que no tiene sentido', type: 'triste' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan frecuentemente ríes de verdad?',
    options: [
      { text: 'Todos los días, varias veces', type: 'muy_feliz' },
      { text: 'Casi todos los días', type: 'feliz' },
      { text: 'Algunas veces por semana', type: 'neutral' },
      { text: 'Rara vez río genuinamente', type: 'triste' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan orgulloso/a estás de ti mismo/a?',
    options: [
      { text: 'Muy orgulloso/a de quién soy', type: 'muy_feliz' },
      { text: 'Bastante, me valoro', type: 'feliz' },
      { text: 'Regular, tengo mis dudas', type: 'neutral' },
      { text: 'Poco, no me gusta quién soy', type: 'triste' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo manejas los problemas cuando surgen?',
    options: [
      { text: 'Con confianza, sé que puedo superarlos', type: 'muy_feliz' },
      { text: 'Los enfrento aunque me cueste', type: 'feliz' },
      { text: 'Me abruman a veces', type: 'neutral' },
      { text: 'Me paralizan, no sé qué hacer', type: 'triste' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu nivel de felicidad general?',
    options: [
      { text: 'Muy alto, soy muy feliz', type: 'muy_feliz' },
      { text: 'Alto, me siento bien', type: 'feliz' },
      { text: 'Medio, ni feliz ni triste', type: 'neutral' },
      { text: 'Bajo, no soy feliz', type: 'triste' },
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
  muy_feliz: {
    type: 'muy_feliz',
    title: 'Felicidad Plena',
    emoji: '🌟😄',
    percentage: 'Índice de felicidad: 95%',
    description: '¡Felicidades! Tienes un nivel de felicidad muy alto. Disfrutas la vida, te sientes satisfecho/a y tienes una perspectiva positiva. Tu bienestar emocional es excelente.',
    characteristics: ['Muy satisfecho/a', 'Optimista', 'Disfruta la vida', 'Buen propósito', 'Relaciones sanas'],
    advice: 'Sigue haciendo lo que haces. Comparte tu felicidad con otros y ayúdales a encontrar la suya.',
  },
  feliz: {
    type: 'feliz',
    title: 'Felicidad Saludable',
    emoji: '😊💚',
    percentage: 'Índice de felicidad: 70%',
    description: 'Tienes un buen nivel de felicidad. Te sientes bien la mayor parte del tiempo, aunque tienes tus momentos difíciles. Tu bienestar emocional es saludable.',
    characteristics: ['Generalmente feliz', 'Positivo/a', 'Buenos momentos', 'Algunos desafíos', 'Funcional'],
    advice: 'Vas muy bien. Sigue cultivando las cosas que te hacen feliz y trabaja en las áreas que pueden mejorar.',
  },
  neutral: {
    type: 'neutral',
    title: 'Felicidad Moderada',
    emoji: '😐💭',
    percentage: 'Índice de felicidad: 45%',
    description: 'Tu nivel de felicidad es moderado. No eres infeliz, pero tampoco te sientes muy satisfecho/a. Hay espacio para aumentar tu bienestar.',
    characteristics: ['Ni feliz ni triste', 'Días buenos y malos', 'Falta algo', 'Puede mejorar', 'Busca propósito'],
    advice: 'Identifica qué te falta para ser más feliz. Considera cambios en tu rutina, relaciones o metas de vida.',
  },
  triste: {
    type: 'triste',
    title: 'Necesitas Apoyo',
    emoji: '😢💔',
    percentage: 'Índice de felicidad: 15%',
    description: 'Tu nivel de felicidad es bajo y probablemente estás pasando por un momento difícil. No tienes que seguir sintiéndote así. Hay ayuda disponible.',
    characteristics: ['Insatisfecho/a', 'Falta de energía', 'Pesimismo', 'Dificultad para disfrutar', 'Necesita apoyo'],
    advice: 'Es importante que busques ayuda profesional. Un psicólogo puede ayudarte a encontrar el camino hacia una vida más feliz.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { muy_feliz: 0, feliz: 0, neutral: 0, triste: 0 };

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
