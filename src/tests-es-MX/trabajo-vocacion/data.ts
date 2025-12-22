// Test de Vocación Laboral - 직업 소명 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes cuando piensas en tu trabajo actual?',
    options: [
      { text: 'Es mi pasión, no puedo imaginar haciendo otra cosa', type: 'vocacional' },
      { text: 'Me gusta y me satisface profesionalmente', type: 'satisfecho' },
      { text: 'Está bien, paga las cuentas pero no me apasiona', type: 'funcional' },
      { text: 'Solo lo hago por necesidad, no es lo mío', type: 'desconectado' },
    ],
  },
  {
    id: 2,
    text: '¿Trabajarías en lo mismo si no necesitaras el dinero?',
    options: [
      { text: 'Absolutamente, es lo que amo hacer', type: 'vocacional' },
      { text: 'Probablemente sí, pero de otra forma', type: 'satisfecho' },
      { text: 'Buscaría algo diferente que me apasione más', type: 'funcional' },
      { text: 'Definitivamente no, haría algo completamente diferente', type: 'desconectado' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te sientes los lunes por la mañana?',
    options: [
      { text: 'Emocionado por empezar la semana haciendo lo que amo', type: 'vocacional' },
      { text: 'Motivado, tengo proyectos interesantes', type: 'satisfecho' },
      { text: 'Neutro, es solo otro día de trabajo', type: 'funcional' },
      { text: 'Pesado, cuento los días para el viernes', type: 'desconectado' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tanto aprendes y creces en tu trabajo actual?',
    options: [
      { text: 'Constantemente, cada día es un aprendizaje', type: 'vocacional' },
      { text: 'Bastante, tengo oportunidades de desarrollo', type: 'satisfecho' },
      { text: 'Algo, pero ya no tanto como antes', type: 'funcional' },
      { text: 'Casi nada, siento que estoy estancado', type: 'desconectado' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo hablas de tu trabajo cuando conoces gente nueva?',
    options: [
      { text: 'Con pasión, me encanta contar lo que hago', type: 'vocacional' },
      { text: 'Con gusto, es parte importante de mi vida', type: 'satisfecho' },
      { text: 'Normal, es solo mi trabajo', type: 'funcional' },
      { text: 'Cambio de tema rápido, prefiero no hablar de eso', type: 'desconectado' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan alineado está tu trabajo con tus valores personales?',
    options: [
      { text: 'Totalmente, es una extensión de quien soy', type: 'vocacional' },
      { text: 'Bastante, aunque hay algunas diferencias', type: 'satisfecho' },
      { text: 'Más o menos, hay cosas que no van conmigo', type: 'funcional' },
      { text: 'Muy poco, siento que voy contra mis valores', type: 'desconectado' },
    ],
  },
  {
    id: 7,
    text: '¿Sientes que tu trabajo tiene un propósito mayor?',
    options: [
      { text: 'Sí, contribuyo a algo significativo', type: 'vocacional' },
      { text: 'En cierta medida, veo impacto positivo', type: 'satisfecho' },
      { text: 'No mucho, es solo trabajo', type: 'funcional' },
      { text: 'No, siento que mi trabajo no tiene sentido', type: 'desconectado' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan frecuentemente pierdes la noción del tiempo trabajando?',
    options: [
      { text: 'Seguido, me absorbe lo que hago', type: 'vocacional' },
      { text: 'A veces, cuando tengo proyectos interesantes', type: 'satisfecho' },
      { text: 'Rara vez, siempre estoy viendo el reloj', type: 'funcional' },
      { text: 'Nunca, cada minuto se hace eterno', type: 'desconectado' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te sentirías si tuvieras que cambiar de profesión?',
    options: [
      { text: 'Devastado, no me imagino haciendo otra cosa', type: 'vocacional' },
      { text: 'Triste pero podría adaptarme', type: 'satisfecho' },
      { text: 'Neutral, podría encontrar algo igual o mejor', type: 'funcional' },
      { text: 'Aliviado, sería una oportunidad de hacer algo que me guste', type: 'desconectado' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan orgulloso te sientes de decir a qué te dedicas?',
    options: [
      { text: 'Muy orgulloso, es parte fundamental de mi identidad', type: 'vocacional' },
      { text: 'Orgulloso, es un buen trabajo', type: 'satisfecho' },
      { text: 'Normal, es lo que hago pero no me define', type: 'funcional' },
      { text: 'Poco, preferiría dedicarme a otra cosa', type: 'desconectado' },
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
  vocacional: {
    type: 'vocacional',
    title: 'Vocación Plena',
    emoji: '🌟💼',
    percentage: 'Conexión vocacional: 95%',
    description: '¡Encontraste tu llamado! Tu trabajo no es solo un trabajo, es tu pasión y tu propósito. Te levantas motivado y sientes que contribuyes a algo significativo. Eres de los afortunados que aman lo que hacen.',
    characteristics: ['Pasión genuina', 'Propósito claro', 'Alta motivación', 'Trabajo = identidad', 'Crecimiento constante'],
    advice: 'Cuida no quemarte. Cuando amas lo que haces, es fácil excederse. Mantén balance y recuerda que hay vida más allá del trabajo.',
  },
  satisfecho: {
    type: 'satisfecho',
    title: 'Satisfacción Profesional',
    emoji: '😊💪',
    percentage: 'Conexión vocacional: 70%',
    description: 'Tu trabajo te satisface y te da oportunidades de crecer. Quizá no es tu pasión de vida, pero te sientes realizado profesionalmente. Hay alineación entre lo que haces y lo que valoras.',
    characteristics: ['Satisfacción laboral', 'Buen desarrollo', 'Balance saludable', 'Motivación estable', 'Crecimiento profesional'],
    advice: 'Estás en un buen lugar. Sigue explorando qué aspectos te apasionan más y busca oportunidades de profundizar en ellos.',
  },
  funcional: {
    type: 'funcional',
    title: 'Trabajo Funcional',
    emoji: '⚙️📋',
    percentage: 'Conexión vocacional: 40%',
    description: 'Tu trabajo cumple su función: paga las cuentas y te da estabilidad. No es tu pasión pero tampoco te hace infeliz. Es un medio para vivir, no tu razón de ser.',
    characteristics: ['Trabajo como medio', 'Estabilidad sobre pasión', 'Desconexión emocional', 'Vida fuera del trabajo', 'Zona de confort'],
    advice: 'Está bien que el trabajo no sea tu pasión, pero pregúntate si podrías encontrar algo que te motive más. La vida es corta para no disfrutar lo que haces.',
  },
  desconectado: {
    type: 'desconectado',
    title: 'Desconexión Laboral',
    emoji: '😔🔌',
    percentage: 'Conexión vocacional: 15%',
    description: 'Tu trabajo actual no va contigo. Te sientes atrapado haciendo algo que no te representa ni te satisface. Cada día es una lucha y sueñas con hacer algo diferente.',
    characteristics: ['Desconexión total', 'Frustración laboral', 'Sueña con cambiar', 'Energía drenada', 'Contra sus valores'],
    advice: 'Es momento de hacer cambios. Empieza a explorar qué te apasiona realmente y arma un plan para transicionar. Tu bienestar mental depende de ello.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { vocacional: 0, satisfecho: 0, funcional: 0, desconectado: 0 };

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
