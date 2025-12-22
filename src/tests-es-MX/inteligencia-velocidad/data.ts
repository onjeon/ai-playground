// Test de Velocidad Mental - 정신 속도 테스트
export const questions = [
  {
    id: 1,
    text: '¿Qué tan rápido respondes cuando alguien te hace una pregunta inesperada?',
    options: [
      { text: 'Respondo casi de inmediato sin pensarlo mucho', type: 'muy_rapido' },
      { text: 'Me tomo unos segundos para ordenar mi respuesta', type: 'rapido' },
      { text: 'Prefiero pensarlo bien antes de contestar', type: 'moderado' },
      { text: 'Me toma tiempo procesar y dar una buena respuesta', type: 'reflexivo' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te va en los juegos de mesa que requieren respuestas rápidas?',
    options: [
      { text: 'Soy el más rápido, casi siempre gano', type: 'muy_rapido' },
      { text: 'Me defiendo bien, suelo estar entre los primeros', type: 'rapido' },
      { text: 'A veces me ganan por tiempo, pero mis respuestas son buenas', type: 'moderado' },
      { text: 'Prefiero juegos donde pueda pensar con calma', type: 'reflexivo' },
    ],
  },
  {
    id: 3,
    text: '¿Qué haces cuando te cobran mal en una tienda?',
    options: [
      { text: 'Me doy cuenta de inmediato y lo menciono', type: 'muy_rapido' },
      { text: 'Lo noto en el momento pero tardo en reclamar', type: 'rapido' },
      { text: 'A veces lo noto hasta que reviso el ticket después', type: 'moderado' },
      { text: 'Frecuentemente no me doy cuenta hasta mucho después', type: 'reflexivo' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo reaccionas cuando te echan una indirecta o albur?',
    options: [
      { text: 'La cacho al vuelo y regreso otra mejor', type: 'muy_rapido' },
      { text: 'La entiendo rápido pero me tardo en responder', type: 'rapido' },
      { text: 'A veces me toma un momento captar el doble sentido', type: 'moderado' },
      { text: 'Me doy cuenta mucho después y pienso "debí haber dicho..."', type: 'reflexivo' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan ágil eres para calcular cuentas mentalmente?',
    options: [
      { text: 'Saco las cuentas en segundos sin calculadora', type: 'muy_rapido' },
      { text: 'Calculo relativamente rápido con buena precisión', type: 'rapido' },
      { text: 'Prefiero usar calculadora para estar seguro', type: 'moderado' },
      { text: 'Me toma tiempo y a veces me equivoco', type: 'reflexivo' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te va leyendo los subtítulos de películas?',
    options: [
      { text: 'Los leo sin problema y hasta veo la imagen', type: 'muy_rapido' },
      { text: 'Los sigo bien pero a veces pierdo algo de la escena', type: 'rapido' },
      { text: 'A veces tengo que pausar para no perderme nada', type: 'moderado' },
      { text: 'Prefiero ver contenido doblado para no batallar', type: 'reflexivo' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tan rápido detectas cuando alguien te está mintiendo?',
    options: [
      { text: 'Lo noto casi de inmediato por detalles pequeños', type: 'muy_rapido' },
      { text: 'Sospecho relativamente pronto pero verifico', type: 'rapido' },
      { text: 'A veces tardo en darme cuenta', type: 'moderado' },
      { text: 'Generalmente confío y tardo en detectar mentiras', type: 'reflexivo' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo te desenvuelves en conversaciones donde todos hablan al mismo tiempo?',
    options: [
      { text: 'Sigo todas las conversaciones y participo en varias', type: 'muy_rapido' },
      { text: 'Me enfoco en una pero capto las otras', type: 'rapido' },
      { text: 'Prefiero una conversación a la vez', type: 'moderado' },
      { text: 'Me pierdo cuando hay mucho ruido', type: 'reflexivo' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan rápido aprendes a usar una app o tecnología nueva?',
    options: [
      { text: 'La domino en minutos sin ver tutoriales', type: 'muy_rapido' },
      { text: 'Le agarro el rollo relativamente rápido', type: 'rapido' },
      { text: 'Necesito un rato para sentirme cómodo', type: 'moderado' },
      { text: 'Prefiero que alguien me explique paso a paso', type: 'reflexivo' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo te va en situaciones donde tienes que tomar decisiones bajo presión?',
    options: [
      { text: 'Decido rápido y casi siempre bien', type: 'muy_rapido' },
      { text: 'Puedo decidir rápido cuando es necesario', type: 'rapido' },
      { text: 'La presión me hace ir más lento', type: 'moderado' },
      { text: 'Prefiero no decidir bajo presión', type: 'reflexivo' },
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
  muy_rapido: {
    type: 'muy_rapido',
    title: 'Velocidad Relámpago',
    emoji: '⚡🚀',
    percentage: 'Velocidad mental: 95%',
    description: '¡Tu mente va a mil por hora! Procesas información a una velocidad impresionante. Eres el primero en cachar los albures, el que hace las cuentas en la taquería antes que todos, y el que siempre tiene una respuesta lista.',
    characteristics: ['Procesamiento ultrarrápido', 'Reflejos mentales agudos', 'Excelente en presión', 'Capta al vuelo', 'Respuestas inmediatas'],
    advice: 'Tu velocidad es impresionante, pero cuidado con ser impulsivo. A veces vale la pena frenar y pensar mejor. No todo es una carrera.',
  },
  rapido: {
    type: 'rapido',
    title: 'Mente Ágil',
    emoji: '🏃💨',
    percentage: 'Velocidad mental: 75%',
    description: 'Tienes una mente ágil y eficiente. Procesas la información rápidamente sin sacrificar precisión. En las reuniones familiares, eres de los primeros en entender el chiste y reírte.',
    characteristics: ['Buen balance velocidad-precisión', 'Adaptable', 'Eficiente bajo presión', 'Aprende rápido', 'Decisiones acertadas'],
    advice: 'Tienes un gran equilibrio. Sigue confiando en tu agilidad mental pero no te presiones por ser siempre el más rápido.',
  },
  moderado: {
    type: 'moderado',
    title: 'Procesador Equilibrado',
    emoji: '⚖️🎯',
    percentage: 'Velocidad mental: 55%',
    description: 'Prefieres la precisión sobre la velocidad. Tu mente trabaja de manera constante y confiable. Quizá no ganes carreras de velocidad mental, pero tus conclusiones suelen ser más sólidas.',
    characteristics: ['Precisión sobre velocidad', 'Decisiones bien pensadas', 'Constante y confiable', 'Evita errores por prisa', 'Metodológico'],
    advice: 'Tu ritmo está bien. No te compares con los que procesan más rápido. Tu fuerza está en la calidad de tus conclusiones, no en la velocidad.',
  },
  reflexivo: {
    type: 'reflexivo',
    title: 'Pensador Profundo',
    emoji: '🤔🧘',
    percentage: 'Velocidad mental: 35%',
    description: 'Tu mente prefiere la profundidad sobre la prisa. Mientras otros responden rápido, tú analizas las capas ocultas de la situación. Como dicen: "al que madruga Dios le ayuda, pero el que se tarda también llega".',
    characteristics: ['Pensamiento profundo', 'Análisis detallado', 'Evita decisiones apresuradas', 'Reflexivo', 'Conclusiones sólidas'],
    advice: 'Tu profundidad es valiosa, pero practica agilizar tu procesamiento para situaciones que lo requieran. A veces hay que decidir rápido.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { muy_rapido: 0, rapido: 0, moderado: 0, reflexivo: 0 };

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
