// Test de Recibir Feedback - 피드백 수용 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo reaccionas cuando tu jefe te da una crítica constructiva?',
    options: [
      { text: 'Escucho atentamente y agradezco la retroalimentación', type: 'abierto' },
      { text: 'Lo acepto pero internamente me cuesta un poco', type: 'procesador' },
      { text: 'Tiendo a defenderme y explicar mi punto de vista', type: 'defensivo' },
      { text: 'Me molesta, siento que no valoran mi trabajo', type: 'resistente' },
    ],
  },
  {
    id: 2,
    text: '¿Qué haces cuando un familiar te dice que podrías mejorar en algo?',
    options: [
      { text: 'Lo considero seriamente y trato de cambiar', type: 'abierto' },
      { text: 'Lo pienso pero me toma tiempo aceptarlo', type: 'procesador' },
      { text: 'Les explico por qué hago las cosas así', type: 'defensivo' },
      { text: 'Me molesto, sienten que pueden criticarme todo', type: 'resistente' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te sientes cuando alguien señala un error que cometiste?',
    options: [
      { text: 'Agradecido, así puedo corregirlo y mejorar', type: 'abierto' },
      { text: 'Un poco incómodo pero entiendo que es necesario', type: 'procesador' },
      { text: 'Busco explicar las circunstancias del error', type: 'defensivo' },
      { text: 'Me siento atacado y poco valorado', type: 'resistente' },
    ],
  },
  {
    id: 4,
    text: '¿Qué piensas cuando recibes una evaluación de desempeño con áreas de mejora?',
    options: [
      { text: 'Es una oportunidad de crecimiento que aprovecho', type: 'abierto' },
      { text: 'La acepto aunque no siempre esté de acuerdo', type: 'procesador' },
      { text: 'Cuestiono los criterios con los que me evaluaron', type: 'defensivo' },
      { text: 'Siento que es injusta y no refleja mi verdadero trabajo', type: 'resistente' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo reaccionas si un amigo te dice que a veces eres difícil?',
    options: [
      { text: 'Le pregunto más para entender y trabajar en eso', type: 'abierto' },
      { text: 'Me sorprende pero lo considero después', type: 'procesador' },
      { text: 'Le explico las situaciones donde quizá malinterpretó', type: 'defensivo' },
      { text: 'Me ofendo, si soy su amigo debería aceptarme', type: 'resistente' },
    ],
  },
  {
    id: 6,
    text: '¿Qué haces después de recibir críticas sobre un proyecto tuyo?',
    options: [
      { text: 'Las implemento de inmediato para mejorar', type: 'abierto' },
      { text: 'Las analizo y aplico las que me parecen válidas', type: 'procesador' },
      { text: 'Defiendo mi visión original primero', type: 'defensivo' },
      { text: 'Me frustro y pierdo motivación en el proyecto', type: 'resistente' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas cuando varios te dicen lo mismo sobre algo que debes mejorar?',
    options: [
      { text: 'Lo tomo muy en serio, si varios lo dicen debe ser verdad', type: 'abierto' },
      { text: 'Me hace reflexionar aunque me cueste aceptarlo', type: 'procesador' },
      { text: 'Pienso que pueden estar influenciándose entre ellos', type: 'defensivo' },
      { text: 'Creo que se pusieron de acuerdo para molestarme', type: 'resistente' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan seguido pides retroalimentación proactivamente?',
    options: [
      { text: 'Frecuentemente, me ayuda a mejorar constantemente', type: 'abierto' },
      { text: 'A veces, cuando siento que lo necesito', type: 'procesador' },
      { text: 'Rara vez, prefiero que me la den solo si es necesario', type: 'defensivo' },
      { text: 'Casi nunca, no me gusta que me critiquen', type: 'resistente' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo reaccionas cuando la crítica viene de alguien más joven o con menos experiencia?',
    options: [
      { text: 'La considero igual, buenas ideas vienen de todos', type: 'abierto' },
      { text: 'La escucho aunque me cueste más aceptarla', type: 'procesador' },
      { text: 'Cuestiono si tiene la experiencia para opinar', type: 'defensivo' },
      { text: 'No la tomo en serio, qué puede enseñarme', type: 'resistente' },
    ],
  },
  {
    id: 10,
    text: '¿Qué haces cuando recibes feedback negativo frente a otros?',
    options: [
      { text: 'Lo recibo con profesionalismo y agradezco', type: 'abierto' },
      { text: 'Me incomoda pero lo proceso después en privado', type: 'procesador' },
      { text: 'Me defiendo para que otros vean mi perspectiva', type: 'defensivo' },
      { text: 'Me siento humillado y guardo resentimiento', type: 'resistente' },
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
  abierto: {
    type: 'abierto',
    title: 'Esponja de Feedback',
    emoji: '🧽✨',
    percentage: 'Apertura al feedback: 95%',
    description: '¡Eres un ejemplo! Recibes feedback como si fuera un regalo porque sabes que es la mejor manera de crecer. No te lo tomas personal y lo usas para mejorar constantemente. Tu humildad es tu superpoder.',
    characteristics: ['Mentalidad de crecimiento', 'Humildad genuina', 'Mejora continua', 'No toma nada personal', 'Busca activamente feedback'],
    advice: 'Sigue así, eres una inspiración. Solo asegúrate de también confiar en tu criterio; no todo feedback es válido o bien intencionado.',
  },
  procesador: {
    type: 'procesador',
    title: 'Procesador de Feedback',
    emoji: '🤔⏳',
    percentage: 'Apertura al feedback: 70%',
    description: 'Aceptas el feedback pero necesitas tiempo para procesarlo. No te cierras, pero tampoco lo tragas todo de golpe. Eres reflexivo y evalúas qué críticas valen la pena implementar.',
    characteristics: ['Reflexivo', 'Procesa antes de actuar', 'Selectivo con las críticas', 'Mejora a su ritmo', 'Equilibrado'],
    advice: 'Tu enfoque es saludable. Solo cuida que el "procesar" no se convierta en "ignorar". Pon plazos para decidir qué hacer con el feedback.',
  },
  defensivo: {
    type: 'defensivo',
    title: 'Escudo Activo',
    emoji: '🛡️💬',
    percentage: 'Apertura al feedback: 45%',
    description: 'Tu primera reacción ante las críticas es defenderte. Explicas, justificas y racionalizas antes de considerar si el feedback tiene mérito. Es un mecanismo de protección que a veces te limita.',
    characteristics: ['Reactivo ante críticas', 'Justifica antes de escuchar', 'Protege su imagen', 'Le cuesta aceptar errores', 'Ego involucrado'],
    advice: 'Practica escuchar sin responder de inmediato. Date un día antes de reaccionar. Notarás que mucho feedback tiene valor si le das chance.',
  },
  resistente: {
    type: 'resistente',
    title: 'Fortaleza Cerrada',
    emoji: '🏰❌',
    percentage: 'Apertura al feedback: 20%',
    description: 'Las críticas te duelen profundamente y las interpretas como ataques personales. Te cierras y resientes a quienes te dan feedback. Esta resistencia te está limitando más de lo que crees.',
    characteristics: ['Toma todo personal', 'Se cierra ante críticas', 'Guarda resentimiento', 'Evita la retroalimentación', 'Ego muy involucrado'],
    advice: 'Necesitas trabajar en separar tu valor como persona de tu desempeño. El feedback no es un ataque, es información. Considera hablar con un profesional si esto afecta tu vida.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { abierto: 0, procesador: 0, defensivo: 0, resistente: 0 };

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
