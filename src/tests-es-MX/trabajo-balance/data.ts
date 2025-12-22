// Test de Balance Trabajo-Vida - 워라밸 테스트
export const questions = [
  {
    id: 1,
    text: '¿Qué haces cuando te llega un correo del trabajo a las 10 de la noche?',
    options: [
      { text: 'Lo contesto de inmediato aunque esté cenando', type: 'workaholic' },
      { text: 'Lo leo pero respondo mañana temprano', type: 'inclinado_trabajo' },
      { text: 'Ni lo abro, el trabajo es en horario laboral', type: 'equilibrado' },
      { text: 'Tengo las notificaciones desactivadas después de cierta hora', type: 'vida_primero' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo manejas los fines de semana?',
    options: [
      { text: 'Aprovecho para adelantar trabajo pendiente', type: 'workaholic' },
      { text: 'A veces trabajo un poco si hay algo urgente', type: 'inclinado_trabajo' },
      { text: 'Los fines de semana son sagrados para la familia', type: 'equilibrado' },
      { text: 'Planeo actividades de descanso y diversión siempre', type: 'vida_primero' },
    ],
  },
  {
    id: 3,
    text: '¿Qué pasa cuando tienes el cumpleaños de tu mamá y una junta importante el mismo día?',
    options: [
      { text: 'Voy a la junta y celebro otro día con mi mamá', type: 'workaholic' },
      { text: 'Intento hacer las dos cosas aunque ande corriendo', type: 'inclinado_trabajo' },
      { text: 'Reprogramo la junta, mi mamá es primero', type: 'equilibrado' },
      { text: 'Ni lo pienso, la familia siempre es prioridad', type: 'vida_primero' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes cuando tomas vacaciones?',
    options: [
      { text: 'Ansioso, necesito saber qué pasa en el trabajo', type: 'workaholic' },
      { text: 'Reviso el correo de vez en cuando por si acaso', type: 'inclinado_trabajo' },
      { text: 'Desconecto pero estoy disponible para emergencias reales', type: 'equilibrado' },
      { text: 'Desconecto totalmente y disfruto sin pensar en trabajo', type: 'vida_primero' },
    ],
  },
  {
    id: 5,
    text: '¿Qué opinas de las horas extras?',
    options: [
      { text: 'Son normales, el éxito requiere sacrificio', type: 'workaholic' },
      { text: 'Las hago cuando es necesario, son parte del trabajo', type: 'inclinado_trabajo' },
      { text: 'Solo si son compensadas y no frecuentes', type: 'equilibrado' },
      { text: 'Las evito lo más posible, mi tiempo libre es valioso', type: 'vida_primero' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo es tu hora de comida?',
    options: [
      { text: 'Como en el escritorio mientras trabajo', type: 'workaholic' },
      { text: 'Como rápido para volver pronto al trabajo', type: 'inclinado_trabajo' },
      { text: 'Tomo mi hora completa y a veces salgo a caminar', type: 'equilibrado' },
      { text: 'La hora de la comida es sagrada, la disfruto sin prisa', type: 'vida_primero' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te sientes los domingos por la noche?',
    options: [
      { text: 'Emocionado por empezar la semana laboral', type: 'workaholic' },
      { text: 'Un poco ansioso pensando en lo que viene', type: 'inclinado_trabajo' },
      { text: 'Tranquilo, preparo la semana con calma', type: 'equilibrado' },
      { text: 'Triste porque se acaba el fin de semana', type: 'vida_primero' },
    ],
  },
  {
    id: 8,
    text: '¿Qué haces cuando te enfermas?',
    options: [
      { text: 'Trabajo desde casa aunque esté mal', type: 'workaholic' },
      { text: 'Descanso pero reviso el celular por si algo urgente', type: 'inclinado_trabajo' },
      { text: 'Me reporto enfermo y descanso para recuperarme bien', type: 'equilibrado' },
      { text: 'Descanso y me consiento sin pensar en trabajo', type: 'vida_primero' },
    ],
  },
  {
    id: 9,
    text: '¿Cuánto de tu identidad está ligada a tu trabajo?',
    options: [
      { text: 'Mi trabajo es gran parte de quien soy', type: 'workaholic' },
      { text: 'Es importante pero tengo otras facetas', type: 'inclinado_trabajo' },
      { text: 'Es parte de mi vida pero no me define', type: 'equilibrado' },
      { text: 'Mi trabajo es solo un medio, mi vida está afuera', type: 'vida_primero' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan seguido cancelas planes personales por el trabajo?',
    options: [
      { text: 'Frecuentemente, el trabajo es prioridad', type: 'workaholic' },
      { text: 'A veces cuando hay algo importante en el trabajo', type: 'inclinado_trabajo' },
      { text: 'Rara vez, trato de cumplir mis compromisos personales', type: 'equilibrado' },
      { text: 'Casi nunca, mis planes personales son importantes', type: 'vida_primero' },
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
  workaholic: {
    type: 'workaholic',
    title: 'Adicto al Trabajo',
    emoji: '💼🔥',
    percentage: 'Balance: 20% vida / 80% trabajo',
    description: 'El trabajo es tu vida y tu vida es el trabajo. Eres el primero en llegar, el último en irte, y el que responde correos a las 3am. Tu jefe te ama, pero ¿y tu familia?',
    characteristics: ['Siempre conectado', 'Alta productividad', 'Sacrifica tiempo personal', 'Identidad ligada al trabajo', 'Riesgo de burnout'],
    advice: '¡Alto! El éxito no vale nada si pierdes tu salud y relaciones. Empieza a poner límites. Tu familia te necesita presente, no solo pagando cuentas.',
  },
  inclinado_trabajo: {
    type: 'inclinado_trabajo',
    title: 'Inclinado al Trabajo',
    emoji: '📊⚖️',
    percentage: 'Balance: 35% vida / 65% trabajo',
    description: 'El trabajo pesa más en tu balanza, pero al menos reconoces que hay algo más. Haces esfuerzos por estar con la familia, aunque a veces el trabajo gana.',
    characteristics: ['Comprometido profesionalmente', 'Intenta balancear', 'A veces se pasa de trabajo', 'Ambicioso', 'Necesita mejorar límites'],
    advice: 'Vas por buen camino pero necesitas ajustar. Empieza a proteger tu tiempo personal como proteges tu tiempo de trabajo. Tu familia lo agradecerá.',
  },
  equilibrado: {
    type: 'equilibrado',
    title: 'Balance Saludable',
    emoji: '⚖️✨',
    percentage: 'Balance: 50% vida / 50% trabajo',
    description: '¡Lo lograste! Tienes el balance que muchos sueñan. Cumples en el trabajo sin sacrificar tu vida personal. Sabes cuándo trabajar y cuándo cerrar la laptop para disfrutar.',
    characteristics: ['Límites claros', 'Tiempo de calidad en todo', 'Productivo sin excesos', 'Relaciones sanas', 'Salud mental estable'],
    advice: 'Sigue así y cuida tu balance. No dejes que la presión te desbalancee. Eres un ejemplo a seguir para muchos.',
  },
  vida_primero: {
    type: 'vida_primero',
    title: 'La Vida Primero',
    emoji: '🌴👨‍👩‍👧‍👦',
    percentage: 'Balance: 75% vida / 25% trabajo',
    description: 'Para ti, el trabajo es un medio, no un fin. Tu familia, amigos y bienestar están primero. Trabajas para vivir, no vives para trabajar. El dinero viene y va, pero los momentos no.',
    characteristics: ['Prioriza la vida personal', 'Trabajo como herramienta', 'Disfruta el presente', 'Relaciones fuertes', 'Puede parecer poco ambicioso'],
    advice: 'Tu filosofía es saludable, pero asegúrate de seguir creciendo profesionalmente. El balance ideal incluye también satisfacción en el trabajo.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { workaholic: 0, inclinado_trabajo: 0, equilibrado: 0, vida_primero: 0 };

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
