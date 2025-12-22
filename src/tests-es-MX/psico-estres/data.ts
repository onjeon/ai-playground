// Test de Nivel de Estrés - 스트레스 레벨 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes cuando tienes mucho trabajo acumulado?',
    options: [
      { text: 'Me organizo y lo manejo bien, paso a paso', type: 'bajo' },
      { text: 'Me estreso un poco pero lo supero', type: 'moderado' },
      { text: 'Me siento abrumado frecuentemente', type: 'alto' },
      { text: 'Me paralizo y no sé por dónde empezar', type: 'muy_alto' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo duermes normalmente?',
    options: [
      { text: 'Duermo muy bien, me despierto descansado', type: 'bajo' },
      { text: 'A veces me cuesta dormir pero lo logro', type: 'moderado' },
      { text: 'Frecuentemente tengo problemas para dormir', type: 'alto' },
      { text: 'Casi siempre tengo insomnio o pesadillas', type: 'muy_alto' },
    ],
  },
  {
    id: 3,
    text: '¿Qué pasa cuando el tráfico está muy pesado?',
    options: [
      { text: 'Pongo música y me relajo', type: 'bajo' },
      { text: 'Me desespero un poco pero lo tolero', type: 'moderado' },
      { text: 'Me pongo muy irritable', type: 'alto' },
      { text: 'Siento que voy a explotar', type: 'muy_alto' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo reaccionas cuando alguien cancela planes a última hora?',
    options: [
      { text: 'Sin problema, hago otra cosa', type: 'bajo' },
      { text: 'Me molesta un poco pero lo entiendo', type: 'moderado' },
      { text: 'Me frustra mucho', type: 'alto' },
      { text: 'Me arruina todo el día', type: 'muy_alto' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te sientes los domingos por la noche pensando en el lunes?',
    options: [
      { text: 'Tranquilo, listo para la semana', type: 'bajo' },
      { text: 'Un poco ansioso pero normal', type: 'moderado' },
      { text: 'Muy estresado, no puedo relajarme', type: 'alto' },
      { text: 'Terrible, odio pensar en el trabajo', type: 'muy_alto' },
    ],
  },
  {
    id: 6,
    text: '¿Qué haces cuando tienes un conflicto con alguien?',
    options: [
      { text: 'Lo hablo y lo resuelvo calmadamente', type: 'bajo' },
      { text: 'Me toma tiempo pero lo proceso', type: 'moderado' },
      { text: 'Le doy muchas vueltas en mi cabeza', type: 'alto' },
      { text: 'No puedo pensar en otra cosa, me consume', type: 'muy_alto' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas las fechas límite?',
    options: [
      { text: 'Planeo con anticipación y las cumplo bien', type: 'bajo' },
      { text: 'Me apuro un poco pero las cumplo', type: 'moderado' },
      { text: 'Siempre ando a las carreras', type: 'alto' },
      { text: 'Vivo en un estado constante de pánico', type: 'muy_alto' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan seguido sientes tensión en el cuello o espalda?',
    options: [
      { text: 'Casi nunca', type: 'bajo' },
      { text: 'De vez en cuando', type: 'moderado' },
      { text: 'Frecuentemente', type: 'alto' },
      { text: 'Casi siempre estoy tenso', type: 'muy_alto' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te sientes cuando tienes que esperar en una fila larga?',
    options: [
      { text: 'Aprovecho para revisar mi celular tranquilo', type: 'bajo' },
      { text: 'Me desespero un poco pero aguanto', type: 'moderado' },
      { text: 'Me pongo muy impaciente', type: 'alto' },
      { text: 'Siento que voy a perder la paciencia', type: 'muy_alto' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan frecuentemente sientes que no tienes tiempo para nada?',
    options: [
      { text: 'Rara vez, manejo bien mi tiempo', type: 'bajo' },
      { text: 'A veces me siento apurado', type: 'moderado' },
      { text: 'Frecuentemente no me alcanza el día', type: 'alto' },
      { text: 'Siempre siento que el tiempo no me alcanza', type: 'muy_alto' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo te afectan los problemas económicos?',
    options: [
      { text: 'Los manejo con calma y busco soluciones', type: 'bajo' },
      { text: 'Me preocupan pero no me paralizan', type: 'moderado' },
      { text: 'Me causan mucha ansiedad', type: 'alto' },
      { text: 'No puedo dejar de pensar en ellos', type: 'muy_alto' },
    ],
  },
  {
    id: 12,
    text: '¿Qué haces cuando tienes un día muy pesado?',
    options: [
      { text: 'Descanso y me recupero fácilmente', type: 'bajo' },
      { text: 'Me cuesta un poco pero me recupero', type: 'moderado' },
      { text: 'Me toma varios días recuperarme', type: 'alto' },
      { text: 'Siento que nunca me recupero del todo', type: 'muy_alto' },
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
  bajo: {
    type: 'bajo',
    title: 'Estrés Bajo - Zen Total',
    emoji: '😌🧘',
    percentage: 'Nivel de estrés: 15%',
    description: '¡Felicidades! Tienes un excelente manejo del estrés. Sabes mantener la calma en situaciones difíciles y no dejas que las presiones te afecten. Eres el tipo de persona que otros buscan cuando necesitan tranquilidad.',
    characteristics: ['Muy tranquilo', 'Buena gestión emocional', 'Resiliente', 'Equilibrado', 'Paciente'],
    advice: 'Sigue haciendo lo que haces. Tu equilibrio es admirable. Comparte tus técnicas con otros que lo necesiten.',
  },
  moderado: {
    type: 'moderado',
    title: 'Estrés Moderado - Normal Mexicano',
    emoji: '😊💪',
    percentage: 'Nivel de estrés: 45%',
    description: 'Tu nivel de estrés es normal y manejable. Como buen mexicano, sabes lidiar con las presiones del día a día sin que te tumben. A veces te estresas, pero siempre sales adelante.',
    characteristics: ['Adaptable', 'Funcional bajo presión', 'Busca soluciones', 'Se recupera bien', 'Equilibrado'],
    advice: 'Estás bien, pero no te confíes. Incorpora más actividades de relajación como ejercicio o tiempo con la familia.',
  },
  alto: {
    type: 'alto',
    title: 'Estrés Alto - Cargando Mucho',
    emoji: '😰⚠️',
    percentage: 'Nivel de estrés: 75%',
    description: 'Estás cargando demasiado estrés. Las presiones de la vida te están afectando más de lo que deberían. Es momento de hacer cambios antes de que tu salud se vea afectada.',
    characteristics: ['Sobrecargado', 'Irritable frecuentemente', 'Problemas de sueño', 'Tensión física', 'Agotamiento'],
    advice: 'Es hora de hacer cambios. Prioriza tu descanso, aprende a decir no, y considera hablar con un profesional.',
  },
  muy_alto: {
    type: 'muy_alto',
    title: 'Estrés Muy Alto - Alerta Roja',
    emoji: '🚨😫',
    percentage: 'Nivel de estrés: 95%',
    description: 'Tu nivel de estrés es preocupante. Estás viviendo en un estado de alerta constante que puede afectar seriamente tu salud física y mental. Necesitas ayuda y cambios urgentes.',
    characteristics: ['Agotamiento extremo', 'Ansiedad constante', 'Problemas de salud', 'Dificultad para funcionar', 'Abrumado'],
    advice: 'Busca ayuda profesional lo antes posible. Tu salud es lo primero. No tienes que cargar todo solo.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { bajo: 0, moderado: 0, alto: 0, muy_alto: 0 };

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
