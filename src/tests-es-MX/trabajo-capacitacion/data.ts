// Test de Capacitación Continua - 지속적 학습 태도 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cuándo fue la última vez que tomaste un curso o capacitación?',
    options: [
      { text: 'Estoy tomando uno ahora mismo', type: 'aprendiz_constante' },
      { text: 'Hace menos de 6 meses', type: 'activo' },
      { text: 'Hace más de un año', type: 'ocasional' },
      { text: 'No recuerdo, hace mucho tiempo', type: 'estancado' },
    ],
  },
  {
    id: 2,
    text: '¿Qué haces cuando surge una nueva tecnología o método en tu área?',
    options: [
      { text: 'Me lanzo a aprenderla de inmediato', type: 'aprendiz_constante' },
      { text: 'La investigo y planeo capacitarme', type: 'activo' },
      { text: 'Espero a ver si se vuelve necesaria', type: 'ocasional' },
      { text: 'Prefiero seguir con lo que ya sé', type: 'estancado' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo usas tu tiempo libre en cuanto a aprendizaje?',
    options: [
      { text: 'Leo libros, escucho podcasts y tomo cursos online', type: 'aprendiz_constante' },
      { text: 'De vez en cuando veo tutoriales o leo artículos', type: 'activo' },
      { text: 'Rara vez, prefiero descansar o divertirme', type: 'ocasional' },
      { text: 'Mi tiempo libre es solo para relajarme', type: 'estancado' },
    ],
  },
  {
    id: 4,
    text: '¿Qué opinas sobre invertir dinero en tu educación?',
    options: [
      { text: 'Es la mejor inversión, siempre tengo presupuesto para eso', type: 'aprendiz_constante' },
      { text: 'Vale la pena si el curso lo amerita', type: 'activo' },
      { text: 'Prefiero cursos gratuitos o que pague la empresa', type: 'ocasional' },
      { text: 'No pago por capacitación, es responsabilidad de la empresa', type: 'estancado' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te sientes cuando te piden aprender algo nuevo en el trabajo?',
    options: [
      { text: 'Emocionado, me encanta aprender cosas nuevas', type: 'aprendiz_constante' },
      { text: 'Dispuesto, es parte del crecimiento profesional', type: 'activo' },
      { text: 'Algo incómodo pero lo hago si es necesario', type: 'ocasional' },
      { text: 'Frustrado, prefiero hacer lo que ya domino', type: 'estancado' },
    ],
  },
  {
    id: 6,
    text: '¿Tienes una lista de habilidades que quieres desarrollar?',
    options: [
      { text: 'Sí, actualizada con prioridades y plazos', type: 'aprendiz_constante' },
      { text: 'Tengo una idea general de lo que quiero aprender', type: 'activo' },
      { text: 'No formalmente, pero sé algunas cosas que me faltan', type: 'ocasional' },
      { text: 'No, creo que ya sé lo suficiente para mi trabajo', type: 'estancado' },
    ],
  },
  {
    id: 7,
    text: '¿Qué haces cuando cometes un error en el trabajo?',
    options: [
      { text: 'Lo analizo profundamente para aprender y no repetirlo', type: 'aprendiz_constante' },
      { text: 'Trato de entender qué salió mal', type: 'activo' },
      { text: 'Lo corrijo y sigo adelante', type: 'ocasional' },
      { text: 'Busco justificarlo, los errores pasan', type: 'estancado' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo ves tu carrera en 5 años?',
    options: [
      { text: 'Completamente diferente, con nuevas habilidades y roles', type: 'aprendiz_constante' },
      { text: 'Evolucionada, con más conocimientos y responsabilidades', type: 'activo' },
      { text: 'Probablemente similar pero con algo de crecimiento', type: 'ocasional' },
      { text: 'Igual que ahora, ya estoy donde quiero estar', type: 'estancado' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan al día estás con las tendencias de tu industria?',
    options: [
      { text: 'Muy al día, leo y estudio constantemente sobre mi área', type: 'aprendiz_constante' },
      { text: 'Bastante informado, sigo las noticias principales', type: 'activo' },
      { text: 'Más o menos, me entero de lo importante', type: 'ocasional' },
      { text: 'Poco, las cosas no cambian tanto', type: 'estancado' },
    ],
  },
  {
    id: 10,
    text: '¿Tienes un mentor o buscas aprender de otros profesionales?',
    options: [
      { text: 'Sí, activamente busco mentores y aprendo de ellos', type: 'aprendiz_constante' },
      { text: 'Tengo algunas personas de las que aprendo', type: 'activo' },
      { text: 'No formalmente, pero a veces pido consejos', type: 'ocasional' },
      { text: 'No necesito mentor, aprendo solo', type: 'estancado' },
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
  aprendiz_constante: {
    type: 'aprendiz_constante',
    title: 'Aprendiz Constante',
    emoji: '📚🚀',
    percentage: 'Actitud de aprendizaje: 95%',
    description: '¡Eres una esponja de conocimiento! Siempre estás aprendiendo algo nuevo, invirtiendo en tu desarrollo y manteniéndote al día. Tu curiosidad no tiene límites y eso te hace altamente competitivo.',
    characteristics: ['Curiosidad insaciable', 'Inversión en educación', 'Siempre actualizado', 'Mentalidad de crecimiento', 'Busca mentores activamente'],
    advice: 'Tu sed de aprendizaje es admirable. Solo cuida de aplicar lo que aprendes y no solo acumular conocimientos. La práctica es tan importante como la teoría.',
  },
  activo: {
    type: 'activo',
    title: 'Aprendiz Activo',
    emoji: '📖💪',
    percentage: 'Actitud de aprendizaje: 70%',
    description: 'Te capacitas regularmente y buscas mejorar tus habilidades. No eres fanático del aprendizaje, pero reconoces su valor y lo incorporas en tu vida profesional de manera equilibrada.',
    characteristics: ['Desarrollo constante', 'Balance aprendizaje-vida', 'Selectivo con lo que aprende', 'Mejora continua', 'Abierto a nuevos conocimientos'],
    advice: 'Vas por buen camino. Considera aumentar un poco la intensidad y crear un plan de desarrollo más estructurado para acelerar tu crecimiento.',
  },
  ocasional: {
    type: 'ocasional',
    title: 'Aprendiz Ocasional',
    emoji: '📋🐢',
    percentage: 'Actitud de aprendizaje: 40%',
    description: 'Te capacitas cuando es necesario o cuando la empresa te lo pide. No buscas activamente aprender cosas nuevas pero tampoco te cierras completamente. Vas al ritmo que la vida te marca.',
    characteristics: ['Aprendizaje reactivo', 'Espera necesidad clara', 'Zona de confort cómoda', 'Prefiere lo conocido', 'Desarrollo lento'],
    advice: 'El mundo cambia rápido y las habilidades se vuelven obsoletas. No esperes a que te obliguen a aprender. Toma las riendas de tu desarrollo antes de quedarte atrás.',
  },
  estancado: {
    type: 'estancado',
    title: 'Zona de Confort',
    emoji: '🛋️⚠️',
    percentage: 'Actitud de aprendizaje: 15%',
    description: 'Te has acomodado en lo que sabes y no ves necesidad de aprender más. Puede que ahora funcione, pero el mundo cambia y las habilidades que hoy valen, mañana pueden no servir.',
    characteristics: ['Resistencia al cambio', 'Cree saber suficiente', 'Evita lo nuevo', 'Zona de confort profunda', 'Riesgo de obsolescencia'],
    advice: '¡Alerta roja! El estancamiento es peligroso en un mundo cambiante. Empieza con algo pequeño: un curso, un libro, un podcast. Tu empleabilidad futura depende de que empieces a moverte.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { aprendiz_constante: 0, activo: 0, ocasional: 0, estancado: 0 };

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
